import { o as __toESM } from "./chunk-0ogMdkZ1.js";
import "./init-CJDNt-Qp.js";
import { $s as require_lodash, E as RefreshIcon_default, J as dt, K as require_jsx_runtime, Mc as loggerService, Xi as LoadingOutlined_default, Y as ft, ct as init_es, dr as tooltip_default, fi as button_default, rc as useTranslation } from "./ImageViewer-uT4rjMQ4.js";
import { Aa as pauseTrace, Dn as MessageContent_default, Du as MessageBlockStatus, Eu as AssistantMessageStatus, Fo as getDefaultTopic, Ga as upsertOneBlock, Hr as cancelThrottledBlockUpdate, Ja as useSettings, K as ConversationService, Lr as useTopicMessages, Mo as getAssistantById, Mr as useTimer, No as getDefaultAssistant, Po as getDefaultModel, Su as createMainTextBlock, Ua as updateOneBlock, V as fetchChatCompletion, Wa as upsertManyBlocks, Yr as throttledBlockUpdate, Zn as useHotkeys, aa as formatErrorMessage, at as getAssistantMessage, ca as isAbortError, ct as getUserMessage, da as ERROR_I18N_KEY_REQUEST_TIMEOUT, fa as ERROR_I18N_KEY_STREAM_PAUSED, ha as ChunkType, hi as newMessagesActions, la as isTimeoutError, n as store_default, pa as abortCompletion, wu as createThinkingBlock, xu as createErrorBlock } from "./store-Dxt9V8vr.js";
import "./dayjs.min-COl7sqdH.js";
import { t as require_react } from "./react-CGLB_Dcb.js";
import "./stylis-CGNjFRAJ.js";
import { t as ChevronDown } from "./chevron-down-CUQbDgIK.js";
import { t as CircleQuestionMark } from "./circle-question-mark-CmkFgCKW.js";
import { t as CircleX } from "./circle-x-DbMUnned.js";
import { t as Copy } from "./copy-Au3AhUdk.js";
import { t as Pause } from "./pause-DO4Msq23.js";
import "./dist-fbvoy4Cp.js";
import "./dist-vxAjkTiP.js";
import "./purify.es-DRT0hqP1.js";
import "./markdown-it-DgypP4I4.js";
import "./LanguageSelect-BlOWtOel.js";
import "./useSelectionAssistant-C7Dk8tBS.js";
await init_es();
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var CopyButton = ({ tooltip, textToCopy, label, color = "var(--color-text-2)", hoverColor = "var(--color-primary)", size = 14 }) => {
	const { t } = useTranslation();
	const handleCopy = () => {
		navigator.clipboard.writeText(textToCopy).then(() => {
			window.toast?.success(t("message.copy.success"));
		}).catch(() => {
			window.toast?.error(t("message.copy.failed"));
		});
	};
	const handleKeyDown = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleCopy();
		}
	};
	const ariaLabel = tooltip || t("common.copy");
	const button = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonContainer, {
		$color: color,
		$hoverColor: hoverColor,
		onClick: handleCopy,
		onKeyDown: handleKeyDown,
		role: "button",
		"aria-label": ariaLabel,
		tabIndex: 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
			size,
			className: "copy-icon"
		}), label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightText, {
			size,
			children: label
		})]
	});
	if (tooltip) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tooltip_default, {
		title: tooltip,
		children: button
	});
	return button;
};
var ButtonContainer = dt.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: ${(props) => props.$color};
  transition: color 0.2s;

  .copy-icon {
    color: ${(props) => props.$color};
    transition: color 0.2s;
  }

  &:hover {
    color: ${(props) => props.$hoverColor};

    .copy-icon {
      color: ${(props) => props.$hoverColor};
    }
  }
`;
var RightText = dt.span`
  font-size: ${(props) => props.size}px;
