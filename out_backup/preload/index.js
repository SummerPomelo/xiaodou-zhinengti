Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let electron = require("electron");
var electronAPI = {
	ipcRenderer: {
		send(channel, ...args) {
			electron.ipcRenderer.send(channel, ...args);
		},
		sendTo(webContentsId, channel, ...args) {
			const electronVer = process.versions.electron;
			if ((electronVer ? parseInt(electronVer.split(".")[0]) : 0) >= 28) throw new Error("\"sendTo\" method has been removed since Electron 28.");
			else electron.ipcRenderer.sendTo(webContentsId, channel, ...args);
		},
		sendSync(channel, ...args) {
			return electron.ipcRenderer.sendSync(channel, ...args);
		},
		sendToHost(channel, ...args) {
			electron.ipcRenderer.sendToHost(channel, ...args);
		},
		postMessage(channel, message, transfer) {
			electron.ipcRenderer.postMessage(channel, message, transfer);
		},
		invoke(channel, ...args) {
			return electron.ipcRenderer.invoke(channel, ...args);
		},
		on(channel, listener) {
			electron.ipcRenderer.on(channel, listener);
			return () => {
				electron.ipcRenderer.removeListener(channel, listener);
			};
		},
		once(channel, listener) {
			electron.ipcRenderer.once(channel, listener);
			return () => {
				electron.ipcRenderer.removeListener(channel, listener);
			};
		},
		removeListener(channel, listener) {
			electron.ipcRenderer.removeListener(channel, listener);
			return this;
		},
		removeAllListeners(channel) {
			electron.ipcRenderer.removeAllListeners(channel);
		}
	},
	webFrame: {
		insertCSS(css) {
			return electron.webFrame.insertCSS(css);
		},
		setZoomFactor(factor) {
			if (typeof factor === "number" && factor > 0) electron.webFrame.setZoomFactor(factor);
		},
		setZoomLevel(level) {
			if (typeof level === "number") electron.webFrame.setZoomLevel(level);
		}
	},
	webUtils: { getPathForFile(file) {
		return electron.webUtils.getPathForFile(file);
	} },
	process: {
		get platform() {
			return process.platform;
		},
		get versions() {
			return process.versions;
		},
		get env() {
			return { ...process.env };
		}
	}
};
let IpcChannel = /* @__PURE__ */ function(IpcChannel$1) {
	IpcChannel$1["App_GetCacheSize"] = "app:get-cache-size";
	IpcChannel$1["App_ClearCache"] = "app:clear-cache";
	IpcChannel$1["App_SetLaunchOnBoot"] = "app:set-launch-on-boot";
	IpcChannel$1["App_SetLanguage"] = "app:set-language";
	IpcChannel$1["App_SetEnableSpellCheck"] = "app:set-enable-spell-check";
	IpcChannel$1["App_SetSpellCheckLanguages"] = "app:set-spell-check-languages";
	IpcChannel$1["App_CheckForUpdate"] = "app:check-for-update";
	IpcChannel$1["App_QuitAndInstall"] = "app:quit-and-install";
	IpcChannel$1["App_Reload"] = "app:reload";
	IpcChannel$1["App_Quit"] = "app:quit";
	IpcChannel$1["App_Info"] = "app:info";
	IpcChannel$1["App_Proxy"] = "app:proxy";
	IpcChannel$1["App_SetLaunchToTray"] = "app:set-launch-to-tray";
	IpcChannel$1["App_SetTray"] = "app:set-tray";
	IpcChannel$1["App_SetTrayOnClose"] = "app:set-tray-on-close";
	IpcChannel$1["App_SetTheme"] = "app:set-theme";
	IpcChannel$1["App_SetAutoUpdate"] = "app:set-auto-update";
	IpcChannel$1["App_SetTestPlan"] = "app:set-test-plan";
	IpcChannel$1["App_SetTestChannel"] = "app:set-test-channel";
	IpcChannel$1["App_HandleZoomFactor"] = "app:handle-zoom-factor";
	IpcChannel$1["App_Select"] = "app:select";
	IpcChannel$1["App_HasWritePermission"] = "app:has-write-permission";
	IpcChannel$1["App_ResolvePath"] = "app:resolve-path";
	IpcChannel$1["App_IsPathInside"] = "app:is-path-inside";
	IpcChannel$1["App_Copy"] = "app:copy";
	IpcChannel$1["App_SetStopQuitApp"] = "app:set-stop-quit-app";
	IpcChannel$1["App_SetAppDataPath"] = "app:set-app-data-path";
	IpcChannel$1["App_GetDataPathFromArgs"] = "app:get-data-path-from-args";
	IpcChannel$1["App_FlushAppData"] = "app:flush-app-data";
	IpcChannel$1["App_IsNotEmptyDir"] = "app:is-not-empty-dir";
	IpcChannel$1["App_RelaunchApp"] = "app:relaunch-app";
	IpcChannel$1["App_ResetData"] = "app:reset-data";
	IpcChannel$1["App_IsBinaryExist"] = "app:is-binary-exist";
	IpcChannel$1["App_GetBinaryPath"] = "app:get-binary-path";
	IpcChannel$1["App_InstallUvBinary"] = "app:install-uv-binary";
	IpcChannel$1["App_InstallBunBinary"] = "app:install-bun-binary";
	IpcChannel$1["App_InstallOvmsBinary"] = "app:install-ovms-binary";
	IpcChannel$1["App_LogToMain"] = "app:log-to-main";
	IpcChannel$1["App_SaveData"] = "app:save-data";
	IpcChannel$1["App_GetDiskInfo"] = "app:get-disk-info";
	IpcChannel$1["App_SetFullScreen"] = "app:set-full-screen";
	IpcChannel$1["App_IsFullScreen"] = "app:is-full-screen";
	IpcChannel$1["App_GetSystemFonts"] = "app:get-system-fonts";
	IpcChannel$1["App_GetIpCountry"] = "app:get-ip-country";
	IpcChannel$1["APP_CrashRenderProcess"] = "app:crash-render-process";
	IpcChannel$1["App_MacIsProcessTrusted"] = "app:mac-is-process-trusted";
	IpcChannel$1["App_MacRequestProcessTrust"] = "app:mac-request-process-trust";
	IpcChannel$1["App_QuoteToMain"] = "app:quote-to-main";
	IpcChannel$1["App_SetDisableHardwareAcceleration"] = "app:set-disable-hardware-acceleration";
	IpcChannel$1["App_SetUseSystemTitleBar"] = "app:set-use-system-title-bar";
	IpcChannel$1["Notification_Send"] = "notification:send";
	IpcChannel$1["Notification_OnClick"] = "notification:on-click";
	IpcChannel$1["Webview_SetOpenLinkExternal"] = "webview:set-open-link-external";
	IpcChannel$1["Webview_SetSpellCheckEnabled"] = "webview:set-spell-check-enabled";
	IpcChannel$1["Webview_SearchHotkey"] = "webview:search-hotkey";
	IpcChannel$1["Webview_PrintToPDF"] = "webview:print-to-pdf";
	IpcChannel$1["Webview_SaveAsHTML"] = "webview:save-as-html";
	IpcChannel$1["Open_Path"] = "open:path";
	IpcChannel$1["Open_Website"] = "open:website";
	IpcChannel$1["Minapp"] = "minapp";
	IpcChannel$1["Config_Set"] = "config:set";
	IpcChannel$1["Config_Get"] = "config:get";
	IpcChannel$1["MiniWindow_Show"] = "miniwindow:show";
	IpcChannel$1["MiniWindow_Hide"] = "miniwindow:hide";
	IpcChannel$1["MiniWindow_Close"] = "miniwindow:close";
	IpcChannel$1["MiniWindow_Toggle"] = "miniwindow:toggle";
	IpcChannel$1["MiniWindow_SetPin"] = "miniwindow:set-pin";
	IpcChannel$1["Mcp_AddServer"] = "mcp:add-server";
	IpcChannel$1["Mcp_RemoveServer"] = "mcp:remove-server";
	IpcChannel$1["Mcp_RestartServer"] = "mcp:restart-server";
	IpcChannel$1["Mcp_StopServer"] = "mcp:stop-server";
	IpcChannel$1["Mcp_ListTools"] = "mcp:list-tools";
	IpcChannel$1["Mcp_CallTool"] = "mcp:call-tool";
	IpcChannel$1["Mcp_ListPrompts"] = "mcp:list-prompts";
	IpcChannel$1["Mcp_GetPrompt"] = "mcp:get-prompt";
	IpcChannel$1["Mcp_ListResources"] = "mcp:list-resources";
	IpcChannel$1["Mcp_GetResource"] = "mcp:get-resource";
	IpcChannel$1["Mcp_GetInstallInfo"] = "mcp:get-install-info";
	IpcChannel$1["Mcp_ServersChanged"] = "mcp:servers-changed";
	IpcChannel$1["Mcp_ServersUpdated"] = "mcp:servers-updated";
	IpcChannel$1["Mcp_CheckConnectivity"] = "mcp:check-connectivity";
	IpcChannel$1["Mcp_UploadDxt"] = "mcp:upload-dxt";
	IpcChannel$1["Mcp_AbortTool"] = "mcp:abort-tool";
	IpcChannel$1["Mcp_ResolveHubTool"] = "mcp:resolve-hub-tool";
	IpcChannel$1["Mcp_GetServerVersion"] = "mcp:get-server-version";
	IpcChannel$1["Mcp_Progress"] = "mcp:progress";
	IpcChannel$1["Mcp_GetServerLogs"] = "mcp:get-server-logs";
	IpcChannel$1["Mcp_ServerLog"] = "mcp:server-log";
	IpcChannel$1["Python_Execute"] = "python:execute";
	IpcChannel$1["AgentMessage_PersistExchange"] = "agent-message:persist-exchange";
	IpcChannel$1["AgentMessage_GetHistory"] = "agent-message:get-history";
	IpcChannel$1["AgentToolPermission_Request"] = "agent-tool-permission:request";
	IpcChannel$1["AgentToolPermission_Response"] = "agent-tool-permission:response";
	IpcChannel$1["AgentToolPermission_Result"] = "agent-tool-permission:result";
	IpcChannel$1["AgentSessionStream_Subscribe"] = "agent-session-stream:subscribe";
	IpcChannel$1["AgentSessionStream_Unsubscribe"] = "agent-session-stream:unsubscribe";
	IpcChannel$1["AgentSessionStream_Abort"] = "agent-session-stream:abort";
	IpcChannel$1["AgentSessionStream_Chunk"] = "agent-session-stream:chunk";
	IpcChannel$1["AgentSession_Changed"] = "agent-session:changed";
	IpcChannel$1["WeChat_QrLogin"] = "wechat:qr-login";
	IpcChannel$1["WeChat_HasCredentials"] = "wechat:has-credentials";
	IpcChannel$1["Feishu_QrLogin"] = "feishu:qr-login";
	IpcChannel$1["Channel_StatusChange"] = "channel:status-change";
	IpcChannel$1["Channel_Log"] = "channel:log";
	IpcChannel$1["Channel_GetLogs"] = "channel:get-logs";
	IpcChannel$1["Channel_GetStatuses"] = "channel:get-statuses";
	IpcChannel$1["Copilot_GetAuthMessage"] = "copilot:get-auth-message";
	IpcChannel$1["Copilot_GetCopilotToken"] = "copilot:get-copilot-token";
	IpcChannel$1["Copilot_SaveCopilotToken"] = "copilot:save-copilot-token";
	IpcChannel$1["Copilot_GetToken"] = "copilot:get-token";
	IpcChannel$1["Copilot_Logout"] = "copilot:logout";
	IpcChannel$1["Copilot_GetUser"] = "copilot:get-user";
	IpcChannel$1["CherryIN_SaveToken"] = "cherryin:save-token";
	IpcChannel$1["CherryIN_HasToken"] = "cherryin:has-token";
	IpcChannel$1["CherryIN_GetBalance"] = "cherryin:get-balance";
	IpcChannel$1["CherryIN_Logout"] = "cherryin:logout";
	IpcChannel$1["CherryIN_StartOAuthFlow"] = "cherryin:start-oauth-flow";
	IpcChannel$1["CherryIN_ExchangeToken"] = "cherryin:exchange-token";
	IpcChannel$1["Obsidian_GetVaults"] = "obsidian:get-vaults";
	IpcChannel$1["Obsidian_GetFiles"] = "obsidian:get-files";
	IpcChannel$1["Nutstore_GetSsoUrl"] = "nutstore:get-sso-url";
	IpcChannel$1["Nutstore_DecryptToken"] = "nutstore:decrypt-token";
	IpcChannel$1["Nutstore_GetDirectoryContents"] = "nutstore:get-directory-contents";
	IpcChannel$1["Aes_Encrypt"] = "aes:encrypt";
	IpcChannel$1["Aes_Decrypt"] = "aes:decrypt";
	IpcChannel$1["Gemini_UploadFile"] = "gemini:upload-file";
	IpcChannel$1["Gemini_Base64File"] = "gemini:base64-file";
	IpcChannel$1["Gemini_RetrieveFile"] = "gemini:retrieve-file";
	IpcChannel$1["Gemini_ListFiles"] = "gemini:list-files";
	IpcChannel$1["Gemini_DeleteFile"] = "gemini:delete-file";
	IpcChannel$1["VertexAI_GetAuthHeaders"] = "vertexai:get-auth-headers";
	IpcChannel$1["VertexAI_GetAccessToken"] = "vertexai:get-access-token";
	IpcChannel$1["VertexAI_ClearAuthCache"] = "vertexai:clear-auth-cache";
	IpcChannel$1["Windows_ResetMinimumSize"] = "window:reset-minimum-size";
	IpcChannel$1["Windows_SetMinimumSize"] = "window:set-minimum-size";
	IpcChannel$1["Windows_Resize"] = "window:resize";
	IpcChannel$1["Windows_GetSize"] = "window:get-size";
	IpcChannel$1["Windows_Minimize"] = "window:minimize";
	IpcChannel$1["Windows_Maximize"] = "window:maximize";
	IpcChannel$1["Windows_Unmaximize"] = "window:unmaximize";
	IpcChannel$1["Windows_Close"] = "window:close";
	IpcChannel$1["Windows_IsMaximized"] = "window:is-maximized";
	IpcChannel$1["Windows_MaximizedChanged"] = "window:maximized-changed";
	IpcChannel$1["Windows_NavigateToAbout"] = "window:navigate-to-about";
	IpcChannel$1["KnowledgeBase_Create"] = "knowledge-base:create";
	IpcChannel$1["KnowledgeBase_Reset"] = "knowledge-base:reset";
	IpcChannel$1["KnowledgeBase_Delete"] = "knowledge-base:delete";
	IpcChannel$1["KnowledgeBase_Add"] = "knowledge-base:add";
	IpcChannel$1["KnowledgeBase_Remove"] = "knowledge-base:remove";
	IpcChannel$1["KnowledgeBase_Search"] = "knowledge-base:search";
	IpcChannel$1["KnowledgeBase_Rerank"] = "knowledge-base:rerank";
	IpcChannel$1["File_Open"] = "file:open";
	IpcChannel$1["File_OpenPath"] = "file:openPath";
	IpcChannel$1["File_Save"] = "file:save";
	IpcChannel$1["File_Select"] = "file:select";
	IpcChannel$1["File_Upload"] = "file:upload";
	IpcChannel$1["File_Clear"] = "file:clear";
	IpcChannel$1["File_Read"] = "file:read";
	IpcChannel$1["File_ReadExternal"] = "file:readExternal";
	IpcChannel$1["File_Delete"] = "file:delete";
	IpcChannel$1["File_DeleteDir"] = "file:deleteDir";
	IpcChannel$1["File_DeleteExternalFile"] = "file:deleteExternalFile";
	IpcChannel$1["File_DeleteExternalDir"] = "file:deleteExternalDir";
	IpcChannel$1["File_Move"] = "file:move";
	IpcChannel$1["File_MoveDir"] = "file:moveDir";
	IpcChannel$1["File_Rename"] = "file:rename";
	IpcChannel$1["File_RenameDir"] = "file:renameDir";
	IpcChannel$1["File_Get"] = "file:get";
	IpcChannel$1["File_SelectFolder"] = "file:selectFolder";
	IpcChannel$1["File_CreateTempFile"] = "file:createTempFile";
	IpcChannel$1["File_Mkdir"] = "file:mkdir";
	IpcChannel$1["File_Write"] = "file:write";
	IpcChannel$1["File_WriteWithId"] = "file:writeWithId";
	IpcChannel$1["File_SaveImage"] = "file:saveImage";
	IpcChannel$1["File_Base64Image"] = "file:base64Image";
	IpcChannel$1["File_SaveBase64Image"] = "file:saveBase64Image";
	IpcChannel$1["File_SavePastedImage"] = "file:savePastedImage";
	IpcChannel$1["File_Download"] = "file:download";
	IpcChannel$1["File_Copy"] = "file:copy";
	IpcChannel$1["File_BinaryImage"] = "file:binaryImage";
	IpcChannel$1["File_Base64File"] = "file:base64File";
	IpcChannel$1["File_GetPdfInfo"] = "file:getPdfInfo";
	IpcChannel$1["Fs_Read"] = "fs:read";
	IpcChannel$1["Fs_ReadText"] = "fs:readText";
	IpcChannel$1["File_OpenWithRelativePath"] = "file:openWithRelativePath";
	IpcChannel$1["File_IsTextFile"] = "file:isTextFile";
	IpcChannel$1["File_IsDirectory"] = "file:isDirectory";
	IpcChannel$1["File_ListDirectory"] = "file:listDirectory";
	IpcChannel$1["File_GetDirectoryStructure"] = "file:getDirectoryStructure";
	IpcChannel$1["File_CheckFileName"] = "file:checkFileName";
	IpcChannel$1["File_ValidateNotesDirectory"] = "file:validateNotesDirectory";
	IpcChannel$1["File_StartWatcher"] = "file:startWatcher";
	IpcChannel$1["File_StopWatcher"] = "file:stopWatcher";
	IpcChannel$1["File_PauseWatcher"] = "file:pauseWatcher";
	IpcChannel$1["File_ResumeWatcher"] = "file:resumeWatcher";
	IpcChannel$1["File_BatchUploadMarkdown"] = "file:batchUploadMarkdown";
	IpcChannel$1["File_ShowInFolder"] = "file:showInFolder";
	IpcChannel$1["Pdf_ExtractText"] = "pdf:extractText";
	IpcChannel$1["FileService_Upload"] = "file-service:upload";
	IpcChannel$1["FileService_List"] = "file-service:list";
	IpcChannel$1["FileService_Delete"] = "file-service:delete";
	IpcChannel$1["FileService_Retrieve"] = "file-service:retrieve";
	IpcChannel$1["Export_Word"] = "export:word";
	IpcChannel$1["Shortcuts_Update"] = "shortcuts:update";
	IpcChannel$1["Backup_Backup"] = "backup:backup";
	IpcChannel$1["Backup_Restore"] = "backup:restore";
	IpcChannel$1["Backup_BackupToWebdav"] = "backup:backupToWebdav";
	IpcChannel$1["Backup_RestoreFromWebdav"] = "backup:restoreFromWebdav";
	IpcChannel$1["Backup_ListWebdavFiles"] = "backup:listWebdavFiles";
	IpcChannel$1["Backup_CheckConnection"] = "backup:checkConnection";
	IpcChannel$1["Backup_CreateDirectory"] = "backup:createDirectory";
	IpcChannel$1["Backup_DeleteWebdavFile"] = "backup:deleteWebdavFile";
	IpcChannel$1["Backup_BackupToLocalDir"] = "backup:backupToLocalDir";
	IpcChannel$1["Backup_RestoreFromLocalBackup"] = "backup:restoreFromLocalBackup";
	IpcChannel$1["Backup_ListLocalBackupFiles"] = "backup:listLocalBackupFiles";
	IpcChannel$1["Backup_DeleteLocalBackupFile"] = "backup:deleteLocalBackupFile";
	IpcChannel$1["Backup_BackupToS3"] = "backup:backupToS3";
	IpcChannel$1["Backup_RestoreFromS3"] = "backup:restoreFromS3";
	IpcChannel$1["Backup_ListS3Files"] = "backup:listS3Files";
	IpcChannel$1["Backup_DeleteS3File"] = "backup:deleteS3File";
	IpcChannel$1["Backup_CheckS3Connection"] = "backup:checkS3Connection";
	IpcChannel$1["Backup_CreateLanTransferBackup"] = "backup:createLanTransferBackup";
	IpcChannel$1["Backup_DeleteLanTransferBackup"] = "backup:deleteLanTransferBackup";
	IpcChannel$1["Zip_Compress"] = "zip:compress";
	IpcChannel$1["Zip_Decompress"] = "zip:decompress";
	IpcChannel$1["System_GetDeviceType"] = "system:getDeviceType";
	IpcChannel$1["System_GetHostname"] = "system:getHostname";
	IpcChannel$1["System_GetCpuName"] = "system:getCpuName";
	IpcChannel$1["System_CheckGitBash"] = "system:checkGitBash";
	IpcChannel$1["System_GetGitBashPath"] = "system:getGitBashPath";
	IpcChannel$1["System_GetGitBashPathInfo"] = "system:getGitBashPathInfo";
	IpcChannel$1["System_SetGitBashPath"] = "system:setGitBashPath";
	IpcChannel$1["System_ToggleDevTools"] = "system:toggleDevTools";
	IpcChannel$1["BackupProgress"] = "backup-progress";
	IpcChannel$1["ThemeUpdated"] = "theme:updated";
	IpcChannel$1["RestoreProgress"] = "restore-progress";
	IpcChannel$1["UpdateError"] = "update-error";
	IpcChannel$1["UpdateAvailable"] = "update-available";
	IpcChannel$1["UpdateNotAvailable"] = "update-not-available";
	IpcChannel$1["DownloadProgress"] = "download-progress";
	IpcChannel$1["UpdateDownloaded"] = "update-downloaded";
	IpcChannel$1["DownloadUpdate"] = "download-update";
	IpcChannel$1["DirectoryProcessingPercent"] = "directory-processing-percent";
	IpcChannel$1["FullscreenStatusChanged"] = "fullscreen-status-changed";
	IpcChannel$1["HideMiniWindow"] = "hide-mini-window";
	IpcChannel$1["ShowMiniWindow"] = "show-mini-window";
	IpcChannel$1["ReduxStoreReady"] = "redux-store-ready";
	IpcChannel$1["SearchWindow_Open"] = "search-window:open";
	IpcChannel$1["SearchWindow_Close"] = "search-window:close";
	IpcChannel$1["SearchWindow_OpenUrl"] = "search-window:open-url";
	IpcChannel$1["StoreSync_Subscribe"] = "store-sync:subscribe";
	IpcChannel$1["StoreSync_Unsubscribe"] = "store-sync:unsubscribe";
	IpcChannel$1["StoreSync_OnUpdate"] = "store-sync:on-update";
	IpcChannel$1["StoreSync_BroadcastSync"] = "store-sync:broadcast-sync";
	IpcChannel$1["Provider_AddKey"] = "provider:add-key";
	IpcChannel$1["Selection_TextSelected"] = "selection:text-selected";
	IpcChannel$1["Selection_ToolbarHide"] = "selection:toolbar-hide";
	IpcChannel$1["Selection_ToolbarVisibilityChange"] = "selection:toolbar-visibility-change";
	IpcChannel$1["Selection_ToolbarDetermineSize"] = "selection:toolbar-determine-size";
	IpcChannel$1["Selection_WriteToClipboard"] = "selection:write-to-clipboard";
	IpcChannel$1["Selection_SetEnabled"] = "selection:set-enabled";
	IpcChannel$1["Selection_SetTriggerMode"] = "selection:set-trigger-mode";
	IpcChannel$1["Selection_SetFilterMode"] = "selection:set-filter-mode";
	IpcChannel$1["Selection_SetFilterList"] = "selection:set-filter-list";
	IpcChannel$1["Selection_SetFollowToolbar"] = "selection:set-follow-toolbar";
	IpcChannel$1["Selection_SetRemeberWinSize"] = "selection:set-remeber-win-size";
	IpcChannel$1["Selection_ActionWindowClose"] = "selection:action-window-close";
	IpcChannel$1["Selection_ActionWindowMinimize"] = "selection:action-window-minimize";
	IpcChannel$1["Selection_ActionWindowPin"] = "selection:action-window-pin";
	IpcChannel$1["Selection_ProcessAction"] = "selection:process-action";
	IpcChannel$1["Selection_UpdateActionData"] = "selection:update-action-data";
	IpcChannel$1["Selection_GetLinuxEnvInfo"] = "selection:get-linux-env-info";
	IpcChannel$1["Memory_Add"] = "memory:add";
	IpcChannel$1["Memory_Search"] = "memory:search";
	IpcChannel$1["Memory_List"] = "memory:list";
	IpcChannel$1["Memory_Delete"] = "memory:delete";
	IpcChannel$1["Memory_Update"] = "memory:update";
	IpcChannel$1["Memory_Get"] = "memory:get";
	IpcChannel$1["Memory_SetConfig"] = "memory:set-config";
	IpcChannel$1["Memory_DeleteUser"] = "memory:delete-user";
	IpcChannel$1["Memory_DeleteAllMemoriesForUser"] = "memory:delete-all-memories-for-user";
	IpcChannel$1["Memory_GetUsersList"] = "memory:get-users-list";
	IpcChannel$1["Memory_MigrateMemoryDb"] = "memory:migrate-memory-db";
	IpcChannel$1["TRACE_SAVE_DATA"] = "trace:saveData";
	IpcChannel$1["TRACE_GET_DATA"] = "trace:getData";
	IpcChannel$1["TRACE_SAVE_ENTITY"] = "trace:saveEntity";
	IpcChannel$1["TRACE_GET_ENTITY"] = "trace:getEntity";
	IpcChannel$1["TRACE_BIND_TOPIC"] = "trace:bindTopic";
	IpcChannel$1["TRACE_CLEAN_TOPIC"] = "trace:cleanTopic";
	IpcChannel$1["TRACE_TOKEN_USAGE"] = "trace:tokenUsage";
	IpcChannel$1["TRACE_CLEAN_HISTORY"] = "trace:cleanHistory";
	IpcChannel$1["TRACE_OPEN_WINDOW"] = "trace:openWindow";
	IpcChannel$1["TRACE_SET_TITLE"] = "trace:setTitle";
	IpcChannel$1["TRACE_ADD_END_MESSAGE"] = "trace:addEndMessage";
	IpcChannel$1["TRACE_CLEAN_LOCAL_DATA"] = "trace:cleanLocalData";
	IpcChannel$1["TRACE_ADD_STREAM_MESSAGE"] = "trace:addStreamMessage";
	IpcChannel$1["ApiServer_Start"] = "api-server:start";
	IpcChannel$1["ApiServer_Stop"] = "api-server:stop";
	IpcChannel$1["ApiServer_Restart"] = "api-server:restart";
	IpcChannel$1["ApiServer_GetStatus"] = "api-server:get-status";
	IpcChannel$1["ApiServer_Ready"] = "api-server:ready";
	IpcChannel$1["ApiServer_GetConfig"] = "api-server:get-config";
	IpcChannel$1["Anthropic_StartOAuthFlow"] = "anthropic:start-oauth-flow";
	IpcChannel$1["Anthropic_CompleteOAuthWithCode"] = "anthropic:complete-oauth-with-code";
	IpcChannel$1["Anthropic_CancelOAuthFlow"] = "anthropic:cancel-oauth-flow";
	IpcChannel$1["Anthropic_GetAccessToken"] = "anthropic:get-access-token";
	IpcChannel$1["Anthropic_HasCredentials"] = "anthropic:has-credentials";
	IpcChannel$1["Anthropic_ClearCredentials"] = "anthropic:clear-credentials";
	IpcChannel$1["ExternalApps_DetectInstalled"] = "external-apps:detect-installed";
	IpcChannel$1["CodeTools_Run"] = "code-tools:run";
	IpcChannel$1["CodeTools_GetAvailableTerminals"] = "code-tools:get-available-terminals";
	IpcChannel$1["CodeTools_SetCustomTerminalPath"] = "code-tools:set-custom-terminal-path";
	IpcChannel$1["CodeTools_GetCustomTerminalPath"] = "code-tools:get-custom-terminal-path";
	IpcChannel$1["CodeTools_RemoveCustomTerminalPath"] = "code-tools:remove-custom-terminal-path";
	IpcChannel$1["OCR_ocr"] = "ocr:ocr";
	IpcChannel$1["OCR_ListProviders"] = "ocr:list-providers";
	IpcChannel$1["Ovms_IsSupported"] = "ovms:is-supported";
	IpcChannel$1["Ovms_AddModel"] = "ovms:add-model";
	IpcChannel$1["Ovms_StopAddModel"] = "ovms:stop-addmodel";
	IpcChannel$1["Ovms_GetModels"] = "ovms:get-models";
	IpcChannel$1["Ovms_IsRunning"] = "ovms:is-running";
	IpcChannel$1["Ovms_GetStatus"] = "ovms:get-status";
	IpcChannel$1["Ovms_RunOVMS"] = "ovms:run-ovms";
	IpcChannel$1["Ovms_StopOVMS"] = "ovms:stop-ovms";
	IpcChannel$1["Cherryai_GetSignature"] = "cherryai:get-signature";
	IpcChannel$1["Skill_List"] = "skill:list";
	IpcChannel$1["Skill_Install"] = "skill:install";
	IpcChannel$1["Skill_Uninstall"] = "skill:uninstall";
	IpcChannel$1["Skill_Toggle"] = "skill:toggle";
	IpcChannel$1["Skill_InstallFromZip"] = "skill:install-from-zip";
	IpcChannel$1["Skill_InstallFromDirectory"] = "skill:install-from-directory";
	IpcChannel$1["Skill_ReadFile"] = "skill:read-file";
	IpcChannel$1["Skill_ListFiles"] = "skill:list-files";
	IpcChannel$1["Skill_ListLocal"] = "skill:list-local";
	IpcChannel$1["LocalTransfer_ListServices"] = "local-transfer:list";
	IpcChannel$1["LocalTransfer_StartScan"] = "local-transfer:start-scan";
	IpcChannel$1["LocalTransfer_StopScan"] = "local-transfer:stop-scan";
	IpcChannel$1["LocalTransfer_ServicesUpdated"] = "local-transfer:services-updated";
	IpcChannel$1["LocalTransfer_Connect"] = "local-transfer:connect";
	IpcChannel$1["LocalTransfer_Disconnect"] = "local-transfer:disconnect";
	IpcChannel$1["LocalTransfer_ClientEvent"] = "local-transfer:client-event";
	IpcChannel$1["LocalTransfer_SendFile"] = "local-transfer:send-file";
	IpcChannel$1["LocalTransfer_CancelTransfer"] = "local-transfer:cancel-transfer";
	IpcChannel$1["OpenClaw_CheckInstalled"] = "openclaw:check-installed";
	IpcChannel$1["OpenClaw_Install"] = "openclaw:install";
	IpcChannel$1["OpenClaw_Uninstall"] = "openclaw:uninstall";
	IpcChannel$1["OpenClaw_InstallProgress"] = "openclaw:install-progress";
	IpcChannel$1["OpenClaw_StartGateway"] = "openclaw:start-gateway";
	IpcChannel$1["OpenClaw_StopGateway"] = "openclaw:stop-gateway";
	IpcChannel$1["OpenClaw_GetStatus"] = "openclaw:get-status";
	IpcChannel$1["OpenClaw_CheckHealth"] = "openclaw:check-health";
	IpcChannel$1["OpenClaw_GetDashboardUrl"] = "openclaw:get-dashboard-url";
	IpcChannel$1["OpenClaw_SyncConfig"] = "openclaw:sync-config";
	IpcChannel$1["OpenClaw_GetChannels"] = "openclaw:get-channels";
	IpcChannel$1["OpenClaw_CheckUpdate"] = "openclaw:check-update";
	IpcChannel$1["OpenClaw_PerformUpdate"] = "openclaw:perform-update";
	IpcChannel$1["Analytics_TrackTokenUsage"] = "analytics:track-token-usage";
	return IpcChannel$1;
}({});
function tracedInvoke(channel, spanContext, ...args) {
	if (spanContext) {
		const data = {
			type: "trace",
			context: spanContext
		};
		return electron.ipcRenderer.invoke(channel, ...args, data);
	}
	return electron.ipcRenderer.invoke(channel, ...args);
}
var api = {
	getAppInfo: () => electron.ipcRenderer.invoke(IpcChannel.App_Info),
	getDiskInfo: (directoryPath) => electron.ipcRenderer.invoke(IpcChannel.App_GetDiskInfo, directoryPath),
	reload: () => electron.ipcRenderer.invoke(IpcChannel.App_Reload),
	quit: () => electron.ipcRenderer.invoke(IpcChannel.App_Quit),
	setProxy: (proxy, bypassRules) => electron.ipcRenderer.invoke(IpcChannel.App_Proxy, proxy, bypassRules),
	quitAndInstall: () => electron.ipcRenderer.invoke(IpcChannel.App_QuitAndInstall),
	setLanguage: (lang) => electron.ipcRenderer.invoke(IpcChannel.App_SetLanguage, lang),
	setEnableSpellCheck: (isEnable) => electron.ipcRenderer.invoke(IpcChannel.App_SetEnableSpellCheck, isEnable),
	setSpellCheckLanguages: (languages) => electron.ipcRenderer.invoke(IpcChannel.App_SetSpellCheckLanguages, languages),
	setLaunchOnBoot: (isActive) => electron.ipcRenderer.invoke(IpcChannel.App_SetLaunchOnBoot, isActive),
	setLaunchToTray: (isActive) => electron.ipcRenderer.invoke(IpcChannel.App_SetLaunchToTray, isActive),
	setTray: (isActive) => electron.ipcRenderer.invoke(IpcChannel.App_SetTray, isActive),
	setTrayOnClose: (isActive) => electron.ipcRenderer.invoke(IpcChannel.App_SetTrayOnClose, isActive),
	setTestPlan: (isActive) => electron.ipcRenderer.invoke(IpcChannel.App_SetTestPlan, isActive),
	setTestChannel: (channel) => electron.ipcRenderer.invoke(IpcChannel.App_SetTestChannel, channel),
	setTheme: (theme) => electron.ipcRenderer.invoke(IpcChannel.App_SetTheme, theme),
	handleZoomFactor: (delta, reset = false) => electron.ipcRenderer.invoke(IpcChannel.App_HandleZoomFactor, delta, reset),
	setAutoUpdate: (isActive) => electron.ipcRenderer.invoke(IpcChannel.App_SetAutoUpdate, isActive),
	select: (options) => electron.ipcRenderer.invoke(IpcChannel.App_Select, options),
	hasWritePermission: (path) => electron.ipcRenderer.invoke(IpcChannel.App_HasWritePermission, path),
	resolvePath: (path) => electron.ipcRenderer.invoke(IpcChannel.App_ResolvePath, path),
	isPathInside: (childPath, parentPath) => electron.ipcRenderer.invoke(IpcChannel.App_IsPathInside, childPath, parentPath),
	setAppDataPath: (path) => electron.ipcRenderer.invoke(IpcChannel.App_SetAppDataPath, path),
	getDataPathFromArgs: () => electron.ipcRenderer.invoke(IpcChannel.App_GetDataPathFromArgs),
	copy: (oldPath, newPath, occupiedDirs = []) => electron.ipcRenderer.invoke(IpcChannel.App_Copy, oldPath, newPath, occupiedDirs),
	setStopQuitApp: (stop, reason) => electron.ipcRenderer.invoke(IpcChannel.App_SetStopQuitApp, stop, reason),
	flushAppData: () => electron.ipcRenderer.invoke(IpcChannel.App_FlushAppData),
	isNotEmptyDir: (path) => electron.ipcRenderer.invoke(IpcChannel.App_IsNotEmptyDir, path),
	relaunchApp: (options) => electron.ipcRenderer.invoke(IpcChannel.App_RelaunchApp, options),
	resetData: () => electron.ipcRenderer.invoke(IpcChannel.App_ResetData),
	openWebsite: (url) => electron.ipcRenderer.invoke(IpcChannel.Open_Website, url),
	getCacheSize: () => electron.ipcRenderer.invoke(IpcChannel.App_GetCacheSize),
	clearCache: () => electron.ipcRenderer.invoke(IpcChannel.App_ClearCache),
	logToMain: (source, level, message, data) => electron.ipcRenderer.invoke(IpcChannel.App_LogToMain, source, level, message, data),
	setFullScreen: (value) => electron.ipcRenderer.invoke(IpcChannel.App_SetFullScreen, value),
	isFullScreen: () => electron.ipcRenderer.invoke(IpcChannel.App_IsFullScreen),
	getSystemFonts: () => electron.ipcRenderer.invoke(IpcChannel.App_GetSystemFonts),
	getIpCountry: () => electron.ipcRenderer.invoke(IpcChannel.App_GetIpCountry),
	mockCrashRenderProcess: () => electron.ipcRenderer.invoke(IpcChannel.APP_CrashRenderProcess),
	mac: {
		isProcessTrusted: () => electron.ipcRenderer.invoke(IpcChannel.App_MacIsProcessTrusted),
		requestProcessTrust: () => electron.ipcRenderer.invoke(IpcChannel.App_MacRequestProcessTrust)
	},
	notification: { send: (notification) => electron.ipcRenderer.invoke(IpcChannel.Notification_Send, notification) },
	system: {
		getDeviceType: () => electron.ipcRenderer.invoke(IpcChannel.System_GetDeviceType),
		getHostname: () => electron.ipcRenderer.invoke(IpcChannel.System_GetHostname),
		getCpuName: () => electron.ipcRenderer.invoke(IpcChannel.System_GetCpuName),
		checkGitBash: () => electron.ipcRenderer.invoke(IpcChannel.System_CheckGitBash),
		getGitBashPath: () => electron.ipcRenderer.invoke(IpcChannel.System_GetGitBashPath),
		getGitBashPathInfo: () => electron.ipcRenderer.invoke(IpcChannel.System_GetGitBashPathInfo),
		setGitBashPath: (newPath) => electron.ipcRenderer.invoke(IpcChannel.System_SetGitBashPath, newPath)
	},
	devTools: { toggle: () => electron.ipcRenderer.invoke(IpcChannel.System_ToggleDevTools) },
	zip: {
		compress: (text) => electron.ipcRenderer.invoke(IpcChannel.Zip_Compress, text),
		decompress: (text) => electron.ipcRenderer.invoke(IpcChannel.Zip_Decompress, text)
	},
	backup: {
		restore: (path) => electron.ipcRenderer.invoke(IpcChannel.Backup_Restore, path),
		backup: (fileName, destinationPath, skipBackupFile) => electron.ipcRenderer.invoke(IpcChannel.Backup_Backup, fileName, destinationPath, skipBackupFile),
		backupToWebdav: (webdavConfig) => electron.ipcRenderer.invoke(IpcChannel.Backup_BackupToWebdav, webdavConfig),
		restoreFromWebdav: (webdavConfig) => electron.ipcRenderer.invoke(IpcChannel.Backup_RestoreFromWebdav, webdavConfig),
		listWebdavFiles: (webdavConfig) => electron.ipcRenderer.invoke(IpcChannel.Backup_ListWebdavFiles, webdavConfig),
		checkConnection: (webdavConfig) => electron.ipcRenderer.invoke(IpcChannel.Backup_CheckConnection, webdavConfig),
		createDirectory: (webdavConfig, path, options) => electron.ipcRenderer.invoke(IpcChannel.Backup_CreateDirectory, webdavConfig, path, options),
		deleteWebdavFile: (fileName, webdavConfig) => electron.ipcRenderer.invoke(IpcChannel.Backup_DeleteWebdavFile, fileName, webdavConfig),
		backupToLocalDir: (fileName, localConfig) => electron.ipcRenderer.invoke(IpcChannel.Backup_BackupToLocalDir, fileName, localConfig),
		restoreFromLocalBackup: (fileName, localBackupDir) => electron.ipcRenderer.invoke(IpcChannel.Backup_RestoreFromLocalBackup, fileName, localBackupDir),
		listLocalBackupFiles: (localBackupDir) => electron.ipcRenderer.invoke(IpcChannel.Backup_ListLocalBackupFiles, localBackupDir),
		deleteLocalBackupFile: (fileName, localBackupDir) => electron.ipcRenderer.invoke(IpcChannel.Backup_DeleteLocalBackupFile, fileName, localBackupDir),
		checkWebdavConnection: (webdavConfig) => electron.ipcRenderer.invoke(IpcChannel.Backup_CheckConnection, webdavConfig),
		backupToS3: (s3Config) => electron.ipcRenderer.invoke(IpcChannel.Backup_BackupToS3, s3Config),
		restoreFromS3: (s3Config) => electron.ipcRenderer.invoke(IpcChannel.Backup_RestoreFromS3, s3Config),
		listS3Files: (s3Config) => electron.ipcRenderer.invoke(IpcChannel.Backup_ListS3Files, s3Config),
		deleteS3File: (fileName, s3Config) => electron.ipcRenderer.invoke(IpcChannel.Backup_DeleteS3File, fileName, s3Config),
		checkS3Connection: (s3Config) => electron.ipcRenderer.invoke(IpcChannel.Backup_CheckS3Connection, s3Config),
		createLanTransferBackup: (data, destinationPath) => electron.ipcRenderer.invoke(IpcChannel.Backup_CreateLanTransferBackup, data, destinationPath),
		deleteLanTransferBackup: (filePath) => electron.ipcRenderer.invoke(IpcChannel.Backup_DeleteLanTransferBackup, filePath)
	},
	file: {
		select: (options) => electron.ipcRenderer.invoke(IpcChannel.File_Select, options),
		upload: (file) => electron.ipcRenderer.invoke(IpcChannel.File_Upload, file),
		delete: (fileId) => electron.ipcRenderer.invoke(IpcChannel.File_Delete, fileId),
		deleteDir: (dirPath) => electron.ipcRenderer.invoke(IpcChannel.File_DeleteDir, dirPath),
		deleteExternalFile: (filePath) => electron.ipcRenderer.invoke(IpcChannel.File_DeleteExternalFile, filePath),
		deleteExternalDir: (dirPath) => electron.ipcRenderer.invoke(IpcChannel.File_DeleteExternalDir, dirPath),
		move: (path, newPath) => electron.ipcRenderer.invoke(IpcChannel.File_Move, path, newPath),
		moveDir: (dirPath, newDirPath) => electron.ipcRenderer.invoke(IpcChannel.File_MoveDir, dirPath, newDirPath),
		rename: (path, newName) => electron.ipcRenderer.invoke(IpcChannel.File_Rename, path, newName),
		renameDir: (dirPath, newName) => electron.ipcRenderer.invoke(IpcChannel.File_RenameDir, dirPath, newName),
		read: (fileId, detectEncoding) => electron.ipcRenderer.invoke(IpcChannel.File_Read, fileId, detectEncoding),
		readExternal: (filePath, detectEncoding) => electron.ipcRenderer.invoke(IpcChannel.File_ReadExternal, filePath, detectEncoding),
		clear: (spanContext) => electron.ipcRenderer.invoke(IpcChannel.File_Clear, spanContext),
		get: (filePath) => electron.ipcRenderer.invoke(IpcChannel.File_Get, filePath),
		createTempFile: (fileName) => electron.ipcRenderer.invoke(IpcChannel.File_CreateTempFile, fileName),
		mkdir: (dirPath) => electron.ipcRenderer.invoke(IpcChannel.File_Mkdir, dirPath),
		write: (filePath, data) => electron.ipcRenderer.invoke(IpcChannel.File_Write, filePath, data),
		writeWithId: (id, content) => electron.ipcRenderer.invoke(IpcChannel.File_WriteWithId, id, content),
		open: (options) => electron.ipcRenderer.invoke(IpcChannel.File_Open, options),
		openPath: (path) => electron.ipcRenderer.invoke(IpcChannel.File_OpenPath, path),
		save: (path, content, options) => electron.ipcRenderer.invoke(IpcChannel.File_Save, path, content, options),
		selectFolder: (options) => electron.ipcRenderer.invoke(IpcChannel.File_SelectFolder, options),
		saveImage: (name, data) => electron.ipcRenderer.invoke(IpcChannel.File_SaveImage, name, data),
		binaryImage: (fileId) => electron.ipcRenderer.invoke(IpcChannel.File_BinaryImage, fileId),
		base64Image: (fileId) => electron.ipcRenderer.invoke(IpcChannel.File_Base64Image, fileId),
		saveBase64Image: (data) => electron.ipcRenderer.invoke(IpcChannel.File_SaveBase64Image, data),
		savePastedImage: (imageData, extension) => electron.ipcRenderer.invoke(IpcChannel.File_SavePastedImage, imageData, extension),
		download: (url, isUseContentType) => electron.ipcRenderer.invoke(IpcChannel.File_Download, url, isUseContentType),
		copy: (fileId, destPath) => electron.ipcRenderer.invoke(IpcChannel.File_Copy, fileId, destPath),
		base64File: (fileId) => electron.ipcRenderer.invoke(IpcChannel.File_Base64File, fileId),
		pdfInfo: (fileId) => electron.ipcRenderer.invoke(IpcChannel.File_GetPdfInfo, fileId),
		getPathForFile: (file) => electron.webUtils.getPathForFile(file),
		openFileWithRelativePath: (file) => electron.ipcRenderer.invoke(IpcChannel.File_OpenWithRelativePath, file),
		isTextFile: (filePath) => electron.ipcRenderer.invoke(IpcChannel.File_IsTextFile, filePath),
		isDirectory: (filePath) => electron.ipcRenderer.invoke(IpcChannel.File_IsDirectory, filePath),
		getDirectoryStructure: (dirPath) => electron.ipcRenderer.invoke(IpcChannel.File_GetDirectoryStructure, dirPath),
		listDirectory: (dirPath, options) => electron.ipcRenderer.invoke(IpcChannel.File_ListDirectory, dirPath, options),
		checkFileName: (dirPath, fileName, isFile) => electron.ipcRenderer.invoke(IpcChannel.File_CheckFileName, dirPath, fileName, isFile),
		validateNotesDirectory: (dirPath) => electron.ipcRenderer.invoke(IpcChannel.File_ValidateNotesDirectory, dirPath),
		startFileWatcher: (dirPath, config) => electron.ipcRenderer.invoke(IpcChannel.File_StartWatcher, dirPath, config),
		stopFileWatcher: () => electron.ipcRenderer.invoke(IpcChannel.File_StopWatcher),
		pauseFileWatcher: () => electron.ipcRenderer.invoke(IpcChannel.File_PauseWatcher),
		resumeFileWatcher: () => electron.ipcRenderer.invoke(IpcChannel.File_ResumeWatcher),
		batchUploadMarkdown: (filePaths, targetPath) => electron.ipcRenderer.invoke(IpcChannel.File_BatchUploadMarkdown, filePaths, targetPath),
		onFileChange: (callback) => {
			const listener = (_event, data) => {
				if (data && typeof data === "object") callback(data);
			};
			electron.ipcRenderer.on("file-change", listener);
			return () => electron.ipcRenderer.off("file-change", listener);
		},
		showInFolder: (path) => electron.ipcRenderer.invoke(IpcChannel.File_ShowInFolder, path)
	},
	fs: {
		read: (pathOrUrl, encoding) => electron.ipcRenderer.invoke(IpcChannel.Fs_Read, pathOrUrl, encoding),
		readText: (pathOrUrl) => electron.ipcRenderer.invoke(IpcChannel.Fs_ReadText, pathOrUrl)
	},
	pdf: { extractText: (data) => electron.ipcRenderer.invoke(IpcChannel.Pdf_ExtractText, data) },
	export: { toWord: (markdown, fileName) => electron.ipcRenderer.invoke(IpcChannel.Export_Word, markdown, fileName) },
	obsidian: {
		getVaults: () => electron.ipcRenderer.invoke(IpcChannel.Obsidian_GetVaults),
		getFolders: (vaultName) => electron.ipcRenderer.invoke(IpcChannel.Obsidian_GetFiles, vaultName),
		getFiles: (vaultName) => electron.ipcRenderer.invoke(IpcChannel.Obsidian_GetFiles, vaultName)
	},
	openPath: (path) => electron.ipcRenderer.invoke(IpcChannel.Open_Path, path),
	shortcuts: { update: (shortcuts) => electron.ipcRenderer.invoke(IpcChannel.Shortcuts_Update, shortcuts) },
	knowledgeBase: {
		create: (base, context) => tracedInvoke(IpcChannel.KnowledgeBase_Create, context, base),
		reset: (base) => electron.ipcRenderer.invoke(IpcChannel.KnowledgeBase_Reset, base),
		delete: (id) => electron.ipcRenderer.invoke(IpcChannel.KnowledgeBase_Delete, id),
		add: ({ base, item, userId, forceReload = false }) => electron.ipcRenderer.invoke(IpcChannel.KnowledgeBase_Add, {
			base,
			item,
			forceReload,
			userId
		}),
		remove: ({ uniqueId, uniqueIds, base }) => electron.ipcRenderer.invoke(IpcChannel.KnowledgeBase_Remove, {
			uniqueId,
			uniqueIds,
			base
		}),
		search: ({ search, base }, context) => tracedInvoke(IpcChannel.KnowledgeBase_Search, context, {
			search,
			base
		}),
		rerank: ({ search, base, results }, context) => tracedInvoke(IpcChannel.KnowledgeBase_Rerank, context, {
			search,
			base,
			results
		})
	},
	memory: {
		add: (messages, options) => electron.ipcRenderer.invoke(IpcChannel.Memory_Add, messages, options),
		search: (query, options) => electron.ipcRenderer.invoke(IpcChannel.Memory_Search, query, options),
		list: (options) => electron.ipcRenderer.invoke(IpcChannel.Memory_List, options),
		delete: (id) => electron.ipcRenderer.invoke(IpcChannel.Memory_Delete, id),
		update: (id, memory, metadata) => electron.ipcRenderer.invoke(IpcChannel.Memory_Update, id, memory, metadata),
		get: (id) => electron.ipcRenderer.invoke(IpcChannel.Memory_Get, id),
		setConfig: (config) => electron.ipcRenderer.invoke(IpcChannel.Memory_SetConfig, config),
		deleteUser: (userId) => electron.ipcRenderer.invoke(IpcChannel.Memory_DeleteUser, userId),
		deleteAllMemoriesForUser: (userId) => electron.ipcRenderer.invoke(IpcChannel.Memory_DeleteAllMemoriesForUser, userId),
		getUsersList: () => electron.ipcRenderer.invoke(IpcChannel.Memory_GetUsersList),
		migrateMemoryDb: () => electron.ipcRenderer.invoke(IpcChannel.Memory_MigrateMemoryDb)
	},
	window: {
		setMinimumSize: (width, height) => electron.ipcRenderer.invoke(IpcChannel.Windows_SetMinimumSize, width, height),
		resetMinimumSize: () => electron.ipcRenderer.invoke(IpcChannel.Windows_ResetMinimumSize),
		getSize: () => electron.ipcRenderer.invoke(IpcChannel.Windows_GetSize)
	},
	fileService: {
		upload: (provider, file) => electron.ipcRenderer.invoke(IpcChannel.FileService_Upload, provider, file),
		list: (provider) => electron.ipcRenderer.invoke(IpcChannel.FileService_List, provider),
		delete: (provider, fileId) => electron.ipcRenderer.invoke(IpcChannel.FileService_Delete, provider, fileId),
		retrieve: (provider, fileId) => electron.ipcRenderer.invoke(IpcChannel.FileService_Retrieve, provider, fileId)
	},
	selectionMenu: { action: (action) => electron.ipcRenderer.invoke("selection-menu:action", action) },
	vertexAI: {
		getAuthHeaders: (params) => electron.ipcRenderer.invoke(IpcChannel.VertexAI_GetAuthHeaders, params),
		getAccessToken: (params) => electron.ipcRenderer.invoke(IpcChannel.VertexAI_GetAccessToken, params),
		clearAuthCache: (projectId, clientEmail) => electron.ipcRenderer.invoke(IpcChannel.VertexAI_ClearAuthCache, projectId, clientEmail)
	},
	ovms: {
		isSupported: () => electron.ipcRenderer.invoke(IpcChannel.Ovms_IsSupported),
		addModel: (modelName, modelId, modelSource, task) => electron.ipcRenderer.invoke(IpcChannel.Ovms_AddModel, modelName, modelId, modelSource, task),
		stopAddModel: () => electron.ipcRenderer.invoke(IpcChannel.Ovms_StopAddModel),
		getModels: () => electron.ipcRenderer.invoke(IpcChannel.Ovms_GetModels),
		isRunning: () => electron.ipcRenderer.invoke(IpcChannel.Ovms_IsRunning),
		getStatus: () => electron.ipcRenderer.invoke(IpcChannel.Ovms_GetStatus),
		runOvms: () => electron.ipcRenderer.invoke(IpcChannel.Ovms_RunOVMS),
		stopOvms: () => electron.ipcRenderer.invoke(IpcChannel.Ovms_StopOVMS)
	},
	config: {
		set: (key, value, isNotify = false) => electron.ipcRenderer.invoke(IpcChannel.Config_Set, key, value, isNotify),
		get: (key) => electron.ipcRenderer.invoke(IpcChannel.Config_Get, key)
	},
	miniWindow: {
		show: () => electron.ipcRenderer.invoke(IpcChannel.MiniWindow_Show),
		hide: () => electron.ipcRenderer.invoke(IpcChannel.MiniWindow_Hide),
		close: () => electron.ipcRenderer.invoke(IpcChannel.MiniWindow_Close),
		toggle: () => electron.ipcRenderer.invoke(IpcChannel.MiniWindow_Toggle),
		setPin: (isPinned) => electron.ipcRenderer.invoke(IpcChannel.MiniWindow_SetPin, isPinned)
	},
	aes: {
		encrypt: (text, secretKey, iv) => electron.ipcRenderer.invoke(IpcChannel.Aes_Encrypt, text, secretKey, iv),
		decrypt: (encryptedData, iv, secretKey) => electron.ipcRenderer.invoke(IpcChannel.Aes_Decrypt, encryptedData, iv, secretKey)
	},
	mcp: {
		removeServer: (server) => electron.ipcRenderer.invoke(IpcChannel.Mcp_RemoveServer, server),
		restartServer: (server) => electron.ipcRenderer.invoke(IpcChannel.Mcp_RestartServer, server),
		stopServer: (server) => electron.ipcRenderer.invoke(IpcChannel.Mcp_StopServer, server),
		listTools: (server, context) => tracedInvoke(IpcChannel.Mcp_ListTools, context, server),
		callTool: ({ server, name, args, callId }, context) => tracedInvoke(IpcChannel.Mcp_CallTool, context, {
			server,
			name,
			args,
			callId
		}),
		listPrompts: (server) => electron.ipcRenderer.invoke(IpcChannel.Mcp_ListPrompts, server),
		getPrompt: ({ server, name, args }) => electron.ipcRenderer.invoke(IpcChannel.Mcp_GetPrompt, {
			server,
			name,
			args
		}),
		listResources: (server) => electron.ipcRenderer.invoke(IpcChannel.Mcp_ListResources, server),
		getResource: ({ server, uri }) => electron.ipcRenderer.invoke(IpcChannel.Mcp_GetResource, {
			server,
			uri
		}),
		getInstallInfo: () => electron.ipcRenderer.invoke(IpcChannel.Mcp_GetInstallInfo),
		checkMcpConnectivity: (server) => electron.ipcRenderer.invoke(IpcChannel.Mcp_CheckConnectivity, server),
		uploadDxt: async (file) => {
			const buffer = await file.arrayBuffer();
			return electron.ipcRenderer.invoke(IpcChannel.Mcp_UploadDxt, buffer, file.name);
		},
		abortTool: (callId) => electron.ipcRenderer.invoke(IpcChannel.Mcp_AbortTool, callId),
		resolveHubTool: (nameOrId) => electron.ipcRenderer.invoke(IpcChannel.Mcp_ResolveHubTool, nameOrId),
		getServerVersion: (server) => electron.ipcRenderer.invoke(IpcChannel.Mcp_GetServerVersion, server),
		getServerLogs: (server) => electron.ipcRenderer.invoke(IpcChannel.Mcp_GetServerLogs, server),
		onServerLog: (callback) => {
			const listener = (_event, log) => {
				callback(log);
			};
			electron.ipcRenderer.on(IpcChannel.Mcp_ServerLog, listener);
			return () => electron.ipcRenderer.off(IpcChannel.Mcp_ServerLog, listener);
		}
	},
	python: { execute: (script, context, timeout) => electron.ipcRenderer.invoke(IpcChannel.Python_Execute, script, context, timeout) },
	shell: { openExternal: (url, options) => {
		const ALLOWED_PROTOCOLS = [
			"http:",
			"https:",
			"mailto:",
			"obsidian:"
		];
		try {
			const parsed = new URL(url);
			if (!ALLOWED_PROTOCOLS.includes(parsed.protocol)) return Promise.reject(/* @__PURE__ */ new Error(`Blocked openExternal for untrusted URL scheme: ${parsed.protocol}`));
		} catch {
			return Promise.reject(/* @__PURE__ */ new Error("Blocked openExternal for invalid URL"));
		}
		return electron.shell.openExternal(url, options);
	} },
	copilot: {
		getAuthMessage: (headers) => electron.ipcRenderer.invoke(IpcChannel.Copilot_GetAuthMessage, headers),
		getCopilotToken: (device_code, headers) => electron.ipcRenderer.invoke(IpcChannel.Copilot_GetCopilotToken, device_code, headers),
		saveCopilotToken: (access_token) => electron.ipcRenderer.invoke(IpcChannel.Copilot_SaveCopilotToken, access_token),
		getToken: (headers) => electron.ipcRenderer.invoke(IpcChannel.Copilot_GetToken, headers),
		logout: () => electron.ipcRenderer.invoke(IpcChannel.Copilot_Logout),
		getUser: (token) => electron.ipcRenderer.invoke(IpcChannel.Copilot_GetUser, token)
	},
	cherryin: {
		saveToken: (accessToken, refreshToken) => electron.ipcRenderer.invoke(IpcChannel.CherryIN_SaveToken, accessToken, refreshToken),
		hasToken: () => electron.ipcRenderer.invoke(IpcChannel.CherryIN_HasToken),
		getBalance: (apiHost) => electron.ipcRenderer.invoke(IpcChannel.CherryIN_GetBalance, apiHost),
		logout: (apiHost) => electron.ipcRenderer.invoke(IpcChannel.CherryIN_Logout, apiHost),
		startOAuthFlow: (oauthServer, apiHost) => electron.ipcRenderer.invoke(IpcChannel.CherryIN_StartOAuthFlow, oauthServer, apiHost),
		exchangeToken: (code, state) => electron.ipcRenderer.invoke(IpcChannel.CherryIN_ExchangeToken, code, state)
	},
	isBinaryExist: (name) => electron.ipcRenderer.invoke(IpcChannel.App_IsBinaryExist, name),
	getBinaryPath: (name) => electron.ipcRenderer.invoke(IpcChannel.App_GetBinaryPath, name),
	installUVBinary: () => electron.ipcRenderer.invoke(IpcChannel.App_InstallUvBinary),
	installBunBinary: () => electron.ipcRenderer.invoke(IpcChannel.App_InstallBunBinary),
	installOvmsBinary: () => electron.ipcRenderer.invoke(IpcChannel.App_InstallOvmsBinary),
	protocol: { onReceiveData: (callback) => {
		const listener = (_event, data) => {
			callback(data);
		};
		electron.ipcRenderer.on("protocol-data", listener);
		return () => {
			electron.ipcRenderer.off("protocol-data", listener);
		};
	} },
	externalApps: { detectInstalled: () => electron.ipcRenderer.invoke(IpcChannel.ExternalApps_DetectInstalled) },
	nutstore: {
		getSSOUrl: () => electron.ipcRenderer.invoke(IpcChannel.Nutstore_GetSsoUrl),
		decryptToken: (token) => electron.ipcRenderer.invoke(IpcChannel.Nutstore_DecryptToken, token),
		getDirectoryContents: (token, path) => electron.ipcRenderer.invoke(IpcChannel.Nutstore_GetDirectoryContents, token, path)
	},
	searchService: {
		openSearchWindow: (uid, show) => electron.ipcRenderer.invoke(IpcChannel.SearchWindow_Open, uid, show),
		closeSearchWindow: (uid) => electron.ipcRenderer.invoke(IpcChannel.SearchWindow_Close, uid),
		openUrlInSearchWindow: (uid, url) => electron.ipcRenderer.invoke(IpcChannel.SearchWindow_OpenUrl, uid, url)
	},
	webview: {
		setOpenLinkExternal: (webviewId, isExternal) => electron.ipcRenderer.invoke(IpcChannel.Webview_SetOpenLinkExternal, webviewId, isExternal),
		setSpellCheckEnabled: (webviewId, isEnable) => electron.ipcRenderer.invoke(IpcChannel.Webview_SetSpellCheckEnabled, webviewId, isEnable),
		printToPDF: (webviewId) => electron.ipcRenderer.invoke(IpcChannel.Webview_PrintToPDF, webviewId),
		saveAsHTML: (webviewId) => electron.ipcRenderer.invoke(IpcChannel.Webview_SaveAsHTML, webviewId),
		onFindShortcut: (callback) => {
			const listener = (_event, payload) => {
				callback(payload);
			};
			electron.ipcRenderer.on(IpcChannel.Webview_SearchHotkey, listener);
			return () => {
				electron.ipcRenderer.off(IpcChannel.Webview_SearchHotkey, listener);
			};
		}
	},
	storeSync: {
		subscribe: () => electron.ipcRenderer.invoke(IpcChannel.StoreSync_Subscribe),
		unsubscribe: () => electron.ipcRenderer.invoke(IpcChannel.StoreSync_Unsubscribe),
		onUpdate: (action) => electron.ipcRenderer.invoke(IpcChannel.StoreSync_OnUpdate, action)
	},
	selection: {
		hideToolbar: () => electron.ipcRenderer.invoke(IpcChannel.Selection_ToolbarHide),
		writeToClipboard: (text) => electron.ipcRenderer.invoke(IpcChannel.Selection_WriteToClipboard, text),
		determineToolbarSize: (width, height) => electron.ipcRenderer.invoke(IpcChannel.Selection_ToolbarDetermineSize, width, height),
		setEnabled: (enabled) => electron.ipcRenderer.invoke(IpcChannel.Selection_SetEnabled, enabled),
		setTriggerMode: (triggerMode) => electron.ipcRenderer.invoke(IpcChannel.Selection_SetTriggerMode, triggerMode),
		setFollowToolbar: (isFollowToolbar) => electron.ipcRenderer.invoke(IpcChannel.Selection_SetFollowToolbar, isFollowToolbar),
		setRemeberWinSize: (isRemeberWinSize) => electron.ipcRenderer.invoke(IpcChannel.Selection_SetRemeberWinSize, isRemeberWinSize),
		setFilterMode: (filterMode) => electron.ipcRenderer.invoke(IpcChannel.Selection_SetFilterMode, filterMode),
		setFilterList: (filterList) => electron.ipcRenderer.invoke(IpcChannel.Selection_SetFilterList, filterList),
		processAction: (actionItem, isFullScreen = false) => electron.ipcRenderer.invoke(IpcChannel.Selection_ProcessAction, actionItem, isFullScreen),
		closeActionWindow: () => electron.ipcRenderer.invoke(IpcChannel.Selection_ActionWindowClose),
		minimizeActionWindow: () => electron.ipcRenderer.invoke(IpcChannel.Selection_ActionWindowMinimize),
		pinActionWindow: (isPinned) => electron.ipcRenderer.invoke(IpcChannel.Selection_ActionWindowPin, isPinned),
		getLinuxEnvInfo: () => electron.ipcRenderer.invoke(IpcChannel.Selection_GetLinuxEnvInfo)
	},
	agentTools: { respondToPermission: (payload) => electron.ipcRenderer.invoke(IpcChannel.AgentToolPermission_Response, payload) },
	agentSessionStream: {
		subscribe: (sessionId) => electron.ipcRenderer.invoke(IpcChannel.AgentSessionStream_Subscribe, { sessionId }),
		unsubscribe: (sessionId) => electron.ipcRenderer.invoke(IpcChannel.AgentSessionStream_Unsubscribe, { sessionId }),
		abort: (sessionId) => electron.ipcRenderer.invoke(IpcChannel.AgentSessionStream_Abort, { sessionId }),
		onChunk: (callback) => {
			const listener = (_event, chunk) => {
				callback(chunk);
			};
			electron.ipcRenderer.on(IpcChannel.AgentSessionStream_Chunk, listener);
			return () => electron.ipcRenderer.off(IpcChannel.AgentSessionStream_Chunk, listener);
		},
		onSessionChanged: (callback) => {
			const listener = (_event, data) => {
				callback(data);
			};
			electron.ipcRenderer.on(IpcChannel.AgentSession_Changed, listener);
			return () => electron.ipcRenderer.off(IpcChannel.AgentSession_Changed, listener);
		}
	},
	wechat: {
		onQrLogin: (callback) => {
			const listener = (_event, data) => {
				callback(data);
			};
			electron.ipcRenderer.on(IpcChannel.WeChat_QrLogin, listener);
			return () => electron.ipcRenderer.off(IpcChannel.WeChat_QrLogin, listener);
		},
		hasCredentials: (channelId) => electron.ipcRenderer.invoke(IpcChannel.WeChat_HasCredentials, channelId)
	},
	feishu: { onQrLogin: (callback) => {
		const listener = (_event, data) => {
			callback(data);
		};
		electron.ipcRenderer.on(IpcChannel.Feishu_QrLogin, listener);
		return () => electron.ipcRenderer.off(IpcChannel.Feishu_QrLogin, listener);
	} },
	channel: {
		onLog: (callback) => {
			const listener = (_event, log) => {
				callback(log);
			};
			electron.ipcRenderer.on(IpcChannel.Channel_Log, listener);
			return () => electron.ipcRenderer.off(IpcChannel.Channel_Log, listener);
		},
		onStatusChange: (callback) => {
			const listener = (_event, status) => {
				callback(status);
			};
			electron.ipcRenderer.on(IpcChannel.Channel_StatusChange, listener);
			return () => electron.ipcRenderer.off(IpcChannel.Channel_StatusChange, listener);
		},
		getLogs: (channelId) => electron.ipcRenderer.invoke(IpcChannel.Channel_GetLogs, channelId),
		getStatuses: () => electron.ipcRenderer.invoke(IpcChannel.Channel_GetStatuses)
	},
	quoteToMainWindow: (text) => electron.ipcRenderer.invoke(IpcChannel.App_QuoteToMain, text),
	setDisableHardwareAcceleration: (isDisable) => electron.ipcRenderer.invoke(IpcChannel.App_SetDisableHardwareAcceleration, isDisable),
	setUseSystemTitleBar: (isActive) => electron.ipcRenderer.invoke(IpcChannel.App_SetUseSystemTitleBar, isActive),
	trace: {
		saveData: (topicId) => electron.ipcRenderer.invoke(IpcChannel.TRACE_SAVE_DATA, topicId),
		getData: (topicId, traceId, modelName) => electron.ipcRenderer.invoke(IpcChannel.TRACE_GET_DATA, topicId, traceId, modelName),
		saveEntity: (entity) => electron.ipcRenderer.invoke(IpcChannel.TRACE_SAVE_ENTITY, entity),
		getEntity: (spanId) => electron.ipcRenderer.invoke(IpcChannel.TRACE_GET_ENTITY, spanId),
		bindTopic: (topicId, traceId) => electron.ipcRenderer.invoke(IpcChannel.TRACE_BIND_TOPIC, topicId, traceId),
		tokenUsage: (spanId, usage) => electron.ipcRenderer.invoke(IpcChannel.TRACE_TOKEN_USAGE, spanId, usage),
		cleanHistory: (topicId, traceId, modelName) => electron.ipcRenderer.invoke(IpcChannel.TRACE_CLEAN_HISTORY, topicId, traceId, modelName),
		cleanTopic: (topicId, traceId) => electron.ipcRenderer.invoke(IpcChannel.TRACE_CLEAN_TOPIC, topicId, traceId),
		openWindow: (topicId, traceId, autoOpen, modelName) => electron.ipcRenderer.invoke(IpcChannel.TRACE_OPEN_WINDOW, topicId, traceId, autoOpen, modelName),
		setTraceWindowTitle: (title) => electron.ipcRenderer.invoke(IpcChannel.TRACE_SET_TITLE, title),
		addEndMessage: (spanId, modelName, context) => electron.ipcRenderer.invoke(IpcChannel.TRACE_ADD_END_MESSAGE, spanId, modelName, context),
		cleanLocalData: () => electron.ipcRenderer.invoke(IpcChannel.TRACE_CLEAN_LOCAL_DATA),
		addStreamMessage: (spanId, modelName, context, message) => electron.ipcRenderer.invoke(IpcChannel.TRACE_ADD_STREAM_MESSAGE, spanId, modelName, context, message)
	},
	anthropic_oauth: {
		startOAuthFlow: () => electron.ipcRenderer.invoke(IpcChannel.Anthropic_StartOAuthFlow),
		completeOAuthWithCode: (code) => electron.ipcRenderer.invoke(IpcChannel.Anthropic_CompleteOAuthWithCode, code),
		cancelOAuthFlow: () => electron.ipcRenderer.invoke(IpcChannel.Anthropic_CancelOAuthFlow),
		getAccessToken: () => electron.ipcRenderer.invoke(IpcChannel.Anthropic_GetAccessToken),
		hasCredentials: () => electron.ipcRenderer.invoke(IpcChannel.Anthropic_HasCredentials),
		clearCredentials: () => electron.ipcRenderer.invoke(IpcChannel.Anthropic_ClearCredentials)
	},
	codeTools: {
		run: (cliTool, model, directory, env, options) => electron.ipcRenderer.invoke(IpcChannel.CodeTools_Run, cliTool, model, directory, env, options),
		getAvailableTerminals: () => electron.ipcRenderer.invoke(IpcChannel.CodeTools_GetAvailableTerminals),
		setCustomTerminalPath: (terminalId, path) => electron.ipcRenderer.invoke(IpcChannel.CodeTools_SetCustomTerminalPath, terminalId, path),
		getCustomTerminalPath: (terminalId) => electron.ipcRenderer.invoke(IpcChannel.CodeTools_GetCustomTerminalPath, terminalId),
		removeCustomTerminalPath: (terminalId) => electron.ipcRenderer.invoke(IpcChannel.CodeTools_RemoveCustomTerminalPath, terminalId)
	},
	ocr: {
		ocr: (file, provider) => electron.ipcRenderer.invoke(IpcChannel.OCR_ocr, file, provider),
		listProviders: () => electron.ipcRenderer.invoke(IpcChannel.OCR_ListProviders)
	},
	cherryai: { generateSignature: (params) => electron.ipcRenderer.invoke(IpcChannel.Cherryai_GetSignature, params) },
	windowControls: {
		minimize: () => electron.ipcRenderer.invoke(IpcChannel.Windows_Minimize),
		maximize: () => electron.ipcRenderer.invoke(IpcChannel.Windows_Maximize),
		unmaximize: () => electron.ipcRenderer.invoke(IpcChannel.Windows_Unmaximize),
		close: () => electron.ipcRenderer.invoke(IpcChannel.Windows_Close),
		isMaximized: () => electron.ipcRenderer.invoke(IpcChannel.Windows_IsMaximized),
		onMaximizedChange: (callback) => {
			const channel = IpcChannel.Windows_MaximizedChanged;
			const listener = (_, isMaximized) => callback(isMaximized);
			electron.ipcRenderer.on(channel, listener);
			return () => {
				electron.ipcRenderer.removeListener(channel, listener);
			};
		}
	},
	apiServer: {
		getStatus: () => electron.ipcRenderer.invoke(IpcChannel.ApiServer_GetStatus),
		start: () => electron.ipcRenderer.invoke(IpcChannel.ApiServer_Start),
		restart: () => electron.ipcRenderer.invoke(IpcChannel.ApiServer_Restart),
		stop: () => electron.ipcRenderer.invoke(IpcChannel.ApiServer_Stop),
		onReady: (callback) => {
			const listener = () => {
				callback();
			};
			electron.ipcRenderer.on(IpcChannel.ApiServer_Ready, listener);
			return () => {
				electron.ipcRenderer.removeListener(IpcChannel.ApiServer_Ready, listener);
			};
		}
	},
	skill: {
		list: (agentId) => electron.ipcRenderer.invoke(IpcChannel.Skill_List, agentId),
		install: (options) => electron.ipcRenderer.invoke(IpcChannel.Skill_Install, options),
		uninstall: (skillId) => electron.ipcRenderer.invoke(IpcChannel.Skill_Uninstall, skillId),
		toggle: (options) => electron.ipcRenderer.invoke(IpcChannel.Skill_Toggle, options),
		installFromZip: (options) => electron.ipcRenderer.invoke(IpcChannel.Skill_InstallFromZip, options),
		installFromDirectory: (options) => electron.ipcRenderer.invoke(IpcChannel.Skill_InstallFromDirectory, options),
		readSkillFile: (skillId, filename) => electron.ipcRenderer.invoke(IpcChannel.Skill_ReadFile, skillId, filename),
		listFiles: (skillId) => electron.ipcRenderer.invoke(IpcChannel.Skill_ListFiles, skillId),
		listLocal: (workdir) => electron.ipcRenderer.invoke(IpcChannel.Skill_ListLocal, workdir)
	},
	localTransfer: {
		getState: () => electron.ipcRenderer.invoke(IpcChannel.LocalTransfer_ListServices),
		startScan: () => electron.ipcRenderer.invoke(IpcChannel.LocalTransfer_StartScan),
		stopScan: () => electron.ipcRenderer.invoke(IpcChannel.LocalTransfer_StopScan),
		connect: (payload) => electron.ipcRenderer.invoke(IpcChannel.LocalTransfer_Connect, payload),
		disconnect: () => electron.ipcRenderer.invoke(IpcChannel.LocalTransfer_Disconnect),
		onServicesUpdated: (callback) => {
			const channel = IpcChannel.LocalTransfer_ServicesUpdated;
			const listener = (_, state) => callback(state);
			electron.ipcRenderer.on(channel, listener);
			return () => {
				electron.ipcRenderer.removeListener(channel, listener);
			};
		},
		onClientEvent: (callback) => {
			const channel = IpcChannel.LocalTransfer_ClientEvent;
			const listener = (_, event) => callback(event);
			electron.ipcRenderer.on(channel, listener);
			return () => {
				electron.ipcRenderer.removeListener(channel, listener);
			};
		},
		sendFile: (filePath) => electron.ipcRenderer.invoke(IpcChannel.LocalTransfer_SendFile, { filePath }),
		cancelTransfer: () => electron.ipcRenderer.invoke(IpcChannel.LocalTransfer_CancelTransfer)
	},
	openclaw: {
		checkInstalled: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_CheckInstalled),
		install: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_Install),
		uninstall: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_Uninstall),
		startGateway: (port) => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_StartGateway, port),
		stopGateway: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_StopGateway),
		getStatus: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_GetStatus),
		checkHealth: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_CheckHealth),
		getDashboardUrl: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_GetDashboardUrl),
		syncConfig: (provider, primaryModel) => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_SyncConfig, provider, primaryModel),
		getChannels: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_GetChannels),
		checkUpdate: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_CheckUpdate),
		performUpdate: () => electron.ipcRenderer.invoke(IpcChannel.OpenClaw_PerformUpdate)
	},
	analytics: { trackTokenUsage: (data) => electron.ipcRenderer.invoke(IpcChannel.Analytics_TrackTokenUsage, data) }
};
if (process.contextIsolated) try {
	electron.contextBridge.exposeInMainWorld("electron", electronAPI);
	electron.contextBridge.exposeInMainWorld("api", api);
} catch (error) {
	console.error("[Preload]Failed to expose APIs:", error);
}
else {
	window.electron = electronAPI;
	window.api = api;
}
exports.tracedInvoke = tracedInvoke;
