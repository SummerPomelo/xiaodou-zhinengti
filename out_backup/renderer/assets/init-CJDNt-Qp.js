import { o as __toESM, t as __commonJSMin } from "./chunk-0ogMdkZ1.js";
import { Mc as loggerService, tc as i18n_default } from "./ImageViewer-uT4rjMQ4.js";
import { A as setWebDAVSyncState, Is as uuid, O as setLocalBackupSyncState, Sa as NotificationService, a as setNutstoreSyncState, et as webTraceService, k as setS3SyncState, lu as StoreSyncService_default, n as store_default } from "./store-Dxt9V8vr.js";
import { t as require_dayjs_min } from "./dayjs.min-COl7sqdH.js";
var require_MemoryStorage = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var MemoryStorage = class {
		constructor() {
			this.data = /* @__PURE__ */ new Map();
		}
		init() {}
		get(key) {
			return this.data.get(key);
		}
		set(key, value) {
			if (!key) return handleError("set", "a key");
			this.data.set(key, value);
			return true;
		}
		remove(key) {
			if (!key) return handleError("remove", "a key");
			this.data.delete(key);
			return true;
		}
		getAllKeys() {
			return Array.from(this.data.keys());
		}
		clearAll() {
			this.data = /* @__PURE__ */ new Map();
		}
	};
	function handleError(func, param) {
		const message = param ? `${func}() requires at least ${param} as its first parameter.` : func;
		console.warn(message);
		return false;
	}
	exports.default = MemoryStorage;
}));
var require_lib = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P ? value : new P(function(resolve) {
				resolve(value);
			});
		}
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var MemoryStorage_1 = __importDefault(require_MemoryStorage());
	var KeyvStorage$1 = class {
		constructor(params = {}) {
			this.env = "";
			this.expiredSuffix = ":expired_time";
			this.keepSuffix = "{[keep]}";
			this.storage = params.driver || new MemoryStorage_1.default();
			this.env = params.env || "";
		}
		init() {
			return __awaiter(this, void 0, void 0, function* () {
				yield this.storage.init();
				this.removeExpiredKeys();
				console.log("[Storage]", "SyncStorage is ready!");
			});
		}
		removeExpiredKeys() {
			this.storage.getAllKeys().forEach((k) => this.removeExpiredKey(k));
		}
		removeExpiredKey(key) {
			if (key.indexOf(this.expiredSuffix) > -1) {
				const cacheValue = this.storage.get(key);
				if (!cacheValue) return;
				const expiredAtTimestamp = new Date(cacheValue.expired_at).getTime();
				const nowTimestamp = (/* @__PURE__ */ new Date()).getTime();
				const expired = expiredAtTimestamp < nowTimestamp;
				const systemTimeChanged = !expired && expiredAtTimestamp - nowTimestamp > cacheValue.ttl;
				if (expired || systemTimeChanged) {
					this.storage.remove(key);
					this.storage.remove(key.replace(this.expiredSuffix, ""));
				}
			}
		}
		getKey(key) {
			return `${key}${this.env}`;
		}
		getExpiredKey(key) {
			return `${key}${this.expiredSuffix}${this.env}`;
		}
		get(key) {
			const keyName = this.getKey(key);
			const expiredKeyName = this.getExpiredKey(key);
			this.removeExpiredKey(expiredKeyName);
			return this.storage.get(keyName);
		}
		set(key, data, { expires } = { expires: null }) {
			if (data === null || data === void 0) return;
			if (expires) {
				if (!(expires instanceof Date)) throw new Error("[Storage] expires params is not a Date type");
				const expiredKey = this.getExpiredKey(key);
				const expiredAt = expires.getTime();
				const nowTimestamp = (/* @__PURE__ */ new Date()).getTime();
				this.storage.set(expiredKey, {
					expired_at: expiredAt,
					ttl: expiredAt - nowTimestamp
				});
			}
			return this.storage.set(this.getKey(key), data);
		}
		exists(key) {
			return !!this.get(key);
		}
		remove(key) {
			return this.storage.remove(this.getExpiredKey(key)) && this.storage.remove(this.getKey(key));
		}
		keys() {
			this.removeExpiredKeys();
			return this.storage.getAllKeys().map((key) => key.replace(this.env, ""));
		}
		clear() {
			return __awaiter(this, void 0, void 0, function* () {
				this.storage.getAllKeys().filter((e) => e.indexOf(this.keepSuffix) < 0).forEach((key) => this.storage.remove(key));
			});
		}
		clearAll() {
			return __awaiter(this, void 0, void 0, function* () {
				this.storage.clearAll();
			});
		}
	};
	exports.default = KeyvStorage$1;
}));
var import_dayjs_min$1 = /* @__PURE__ */ __toESM(require_dayjs_min());
var logger$1 = loggerService.withContext("BackupService");
async function deleteS3FileWithRetry(fileName, s3Config, maxRetries = 3) {
	let lastError = null;
	for (let attempt = 1; attempt <= maxRetries; attempt++) try {
		await window.api.backup.deleteS3File(fileName, s3Config);
		logger$1.verbose(`Successfully deleted old backup file: ${fileName} (attempt ${attempt})`);
		return true;
	} catch (error) {
		lastError = error;
		logger$1.warn(`Delete attempt ${attempt}/${maxRetries} failed for ${fileName}:`, error.message);
		if (attempt < maxRetries) {
			const delay = attempt * 1e3 + Math.random() * 1e3;
			await new Promise((resolve) => setTimeout(resolve, delay));
		}
	}
	logger$1.error(`Failed to delete old backup file after ${maxRetries} attempts: ${fileName}`, lastError);
	return false;
}
async function deleteWebdavFileWithRetry(fileName, webdavConfig, maxRetries = 3) {
	let lastError = null;
	for (let attempt = 1; attempt <= maxRetries; attempt++) try {
		await window.api.backup.deleteWebdavFile(fileName, webdavConfig);
		logger$1.verbose(`Successfully deleted old backup file: ${fileName} (attempt ${attempt})`);
		return true;
	} catch (error) {
		lastError = error;
		logger$1.warn(`Delete attempt ${attempt}/${maxRetries} failed for ${fileName}:`, error.message);
		if (attempt < maxRetries) {
			const delay = attempt * 1e3 + Math.random() * 1e3;
			await new Promise((resolve) => setTimeout(resolve, delay));
		}
	}
	logger$1.error(`Failed to delete old backup file after ${maxRetries} attempts: ${fileName}`, lastError);
	return false;
}
async function backupToWebdav({ showMessage = false, customFileName = "", autoBackupProcess = false } = {}) {
	const notificationService = NotificationService.getInstance();
	if (isManualBackupRunning$1) {
		logger$1.verbose("Manual backup already in progress");
		return;
	}
	if (autoBackupProcess) showMessage = false;
	isManualBackupRunning$1 = true;
	store_default.dispatch(setWebDAVSyncState({
		syncing: true,
		lastSyncError: null
	}));
	const { webdavHost, webdavUser, webdavPass, webdavPath, webdavMaxBackups, webdavSkipBackupFile, webdavDisableStream } = store_default.getState().settings;
	let deviceType = "unknown";
	let hostname = "unknown";
	try {
		deviceType = await window.api.system.getDeviceType() || "unknown";
		hostname = await window.api.system.getHostname() || "unknown";
	} catch (error) {
		logger$1.error("Failed to get device type or hostname:", error);
	}
	const timestamp = (0, import_dayjs_min$1.default)().format("YYYYMMDDHHmmss");
	const backupFileName = customFileName || `cherry-studio.${timestamp}.${hostname}.${deviceType}.zip`;
	const finalFileName = backupFileName.endsWith(".zip") ? backupFileName : `${backupFileName}.zip`;
	try {
		if (await window.api.backup.backupToWebdav({
			webdavHost,
			webdavUser,
			webdavPass,
			webdavPath,
			fileName: finalFileName,
			skipBackupFile: webdavSkipBackupFile,
			disableStream: webdavDisableStream
		})) {
			store_default.dispatch(setWebDAVSyncState({ lastSyncError: null }));
			notificationService.send({
				id: uuid(),
				type: "success",
				title: i18n_default.t("common.success"),
				message: i18n_default.t("message.backup.success"),
				silent: false,
				timestamp: Date.now(),
				source: "backup",
				channel: "system"
			});
			showMessage && window.toast.success(i18n_default.t("message.backup.success"));
			if (webdavMaxBackups > 0) try {
				const currentDeviceFiles = (await window.api.backup.listWebdavFiles({
					webdavHost,
					webdavUser,
					webdavPass,
					webdavPath
				})).filter((file) => {
					return file.fileName.includes(deviceType) && file.fileName.includes(hostname);
				});
				if (currentDeviceFiles.length > webdavMaxBackups) {
					const filesToDelete = currentDeviceFiles.slice(webdavMaxBackups);
					logger$1.verbose(`Cleaning up ${filesToDelete.length} old backup files`);
					for (let i = 0; i < filesToDelete.length; i++) {
						const file = filesToDelete[i];
						await deleteWebdavFileWithRetry(file.fileName, {
							webdavHost,
							webdavUser,
							webdavPass,
							webdavPath
						});
						if (i < filesToDelete.length - 1) await new Promise((resolve) => setTimeout(resolve, 500));
					}
				}
			} catch (error) {
				logger$1.error("Failed to clean up old backup files:", error);
			}
		} else {
			if (autoBackupProcess) throw new Error(i18n_default.t("message.backup.failed"));
			store_default.dispatch(setWebDAVSyncState({ lastSyncError: "Backup failed" }));
			showMessage && window.toast.error(i18n_default.t("message.backup.failed"));
		}
	} catch (error) {
		if (autoBackupProcess) throw error;
		notificationService.send({
			id: uuid(),
			type: "error",
			title: i18n_default.t("message.backup.failed"),
			message: error.message,
			silent: false,
			timestamp: Date.now(),
			source: "backup",
			channel: "system"
		});
		store_default.dispatch(setWebDAVSyncState({ lastSyncError: error.message }));
		showMessage && window.toast.error(i18n_default.t("message.backup.failed"));
		logger$1.error("[Backup] backupToWebdav: Error uploading file to WebDAV:", error);
		throw error;
	} finally {
		if (!autoBackupProcess) store_default.dispatch(setWebDAVSyncState({
			lastSyncTime: Date.now(),
			syncing: false
		}));
		isManualBackupRunning$1 = false;
	}
}
async function backupToS3({ showMessage = false, customFileName = "", autoBackupProcess = false } = {}) {
	const notificationService = NotificationService.getInstance();
	if (isManualBackupRunning$1) {
		logger$1.verbose("Manual backup already in progress");
		return;
	}
	if (autoBackupProcess) showMessage = false;
	isManualBackupRunning$1 = true;
	store_default.dispatch(setS3SyncState({
		syncing: true,
		lastSyncError: null
	}));
	const s3Config = store_default.getState().settings.s3;
	let deviceType = "unknown";
	let hostname = "unknown";
	try {
		deviceType = await window.api.system.getDeviceType() || "unknown";
		hostname = await window.api.system.getHostname() || "unknown";
	} catch (error) {
		logger$1.error("Failed to get device type or hostname:", error);
	}
	const timestamp = (0, import_dayjs_min$1.default)().format("YYYYMMDDHHmmss");
	const backupFileName = customFileName || `cherry-studio.${timestamp}.${hostname}.${deviceType}.zip`;
	const finalFileName = backupFileName.endsWith(".zip") ? backupFileName : `${backupFileName}.zip`;
	try {
		if (await window.api.backup.backupToS3({
			...s3Config,
			fileName: finalFileName
		})) {
			store_default.dispatch(setS3SyncState({
				lastSyncError: null,
				syncing: false,
				lastSyncTime: Date.now()
			}));
			notificationService.send({
				id: uuid(),
				type: "success",
				title: i18n_default.t("common.success"),
				message: i18n_default.t("message.backup.success"),
				silent: false,
				timestamp: Date.now(),
				source: "backup",
				channel: "system"
			});
			showMessage && window.toast.success(i18n_default.t("message.backup.success"));
			if (s3Config.maxBackups > 0) try {
				const currentDeviceFiles = (await window.api.backup.listS3Files(s3Config)).filter((file) => {
					return file.fileName.includes(deviceType) && file.fileName.includes(hostname);
				});
				if (currentDeviceFiles.length > s3Config.maxBackups) {
					const filesToDelete = currentDeviceFiles.slice(s3Config.maxBackups);
					logger$1.verbose(`Cleaning up ${filesToDelete.length} old backup files`);
					for (let i = 0; i < filesToDelete.length; i++) {
						const file = filesToDelete[i];
						await deleteS3FileWithRetry(file.fileName, s3Config);
						if (i < filesToDelete.length - 1) await new Promise((resolve) => setTimeout(resolve, 500));
					}
				}
			} catch (error) {
				logger$1.error("Failed to clean up old backup files:", error);
			}
		} else {
			if (autoBackupProcess) throw new Error(i18n_default.t("message.backup.failed"));
			store_default.dispatch(setS3SyncState({ lastSyncError: "Backup failed" }));
			showMessage && window.toast.error(i18n_default.t("message.backup.failed"));
		}
	} catch (error) {
		if (autoBackupProcess) throw error;
		notificationService.send({
			id: uuid(),
			type: "error",
			title: i18n_default.t("message.backup.failed"),
			message: error.message,
			silent: false,
			timestamp: Date.now(),
			source: "backup",
			channel: "system"
		});
		store_default.dispatch(setS3SyncState({ lastSyncError: error.message }));
		logger$1.error("backupToS3: Error uploading file to S3:", error);
		showMessage && window.toast.error(i18n_default.t("message.backup.failed"));
		throw error;
	} finally {
		if (!autoBackupProcess) store_default.dispatch(setS3SyncState({
			lastSyncTime: Date.now(),
			syncing: false
		}));
		isManualBackupRunning$1 = false;
	}
}
var isManualBackupRunning$1 = false;
var webdavAutoSyncStarted = false;
var webdavSyncTimeout = null;
var isWebdavAutoBackupRunning = false;
var s3AutoSyncStarted = false;
var s3SyncTimeout = null;
var isS3AutoBackupRunning = false;
var localAutoSyncStarted = false;
var localSyncTimeout = null;
var isLocalAutoBackupRunning = false;
function startAutoSync(immediate = false, type) {
	if (!type) {
		const settings = store_default.getState().settings;
		const { webdavAutoSync, webdavHost, localBackupAutoSync, localBackupDir } = settings;
		const s3Settings = settings.s3;
		if (webdavAutoSync && webdavHost) startAutoSync(immediate, "webdav");
		if (s3Settings?.autoSync && s3Settings?.endpoint) startAutoSync(immediate, "s3");
		if (localBackupAutoSync && localBackupDir) startAutoSync(immediate, "local");
		return;
	}
	if (type === "webdav") {
		if (webdavAutoSyncStarted) return;
		const { webdavAutoSync, webdavHost } = store_default.getState().settings;
		if (!webdavAutoSync || !webdavHost) {
			logger$1.info("[WebdavAutoSync] Invalid sync settings, auto sync disabled");
			return;
		}
		webdavAutoSyncStarted = true;
		stopAutoSync("webdav");
		scheduleNextBackup(immediate ? "immediate" : "fromLastSyncTime", "webdav");
	} else if (type === "s3") {
		if (s3AutoSyncStarted) return;
		const s3Settings = store_default.getState().settings.s3;
		if (!s3Settings?.autoSync || !s3Settings?.endpoint) {
			logger$1.verbose("Invalid sync settings, auto sync disabled");
			return;
		}
		s3AutoSyncStarted = true;
		stopAutoSync("s3");
		scheduleNextBackup(immediate ? "immediate" : "fromLastSyncTime", "s3");
	} else if (type === "local") {
		if (localAutoSyncStarted) return;
		const { localBackupAutoSync, localBackupDir } = store_default.getState().settings;
		if (!localBackupAutoSync || !localBackupDir) {
			logger$1.verbose("Invalid sync settings, auto sync disabled");
			return;
		}
		localAutoSyncStarted = true;
		stopAutoSync("local");
		scheduleNextBackup(immediate ? "immediate" : "fromLastSyncTime", "local");
	}
	function scheduleNextBackup(scheduleType, backupType) {
		let syncInterval;
		let lastSyncTime;
		let logPrefix;
		const settings = store_default.getState().settings;
		const backup = store_default.getState().backup;
		if (backupType === "webdav") {
			if (webdavSyncTimeout) {
				clearTimeout(webdavSyncTimeout);
				webdavSyncTimeout = null;
			}
			syncInterval = settings.webdavSyncInterval;
			lastSyncTime = backup.webdavSync?.lastSyncTime || void 0;
			logPrefix = "[WebdavAutoSync]";
		} else if (backupType === "s3") {
			if (s3SyncTimeout) {
				clearTimeout(s3SyncTimeout);
				s3SyncTimeout = null;
			}
			syncInterval = settings.s3?.syncInterval || 0;
			lastSyncTime = backup.s3Sync?.lastSyncTime || void 0;
			logPrefix = "[S3AutoSync]";
		} else if (backupType === "local") {
			if (localSyncTimeout) {
				clearTimeout(localSyncTimeout);
				localSyncTimeout = null;
			}
			syncInterval = settings.localBackupSyncInterval;
			lastSyncTime = backup.localBackupSync?.lastSyncTime || void 0;
			logPrefix = "[LocalAutoSync]";
		} else return;
		if (!syncInterval || syncInterval <= 0) {
			logger$1.verbose(`${logPrefix} Invalid sync interval, auto sync disabled`);
			stopAutoSync(backupType);
			return;
		}
		const requiredInterval = syncInterval * 60 * 1e3;
		let timeUntilNextSync = 1e3;
		switch (scheduleType) {
			case "fromLastSyncTime":
				timeUntilNextSync = Math.max(1e3, (lastSyncTime || 0) + requiredInterval - Date.now());
				break;
			case "fromNow":
				timeUntilNextSync = requiredInterval;
				break;
		}
		const timeout = setTimeout(() => performAutoBackup(backupType), timeUntilNextSync);
		if (backupType === "webdav") webdavSyncTimeout = timeout;
		else if (backupType === "s3") s3SyncTimeout = timeout;
		else if (backupType === "local") localSyncTimeout = timeout;
		logger$1.verbose(`${logPrefix} Next sync scheduled in ${Math.floor(timeUntilNextSync / 1e3 / 60)} minutes ${Math.floor(timeUntilNextSync / 1e3 % 60)} seconds`);
	}
	async function performAutoBackup(backupType) {
		let isRunning;
		let logPrefix;
		if (backupType === "webdav") {
			isRunning = isWebdavAutoBackupRunning;
			logPrefix = "[WebdavAutoSync]";
		} else if (backupType === "s3") {
			isRunning = isS3AutoBackupRunning;
			logPrefix = "[S3AutoSync]";
		} else if (backupType === "local") {
			isRunning = isLocalAutoBackupRunning;
			logPrefix = "[LocalAutoSync]";
		} else return;
		if (isRunning || isManualBackupRunning$1) {
			logger$1.verbose(`${logPrefix} Backup already in progress, rescheduling`);
			scheduleNextBackup("fromNow", backupType);
			return;
		}
		const state = store_default.getState();
		if (Object.values(state.messages.loadingByTopic).some((loading) => loading === true)) {
			logger$1.info(`${logPrefix} Streaming in progress, deferring backup`);
			scheduleNextBackup("fromNow", backupType);
			return;
		}
		if (backupType === "webdav") isWebdavAutoBackupRunning = true;
		else if (backupType === "s3") isS3AutoBackupRunning = true;
		else if (backupType === "local") isLocalAutoBackupRunning = true;
		const maxRetries = 4;
		let retryCount = 0;
		while (retryCount < maxRetries) try {
			logger$1.verbose(`${logPrefix} Starting auto backup... (attempt ${retryCount + 1}/${maxRetries})`);
			if (backupType === "webdav") {
				await backupToWebdav({ autoBackupProcess: true });
				store_default.dispatch(setWebDAVSyncState({
					lastSyncError: null,
					lastSyncTime: Date.now(),
					syncing: false
				}));
			} else if (backupType === "s3") {
				await backupToS3({ autoBackupProcess: true });
				store_default.dispatch(setS3SyncState({
					lastSyncError: null,
					lastSyncTime: Date.now(),
					syncing: false
				}));
			} else if (backupType === "local") {
				await backupToLocal({ autoBackupProcess: true });
				store_default.dispatch(setLocalBackupSyncState({
					lastSyncError: null,
					lastSyncTime: Date.now(),
					syncing: false
				}));
			}
			if (backupType === "webdav") isWebdavAutoBackupRunning = false;
			else if (backupType === "s3") isS3AutoBackupRunning = false;
			else if (backupType === "local") isLocalAutoBackupRunning = false;
			scheduleNextBackup("fromNow", backupType);
			break;
		} catch (error) {
			retryCount++;
			if (retryCount === maxRetries) {
				logger$1.error(`${logPrefix} Auto backup failed after all retries:`, error);
				if (backupType === "webdav") store_default.dispatch(setWebDAVSyncState({
					lastSyncError: "Auto backup failed",
					lastSyncTime: Date.now(),
					syncing: false
				}));
				else if (backupType === "s3") store_default.dispatch(setS3SyncState({
					lastSyncError: "Auto backup failed",
					lastSyncTime: Date.now(),
					syncing: false
				}));
				else if (backupType === "local") store_default.dispatch(setLocalBackupSyncState({
					lastSyncError: "Auto backup failed",
					lastSyncTime: Date.now(),
					syncing: false
				}));
				await window.modal.error({
					title: i18n_default.t("message.backup.failed"),
					content: `${logPrefix} ${(/* @__PURE__ */ new Date()).toLocaleString()} ` + error.message
				});
				scheduleNextBackup("fromNow", backupType);
				if (backupType === "webdav") isWebdavAutoBackupRunning = false;
				else if (backupType === "s3") isS3AutoBackupRunning = false;
				else if (backupType === "local") isLocalAutoBackupRunning = false;
			} else {
				const backoffDelay = Math.pow(2, retryCount - 1) * 1e4 - 3e3;
				logger$1.warn(`${logPrefix} Failed, retry ${retryCount}/${maxRetries} after ${backoffDelay / 1e3}s`);
				await new Promise((resolve) => setTimeout(resolve, backoffDelay));
				let currentRunning;
				if (backupType === "webdav") currentRunning = isWebdavAutoBackupRunning;
				else if (backupType === "s3") currentRunning = isS3AutoBackupRunning;
				else currentRunning = isLocalAutoBackupRunning;
				if (!currentRunning) {
					logger$1.info(`${logPrefix} retry cancelled by user, exit`);
					break;
				}
			}
		}
	}
}
function stopAutoSync(type) {
	if (!type) {
		stopAutoSync("webdav");
		stopAutoSync("s3");
		stopAutoSync("local");
		return;
	}
	if (type === "webdav") {
		if (webdavSyncTimeout) {
			logger$1.info("[WebdavAutoSync] Stopping auto sync");
			clearTimeout(webdavSyncTimeout);
			webdavSyncTimeout = null;
		}
		isWebdavAutoBackupRunning = false;
		webdavAutoSyncStarted = false;
	} else if (type === "s3") {
		if (s3SyncTimeout) {
			logger$1.info("[S3AutoSync] Stopping auto sync");
			clearTimeout(s3SyncTimeout);
			s3SyncTimeout = null;
		}
		isS3AutoBackupRunning = false;
		s3AutoSyncStarted = false;
	} else if (type === "local") {
		if (localSyncTimeout) {
			logger$1.info("[LocalAutoSync] Stopping auto sync");
			clearTimeout(localSyncTimeout);
			localSyncTimeout = null;
		}
		isLocalAutoBackupRunning = false;
		localAutoSyncStarted = false;
	}
}
async function backupToLocal({ showMessage = false, customFileName = "", autoBackupProcess = false } = {}) {
	const notificationService = NotificationService.getInstance();
	if (isManualBackupRunning$1) {
		logger$1.verbose("Manual backup already in progress");
		return;
	}
	if (autoBackupProcess) showMessage = false;
	isManualBackupRunning$1 = true;
	store_default.dispatch(setLocalBackupSyncState({
		syncing: true,
		lastSyncError: null
	}));
	const { localBackupDir: localBackupDirSetting, localBackupMaxBackups, localBackupSkipBackupFile } = store_default.getState().settings;
	const localBackupDir = await window.api.resolvePath(localBackupDirSetting);
	let deviceType = "unknown";
	let hostname = "unknown";
	try {
		deviceType = await window.api.system.getDeviceType() || "unknown";
		hostname = await window.api.system.getHostname() || "unknown";
	} catch (error) {
		logger$1.error("Failed to get device type or hostname:", error);
	}
	const timestamp = (0, import_dayjs_min$1.default)().format("YYYYMMDDHHmmss");
	const backupFileName = customFileName || `cherry-studio.${timestamp}.${hostname}.${deviceType}.zip`;
	const finalFileName = backupFileName.endsWith(".zip") ? backupFileName : `${backupFileName}.zip`;
	try {
		const result = await window.api.backup.backupToLocalDir(finalFileName, {
			localBackupDir,
			skipBackupFile: localBackupSkipBackupFile
		});
		if (result) {
			store_default.dispatch(setLocalBackupSyncState({ lastSyncError: null }));
			if (showMessage) notificationService.send({
				id: uuid(),
				type: "success",
				title: i18n_default.t("common.success"),
				message: i18n_default.t("message.backup.success"),
				silent: false,
				timestamp: Date.now(),
				source: "backup",
				channel: "system"
			});
			if (localBackupMaxBackups > 0) try {
				const currentDeviceFiles = (await window.api.backup.listLocalBackupFiles(localBackupDir)).filter((file) => {
					return file.fileName.includes(deviceType) && file.fileName.includes(hostname);
				});
				if (currentDeviceFiles.length > localBackupMaxBackups) {
					const filesToDelete = currentDeviceFiles.sort((a, b) => new Date(a.modifiedTime).getTime() - new Date(b.modifiedTime).getTime()).slice(0, currentDeviceFiles.length - localBackupMaxBackups);
					for (const file of filesToDelete) {
						logger$1.verbose(`[LocalBackup] Deleting old backup: ${file.fileName}`);
						await window.api.backup.deleteLocalBackupFile(file.fileName, localBackupDir);
					}
				}
			} catch (error) {
				logger$1.error("[LocalBackup] Failed to clean up old backups:", error);
			}
		} else {
			if (autoBackupProcess) throw new Error(i18n_default.t("message.backup.failed"));
			store_default.dispatch(setLocalBackupSyncState({ lastSyncError: "Backup failed" }));
			if (showMessage) window.modal.error({
				title: i18n_default.t("message.backup.failed"),
				content: "Backup failed"
			});
		}
		return result;
	} catch (error) {
		if (autoBackupProcess) throw error;
		logger$1.error("[LocalBackup] Backup failed:", error);
		store_default.dispatch(setLocalBackupSyncState({ lastSyncError: error.message || "Unknown error" }));
		if (showMessage) window.modal.error({
			title: i18n_default.t("message.backup.failed"),
			content: error.message || "Unknown error"
		});
		throw error;
	} finally {
		if (!autoBackupProcess) store_default.dispatch(setLocalBackupSyncState({
			lastSyncTime: Date.now(),
			syncing: false
		}));
		isManualBackupRunning$1 = false;
	}
}
const NUTSTORE_HOST = "https://dav.jianguoyun.com/dav";
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min());
var logger = loggerService.withContext("NutstoreService");
function getNutstoreToken() {
	const nutstoreToken = store_default.getState().nutstore.nutstoreToken;
	if (!nutstoreToken) {
		window.toast.error(i18n_default.t("message.error.invalid.nutstore_token"));
		return null;
	}
	return nutstoreToken;
}
async function createNutstoreConfig(nutstoreToken) {
	const result = await window.api.nutstore.decryptToken(nutstoreToken);
	if (!result) {
		logger.warn("Invalid nutstore token");
		return null;
	}
	const nutstorePath = store_default.getState().nutstore.nutstorePath;
	const { username, access_token } = result;
	return {
		webdavHost: NUTSTORE_HOST,
		webdavUser: username,
		webdavPass: access_token,
		webdavPath: nutstorePath
	};
}
var autoSyncStarted = false;
var syncTimeout = null;
var isAutoBackupRunning = false;
var isManualBackupRunning = false;
async function cleanupOldBackups(webdavConfig, maxBackups) {
	if (maxBackups <= 0) {
		logger.debug("[cleanupOldBackups] Skip cleanup: maxBackups <= 0");
		return;
	}
	try {
		const files = await window.api.backup.listWebdavFiles(webdavConfig);
		if (!files || !Array.isArray(files)) {
			logger.warn("[cleanupOldBackups] Failed to list nutstore directory contents");
			return;
		}
		const backupFiles = files.filter((file) => file.fileName.startsWith("cherry-studio") && file.fileName.endsWith(".zip")).sort((a, b) => new Date(b.modifiedTime).getTime() - new Date(a.modifiedTime).getTime());
		if (backupFiles.length < maxBackups) {
			logger.info(`[cleanupOldBackups] No cleanup needed: ${backupFiles.length}/${maxBackups} backups`);
			return;
		}
		const filesToDelete = backupFiles.slice(maxBackups - 1);
		logger.info(`[cleanupOldBackups] Deleting ${filesToDelete.length} old backup files`);
		let deletedCount = 0;
		for (const file of filesToDelete) try {
			await window.api.backup.deleteWebdavFile(file.fileName, webdavConfig);
			deletedCount++;
		} catch (error) {
			logger.error(`[cleanupOldBackups] Failed to delete ${file.basename}:`, error);
		}
		if (deletedCount > 0) logger.info(`[cleanupOldBackups] Successfully deleted ${deletedCount} old backups`);
	} catch (error) {
		logger.error("[cleanupOldBackups] Error during cleanup:", error);
	}
}
async function backupToNutstore({ showMessage = false, customFileName = "" } = {}) {
	const nutstoreToken = getNutstoreToken();
	if (!nutstoreToken) return;
	if (isManualBackupRunning) {
		logger.verbose("[backupToNutstore] Backup already in progress");
		return;
	}
	const config = await createNutstoreConfig(nutstoreToken);
	if (!config) return;
	let deviceType = "unknown";
	try {
		deviceType = await window.api.system.getDeviceType() || "unknown";
	} catch (error) {
		logger.error("[backupToNutstore] Failed to get device type:", error);
	}
	const timestamp = (0, import_dayjs_min.default)().format("YYYYMMDDHHmmss");
	const backupFileName = customFileName || `cherry-studio.${timestamp}.${deviceType}.zip`;
	const finalFileName = backupFileName.endsWith(".zip") ? backupFileName : `${backupFileName}.zip`;
	isManualBackupRunning = true;
	store_default.dispatch(setNutstoreSyncState({
		syncing: true,
		lastSyncError: null
	}));
	const skipBackupFile = store_default.getState().nutstore.nutstoreSkipBackupFile;
	const maxBackups = store_default.getState().nutstore.nutstoreMaxBackups;
	try {
		await cleanupOldBackups(config, maxBackups);
		if (await window.api.backup.backupToWebdav({
			...config,
			fileName: finalFileName,
			skipBackupFile
		})) {
			store_default.dispatch(setNutstoreSyncState({ lastSyncError: null }));
			showMessage && window.toast.success(i18n_default.t("message.backup.success"));
		} else {
			store_default.dispatch(setNutstoreSyncState({ lastSyncError: "Backup failed" }));
			window.toast.error(i18n_default.t("message.backup.failed"));
		}
	} catch (error) {
		store_default.dispatch(setNutstoreSyncState({ lastSyncError: "Backup failed" }));
		logger.error("[Nutstore] Backup failed:", error);
		window.toast.error(i18n_default.t("message.backup.failed"));
	} finally {
		store_default.dispatch(setNutstoreSyncState({
			lastSyncTime: Date.now(),
			syncing: false
		}));
		isManualBackupRunning = false;
	}
}
async function startNutstoreAutoSync() {
	if (autoSyncStarted) return;
	if (!getNutstoreToken()) {
		logger.warn("[startNutstoreAutoSync] Invalid nutstore token, nutstore auto sync disabled");
		return;
	}
	autoSyncStarted = true;
	stopNutstoreAutoSync();
	scheduleNextBackup();
	function scheduleNextBackup() {
		if (syncTimeout) {
			clearTimeout(syncTimeout);
			syncTimeout = null;
		}
		const { nutstoreSyncInterval, nutstoreSyncState } = store_default.getState().nutstore;
		if (nutstoreSyncInterval <= 0) {
			logger.warn("[Nutstore AutoSync] Invalid sync interval, nutstore auto sync disabled");
			stopNutstoreAutoSync();
			return;
		}
		const requiredInterval = nutstoreSyncInterval * 60 * 1e3;
		const timeUntilNextSync = nutstoreSyncState?.lastSyncTime ? Math.max(1e3, nutstoreSyncState.lastSyncTime + requiredInterval - Date.now()) : requiredInterval;
		syncTimeout = setTimeout(performAutoBackup, timeUntilNextSync);
		logger.verbose(`[Nutstore AutoSync] Next sync scheduled in ${Math.floor(timeUntilNextSync / 1e3 / 60)} minutes ${Math.floor(timeUntilNextSync / 1e3 % 60)} seconds`);
	}
	async function performAutoBackup() {
		if (isAutoBackupRunning || isManualBackupRunning) {
			logger.verbose("[Nutstore AutoSync] Backup already in progress, rescheduling");
			scheduleNextBackup();
			return;
		}
		isAutoBackupRunning = true;
		try {
			logger.verbose("[Nutstore AutoSync] Starting auto backup...");
			await backupToNutstore({ showMessage: false });
		} catch (error) {
			logger.error("[Nutstore AutoSync] Auto backup failed:", error);
		} finally {
			isAutoBackupRunning = false;
			scheduleNextBackup();
		}
	}
}
function stopNutstoreAutoSync() {
	if (syncTimeout) {
		logger.verbose("[Nutstore AutoSync] Stopping nutstore auto sync");
		clearTimeout(syncTimeout);
		syncTimeout = null;
	}
	isAutoBackupRunning = false;
	autoSyncStarted = false;
}
var import_lib = /* @__PURE__ */ __toESM(require_lib());
loggerService.initWindowSource("mainWindow");
function initKeyv() {
	window.keyv = new import_lib.default();
	window.keyv.init();
}
function initAutoSync() {
	setTimeout(() => {
		const { webdavAutoSync, localBackupAutoSync, s3 } = store_default.getState().settings;
		const { nutstoreAutoSync } = store_default.getState().nutstore;
		if (webdavAutoSync || s3 && s3.autoSync || localBackupAutoSync) startAutoSync();
		if (nutstoreAutoSync) startNutstoreAutoSync();
	}, 8e3);
}
function initStoreSync() {
	StoreSyncService_default.subscribe();
}
function initWebTrace() {
	webTraceService.init();
}
initKeyv();
initAutoSync();
initStoreSync();
initWebTrace();