`;
var CopyButton_default = CopyButton;
var import_lodash = require_lodash();
var logger$2 = loggerService.withContext("ActionUtils");
const processMessages = async (assistant, topic, promptContent, setAskId, onStream, onFinish, onError) => {
	if (!assistant || !topic) return;
	try {
		const { message: userMessage, blocks: userBlocks } = getUserMessage({
			assistant,
			topic,
			content: promptContent
		});
		setAskId(userMessage.id);
		store_default.dispatch(newMessagesActions.addMessage({
			topicId: topic.id,
			message: userMessage
		}));
		store_default.dispatch(upsertManyBlocks(userBlocks));
		let textBlockId = null;
		let thinkingBlockId = null;
		let thinkingStartTime = null;
		let textBlockContent = "";
		const resolveThinkingDuration = (duration) => {
			if (typeof duration === "number" && Number.isFinite(duration)) return duration;
			if (thinkingStartTime !== null) return Math.max(0, performance.now() - thinkingStartTime);
			return 0;
		};
		const assistantMessage = getAssistantMessage({
			assistant,
			topic
		});
		store_default.dispatch(newMessagesActions.addMessage({
			topicId: topic.id,
			message: assistantMessage
		}));
		let finished = false;
		const newAssistant = (0, import_lodash.cloneDeep)(assistant);
		if (!newAssistant.settings) newAssistant.settings = {};
		newAssistant.settings.streamOutput = true;
		newAssistant.webSearchProviderId = void 0;
		newAssistant.mcpServers = void 0;
		newAssistant.knowledge_bases = void 0;
		const { modelMessages, uiMessages } = await ConversationService.prepareMessagesForModel([userMessage], newAssistant);
		await fetchChatCompletion({
			messages: modelMessages,
			assistant: newAssistant,
			requestOptions: {},
			uiMessages,
			onChunkReceived: (chunk) => {
				if (finished) return;
				switch (chunk.type) {
					case ChunkType.THINKING_START:
						thinkingStartTime = performance.now();
						if (thinkingBlockId) store_default.dispatch(updateOneBlock({
							id: thinkingBlockId,
							changes: { status: MessageBlockStatus.STREAMING }
						}));
						else {
							const block = createThinkingBlock(assistantMessage.id, "", { status: MessageBlockStatus.STREAMING });
							thinkingBlockId = block.id;
							store_default.dispatch(newMessagesActions.updateMessage({
								topicId: topic.id,
								messageId: assistantMessage.id,
								updates: { blockInstruction: { id: block.id } }
							}));
							store_default.dispatch(upsertOneBlock(block));
						}
						break;
					case ChunkType.THINKING_DELTA:
						if (thinkingBlockId) {
							if (thinkingStartTime === null) thinkingStartTime = performance.now();
							const thinkingDuration = resolveThinkingDuration(chunk.thinking_millsec);
							throttledBlockUpdate(thinkingBlockId, {
								content: chunk.text,
								thinking_millsec: thinkingDuration
							});
						}
						onStream();
						break;
					case ChunkType.THINKING_COMPLETE:
						if (thinkingBlockId) {
							const thinkingDuration = resolveThinkingDuration(chunk.thinking_millsec);
							cancelThrottledBlockUpdate(thinkingBlockId);
							store_default.dispatch(updateOneBlock({
								id: thinkingBlockId,
								changes: {
									content: chunk.text,
									status: MessageBlockStatus.SUCCESS,
									thinking_millsec: thinkingDuration
								}
							}));
							thinkingBlockId = null;
						}
						thinkingStartTime = null;
						break;
					case ChunkType.TEXT_START:
						if (textBlockId) store_default.dispatch(updateOneBlock({
							id: textBlockId,
							changes: { status: MessageBlockStatus.STREAMING }
						}));
						else {
							const block = createMainTextBlock(assistantMessage.id, "", { status: MessageBlockStatus.STREAMING });
							textBlockId = block.id;
							store_default.dispatch(newMessagesActions.updateMessage({
								topicId: topic.id,
								messageId: assistantMessage.id,
								updates: { blockInstruction: { id: block.id } }
							}));
							store_default.dispatch(upsertOneBlock(block));
						}
						break;
					case ChunkType.TEXT_DELTA:
						if (textBlockId) throttledBlockUpdate(textBlockId, { content: chunk.text });
						onStream();
						textBlockContent = chunk.text;
						break;
					case ChunkType.TEXT_COMPLETE:
						if (textBlockId) {
							cancelThrottledBlockUpdate(textBlockId);
							store_default.dispatch(updateOneBlock({
								id: textBlockId,
								changes: {
									content: chunk.text,
									status: MessageBlockStatus.SUCCESS
								}
							}));
							onFinish(chunk.text);
							textBlockContent = chunk.text;
							textBlockId = null;
						}
						break;
					case ChunkType.BLOCK_COMPLETE:
						store_default.dispatch(newMessagesActions.updateMessage({
							topicId: topic.id,
							messageId: assistantMessage.id,
							updates: { status: AssistantMessageStatus.SUCCESS }
						}));
						break;
					case ChunkType.LLM_RESPONSE_COMPLETE:
						finished = true;
						break;
					case ChunkType.ERROR:
						{
							const blockId = textBlockId || thinkingBlockId;
							thinkingStartTime = null;
							if (blockId) store_default.dispatch(updateOneBlock({
								id: blockId,
								changes: { status: isAbortError(chunk.error) ? MessageBlockStatus.PAUSED : MessageBlockStatus.ERROR }
							}));
							const isErrorTypeAbort = isAbortError(chunk.error);
							const isErrorTypeTimeout = isTimeoutError(chunk.error);
							const i18nKey = isErrorTypeAbort ? ERROR_I18N_KEY_STREAM_PAUSED : isErrorTypeTimeout ? ERROR_I18N_KEY_REQUEST_TIMEOUT : void 0;
							const serializableError = {
								name: chunk.error.name,
								message: chunk.error.message || formatErrorMessage(chunk.error),
								originalMessage: chunk.error.message,
								...i18nKey && { i18nKey },
								stack: chunk.error.stack,
								status: chunk.error.status || chunk.error.code,
								requestId: chunk.error.request_id
							};
							const errorBlock = createErrorBlock(assistantMessage.id, serializableError, { status: isErrorTypeAbort ? MessageBlockStatus.PAUSED : MessageBlockStatus.ERROR });
							store_default.dispatch(newMessagesActions.updateMessage({
								topicId: topic.id,
								messageId: assistantMessage.id,
								updates: { blockInstruction: { id: errorBlock.id } }
							}));
							store_default.dispatch(upsertOneBlock(errorBlock));
							store_default.dispatch(newMessagesActions.updateMessage({
								topicId: topic.id,
								messageId: assistantMessage.id,
								updates: { status: isAbortError(chunk.error) ? AssistantMessageStatus.PAUSED : AssistantMessageStatus.ERROR }
							}));
							onFinish(textBlockContent);
						}
						break;
				}
			}
		});
	} catch (err) {
		if (isAbortError(err)) return;
		onError(err instanceof Error ? err : /* @__PURE__ */ new Error("An error occurred"));
		logger$2.error("Error fetching result:", err);
	}
};
var WindowFooter = ({ content = "", loading = false, onPause = void 0, onRegenerate = void 0 }) => {
	const { t } = useTranslation();
	const [isWindowFocus, setIsWindowFocus] = (0, import_react.useState)(true);
	const [isCopyHovered, setIsCopyHovered] = (0, import_react.useState)(false);
	const [isEscHovered, setIsEscHovered] = (0, import_react.useState)(false);
	const [isRegenerateHovered, setIsRegenerateHovered] = (0, import_react.useState)(false);
	const [isContainerHovered, setIsContainerHovered] = (0, import_react.useState)(false);
	const [isShowMe, setIsShowMe] = (0, import_react.useState)(true);
	const hideTimerRef = (0, import_react.useRef)(null);
	const { setTimeoutTimer } = useTimer();
	(0, import_react.useEffect)(() => {
		window.addEventListener("focus", handleWindowFocus);
		window.addEventListener("blur", handleWindowBlur);
		return () => {
			window.removeEventListener("focus", handleWindowFocus);
			window.removeEventListener("blur", handleWindowBlur);
			if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		hideTimerRef.current = setTimeout(() => {
			setIsShowMe(false);
			hideTimerRef.current = null;
		}, 3e3);
		return () => {
			if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
		};
	}, []);
	const showMePeriod = () => {
		if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
		setIsShowMe(true);
		hideTimerRef.current = setTimeout(() => {
			setIsShowMe(false);
			hideTimerRef.current = null;
		}, 2e3);
	};
	useHotkeys("c", () => {
		showMePeriod();
		handleCopy();
	});
	useHotkeys("r", () => {
		showMePeriod();
		handleRegenerate();
	});
	useHotkeys("esc", () => {
		showMePeriod();
		handleEsc();
	});
	const handleEsc = () => {
		setIsEscHovered(true);
		setTimeoutTimer("handleEsc", () => {
			setIsEscHovered(false);
		}, 200);
		if (loading && onPause) onPause();
		else window.api.selection.closeActionWindow();
	};
	const handleRegenerate = () => {
		setIsRegenerateHovered(true);
		setTimeoutTimer("handleRegenerate_1", () => {
			setIsRegenerateHovered(false);
		}, 200);
		if (loading && onPause) onPause();
		if (onRegenerate) setTimeoutTimer("handleRegenerate_2", () => {
			onRegenerate();
		}, 200);
	};
	const handleCopy = () => {
		if (!content || loading) return;
		navigator.clipboard.writeText(content).then(() => {
			window.toast.success(t("message.copy.success"));
			setIsCopyHovered(true);
			setTimeoutTimer("handleCopy", () => {
				setIsCopyHovered(false);
			}, 200);
		}).catch(() => {
			window.toast.error(t("message.copy.failed"));
		});
	};
	const handleWindowFocus = () => {
		setIsWindowFocus(true);
	};
	const handleWindowBlur = () => {
		setIsWindowFocus(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container$2, {
		onMouseEnter: () => setIsContainerHovered(true),
		onMouseLeave: () => setIsContainerHovered(false),
		$isHovered: isContainerHovered,
		$showInitially: isShowMe,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OpButtonWrapper, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpButton, {
				onClick: handleEsc,
				$isWindowFocus: isWindowFocus,
				"data-hovered": isEscHovered,
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LoadingIconWrapper, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
					size: 14,
					className: "btn-icon loading-icon",
					style: {
						position: "absolute",
						left: 1,
						top: 1
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingOutlined_default, {
					style: {
						fontSize: 16,
						position: "absolute",
						left: 0,
						top: 0
					},
					className: "btn-icon loading-icon",
					spin: true
				})] }), t("selection.action.window.esc_stop")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
					size: 14,
					className: "btn-icon"
				}), t("selection.action.window.esc_close")] })
			}),
			onRegenerate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OpButton, {
				onClick: handleRegenerate,
				$isWindowFocus: isWindowFocus,
				"data-hovered": isRegenerateHovered,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshIcon_default, {
					size: 14,
					className: "btn-icon"
				}), t("selection.action.window.r_regenerate")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OpButton, {
				onClick: handleCopy,
				$isWindowFocus: isWindowFocus && !!content,
				"data-hovered": isCopyHovered,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					size: 14,
					className: "btn-icon"
				}), t("selection.action.window.c_copy")]
			})
		] })
	});
};
var Container$2 = dt.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  min-width: min-content;
  width: calc(100% - 16px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  height: 32px;
  backdrop-filter: blur(8px);
  border-radius: 8px;
  opacity: ${(props) => props.$showInitially ? 1 : 0};
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;
var OpButtonWrapper = dt.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 12px;
  gap: 6px;
`;
var OpButton = dt.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 0 8px;
  border-radius: 4px;
  background-color: var(--color-background-mute);
  color: var(--color-text-secondary);
  height: 22px;
  opacity: ${(props) => props.$isWindowFocus ? 1 : .2};
  transition: opacity 0.3s ease;
  transition: color 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;

  .btn-icon {
    color: var(--color-text-secondary);
  }

  .loading-icon {
    color: var(--color-error);
  }

  &:hover,
  &[data-hovered='true'] {
    color: var(--color-primary) !important;

    .btn-icon {
      color: var(--color-primary) !important;
      transition: color 0.2s ease;
    }
  }
