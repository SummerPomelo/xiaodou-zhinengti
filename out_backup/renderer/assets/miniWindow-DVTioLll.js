import { o as __toESM } from "./chunk-0ogMdkZ1.js";
import "./init-CJDNt-Qp.js";
import { $s as require_lodash, J as dt, K as require_jsx_runtime, Mc as loggerService, ct as init_es, in as EnterOutlined_default, rc as useTranslation } from "./ImageViewer-uT4rjMQ4.js";
import { Dn as MessageContent_default, Ja as useSettings, Ls as classNames, Mr as useTimer, Tc as input_default, Uu as LanguagesEnum, in as MessageErrorBoundary_default, pc as tag_default, uc as typography_default, yu as databases_default, zr as Scrollbar_default } from "./store-Dxt9V8vr.js";
import "./dayjs.min-COl7sqdH.js";
import { t as require_react } from "./react-CGLB_Dcb.js";
import "./stylis-CGNjFRAJ.js";
import { t as FileText } from "./file-text-BS2QzK7O.js";
import { t as Languages } from "./languages-Ce_T_z_3.js";
import { t as Lightbulb } from "./lightbulb-TO8rL7Dx.js";
import { t as MessageSquare } from "./message-square-B4OH0CRG.js";
import { r as col_default, t as ModelAvatar_default } from "./ModelAvatar-BRs1-dRM.js";
import "./dist-fbvoy4Cp.js";
import "./dist-vxAjkTiP.js";
import "./purify.es-DRT0hqP1.js";
import "./markdown-it-DgypP4I4.js";
import "./react-B5uF3VOK.js";
import "./en_US-BwpEh-1M.js";
import "./LanguageSelect-BlOWtOel.js";
await init_es();
require_lodash();
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var getMessageBackground = (isBubbleStyle, isAssistantMessage) => isBubbleStyle ? isAssistantMessage ? "transparent" : "var(--chat-background-user)" : void 0;
var MessageItem = ({ message, index, total, route }) => {
	const { messageFont, fontSize } = useSettings();
	const messageContainerRef = (0, import_react.useRef)(null);
	const isAssistantMessage = message.role === "assistant";
	const messageBackground = getMessageBackground(true, isAssistantMessage);
	const maxWidth = "800px";
	if (["summary", "explanation"].includes(route) && index === total - 1) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageContainer, {
		ref: messageContainerRef,
		className: classNames({
			message: true,
			"message-assistant": isAssistantMessage,
			"message-user": !isAssistantMessage
		}),
		style: { maxWidth },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageContentContainer, {
			className: "message-content-container",
			style: {
				fontFamily: messageFont === "serif" ? "var(--font-family-serif)" : "var(--font-family)",
				fontSize,
				background: messageBackground
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageErrorBoundary_default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageContent_default, { message }) })
		})
	}, message.id);
};
var MessageContainer = dt.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  transition: background-color 0.3s ease;
  &.message-highlight {
    background-color: var(--color-primary-mute);
  }
  .menubar {
    opacity: 0;
    transition: opacity 0.2s ease;
    &.show {
      opacity: 1;
    }
  }
  &:hover {
    .menubar {
      opacity: 1;
    }
  }
`;
var MessageContentContainer = dt.div`
  max-width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;
(0, import_react.memo)(MessageItem);
dt(Scrollbar_default)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-bottom: 20px;
  overflow-x: hidden;
  min-width: 100%;
  background-color: transparent !important;
`;
dt(Scrollbar_default)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: auto;
  -webkit-app-region: none;
  background-color: transparent !important;
  max-height: 100%;
`;
loggerService.withContext("TranslateWindow");
(await databases_default.settings.get({ id: "translate:target:language" }))?.value || LanguagesEnum.zhCN;
dt.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px;
  /* padding-right: 0; */
  overflow: hidden;
  -webkit-app-region: none;
`;
dt.div`
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
`;
dt.div`
  white-space: pre-wrap;
  word-break: break-word;
  width: 100%;
`;
dt.div`
  color: var(--color-text-2);
  font-style: italic;
`;
dt.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  gap: 20px;
`;
dt(Scrollbar_default)`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;
var { Paragraph } = typography_default;
dt.div`
  padding: 12px;
  background-color: var(--color-background-opacity);
  border-radius: 8px;
  margin-bottom: 10px;