`;
var LoadingIconWrapper = dt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 16px;
  height: 16px;
`;
var WindowFooter_default = WindowFooter;
await init_es();
var logger$1 = loggerService.withContext("ActionGeneral");
import_react.memo(({ action, scrollToBottom }) => {
	const { t } = useTranslation();
	const { language } = useSettings();
	const [error, setError] = (0, import_react.useState)(null);
	const [showOriginal, setShowOriginal] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("preparing");
	const [contentToCopy, setContentToCopy] = (0, import_react.useState)("");
	const initialized = (0, import_react.useRef)(false);
	const assistantRef = (0, import_react.useRef)(null);
	const topicRef = (0, import_react.useRef)(null);
	const promptContentRef = (0, import_react.useRef)("");
	const askId = (0, import_react.useRef)("");
	(0, import_react.useEffect)(() => {
		if (initialized.current) return;
		initialized.current = true;
		const currentAssistant = action.assistantId ? getAssistantById(action.assistantId) || getDefaultAssistant() : getDefaultAssistant();
		assistantRef.current = {
			...currentAssistant,
			model: currentAssistant.model || getDefaultModel()
		};
		topicRef.current = getDefaultTopic(currentAssistant.id);
		let userContent = "";
		switch (action.id) {
			case "summary":
				userContent = t("selection.action.prompt.summary", { language }) + action.selectedText;
				break;
			case "explain":
				userContent = t("selection.action.prompt.explain", { language }) + action.selectedText;
				break;
			case "refine":
				userContent = t("selection.action.prompt.refine", { text: action.selectedText ?? "" });
				break;
			default:
				if (!action.prompt) {
					userContent = action.selectedText || "";
					break;
				}
				if (action.prompt.includes("{{text}}")) {
					userContent = action.prompt.replaceAll("{{text}}", action.selectedText);
					break;
				}
				userContent = action.prompt + "\n\n" + action.selectedText;
		}
		promptContentRef.current = userContent;
	}, [
		action,
		language,
		t
	]);
	const fetchResult = (0, import_react.useCallback)(() => {
		if (!initialized.current) return;
		setStatus("preparing");
		const setAskId = (id) => {
			askId.current = id;
		};
		const onStream = () => {
			setStatus("streaming");
			scrollToBottom?.();
		};
		const onFinish = (content) => {
			setStatus("finished");
			setContentToCopy(content);
		};
		const onError = (error$1) => {
			setStatus("finished");
			setError(error$1.message);
		};
		if (!assistantRef.current || !topicRef.current) return;
		logger$1.debug("Before peocess message", { assistant: assistantRef.current });
		processMessages(assistantRef.current, topicRef.current, promptContentRef.current, setAskId, onStream, onFinish, onError);
	}, [scrollToBottom]);
	(0, import_react.useEffect)(() => {
		fetchResult();
	}, [fetchResult]);
	const allMessages = useTopicMessages(topicRef.current?.id || "");
	const currentAssistantMessage = (0, import_react.useMemo)(() => {
		const assistantMessages = allMessages.filter((message) => message.role === "assistant");
		if (assistantMessages.length === 0) return null;
		return assistantMessages[assistantMessages.length - 1];
	}, [allMessages]);
	(0, import_react.useEffect)(() => {
		switch (currentAssistantMessage?.status) {
			case AssistantMessageStatus.PROCESSING:
			case AssistantMessageStatus.PENDING:
			case AssistantMessageStatus.SEARCHING:
				setStatus("streaming");
				break;
			case AssistantMessageStatus.PAUSED:
			case AssistantMessageStatus.ERROR:
			case AssistantMessageStatus.SUCCESS:
				setStatus("finished");
				break;
			case void 0: break;
			default: logger$1.warn("Unexpected assistant message status:", { status: currentAssistantMessage?.status });
		}
	}, [currentAssistantMessage?.status]);
	const isPreparing = status === "preparing";
	const isStreaming = status === "streaming";
	const handlePause = () => {
		if (askId.current) abortCompletion(askId.current);
		if (topicRef.current?.id) pauseTrace(topicRef.current.id);
	};
	const handleRegenerate = () => {
		setContentToCopy("");
		fetchResult();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container$1, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContainer$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OriginalHeader$1, {
				onClick: () => setShowOriginal(!showOriginal),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: showOriginal ? t("selection.action.window.original_hide") : t("selection.action.window.original_show") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					size: 14,
					className: showOriginal ? "expanded" : ""
				})]
			}) }),
			showOriginal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OriginalContent$1, { children: [action.selectedText, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OriginalContentCopyWrapper$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton_default, {
				textToCopy: action.selectedText,
				tooltip: t("selection.action.window.original_copy"),
				size: 12
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Result$1, { children: [isPreparing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingOutlined_default, {
				style: { fontSize: 16 },
				spin: true
			}), !isPreparing && currentAssistantMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageContent_default, { message: currentAssistantMessage }, currentAssistantMessage.id)] }),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorMsg$1, { children: error })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterPadding$1, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowFooter_default, {
			loading: isStreaming,
			onPause: handlePause,
			onRegenerate: handleRegenerate,
			content: contentToCopy
		})
	] });
});
var Container$1 = dt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
var Result$1 = dt.div`
  margin-top: 4px;
  width: 100%;
`;
var MenuContainer$1 = dt.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
var OriginalHeader$1 = dt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--color-text-secondary);
  font-size: 12px;

  &:hover {
    color: var(--color-primary);
  }

  .lucide {
    transition: transform 0.2s ease;
    &.expanded {
      transform: rotate(180deg);
    }
  }
`;
var OriginalContent$1 = dt.div`
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 12px;
  background-color: var(--color-background-soft);
  border-radius: 4px;
  color: var(--color-text-secondary);
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-word;
  width: 100%;
`;
var OriginalContentCopyWrapper$1 = dt.div`
  display: flex;
  justify-content: flex-end;
`;
var FooterPadding$1 = dt.div`
  min-height: 12px;
`;
var ErrorMsg$1 = dt.div`
  color: var(--color-error);
  background: rgba(255, 0, 0, 0.15);
  border: 1px solid var(--color-error);
  padding: 8px 12px;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 13px;
  word-break: break-all;
`;
await init_es();
loggerService.withContext("ActionTranslate");
dt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
`;
dt.div`
  margin-top: 16px;
  white-space: pre-wrap;
  word-break: break-word;
  width: 100%;
`;
dt.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
dt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--color-text-secondary);
  font-size: 12px;
  padding: 4px 0;
  white-space: nowrap;

  &:hover {
    color: var(--color-primary);
  }

  .lucide {
    transition: transform 0.2s ease;
    &.expanded {
      transform: rotate(180deg);
    }
  }
`;
dt.div`
  margin-top: 8px;
  padding: 8px;
  background-color: var(--color-background-soft);
  border-radius: 4px;
  color: var(--color-text-secondary);
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-word;
  width: 100%;