`;
dt.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: var(--color-text-secondary);
`;
dt.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    color: var(--color-text);
  }
`;
init_es();
var FeatureMenus = ({ ref, text, setRoute, onSendMessage }) => {
	const { t } = useTranslation();
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	const features = (0, import_react.useMemo)(() => [
		{
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
				size: 16,
				color: "var(--color-text)"
			}),
			title: t("miniwindow.feature.chat"),
			active: true,
			onClick: () => {
				if (text) {
					setRoute("chat");
					onSendMessage();
				}
			}
		},
		{
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {
				size: 16,
				color: "var(--color-text)"
			}),
			title: t("miniwindow.feature.translate"),
			onClick: () => text && setRoute("translate")
		},
		{
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
				size: 16,
				color: "var(--color-text)"
			}),
			title: t("miniwindow.feature.summary"),
			onClick: () => {
				if (text) {
					setRoute("summary");
					onSendMessage(t("prompts.summarize"));
				}
			}
		},
		{
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
				size: 16,
				color: "var(--color-text)"
			}),
			title: t("miniwindow.feature.explanation"),
			onClick: () => {
				if (text) {
					setRoute("explanation");
					onSendMessage(t("prompts.explanation"));
				}
			}
		}
	], [
		onSendMessage,
		setRoute,
		t,
		text
	]);
	(0, import_react.useImperativeHandle)(ref, () => ({
		nextFeature() {
			setSelectedIndex((prev) => prev < features.length - 1 ? prev + 1 : 0);
		},
		prevFeature() {
			setSelectedIndex((prev) => prev > 0 ? prev - 1 : features.length - 1);
		},
		useFeature() {
			features[selectedIndex].onClick?.();
		},
		resetSelectedIndex() {
			setSelectedIndex(0);
		}
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureList, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureListWrapper, { children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(col_default, {
		span: 24,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FeatureItem, {
			onClick: feature.onClick,
			className: index === selectedIndex ? "active" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureIcon, { children: feature.icon }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureTitle, { children: feature.title }),
				index === selectedIndex && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnterOutlined_default, {})
			]
		})
	}, index)) }) });
};
FeatureMenus.displayName = "FeatureMenus";
var FeatureList = dt(Scrollbar_default)`
  flex-shrink: 0;
  height: auto;
  -webkit-app-region: none;
`;
var FeatureListWrapper = dt.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
`;
var FeatureItem = dt.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: background-color 0s;
  background: transparent;
  border: none;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  -webkit-app-region: none;
  border-radius: 8px;
  user-select: none;

  &:hover {
    background: var(--color-background-mute);
  }

  &.active {
    background: var(--color-background-mute);
  }
`;
var FeatureIcon = dt.div`
  color: #fff;
  display: flex;
`;
var FeatureTitle = dt.h3`
  margin: 0;
  font-size: 14px;
  flex-basis: 100%;
`;
dt.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
  color: var(--color-text-secondary);
  font-size: 12px;
`;
dt.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 12px;
`;
dt.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
dt(tag_default)`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-background-soft);
    color: var(--color-primary);
  }
`;
var InputBar = ({ ref, text, assistant, placeholder, loading, handleKeyDown, handleChange }) => {
	const inputRef = (0, import_react.useRef)(null);
	const { setTimeoutTimer } = useTimer();
	if (!loading) setTimeoutTimer("focus", () => inputRef.current?.input?.focus(), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputWrapper, {
		ref,
		children: [assistant.model && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelAvatar_default, {
			model: assistant.model,
			size: 30
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			value: text,
			placeholder,
			variant: "borderless",
			autoFocus: true,
			onKeyDown: handleKeyDown,
			onChange: handleChange,
			ref: inputRef
		})]
	});
};
InputBar.displayName = "InputBar";
var InputWrapper = dt.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
var Input = dt(input_default)`
  background: none;
  border: none;
  -webkit-app-region: none;
  font-size: 18px;
`;
require_lodash();
require_lodash();
loggerService.withContext("HomeWindow");
dt.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  -webkit-app-region: ${({ $draggable }) => $draggable ? "drag" : "no-drag"};
  padding: 8px 10px;
`;
dt.main`
  display: flex;
  flex-direction: column;

  flex: 1;
  overflow: hidden;
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