`;
dt.div`
  display: flex;
  justify-content: flex-end;
`;
dt.div`
  min-height: 12px;
`;
dt.div`
  color: var(--color-error);
  background: rgba(255, 0, 0, 0.15);
  border: 1px solid var(--color-error);
  padding: 8px 12px;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 13px;
  word-break: break-all;
`;
dt.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 1;
  min-width: 0;
`;
dt.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background-color: var(--color-background-soft);
  border-radius: 4px;
  font-size: 12px;
  color: var(--color-text-secondary);
  white-space: nowrap;
  flex-shrink: 0;
`;
dt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  color: var(--color-text-3);
  flex-shrink: 0;

  &:hover {
    background-color: var(--color-background-soft);
    color: var(--color-text);
  }
`;
dt.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 4px 0;
  min-width: 180px;
  cursor: default;
`;
dt.span`
  font-size: 12px;
  color: var(--color-text-secondary);
`;
dt(CircleQuestionMark)`
  cursor: pointer;
  color: var(--color-text-3);
  flex-shrink: 0;
`;
ft`
  .settings-dropdown-menu {
    .ant-dropdown-menu-item {
      cursor: default !important;
      &:hover {
        background-color: transparent !important;
      }
    }
  }
`;
dt.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  margin: 2px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  box-shadow: 0px 0px 2px var(--color-text-3);
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  opacity: ${(props) => props.$opacity};
`;
dt.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 32px;
  padding: 0 8px;
  background-color: ${(props) => props.$isWindowFocus ? "var(--color-background-mute)" : "var(--color-background-soft)"};
  transition: background-color 0.3s ease;
  -webkit-app-region: drag;
`;
dt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
`;
dt.div`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 400;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text-1);
`;
dt.div`
  display: flex;
  gap: 8px;
  -webkit-app-region: no-drag;
  position: relative;

  .lucide {
    &.pinned {
      color: var(--color-primary);
    }
  }
`;
dt(button_default)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: 4px;
  transition: all 0.2s;
  color: var(--color-icon);

  .anticon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    stroke-width: 2;
    transition: transform 0.2s ease;
  }

  &.pinned {
    svg {
      transform: rotate(45deg);
    }

    &:hover {
      background-color: var(--color-primary-mute) !important;
    }
  }

  &.close {
    &:hover {
      background-color: var(--color-error) !important;
      color: var(--color-white) !important;
    }
  }

  &.active {
    background-color: var(--color-primary-mute) !important;
    color: var(--color-primary) !important;
  }

  &:hover {
    background-color: var(--color-hover) !important;
    color: var(--color-icon-white) !important;
  }
`;
dt.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
dt.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  overflow: auto;
  font-size: 14px;
  -webkit-app-region: none;
  user-select: text;
  /* width: 100%; */
  max-width: 1280px;
`;
dt.div`
  position: absolute;
  left: 42px;
  top: 100%;
  margin-top: 8px;
  background-color: var(--color-background-mute);
  padding: 16px 8px 12px 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  height: 120px;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  z-index: 10000;
  opacity: 1 !important;

  .ant-slider {
    height: 100%;
    margin: 0;
  }

  .ant-slider-rail {
    background-color: var(--color-border);
  }

  .ant-slider-track {
    background-color: var(--color-primary);
  }

  .ant-slider-handle {
    border-color: var(--color-primary);

    &:hover {
      border-color: var(--color-primary);
    }

    &.ant-slider-handle-active {
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px var(--color-primary-mute);
    }
  }
`;
