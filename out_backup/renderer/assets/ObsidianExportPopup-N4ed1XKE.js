import { o as __toESM } from "./chunk-0ogMdkZ1.js";
import { $r as ListContext_default, Ao as init_useLayoutEffect, At as init_MinusSquareOutlined, Ba as useMergedState, Bi as getTransitionName, Br as FormContext, Bs as toArray$1, Ca as genSubStyleComponent, Cs as supportRef, Do as init_es, Ea as genFocusStyle, Ga as SizeContext_default, Gr as VariantContext, Gs as require_classnames, Ha as useSafeState, Hn as init_QuestionCircleOutlined, Hr as FormItemPrefixContext, Ia as merge, Ii as init_isVisible, Ja as ConfigContext, Ji as useZIndex, Jo as _toConsumableArray, Jr as init_es$2, K as require_jsx_runtime, Ka as DisabledContextProvider, Ko as init_raf, Kr as es_default$2, Li as isVisible_default, Mc as loggerService, Mi as useCompactItemContext, Mr as PurePanel_default, Ni as useSize_default, No as unit, Oa as resetComponent, Oo as Keyframes_default, Pi as wave_default, Qr as Field_default, Qt as init_FileOutlined, Ra as init_es$3, Ri as init_omit, Sa as genStyleHooks, So as get, Ss as init_ref, St as init_PlusSquareOutlined, Ta as genFocusOutline, Ur as FormProvider, Va as init_useState, Vi as motion_default, Vn as QuestionCircleOutlined_default, Vr as FormItemInputContext, Wr as NoStyleItemContext, Xa as useComponentConfig, Xi as LoadingOutlined_default, Yo as init_toConsumableArray, Yr as useWatch_default, Zi as init_LoadingOutlined, Zr as List_default, Zt as FileOutlined_default, _a as es_default$3, _o as en_US_default, ba as CSSMotionList_default, bn as CaretDownFilled_default, bo as devUseWarning, ca as init_ExclamationCircleFilled, da as CloseCircleFilled_default, do as init_es$4, dr as tooltip_default, ea as useCSSVarCls_default, ei as FieldContext_default, fa as init_CloseCircleFilled, fo as FastColor, gi as zoomIn, ho as useLocale_default, ja as useToken, jo as useLayoutEffect_default, kt as MinusSquareOutlined_default, ma as init_CheckCircleFilled, pa as CheckCircleFilled_default, qa as DisabledContext_default, qo as raf_default, sa as ExclamationCircleFilled_default, ta as cloneElement, tc as i18n_default, wi as collapse_default, xn as init_CaretDownFilled, xo as set, xs as getNodeRef, xt as PlusSquareOutlined_default, ya as init_es$1, yo as validateMessagesContext_default, ys as composeRef, za as init_useMergedState, zi as omit, zs as init_toArray } from "./ImageViewer-uT4rjMQ4.js";
import { Cl as mergedBuiltinPlacements_default, Ct as messageToMarkdownWithReasoning, Dl as getMergedStatus, El as empty_default, Gc as col_default, Ol as getStatusClassNames, Rl as alert_default, Sc as spin_default, Sl as style_default, St as messageToMarkdown, Tc as input_default, Tl as defaultRenderEmpty_default, Tt as topicToMarkdown, Wc as row_default, bl as usePopupRender_default, cl as useForm, dl as toArray, gt as exportMarkdownToObsidian, ll as getFieldId, n as store_default, qc as getStyle, qn as TopView, ul as getStatus, vl as select_default, wl as useVariants_default, wt as messagesToMarkdown, xl as useIcons, yc as modal_default, yl as useShowArrow } from "./store-Dxt9V8vr.js";
import { t as require_react } from "./react-CGLB_Dcb.js";
import { a as SHOW_CHILD, f as init_es$5, i as SHOW_ALL, o as SHOW_PARENT, r as init_es$6, s as TreeNode_default, t as es_default, u as es_default$1 } from "./es-5oUr_xfL.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function convertToTooltipProps(tooltip) {
	if (tooltip === void 0 || tooltip === null) return null;
	if (typeof tooltip === "object" && !/* @__PURE__ */ (0, import_react.isValidElement)(tooltip)) return tooltip;
	return { title: tooltip };
}
var convertToTooltipProps_default = convertToTooltipProps;
function useDebounce(value) {
	const [cacheValue, setCacheValue] = import_react.useState(value);
	import_react.useEffect(() => {
		const timeout = setTimeout(() => {
			setCacheValue(value);
		}, value.length ? 0 : 10);
		return () => {
			clearTimeout(timeout);
		};
	}, [value]);
	return cacheValue;
}
var genFormValidateMotionStyle = (token) => {
	const { componentCls } = token;
	const helpCls = `${componentCls}-show-help`;
	const helpItemCls = `${componentCls}-show-help-item`;
	return { [helpCls]: {
		transition: `opacity ${token.motionDurationFast} ${token.motionEaseInOut}`,
		"&-appear, &-enter": {
			opacity: 0,
			"&-active": { opacity: 1 }
		},
		"&-leave": {
			opacity: 1,
			"&-active": { opacity: 0 }
		},
		[helpItemCls]: {
			overflow: "hidden",
			transition: `height ${token.motionDurationFast} ${token.motionEaseInOut},
                     opacity ${token.motionDurationFast} ${token.motionEaseInOut},
                     transform ${token.motionDurationFast} ${token.motionEaseInOut} !important`,
			[`&${helpItemCls}-appear, &${helpItemCls}-enter`]: {
				transform: `translateY(-5px)`,
				opacity: 0,
				"&-active": {
					transform: "translateY(0)",
					opacity: 1
				}
			},
			[`&${helpItemCls}-leave-active`]: { transform: `translateY(-5px)` }
		}
	} };
};
var explain_default = genFormValidateMotionStyle;
init_es();
var resetForm = (token) => ({
	legend: {
		display: "block",
		width: "100%",
		marginBottom: token.marginLG,
		padding: 0,
		color: token.colorTextDescription,
		fontSize: token.fontSizeLG,
		lineHeight: "inherit",
		border: 0,
		borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
	},
	"input[type=\"search\"]": { boxSizing: "border-box" },
	"input[type=\"radio\"], input[type=\"checkbox\"]": { lineHeight: "normal" },
	"input[type=\"file\"]": { display: "block" },
	"input[type=\"range\"]": {
		display: "block",
		width: "100%"
	},
	"select[multiple], select[size]": { height: "auto" },
	[`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]: {
		outline: 0,
		boxShadow: `0 0 0 ${unit(token.controlOutlineWidth)} ${token.controlOutline}`
	},
	output: {
		display: "block",
		paddingTop: 15,
		color: token.colorText,
		fontSize: token.fontSize,
		lineHeight: token.lineHeight
	}
});
var genFormSize = (token, height) => {
	const { formItemCls } = token;
	return { [formItemCls]: {
		[`${formItemCls}-label > label`]: { height },
		[`${formItemCls}-control-input`]: { minHeight: height }
	} };
};
var genFormStyle = (token) => {
	const { componentCls } = token;
	return { [token.componentCls]: Object.assign(Object.assign(Object.assign({}, resetComponent(token)), resetForm(token)), {
		[`${componentCls}-text`]: {
			display: "inline-block",
			paddingInlineEnd: token.paddingSM
		},
		"&-small": Object.assign({}, genFormSize(token, token.controlHeightSM)),
		"&-large": Object.assign({}, genFormSize(token, token.controlHeightLG))
	}) };
};
var genFormItemStyle = (token) => {
	const { formItemCls, iconCls, rootPrefixCls, antCls, labelRequiredMarkColor, labelColor, labelFontSize, labelHeight, labelColonMarginInlineStart, labelColonMarginInlineEnd, itemMarginBottom } = token;
	return { [formItemCls]: Object.assign(Object.assign({}, resetComponent(token)), {
		marginBottom: itemMarginBottom,
		verticalAlign: "top",
		"&-with-help": { transition: "none" },
		[`&-hidden,
        &-hidden${antCls}-row`]: { display: "none" },
		"&-has-warning": { [`${formItemCls}-split`]: { color: token.colorError } },
		"&-has-error": { [`${formItemCls}-split`]: { color: token.colorWarning } },
		[`${formItemCls}-label`]: {
			flexGrow: 0,
			overflow: "hidden",
			whiteSpace: "nowrap",
			textAlign: "end",
			verticalAlign: "middle",
			"&-left": { textAlign: "start" },
			"&-wrap": {
				overflow: "unset",
				lineHeight: token.lineHeight,
				whiteSpace: "unset",
				"> label": {
					verticalAlign: "middle",
					textWrap: "balance"
				}
			},
			"> label": {
				position: "relative",
				display: "inline-flex",
				alignItems: "center",
				maxWidth: "100%",
				height: labelHeight,
				color: labelColor,
				fontSize: labelFontSize,
				[`> ${iconCls}`]: {
					fontSize: token.fontSize,
					verticalAlign: "top"
				},
				[`&${formItemCls}-required`]: {
					"&::before": {
						display: "inline-block",
						marginInlineEnd: token.marginXXS,
						color: labelRequiredMarkColor,
						fontSize: token.fontSize,
						fontFamily: "SimSun, sans-serif",
						lineHeight: 1,
						content: "\"*\""
					},
					[`&${formItemCls}-required-mark-hidden, &${formItemCls}-required-mark-optional`]: { "&::before": { display: "none" } }
				},
				[`${formItemCls}-optional`]: {
					display: "inline-block",
					marginInlineStart: token.marginXXS,
					color: token.colorTextDescription,
					[`&${formItemCls}-required-mark-hidden`]: { display: "none" }
				},
				[`${formItemCls}-tooltip`]: {
					color: token.colorTextDescription,
					cursor: "help",
					writingMode: "horizontal-tb",
					marginInlineStart: token.marginXXS
				},
				"&::after": {
					content: "\":\"",
					position: "relative",
					marginBlock: 0,
					marginInlineStart: labelColonMarginInlineStart,
					marginInlineEnd: labelColonMarginInlineEnd
				},
				[`&${formItemCls}-no-colon::after`]: { content: "\"\\a0\"" }
			}
		},
		[`${formItemCls}-control`]: {
			["--ant-display"]: "flex",
			flexDirection: "column",
			flexGrow: 1,
			[`&:first-child:not([class^="'${rootPrefixCls}-col-'"]):not([class*="' ${rootPrefixCls}-col-'"])`]: { width: "100%" },
			"&-input": {
				position: "relative",
				display: "flex",
				alignItems: "center",
				minHeight: token.controlHeight,
				"&-content": {
					flex: "auto",
					maxWidth: "100%",
					[`&:has(> ${antCls}-switch:only-child, > ${antCls}-rate:only-child)`]: {
						display: "flex",
						alignItems: "center"
					}
				}
			}
		},
		[formItemCls]: {
			"&-additional": {
				display: "flex",
				flexDirection: "column"
			},
			"&-explain, &-extra": {
				clear: "both",
				color: token.colorTextDescription,
				fontSize: token.fontSize,
				lineHeight: token.lineHeight
			},
			"&-explain-connected": { width: "100%" },
			"&-extra": {
				minHeight: token.controlHeightSM,
				transition: `color ${token.motionDurationMid} ${token.motionEaseOut}`
			},
			"&-explain": {
				"&-error": { color: token.colorError },
				"&-warning": { color: token.colorWarning }
			}
		},
		[`&-with-help ${formItemCls}-explain`]: {
			height: "auto",
			opacity: 1
		},
		[`${formItemCls}-feedback-icon`]: {
			fontSize: token.fontSize,
			textAlign: "center",
			visibility: "visible",
			animationName: zoomIn,
			animationDuration: token.motionDurationMid,
			animationTimingFunction: token.motionEaseOutBack,
			pointerEvents: "none",
			"&-success": { color: token.colorSuccess },
			"&-error": { color: token.colorError },
			"&-warning": { color: token.colorWarning },
			"&-validating": { color: token.colorPrimary }
		}
	}) };
};
var makeVerticalLayoutLabel = (token) => ({
	padding: token.verticalLabelPadding,
	margin: token.verticalLabelMargin,
	whiteSpace: "initial",
	textAlign: "start",
	"> label": {
		margin: 0,
		"&::after": { visibility: "hidden" }
	}
});
var genHorizontalStyle = (token) => {
	const { antCls, formItemCls } = token;
	return { [`${formItemCls}-horizontal`]: {
		[`${formItemCls}-label`]: { flexGrow: 0 },
		[`${formItemCls}-control`]: {
			flex: "1 1 0",
			minWidth: 0
		},
		[`${formItemCls}-label[class$='-24'], ${formItemCls}-label[class*='-24 ']`]: { [`& + ${formItemCls}-control`]: { minWidth: "unset" } },
		[`${antCls}-col-24${formItemCls}-label,
        ${antCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
	} };
};
var genInlineStyle = (token) => {
	const { componentCls, formItemCls, inlineItemMarginBottom } = token;
	return { [`${componentCls}-inline`]: {
		display: "flex",
		flexWrap: "wrap",
		[`${formItemCls}-inline`]: {
			flex: "none",
			marginInlineEnd: token.margin,
			marginBottom: inlineItemMarginBottom,
			"&-row": { flexWrap: "nowrap" },
			[`> ${formItemCls}-label,
        > ${formItemCls}-control`]: {
				display: "inline-block",
				verticalAlign: "top"
			},
			[`> ${formItemCls}-label`]: { flex: "none" },
			[`${componentCls}-text`]: { display: "inline-block" },
			[`${formItemCls}-has-feedback`]: { display: "inline-block" }
		}
	} };
};
var makeVerticalLayout = (token) => {
	const { componentCls, formItemCls, rootPrefixCls } = token;
	return {
		[`${formItemCls} ${formItemCls}-label`]: makeVerticalLayoutLabel(token),
		[`${componentCls}:not(${componentCls}-inline)`]: { [formItemCls]: {
			flexWrap: "wrap",
			[`${formItemCls}-label, ${formItemCls}-control`]: { [`&:not([class*=" ${rootPrefixCls}-col-xs"])`]: {
				flex: "0 0 100%",
				maxWidth: "100%"
			} }
		} }
	};
};
var genVerticalStyle = (token) => {
	const { componentCls, formItemCls, antCls } = token;
	return {
		[`${formItemCls}-vertical`]: {
			[`${formItemCls}-row`]: { flexDirection: "column" },
			[`${formItemCls}-label > label`]: { height: "auto" },
			[`${formItemCls}-control`]: { width: "100%" },
			[`${formItemCls}-label,
        ${antCls}-col-24${formItemCls}-label,
        ${antCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
		},
		[`@media (max-width: ${unit(token.screenXSMax)})`]: [makeVerticalLayout(token), { [componentCls]: { [`${formItemCls}:not(${formItemCls}-horizontal)`]: { [`${antCls}-col-xs-24${formItemCls}-label`]: makeVerticalLayoutLabel(token) } } }],
		[`@media (max-width: ${unit(token.screenSMMax)})`]: { [componentCls]: { [`${formItemCls}:not(${formItemCls}-horizontal)`]: { [`${antCls}-col-sm-24${formItemCls}-label`]: makeVerticalLayoutLabel(token) } } },
		[`@media (max-width: ${unit(token.screenMDMax)})`]: { [componentCls]: { [`${formItemCls}:not(${formItemCls}-horizontal)`]: { [`${antCls}-col-md-24${formItemCls}-label`]: makeVerticalLayoutLabel(token) } } },
		[`@media (max-width: ${unit(token.screenLGMax)})`]: { [componentCls]: { [`${formItemCls}:not(${formItemCls}-horizontal)`]: { [`${antCls}-col-lg-24${formItemCls}-label`]: makeVerticalLayoutLabel(token) } } }
	};
};
const prepareComponentToken$2 = (token) => ({
	labelRequiredMarkColor: token.colorError,
	labelColor: token.colorTextHeading,
	labelFontSize: token.fontSize,
	labelHeight: token.controlHeight,
	labelColonMarginInlineStart: token.marginXXS / 2,
	labelColonMarginInlineEnd: token.marginXS,
	itemMarginBottom: token.marginLG,
	verticalLabelPadding: `0 0 ${token.paddingXS}px`,
	verticalLabelMargin: 0,
	inlineItemMarginBottom: 0
});
const prepareToken = (token, rootPrefixCls) => {
	return merge(token, {
		formItemCls: `${token.componentCls}-item`,
		rootPrefixCls
	});
};
var style_default$3 = genStyleHooks("Form", (token, { rootPrefixCls }) => {
	const formToken = prepareToken(token, rootPrefixCls);
	return [
		genFormStyle(formToken),
		genFormItemStyle(formToken),
		explain_default(formToken),
		genHorizontalStyle(formToken),
		genInlineStyle(formToken),
		genVerticalStyle(formToken),
		collapse_default(formToken),
		zoomIn
	];
}, prepareComponentToken$2, { order: -1e3 });
init_toConsumableArray();
var import_classnames$9 = /* @__PURE__ */ __toESM(require_classnames());
init_es$1();
var EMPTY_LIST = [];
function toErrorEntity(error, prefix, errorStatus, index = 0) {
	return {
		key: typeof error === "string" ? error : `${prefix}-${index}`,
		error,
		errorStatus
	};
}
var ErrorList = ({ help, helpStatus, errors = EMPTY_LIST, warnings = EMPTY_LIST, className: rootClassName, fieldId, onVisibleChanged }) => {
	const { prefixCls } = import_react.useContext(FormItemPrefixContext);
	const baseClassName = `${prefixCls}-item-explain`;
	const rootCls = useCSSVarCls_default(prefixCls);
	const [wrapCSSVar, hashId, cssVarCls] = style_default$3(prefixCls, rootCls);
	const collapseMotion = import_react.useMemo(() => motion_default(prefixCls), [prefixCls]);
	const debounceErrors = useDebounce(errors);
	const debounceWarnings = useDebounce(warnings);
	const fullKeyList = import_react.useMemo(() => {
		if (help !== void 0 && help !== null) return [toErrorEntity(help, "help", helpStatus)];
		return [].concat(_toConsumableArray(debounceErrors.map((error, index) => toErrorEntity(error, "error", "error", index))), _toConsumableArray(debounceWarnings.map((warning, index) => toErrorEntity(warning, "warning", "warning", index))));
	}, [
		help,
		helpStatus,
		debounceErrors,
		debounceWarnings
	]);
	const filledKeyFullKeyList = import_react.useMemo(() => {
		const keysCount = {};
		fullKeyList.forEach(({ key }) => {
			keysCount[key] = (keysCount[key] || 0) + 1;
		});
		return fullKeyList.map((entity, index) => Object.assign(Object.assign({}, entity), { key: keysCount[entity.key] > 1 ? `${entity.key}-fallback-${index}` : entity.key }));
	}, [fullKeyList]);
	const helpProps = {};
	if (fieldId) helpProps.id = `${fieldId}_help`;
	return wrapCSSVar(/* @__PURE__ */ import_react.createElement(es_default$3, {
		motionDeadline: collapseMotion.motionDeadline,
		motionName: `${prefixCls}-show-help`,
		visible: !!filledKeyFullKeyList.length,
		onVisibleChanged
	}, (holderProps) => {
		const { className: holderClassName, style: holderStyle } = holderProps;
		return /* @__PURE__ */ import_react.createElement("div", Object.assign({}, helpProps, {
			className: (0, import_classnames$9.default)(baseClassName, holderClassName, cssVarCls, rootCls, rootClassName, hashId),
			style: holderStyle
		}), /* @__PURE__ */ import_react.createElement(CSSMotionList_default, Object.assign({ keys: filledKeyFullKeyList }, motion_default(prefixCls), {
			motionName: `${prefixCls}-show-help-item`,
			component: false
		}), (itemProps) => {
			const { key, error, errorStatus, className: itemClassName, style: itemStyle } = itemProps;
			return /* @__PURE__ */ import_react.createElement("div", {
				key,
				className: (0, import_classnames$9.default)(itemClassName, { [`${baseClassName}-${errorStatus}`]: errorStatus }),
				style: itemStyle
			}, error);
		}));
	}));
};
var ErrorList_default = ErrorList;
var import_classnames$8 = /* @__PURE__ */ __toESM(require_classnames());
init_es$2();
var __rest$6 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var InternalForm = (props, ref) => {
	const contextDisabled = import_react.useContext(DisabledContext_default);
	const { getPrefixCls, direction, requiredMark: contextRequiredMark, colon: contextColon, scrollToFirstError: contextScrollToFirstError, className: contextClassName, style: contextStyle } = useComponentConfig("form");
	const { prefixCls: customizePrefixCls, className, rootClassName, size, disabled = contextDisabled, form, colon, labelAlign, labelWrap, labelCol, wrapperCol, hideRequiredMark, layout = "horizontal", scrollToFirstError, requiredMark, onFinishFailed, name, style, feedbackIcons, variant } = props, restFormProps = __rest$6(props, [
		"prefixCls",
		"className",
		"rootClassName",
		"size",
		"disabled",
		"form",
		"colon",
		"labelAlign",
		"labelWrap",
		"labelCol",
		"wrapperCol",
		"hideRequiredMark",
		"layout",
		"scrollToFirstError",
		"requiredMark",
		"onFinishFailed",
		"name",
		"style",
		"feedbackIcons",
		"variant"
	]);
	const mergedSize = useSize_default(size);
	const contextValidateMessages = import_react.useContext(validateMessagesContext_default);
	const mergedRequiredMark = import_react.useMemo(() => {
		if (requiredMark !== void 0) return requiredMark;
		if (hideRequiredMark) return false;
		if (contextRequiredMark !== void 0) return contextRequiredMark;
		return true;
	}, [
		hideRequiredMark,
		requiredMark,
		contextRequiredMark
	]);
	const mergedColon = colon !== null && colon !== void 0 ? colon : contextColon;
	const prefixCls = getPrefixCls("form", customizePrefixCls);
	const rootCls = useCSSVarCls_default(prefixCls);
	const [wrapCSSVar, hashId, cssVarCls] = style_default$3(prefixCls, rootCls);
	const formClassName = (0, import_classnames$8.default)(prefixCls, `${prefixCls}-${layout}`, {
		[`${prefixCls}-hide-required-mark`]: mergedRequiredMark === false,
		[`${prefixCls}-rtl`]: direction === "rtl",
		[`${prefixCls}-${mergedSize}`]: mergedSize
	}, cssVarCls, rootCls, hashId, contextClassName, className, rootClassName);
	const [wrapForm] = useForm(form);
	const { __INTERNAL__ } = wrapForm;
	__INTERNAL__.name = name;
	const formContextValue = import_react.useMemo(() => ({
		name,
		labelAlign,
		labelCol,
		labelWrap,
		wrapperCol,
		layout,
		colon: mergedColon,
		requiredMark: mergedRequiredMark,
		itemRef: __INTERNAL__.itemRef,
		form: wrapForm,
		feedbackIcons
	}), [
		name,
		labelAlign,
		labelCol,
		wrapperCol,
		layout,
		mergedColon,
		mergedRequiredMark,
		wrapForm,
		feedbackIcons
	]);
	const nativeElementRef = import_react.useRef(null);
	import_react.useImperativeHandle(ref, () => {
		var _a;
		return Object.assign(Object.assign({}, wrapForm), { nativeElement: (_a = nativeElementRef.current) === null || _a === void 0 ? void 0 : _a.nativeElement });
	});
	const scrollToField = (options, fieldName) => {
		if (options) {
			let defaultScrollToFirstError = { block: "nearest" };
			if (typeof options === "object") defaultScrollToFirstError = Object.assign(Object.assign({}, defaultScrollToFirstError), options);
			wrapForm.scrollToField(fieldName, defaultScrollToFirstError);
		}
	};
	const onInternalFinishFailed = (errorInfo) => {
		onFinishFailed === null || onFinishFailed === void 0 || onFinishFailed(errorInfo);
		if (errorInfo.errorFields.length) {
			const fieldName = errorInfo.errorFields[0].name;
			if (scrollToFirstError !== void 0) {
				scrollToField(scrollToFirstError, fieldName);
				return;
			}
			if (contextScrollToFirstError !== void 0) scrollToField(contextScrollToFirstError, fieldName);
		}
	};
	return wrapCSSVar(/* @__PURE__ */ import_react.createElement(VariantContext.Provider, { value: variant }, /* @__PURE__ */ import_react.createElement(DisabledContextProvider, { disabled }, /* @__PURE__ */ import_react.createElement(SizeContext_default.Provider, { value: mergedSize }, /* @__PURE__ */ import_react.createElement(FormProvider, { validateMessages: contextValidateMessages }, /* @__PURE__ */ import_react.createElement(FormContext.Provider, { value: formContextValue }, /* @__PURE__ */ import_react.createElement(es_default$2, Object.assign({ id: name }, restFormProps, {
		name,
		onFinishFailed: onInternalFinishFailed,
		form: wrapForm,
		ref: nativeElementRef,
		style: Object.assign(Object.assign({}, contextStyle), style),
		className: formClassName
	}))))))));
};
var Form_default = /* @__PURE__ */ import_react.forwardRef(InternalForm);
init_toArray();
function useChildren(children) {
	if (typeof children === "function") return children;
	const childList = toArray$1(children);
	return childList.length <= 1 ? childList[0] : childList;
}
var useFormItemStatus = () => {
	const { status, errors = [], warnings = [] } = import_react.useContext(FormItemInputContext);
	return {
		status,
		errors,
		warnings
	};
};
useFormItemStatus.Context = FormItemInputContext;
var useFormItemStatus_default = useFormItemStatus;
init_raf();
function useFrameState(defaultValue) {
	const [value, setValue] = import_react.useState(defaultValue);
	const frameRef = import_react.useRef(null);
	const batchRef = import_react.useRef([]);
	const destroyRef = import_react.useRef(false);
	import_react.useEffect(() => {
		destroyRef.current = false;
		return () => {
			destroyRef.current = true;
			raf_default.cancel(frameRef.current);
			frameRef.current = null;
		};
	}, []);
	function setFrameValue(updater) {
		if (destroyRef.current) return;
		if (frameRef.current === null) {
			batchRef.current = [];
			frameRef.current = raf_default(() => {
				frameRef.current = null;
				setValue((prevValue) => {
					let current = prevValue;
					batchRef.current.forEach((func) => {
						current = func(current);
					});
					return current;
				});
			});
		}
		batchRef.current.push(updater);
	}
	return [value, setFrameValue];
}
init_ref();
function useItemRef() {
	const { itemRef } = import_react.useContext(FormContext);
	const cacheRef = import_react.useRef({});
	function getRef(name, children) {
		const childrenRef = children && typeof children === "object" && getNodeRef(children);
		const nameStr = name.join("_");
		if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
			cacheRef.current.name = nameStr;
			cacheRef.current.originRef = childrenRef;
			cacheRef.current.ref = composeRef(itemRef(name), childrenRef);
		}
		return cacheRef.current.ref;
	}
	return getRef;
}
var genFallbackStyle = (token) => {
	const { formItemCls } = token;
	return { "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": { [`${formItemCls}-control`]: { display: "flex" } } };
};
var fallbackCmp_default = genSubStyleComponent(["Form", "item-item"], (token, { rootPrefixCls }) => {
	return genFallbackStyle(prepareToken(token, rootPrefixCls));
});
var import_classnames$7 = /* @__PURE__ */ __toESM(require_classnames());
init_es$3();
init_useLayoutEffect();
var __rest$5 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var GRID_MAX = 24;
var FormItemInput = (props) => {
	const { prefixCls, status, labelCol, wrapperCol, children, errors, warnings, _internalItemRender: formItemRender, extra, help, fieldId, marginBottom, onErrorVisibleChanged, label } = props;
	const baseClassName = `${prefixCls}-item`;
	const formContext = import_react.useContext(FormContext);
	const mergedWrapperCol = import_react.useMemo(() => {
		let mergedWrapper = Object.assign({}, wrapperCol || formContext.wrapperCol || {});
		if (label === null && !labelCol && !wrapperCol && formContext.labelCol) [
			void 0,
			"xs",
			"sm",
			"md",
			"lg",
			"xl",
			"xxl"
		].forEach((size) => {
			const _size = size ? [size] : [];
			const formLabel = get(formContext.labelCol, _size);
			const formLabelObj = typeof formLabel === "object" ? formLabel : {};
			const wrapper = get(mergedWrapper, _size);
			const wrapperObj = typeof wrapper === "object" ? wrapper : {};
			if ("span" in formLabelObj && !("offset" in wrapperObj) && formLabelObj.span < GRID_MAX) mergedWrapper = set(mergedWrapper, [].concat(_size, ["offset"]), formLabelObj.span);
		});
		return mergedWrapper;
	}, [wrapperCol, formContext]);
	const className = (0, import_classnames$7.default)(`${baseClassName}-control`, mergedWrapperCol.className);
	const subFormContext = import_react.useMemo(() => {
		const { labelCol: labelCol$1, wrapperCol: wrapperCol$1 } = formContext;
		return __rest$5(formContext, ["labelCol", "wrapperCol"]);
	}, [formContext]);
	const extraRef = import_react.useRef(null);
	const [extraHeight, setExtraHeight] = import_react.useState(0);
	useLayoutEffect_default(() => {
		if (extra && extraRef.current) setExtraHeight(extraRef.current.clientHeight);
		else setExtraHeight(0);
	}, [extra]);
	const inputDom = /* @__PURE__ */ import_react.createElement("div", { className: `${baseClassName}-control-input` }, /* @__PURE__ */ import_react.createElement("div", { className: `${baseClassName}-control-input-content` }, children));
	const formItemContext = import_react.useMemo(() => ({
		prefixCls,
		status
	}), [prefixCls, status]);
	const errorListDom = marginBottom !== null || errors.length || warnings.length ? /* @__PURE__ */ import_react.createElement(FormItemPrefixContext.Provider, { value: formItemContext }, /* @__PURE__ */ import_react.createElement(ErrorList_default, {
		fieldId,
		errors,
		warnings,
		help,
		helpStatus: status,
		className: `${baseClassName}-explain-connected`,
		onVisibleChanged: onErrorVisibleChanged
	})) : null;
	const extraProps = {};
	if (fieldId) extraProps.id = `${fieldId}_extra`;
	const extraDom = extra ? /* @__PURE__ */ import_react.createElement("div", Object.assign({}, extraProps, {
		className: `${baseClassName}-extra`,
		ref: extraRef
	}), extra) : null;
	const additionalDom = errorListDom || extraDom ? /* @__PURE__ */ import_react.createElement("div", {
		className: `${baseClassName}-additional`,
		style: marginBottom ? { minHeight: marginBottom + extraHeight } : {}
	}, errorListDom, extraDom) : null;
	const dom = formItemRender && formItemRender.mark === "pro_table_render" && formItemRender.render ? formItemRender.render(props, {
		input: inputDom,
		errorList: errorListDom,
		extra: extraDom
	}) : /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, inputDom, additionalDom);
	return /* @__PURE__ */ import_react.createElement(FormContext.Provider, { value: subFormContext }, /* @__PURE__ */ import_react.createElement(col_default, Object.assign({}, mergedWrapperCol, { className }), dom), /* @__PURE__ */ import_react.createElement(fallbackCmp_default, { prefixCls }));
};
var FormItemInput_default = FormItemInput;
init_QuestionCircleOutlined();
var import_classnames$6 = /* @__PURE__ */ __toESM(require_classnames());
var __rest$4 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var FormItemLabel = ({ prefixCls, label, htmlFor, labelCol, labelAlign, colon, required, requiredMark, tooltip, vertical }) => {
	var _a;
	const [formLocale] = useLocale_default("Form");
	const { labelAlign: contextLabelAlign, labelCol: contextLabelCol, labelWrap, colon: contextColon } = import_react.useContext(FormContext);
	if (!label) return null;
	const mergedLabelCol = labelCol || contextLabelCol || {};
	const mergedLabelAlign = labelAlign || contextLabelAlign;
	const labelClsBasic = `${prefixCls}-item-label`;
	const labelColClassName = (0, import_classnames$6.default)(labelClsBasic, mergedLabelAlign === "left" && `${labelClsBasic}-left`, mergedLabelCol.className, { [`${labelClsBasic}-wrap`]: !!labelWrap });
	let labelChildren = label;
	const computedColon = colon === true || contextColon !== false && colon !== false;
	if (computedColon && !vertical && typeof label === "string" && label.trim()) labelChildren = label.replace(/[:|：]\s*$/, "");
	const tooltipProps = convertToTooltipProps_default(tooltip);
	if (tooltipProps) {
		const { icon = /* @__PURE__ */ import_react.createElement(QuestionCircleOutlined_default, null) } = tooltipProps, restTooltipProps = __rest$4(tooltipProps, ["icon"]);
		const tooltipNode = /* @__PURE__ */ import_react.createElement(tooltip_default, Object.assign({}, restTooltipProps), /* @__PURE__ */ import_react.cloneElement(icon, {
			className: `${prefixCls}-item-tooltip`,
			title: "",
			onClick: (e) => {
				e.preventDefault();
			},
			tabIndex: null
		}));
		labelChildren = /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, labelChildren, tooltipNode);
	}
	const isOptionalMark = requiredMark === "optional";
	const isRenderMark = typeof requiredMark === "function";
	const hideRequiredMark = requiredMark === false;
	if (isRenderMark) labelChildren = requiredMark(labelChildren, { required: !!required });
	else if (isOptionalMark && !required) labelChildren = /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, labelChildren, /* @__PURE__ */ import_react.createElement("span", {
		className: `${prefixCls}-item-optional`,
		title: ""
	}, (formLocale === null || formLocale === void 0 ? void 0 : formLocale.optional) || ((_a = en_US_default.Form) === null || _a === void 0 ? void 0 : _a.optional)));
	let markType;
	if (hideRequiredMark) markType = "hidden";
	else if (isOptionalMark || isRenderMark) markType = "optional";
	const labelClassName = (0, import_classnames$6.default)({
		[`${prefixCls}-item-required`]: required,
		[`${prefixCls}-item-required-mark-${markType}`]: markType,
		[`${prefixCls}-item-no-colon`]: !computedColon
	});
	return /* @__PURE__ */ import_react.createElement(col_default, Object.assign({}, mergedLabelCol, { className: labelColClassName }), /* @__PURE__ */ import_react.createElement("label", {
		htmlFor,
		className: labelClassName,
		title: typeof label === "string" ? label : ""
	}, labelChildren));
};
var FormItemLabel_default = FormItemLabel;
init_CheckCircleFilled();
init_CloseCircleFilled();
init_ExclamationCircleFilled();
init_LoadingOutlined();
var import_classnames$5 = /* @__PURE__ */ __toESM(require_classnames());
var iconMap = {
	success: CheckCircleFilled_default,
	warning: ExclamationCircleFilled_default,
	error: CloseCircleFilled_default,
	validating: LoadingOutlined_default
};
function StatusProvider({ children, errors, warnings, hasFeedback, validateStatus, prefixCls, meta, noStyle, name }) {
	const itemPrefixCls = `${prefixCls}-item`;
	const { feedbackIcons } = import_react.useContext(FormContext);
	const mergedValidateStatus = getStatus(errors, warnings, meta, null, !!hasFeedback, validateStatus);
	const { isFormItemInput: parentIsFormItemInput, status: parentStatus, hasFeedback: parentHasFeedback, feedbackIcon: parentFeedbackIcon, name: parentName } = import_react.useContext(FormItemInputContext);
	const formItemStatusContext = import_react.useMemo(() => {
		var _a;
		let feedbackIcon;
		if (hasFeedback) {
			const customIcons = hasFeedback !== true && hasFeedback.icons || feedbackIcons;
			const customIconNode = mergedValidateStatus && ((_a = customIcons === null || customIcons === void 0 ? void 0 : customIcons({
				status: mergedValidateStatus,
				errors,
				warnings
			})) === null || _a === void 0 ? void 0 : _a[mergedValidateStatus]);
			const IconNode = mergedValidateStatus && iconMap[mergedValidateStatus];
			feedbackIcon = customIconNode !== false && IconNode ? /* @__PURE__ */ import_react.createElement("span", { className: (0, import_classnames$5.default)(`${itemPrefixCls}-feedback-icon`, `${itemPrefixCls}-feedback-icon-${mergedValidateStatus}`) }, customIconNode || /* @__PURE__ */ import_react.createElement(IconNode, null)) : null;
		}
		const context = {
			status: mergedValidateStatus || "",
			errors,
			warnings,
			hasFeedback: !!hasFeedback,
			feedbackIcon,
			isFormItemInput: true,
			name
		};
		if (noStyle) {
			context.status = (mergedValidateStatus !== null && mergedValidateStatus !== void 0 ? mergedValidateStatus : parentStatus) || "";
			context.isFormItemInput = parentIsFormItemInput;
			context.hasFeedback = !!(hasFeedback !== null && hasFeedback !== void 0 ? hasFeedback : parentHasFeedback);
			context.feedbackIcon = hasFeedback !== void 0 ? context.feedbackIcon : parentFeedbackIcon;
			context.name = name !== null && name !== void 0 ? name : parentName;
		}
		return context;
	}, [
		mergedValidateStatus,
		hasFeedback,
		noStyle,
		parentIsFormItemInput,
		parentStatus
	]);
	return /* @__PURE__ */ import_react.createElement(FormItemInputContext.Provider, { value: formItemStatusContext }, children);
}
var import_classnames$4 = /* @__PURE__ */ __toESM(require_classnames());
init_isVisible();
init_useLayoutEffect();
init_omit();
var __rest$3 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
function ItemHolder(props) {
	const { prefixCls, className, rootClassName, style, help, errors, warnings, validateStatus, meta, hasFeedback, hidden, children, fieldId, required, isRequired, onSubItemMetaChange, layout: propsLayout, name } = props, restProps = __rest$3(props, [
		"prefixCls",
		"className",
		"rootClassName",
		"style",
		"help",
		"errors",
		"warnings",
		"validateStatus",
		"meta",
		"hasFeedback",
		"hidden",
		"children",
		"fieldId",
		"required",
		"isRequired",
		"onSubItemMetaChange",
		"layout",
		"name"
	]);
	const itemPrefixCls = `${prefixCls}-item`;
	const { requiredMark, layout: formLayout } = import_react.useContext(FormContext);
	const layout = propsLayout || formLayout;
	const vertical = layout === "vertical";
	const itemRef = import_react.useRef(null);
	const debounceErrors = useDebounce(errors);
	const debounceWarnings = useDebounce(warnings);
	const hasHelp = help !== void 0 && help !== null;
	const hasError = !!(hasHelp || errors.length || warnings.length);
	const isOnScreen = !!itemRef.current && isVisible_default(itemRef.current);
	const [marginBottom, setMarginBottom] = import_react.useState(null);
	useLayoutEffect_default(() => {
		if (hasError && itemRef.current) {
			const itemStyle = getComputedStyle(itemRef.current);
			setMarginBottom(parseInt(itemStyle.marginBottom, 10));
		}
	}, [hasError, isOnScreen]);
	const onErrorVisibleChanged = (nextVisible) => {
		if (!nextVisible) setMarginBottom(null);
	};
	const getValidateState = (isDebounce = false) => {
		return getStatus(isDebounce ? debounceErrors : meta.errors, isDebounce ? debounceWarnings : meta.warnings, meta, "", !!hasFeedback, validateStatus);
	};
	const mergedValidateStatus = getValidateState();
	const itemClassName = (0, import_classnames$4.default)(itemPrefixCls, className, rootClassName, {
		[`${itemPrefixCls}-with-help`]: hasHelp || debounceErrors.length || debounceWarnings.length,
		[`${itemPrefixCls}-has-feedback`]: mergedValidateStatus && hasFeedback,
		[`${itemPrefixCls}-has-success`]: mergedValidateStatus === "success",
		[`${itemPrefixCls}-has-warning`]: mergedValidateStatus === "warning",
		[`${itemPrefixCls}-has-error`]: mergedValidateStatus === "error",
		[`${itemPrefixCls}-is-validating`]: mergedValidateStatus === "validating",
		[`${itemPrefixCls}-hidden`]: hidden,
		[`${itemPrefixCls}-${layout}`]: layout
	});
	return /* @__PURE__ */ import_react.createElement("div", {
		className: itemClassName,
		style,
		ref: itemRef
	}, /* @__PURE__ */ import_react.createElement(row_default, Object.assign({ className: `${itemPrefixCls}-row` }, omit(restProps, [
		"_internalItemRender",
		"colon",
		"dependencies",
		"extra",
		"fieldKey",
		"getValueFromEvent",
		"getValueProps",
		"htmlFor",
		"id",
		"initialValue",
		"isListField",
		"label",
		"labelAlign",
		"labelCol",
		"labelWrap",
		"messageVariables",
		"name",
		"normalize",
		"noStyle",
		"preserve",
		"requiredMark",
		"rules",
		"shouldUpdate",
		"trigger",
		"tooltip",
		"validateFirst",
		"validateTrigger",
		"valuePropName",
		"wrapperCol",
		"validateDebounce"
	])), /* @__PURE__ */ import_react.createElement(FormItemLabel_default, Object.assign({ htmlFor: fieldId }, props, {
		requiredMark,
		required: required !== null && required !== void 0 ? required : isRequired,
		prefixCls,
		vertical
	})), /* @__PURE__ */ import_react.createElement(FormItemInput_default, Object.assign({}, props, meta, {
		errors: debounceErrors,
		warnings: debounceWarnings,
		prefixCls,
		status: mergedValidateStatus,
		help,
		marginBottom,
		onErrorVisibleChanged
	}), /* @__PURE__ */ import_react.createElement(NoStyleItemContext.Provider, { value: onSubItemMetaChange }, /* @__PURE__ */ import_react.createElement(StatusProvider, {
		prefixCls,
		meta,
		errors: meta.errors,
		warnings: meta.warnings,
		hasFeedback,
		validateStatus: mergedValidateStatus,
		name
	}, children)))), !!marginBottom && /* @__PURE__ */ import_react.createElement("div", {
		className: `${itemPrefixCls}-margin-offset`,
		style: { marginBottom: -marginBottom }
	}));
}
init_toConsumableArray();
var import_classnames$3 = /* @__PURE__ */ __toESM(require_classnames());
init_es$2();
init_useState();
init_ref();
var NAME_SPLIT = "__SPLIT__";
function isSimilarControl(a, b) {
	const keysA = Object.keys(a);
	const keysB = Object.keys(b);
	return keysA.length === keysB.length && keysA.every((key) => {
		const propValueA = a[key];
		const propValueB = b[key];
		return propValueA === propValueB || typeof propValueA === "function" || typeof propValueB === "function";
	});
}
var MemoInput = /* @__PURE__ */ import_react.memo(({ children }) => children, (prev, next) => isSimilarControl(prev.control, next.control) && prev.update === next.update && prev.childProps.length === next.childProps.length && prev.childProps.every((value, index) => value === next.childProps[index]));
function genEmptyMeta() {
	return {
		errors: [],
		warnings: [],
		touched: false,
		validating: false,
		name: [],
		validated: false
	};
}
function InternalFormItem(props) {
	const { name, noStyle, className, dependencies, prefixCls: customizePrefixCls, shouldUpdate, rules, children, required, label, messageVariables, trigger = "onChange", validateTrigger, hidden, help, layout } = props;
	const { getPrefixCls } = import_react.useContext(ConfigContext);
	const { name: formName } = import_react.useContext(FormContext);
	const mergedChildren = useChildren(children);
	const isRenderProps = typeof mergedChildren === "function";
	const notifyParentMetaChange = import_react.useContext(NoStyleItemContext);
	const { validateTrigger: contextValidateTrigger } = import_react.useContext(FieldContext_default);
	const mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : contextValidateTrigger;
	const hasName = !(name === void 0 || name === null);
	const prefixCls = getPrefixCls("form", customizePrefixCls);
	const rootCls = useCSSVarCls_default(prefixCls);
	const [wrapCSSVar, hashId, cssVarCls] = style_default$3(prefixCls, rootCls);
	devUseWarning("Form.Item");
	const listContext = import_react.useContext(ListContext_default);
	const fieldKeyPathRef = import_react.useRef(null);
	const [subFieldErrors, setSubFieldErrors] = useFrameState({});
	const [meta, setMeta] = useSafeState(() => genEmptyMeta());
	const onMetaChange = (nextMeta) => {
		const keyInfo = listContext === null || listContext === void 0 ? void 0 : listContext.getKey(nextMeta.name);
		setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true);
		if (noStyle && help !== false && notifyParentMetaChange) {
			let namePath = nextMeta.name;
			if (!nextMeta.destroy) {
				if (keyInfo !== void 0) {
					const [fieldKey, restPath] = keyInfo;
					namePath = [fieldKey].concat(_toConsumableArray(restPath));
					fieldKeyPathRef.current = namePath;
				}
			} else namePath = fieldKeyPathRef.current || namePath;
			notifyParentMetaChange(nextMeta, namePath);
		}
	};
	const onSubItemMetaChange = (subMeta, uniqueKeys) => {
		setSubFieldErrors((prevSubFieldErrors) => {
			const clone = Object.assign({}, prevSubFieldErrors);
			const mergedNameKey = [].concat(_toConsumableArray(subMeta.name.slice(0, -1)), _toConsumableArray(uniqueKeys)).join(NAME_SPLIT);
			if (subMeta.destroy) delete clone[mergedNameKey];
			else clone[mergedNameKey] = subMeta;
			return clone;
		});
	};
	const [mergedErrors, mergedWarnings] = import_react.useMemo(() => {
		const errorList = _toConsumableArray(meta.errors);
		const warningList = _toConsumableArray(meta.warnings);
		Object.values(subFieldErrors).forEach((subFieldError) => {
			errorList.push.apply(errorList, _toConsumableArray(subFieldError.errors || []));
			warningList.push.apply(warningList, _toConsumableArray(subFieldError.warnings || []));
		});
		return [errorList, warningList];
	}, [
		subFieldErrors,
		meta.errors,
		meta.warnings
	]);
	const getItemRef = useItemRef();
	function renderLayout(baseChildren, fieldId, isRequired) {
		if (noStyle && !hidden) return /* @__PURE__ */ import_react.createElement(StatusProvider, {
			prefixCls,
			hasFeedback: props.hasFeedback,
			validateStatus: props.validateStatus,
			meta,
			errors: mergedErrors,
			warnings: mergedWarnings,
			noStyle: true,
			name
		}, baseChildren);
		return /* @__PURE__ */ import_react.createElement(ItemHolder, Object.assign({ key: "row" }, props, {
			className: (0, import_classnames$3.default)(className, cssVarCls, rootCls, hashId),
			prefixCls,
			fieldId,
			isRequired,
			errors: mergedErrors,
			warnings: mergedWarnings,
			meta,
			onSubItemMetaChange,
			layout,
			name
		}), baseChildren);
	}
	if (!hasName && !isRenderProps && !dependencies) return wrapCSSVar(renderLayout(mergedChildren));
	let variables = {};
	if (typeof label === "string") variables.label = label;
	else if (name) variables.label = String(name);
	if (messageVariables) variables = Object.assign(Object.assign({}, variables), messageVariables);
	return wrapCSSVar(/* @__PURE__ */ import_react.createElement(Field_default, Object.assign({}, props, {
		messageVariables: variables,
		trigger,
		validateTrigger: mergedValidateTrigger,
		onMetaChange
	}), (control, renderMeta, context) => {
		const mergedName = toArray(name).length && renderMeta ? renderMeta.name : [];
		const fieldId = getFieldId(mergedName, formName);
		const isRequired = required !== void 0 ? required : !!(rules === null || rules === void 0 ? void 0 : rules.some((rule) => {
			if (rule && typeof rule === "object" && rule.required && !rule.warningOnly) return true;
			if (typeof rule === "function") {
				const ruleEntity = rule(context);
				return (ruleEntity === null || ruleEntity === void 0 ? void 0 : ruleEntity.required) && !(ruleEntity === null || ruleEntity === void 0 ? void 0 : ruleEntity.warningOnly);
			}
			return false;
		}));
		const mergedControl = Object.assign({}, control);
		let childNode = null;
		if (Array.isArray(mergedChildren) && hasName) childNode = mergedChildren;
		else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) {} else if (dependencies && !isRenderProps && !hasName) {} else if (/* @__PURE__ */ import_react.isValidElement(mergedChildren)) {
			const childProps = Object.assign(Object.assign({}, mergedChildren.props), mergedControl);
			if (!childProps.id) childProps.id = fieldId;
			if (help || mergedErrors.length > 0 || mergedWarnings.length > 0 || props.extra) {
				const describedbyArr = [];
				if (help || mergedErrors.length > 0) describedbyArr.push(`${fieldId}_help`);
				if (props.extra) describedbyArr.push(`${fieldId}_extra`);
				childProps["aria-describedby"] = describedbyArr.join(" ");
			}
			if (mergedErrors.length > 0) childProps["aria-invalid"] = "true";
			if (isRequired) childProps["aria-required"] = "true";
			if (supportRef(mergedChildren)) childProps.ref = getItemRef(mergedName, mergedChildren);
			new Set([].concat(_toConsumableArray(toArray(trigger)), _toConsumableArray(toArray(mergedValidateTrigger)))).forEach((eventName) => {
				childProps[eventName] = (...args) => {
					var _a2, _c2;
					var _a, _b, _c;
					(_a = mergedControl[eventName]) === null || _a === void 0 || (_a2 = _a).call.apply(_a2, [mergedControl].concat(args));
					(_c = (_b = mergedChildren.props)[eventName]) === null || _c === void 0 || (_c2 = _c).call.apply(_c2, [_b].concat(args));
				};
			});
			const watchingChildProps = [
				childProps["aria-required"],
				childProps["aria-invalid"],
				childProps["aria-describedby"]
			];
			childNode = /* @__PURE__ */ import_react.createElement(MemoInput, {
				control: mergedControl,
				update: mergedChildren,
				childProps: watchingChildProps
			}, cloneElement(mergedChildren, childProps));
		} else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) childNode = mergedChildren(context);
		else childNode = mergedChildren;
		return renderLayout(childNode, fieldId, isRequired);
	}));
}
var FormItem = InternalFormItem;
FormItem.useStatus = useFormItemStatus_default;
var FormItem_default = FormItem;
init_es$2();
var __rest$2 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var FormList = (_a) => {
	var { prefixCls: customizePrefixCls, children } = _a, props = __rest$2(_a, ["prefixCls", "children"]);
	const { getPrefixCls } = import_react.useContext(ConfigContext);
	const prefixCls = getPrefixCls("form", customizePrefixCls);
	const contextValue = import_react.useMemo(() => ({
		prefixCls,
		status: "error"
	}), [prefixCls]);
	return /* @__PURE__ */ import_react.createElement(List_default, Object.assign({}, props), (fields, operation, meta) => /* @__PURE__ */ import_react.createElement(FormItemPrefixContext.Provider, { value: contextValue }, children(fields.map((field) => Object.assign(Object.assign({}, field), { fieldKey: field.key })), operation, {
		errors: meta.errors,
		warnings: meta.warnings
	})));
};
var FormList_default = FormList;
function useFormInstance() {
	const { form } = import_react.useContext(FormContext);
	return form;
}
var Form = Form_default;
Form.Item = FormItem_default;
Form.List = FormList_default;
Form.ErrorList = ErrorList_default;
Form.useForm = useForm;
Form.useFormInstance = useFormInstance;
Form.useWatch = useWatch_default;
Form.Provider = FormProvider;
Form.create = () => {};
var form_default = Form;
init_es();
init_es$4();
var genSwitchSmallStyle = (token) => {
	const { componentCls, trackHeightSM, trackPadding, trackMinWidthSM, innerMinMarginSM, innerMaxMarginSM, handleSizeSM, calc } = token;
	const switchInnerCls = `${componentCls}-inner`;
	const trackPaddingCalc = unit(calc(handleSizeSM).add(calc(trackPadding).mul(2)).equal());
	const innerMaxMarginCalc = unit(calc(innerMaxMarginSM).mul(2).equal());
	return { [componentCls]: { [`&${componentCls}-small`]: {
		minWidth: trackMinWidthSM,
		height: trackHeightSM,
		lineHeight: unit(trackHeightSM),
		[`${componentCls}-inner`]: {
			paddingInlineStart: innerMaxMarginSM,
			paddingInlineEnd: innerMinMarginSM,
			[`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: { minHeight: trackHeightSM },
			[`${switchInnerCls}-checked`]: {
				marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
				marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
			},
			[`${switchInnerCls}-unchecked`]: {
				marginTop: calc(trackHeightSM).mul(-1).equal(),
				marginInlineStart: 0,
				marginInlineEnd: 0
			}
		},
		[`${componentCls}-handle`]: {
			width: handleSizeSM,
			height: handleSizeSM
		},
		[`${componentCls}-loading-icon`]: {
			top: calc(calc(handleSizeSM).sub(token.switchLoadingIconSize)).div(2).equal(),
			fontSize: token.switchLoadingIconSize
		},
		[`&${componentCls}-checked`]: {
			[`${componentCls}-inner`]: {
				paddingInlineStart: innerMinMarginSM,
				paddingInlineEnd: innerMaxMarginSM,
				[`${switchInnerCls}-checked`]: {
					marginInlineStart: 0,
					marginInlineEnd: 0
				},
				[`${switchInnerCls}-unchecked`]: {
					marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
					marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
				}
			},
			[`${componentCls}-handle`]: { insetInlineStart: `calc(100% - ${unit(calc(handleSizeSM).add(trackPadding).equal())})` }
		},
		[`&:not(${componentCls}-disabled):active`]: {
			[`&:not(${componentCls}-checked) ${switchInnerCls}`]: { [`${switchInnerCls}-unchecked`]: {
				marginInlineStart: calc(token.marginXXS).div(2).equal(),
				marginInlineEnd: calc(token.marginXXS).mul(-1).div(2).equal()
			} },
			[`&${componentCls}-checked ${switchInnerCls}`]: { [`${switchInnerCls}-checked`]: {
				marginInlineStart: calc(token.marginXXS).mul(-1).div(2).equal(),
				marginInlineEnd: calc(token.marginXXS).div(2).equal()
			} }
		}
	} } };
};
var genSwitchLoadingStyle = (token) => {
	const { componentCls, handleSize, calc } = token;
	return { [componentCls]: {
		[`${componentCls}-loading-icon${token.iconCls}`]: {
			position: "relative",
			top: calc(calc(handleSize).sub(token.fontSize)).div(2).equal(),
			color: token.switchLoadingIconColor,
			verticalAlign: "top"
		},
		[`&${componentCls}-checked ${componentCls}-loading-icon`]: { color: token.switchColor }
	} };
};
var genSwitchHandleStyle = (token) => {
	const { componentCls, trackPadding, handleBg, handleShadow, handleSize, calc } = token;
	const switchHandleCls = `${componentCls}-handle`;
	return { [componentCls]: {
		[switchHandleCls]: {
			position: "absolute",
			top: trackPadding,
			insetInlineStart: trackPadding,
			width: handleSize,
			height: handleSize,
			transition: `all ${token.switchDuration} ease-in-out`,
			"&::before": {
				position: "absolute",
				top: 0,
				insetInlineEnd: 0,
				bottom: 0,
				insetInlineStart: 0,
				backgroundColor: handleBg,
				borderRadius: calc(handleSize).div(2).equal(),
				boxShadow: handleShadow,
				transition: `all ${token.switchDuration} ease-in-out`,
				content: "\"\""
			}
		},
		[`&${componentCls}-checked ${switchHandleCls}`]: { insetInlineStart: `calc(100% - ${unit(calc(handleSize).add(trackPadding).equal())})` },
		[`&:not(${componentCls}-disabled):active`]: {
			[`${switchHandleCls}::before`]: {
				insetInlineEnd: token.switchHandleActiveInset,
				insetInlineStart: 0
			},
			[`&${componentCls}-checked ${switchHandleCls}::before`]: {
				insetInlineEnd: 0,
				insetInlineStart: token.switchHandleActiveInset
			}
		}
	} };
};
var genSwitchInnerStyle = (token) => {
	const { componentCls, trackHeight, trackPadding, innerMinMargin, innerMaxMargin, handleSize, calc } = token;
	const switchInnerCls = `${componentCls}-inner`;
	const trackPaddingCalc = unit(calc(handleSize).add(calc(trackPadding).mul(2)).equal());
	const innerMaxMarginCalc = unit(calc(innerMaxMargin).mul(2).equal());
	return { [componentCls]: {
		[switchInnerCls]: {
			display: "block",
			overflow: "hidden",
			borderRadius: 100,
			height: "100%",
			paddingInlineStart: innerMaxMargin,
			paddingInlineEnd: innerMinMargin,
			transition: `padding-inline-start ${token.switchDuration} ease-in-out, padding-inline-end ${token.switchDuration} ease-in-out`,
			[`${switchInnerCls}-checked, ${switchInnerCls}-unchecked`]: {
				display: "block",
				color: token.colorTextLightSolid,
				fontSize: token.fontSizeSM,
				transition: `margin-inline-start ${token.switchDuration} ease-in-out, margin-inline-end ${token.switchDuration} ease-in-out`,
				pointerEvents: "none",
				minHeight: trackHeight
			},
			[`${switchInnerCls}-checked`]: {
				marginInlineStart: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`,
				marginInlineEnd: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`
			},
			[`${switchInnerCls}-unchecked`]: {
				marginTop: calc(trackHeight).mul(-1).equal(),
				marginInlineStart: 0,
				marginInlineEnd: 0
			}
		},
		[`&${componentCls}-checked ${switchInnerCls}`]: {
			paddingInlineStart: innerMinMargin,
			paddingInlineEnd: innerMaxMargin,
			[`${switchInnerCls}-checked`]: {
				marginInlineStart: 0,
				marginInlineEnd: 0
			},
			[`${switchInnerCls}-unchecked`]: {
				marginInlineStart: `calc(100% - ${trackPaddingCalc} + ${innerMaxMarginCalc})`,
				marginInlineEnd: `calc(-100% + ${trackPaddingCalc} - ${innerMaxMarginCalc})`
			}
		},
		[`&:not(${componentCls}-disabled):active`]: {
			[`&:not(${componentCls}-checked) ${switchInnerCls}`]: { [`${switchInnerCls}-unchecked`]: {
				marginInlineStart: calc(trackPadding).mul(2).equal(),
				marginInlineEnd: calc(trackPadding).mul(-1).mul(2).equal()
			} },
			[`&${componentCls}-checked ${switchInnerCls}`]: { [`${switchInnerCls}-checked`]: {
				marginInlineStart: calc(trackPadding).mul(-1).mul(2).equal(),
				marginInlineEnd: calc(trackPadding).mul(2).equal()
			} }
		}
	} };
};
var genSwitchStyle = (token) => {
	const { componentCls, trackHeight, trackMinWidth } = token;
	return { [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
		position: "relative",
		display: "inline-block",
		boxSizing: "border-box",
		minWidth: trackMinWidth,
		height: trackHeight,
		lineHeight: unit(trackHeight),
		verticalAlign: "middle",
		background: token.colorTextQuaternary,
		border: "0",
		borderRadius: 100,
		cursor: "pointer",
		transition: `all ${token.motionDurationMid}`,
		userSelect: "none",
		[`&:hover:not(${componentCls}-disabled)`]: { background: token.colorTextTertiary }
	}), genFocusStyle(token)), {
		[`&${componentCls}-checked`]: {
			background: token.switchColor,
			[`&:hover:not(${componentCls}-disabled)`]: { background: token.colorPrimaryHover }
		},
		[`&${componentCls}-loading, &${componentCls}-disabled`]: {
			cursor: "not-allowed",
			opacity: token.switchDisabledOpacity,
			"*": {
				boxShadow: "none",
				cursor: "not-allowed"
			}
		},
		[`&${componentCls}-rtl`]: { direction: "rtl" }
	}) };
};
const prepareComponentToken$1 = (token) => {
	const { fontSize, lineHeight, controlHeight, colorWhite } = token;
	const height = fontSize * lineHeight;
	const heightSM = controlHeight / 2;
	const padding = 2;
	const handleSize = height - padding * 2;
	const handleSizeSM = heightSM - padding * 2;
	return {
		trackHeight: height,
		trackHeightSM: heightSM,
		trackMinWidth: handleSize * 2 + padding * 4,
		trackMinWidthSM: handleSizeSM * 2 + padding * 2,
		trackPadding: padding,
		handleBg: colorWhite,
		handleSize,
		handleSizeSM,
		handleShadow: `0 2px 4px 0 ${new FastColor("#00230b").setA(.2).toRgbString()}`,
		innerMinMargin: handleSize / 2,
		innerMaxMargin: handleSize + padding + padding * 2,
		innerMinMarginSM: handleSizeSM / 2,
		innerMaxMarginSM: handleSizeSM + padding + padding * 2
	};
};
var style_default$2 = genStyleHooks("Switch", (token) => {
	const switchToken = merge(token, {
		switchDuration: token.motionDurationMid,
		switchColor: token.colorPrimary,
		switchDisabledOpacity: token.opacityLoading,
		switchLoadingIconSize: token.calc(token.fontSizeIcon).mul(.75).equal(),
		switchLoadingIconColor: `rgba(0, 0, 0, ${token.opacityLoading})`,
		switchHandleActiveInset: "-30%"
	});
	return [
		genSwitchStyle(switchToken),
		genSwitchInnerStyle(switchToken),
		genSwitchHandleStyle(switchToken),
		genSwitchLoadingStyle(switchToken),
		genSwitchSmallStyle(switchToken)
	];
}, prepareComponentToken$1);
init_LoadingOutlined();
var import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames());
init_es$5();
init_useMergedState();
var __rest$1 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var Switch = /* @__PURE__ */ import_react.forwardRef((props, ref) => {
	const { prefixCls: customizePrefixCls, size: customizeSize, disabled: customDisabled, loading, className, rootClassName, style, checked: checkedProp, value, defaultChecked: defaultCheckedProp, defaultValue, onChange } = props, restProps = __rest$1(props, [
		"prefixCls",
		"size",
		"disabled",
		"loading",
		"className",
		"rootClassName",
		"style",
		"checked",
		"value",
		"defaultChecked",
		"defaultValue",
		"onChange"
	]);
	const [checked, setChecked] = useMergedState(false, {
		value: checkedProp !== null && checkedProp !== void 0 ? checkedProp : value,
		defaultValue: defaultCheckedProp !== null && defaultCheckedProp !== void 0 ? defaultCheckedProp : defaultValue
	});
	const { getPrefixCls, direction, switch: SWITCH } = import_react.useContext(ConfigContext);
	const disabled = import_react.useContext(DisabledContext_default);
	const mergedDisabled = (customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled) || loading;
	const prefixCls = getPrefixCls("switch", customizePrefixCls);
	const loadingIcon = /* @__PURE__ */ import_react.createElement("div", { className: `${prefixCls}-handle` }, loading && /* @__PURE__ */ import_react.createElement(LoadingOutlined_default, { className: `${prefixCls}-loading-icon` }));
	const [wrapCSSVar, hashId, cssVarCls] = style_default$2(prefixCls);
	const mergedSize = useSize_default(customizeSize);
	const classes = (0, import_classnames$2.default)(SWITCH === null || SWITCH === void 0 ? void 0 : SWITCH.className, {
		[`${prefixCls}-small`]: mergedSize === "small",
		[`${prefixCls}-loading`]: loading,
		[`${prefixCls}-rtl`]: direction === "rtl"
	}, className, rootClassName, hashId, cssVarCls);
	const mergedStyle = Object.assign(Object.assign({}, SWITCH === null || SWITCH === void 0 ? void 0 : SWITCH.style), style);
	const changeHandler = (...args) => {
		setChecked(args[0]);
		onChange === null || onChange === void 0 || onChange.apply(void 0, args);
	};
	return wrapCSSVar(/* @__PURE__ */ import_react.createElement(wave_default, { component: "Switch" }, /* @__PURE__ */ import_react.createElement(es_default$1, Object.assign({}, restProps, {
		checked,
		onChange: changeHandler,
		prefixCls,
		className: classes,
		style: mergedStyle,
		disabled: mergedDisabled,
		ref,
		loadingIcon
	}))));
});
Switch.__ANT_SWITCH = true;
var switch_default = Switch;
const genDirectoryStyle = ({ treeCls, treeNodeCls, directoryNodeSelectedBg, directoryNodeSelectedColor, motionDurationMid, borderRadius, controlItemBgHover }) => ({ [`${treeCls}${treeCls}-directory ${treeNodeCls}`]: {
	[`${treeCls}-node-content-wrapper`]: {
		position: "static",
		[`&:has(${treeCls}-drop-indicator)`]: { position: "relative" },
		[`> *:not(${treeCls}-drop-indicator)`]: { position: "relative" },
		"&:hover": { background: "transparent" },
		"&:before": {
			position: "absolute",
			inset: 0,
			transition: `background-color ${motionDurationMid}`,
			content: "\"\"",
			borderRadius
		},
		"&:hover:before": { background: controlItemBgHover }
	},
	[`${treeCls}-switcher, ${treeCls}-checkbox, ${treeCls}-draggable-icon`]: { zIndex: 1 },
	"&-selected": {
		background: directoryNodeSelectedBg,
		borderRadius,
		[`${treeCls}-switcher, ${treeCls}-draggable-icon`]: { color: directoryNodeSelectedColor },
		[`${treeCls}-node-content-wrapper`]: {
			color: directoryNodeSelectedColor,
			background: "transparent",
			"&:before, &:hover:before": { background: directoryNodeSelectedBg }
		}
	}
} });
init_es();
var treeNodeFX = new Keyframes_default("ant-tree-node-fx-do-not-use", {
	"0%": { opacity: 0 },
	"100%": { opacity: 1 }
});
var getSwitchStyle = (prefixCls, token) => ({ [`.${prefixCls}-switcher-icon`]: {
	display: "inline-block",
	fontSize: 10,
	verticalAlign: "baseline",
	svg: { transition: `transform ${token.motionDurationSlow}` }
} });
var getDropIndicatorStyle = (prefixCls, token) => ({ [`.${prefixCls}-drop-indicator`]: {
	position: "absolute",
	zIndex: 1,
	height: 2,
	backgroundColor: token.colorPrimary,
	borderRadius: 1,
	pointerEvents: "none",
	"&:after": {
		position: "absolute",
		top: -3,
		insetInlineStart: -6,
		width: 8,
		height: 8,
		backgroundColor: "transparent",
		border: `${unit(token.lineWidthBold)} solid ${token.colorPrimary}`,
		borderRadius: "50%",
		content: "\"\""
	}
} });
const genBaseStyle$1 = (prefixCls, token) => {
	const { treeCls, treeNodeCls, treeNodePadding, titleHeight, indentSize, nodeSelectedBg, nodeHoverBg, colorTextQuaternary, controlItemBgActiveDisabled } = token;
	return { [treeCls]: Object.assign(Object.assign({}, resetComponent(token)), {
		["--rc-virtual-list-scrollbar-bg"]: token.colorSplit,
		background: token.colorBgContainer,
		borderRadius: token.borderRadius,
		transition: `background-color ${token.motionDurationSlow}`,
		"&-rtl": { direction: "rtl" },
		[`&${treeCls}-rtl ${treeCls}-switcher_close ${treeCls}-switcher-icon svg`]: { transform: "rotate(90deg)" },
		[`&-focused:not(:hover):not(${treeCls}-active-focused)`]: genFocusOutline(token),
		[`${treeCls}-list-holder-inner`]: { alignItems: "flex-start" },
		[`&${treeCls}-block-node`]: { [`${treeCls}-list-holder-inner`]: {
			alignItems: "stretch",
			[`${treeCls}-node-content-wrapper`]: { flex: "auto" },
			[`${treeNodeCls}.dragging:after`]: {
				position: "absolute",
				inset: 0,
				border: `1px solid ${token.colorPrimary}`,
				opacity: 0,
				animationName: treeNodeFX,
				animationDuration: token.motionDurationSlow,
				animationPlayState: "running",
				animationFillMode: "forwards",
				content: "\"\"",
				pointerEvents: "none",
				borderRadius: token.borderRadius
			}
		} },
		[treeNodeCls]: {
			display: "flex",
			alignItems: "flex-start",
			marginBottom: treeNodePadding,
			lineHeight: unit(titleHeight),
			position: "relative",
			"&:before": {
				content: "\"\"",
				position: "absolute",
				zIndex: 1,
				insetInlineStart: 0,
				width: "100%",
				top: "100%",
				height: treeNodePadding
			},
			[`&-disabled ${treeCls}-node-content-wrapper`]: {
				color: token.colorTextDisabled,
				cursor: "not-allowed",
				"&:hover": { background: "transparent" }
			},
			[`${treeCls}-checkbox-disabled + ${treeCls}-node-selected,&${treeNodeCls}-disabled${treeNodeCls}-selected ${treeCls}-node-content-wrapper`]: { backgroundColor: controlItemBgActiveDisabled },
			[`${treeCls}-checkbox-disabled`]: { pointerEvents: "unset" },
			[`&:not(${treeNodeCls}-disabled)`]: { [`${treeCls}-node-content-wrapper`]: { "&:hover": { color: token.nodeHoverColor } } },
			[`&-active ${treeCls}-node-content-wrapper`]: { background: token.controlItemBgHover },
			[`&:not(${treeNodeCls}-disabled).filter-node ${treeCls}-title`]: {
				color: token.colorPrimary,
				fontWeight: token.fontWeightStrong
			},
			"&-draggable": {
				cursor: "grab",
				[`${treeCls}-draggable-icon`]: {
					flexShrink: 0,
					width: titleHeight,
					textAlign: "center",
					visibility: "visible",
					color: colorTextQuaternary
				},
				[`&${treeNodeCls}-disabled ${treeCls}-draggable-icon`]: { visibility: "hidden" }
			}
		},
		[`${treeCls}-indent`]: {
			alignSelf: "stretch",
			whiteSpace: "nowrap",
			userSelect: "none",
			"&-unit": {
				display: "inline-block",
				width: indentSize
			}
		},
		[`${treeCls}-draggable-icon`]: { visibility: "hidden" },
		[`${treeCls}-switcher, ${treeCls}-checkbox`]: { marginInlineEnd: token.calc(token.calc(titleHeight).sub(token.controlInteractiveSize)).div(2).equal() },
		[`${treeCls}-switcher`]: Object.assign(Object.assign({}, getSwitchStyle(prefixCls, token)), {
			position: "relative",
			flex: "none",
			alignSelf: "stretch",
			width: titleHeight,
			textAlign: "center",
			cursor: "pointer",
			userSelect: "none",
			transition: `all ${token.motionDurationSlow}`,
			"&-noop": { cursor: "unset" },
			"&:before": {
				pointerEvents: "none",
				content: "\"\"",
				width: titleHeight,
				height: titleHeight,
				position: "absolute",
				left: {
					_skip_check_: true,
					value: 0
				},
				top: 0,
				borderRadius: token.borderRadius,
				transition: `all ${token.motionDurationSlow}`
			},
			[`&:not(${treeCls}-switcher-noop):hover:before`]: { backgroundColor: token.colorBgTextHover },
			[`&_close ${treeCls}-switcher-icon svg`]: { transform: "rotate(-90deg)" },
			"&-loading-icon": { color: token.colorPrimary },
			"&-leaf-line": {
				position: "relative",
				zIndex: 1,
				display: "inline-block",
				width: "100%",
				height: "100%",
				"&:before": {
					position: "absolute",
					top: 0,
					insetInlineEnd: token.calc(titleHeight).div(2).equal(),
					bottom: token.calc(treeNodePadding).mul(-1).equal(),
					marginInlineStart: -1,
					borderInlineEnd: `1px solid ${token.colorBorder}`,
					content: "\"\""
				},
				"&:after": {
					position: "absolute",
					width: token.calc(token.calc(titleHeight).div(2).equal()).mul(.8).equal(),
					height: token.calc(titleHeight).div(2).equal(),
					borderBottom: `1px solid ${token.colorBorder}`,
					content: "\"\""
				}
			}
		}),
		[`${treeCls}-node-content-wrapper`]: Object.assign(Object.assign({
			position: "relative",
			minHeight: titleHeight,
			paddingBlock: 0,
			paddingInline: token.paddingXS,
			background: "transparent",
			borderRadius: token.borderRadius,
			cursor: "pointer",
			transition: `all ${token.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`
		}, getDropIndicatorStyle(prefixCls, token)), {
			"&:hover": { backgroundColor: nodeHoverBg },
			[`&${treeCls}-node-selected`]: {
				color: token.nodeSelectedColor,
				backgroundColor: nodeSelectedBg
			},
			[`${treeCls}-iconEle`]: {
				display: "inline-block",
				width: titleHeight,
				height: titleHeight,
				textAlign: "center",
				verticalAlign: "top",
				"&:empty": { display: "none" }
			}
		}),
		[`${treeCls}-unselectable ${treeCls}-node-content-wrapper:hover`]: { backgroundColor: "transparent" },
		[`${treeNodeCls}.drop-container > [draggable]`]: { boxShadow: `0 0 0 2px ${token.colorPrimary}` },
		"&-show-line": {
			[`${treeCls}-indent-unit`]: {
				position: "relative",
				height: "100%",
				"&:before": {
					position: "absolute",
					top: 0,
					insetInlineEnd: token.calc(titleHeight).div(2).equal(),
					bottom: token.calc(treeNodePadding).mul(-1).equal(),
					borderInlineEnd: `1px solid ${token.colorBorder}`,
					content: "\"\""
				},
				"&-end:before": { display: "none" }
			},
			[`${treeCls}-switcher`]: {
				background: "transparent",
				"&-line-icon": { verticalAlign: "-0.15em" }
			}
		},
		[`${treeNodeCls}-leaf-last ${treeCls}-switcher-leaf-line:before`]: {
			top: "auto !important",
			bottom: "auto !important",
			height: `${unit(token.calc(titleHeight).div(2).equal())} !important`
		}
	}) };
};
const genTreeStyle = (prefixCls, token, enableDirectory = true) => {
	const treeCls = `.${prefixCls}`;
	const treeToken = merge(token, {
		treeCls,
		treeNodeCls: `${treeCls}-treenode`,
		treeNodePadding: token.calc(token.paddingXS).div(2).equal()
	});
	return [genBaseStyle$1(prefixCls, treeToken), enableDirectory && genDirectoryStyle(treeToken)].filter(Boolean);
};
const initComponentToken = (token) => {
	const { controlHeightSM, controlItemBgHover, controlItemBgActive } = token;
	const titleHeight = controlHeightSM;
	return {
		titleHeight,
		indentSize: titleHeight,
		nodeHoverBg: controlItemBgHover,
		nodeHoverColor: token.colorText,
		nodeSelectedBg: controlItemBgActive,
		nodeSelectedColor: token.colorText
	};
};
const prepareComponentToken = (token) => {
	const { colorTextLightSolid, colorPrimary } = token;
	return Object.assign(Object.assign({}, initComponentToken(token)), {
		directoryNodeSelectedColor: colorTextLightSolid,
		directoryNodeSelectedBg: colorPrimary
	});
};
genStyleHooks("Tree", (token, { prefixCls }) => [
	{ [token.componentCls]: getStyle(`${prefixCls}-checkbox`, token) },
	genTreeStyle(prefixCls, token),
	collapse_default(token)
], prepareComponentToken);
init_CaretDownFilled();
init_FileOutlined();
init_LoadingOutlined();
init_MinusSquareOutlined();
init_PlusSquareOutlined();
var import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames());
var SwitcherIconCom = (props) => {
	var _a, _b;
	const { prefixCls, switcherIcon, treeNodeProps, showLine, switcherLoadingIcon } = props;
	const { isLeaf, expanded, loading } = treeNodeProps;
	if (loading) {
		if (/* @__PURE__ */ import_react.isValidElement(switcherLoadingIcon)) return switcherLoadingIcon;
		return /* @__PURE__ */ import_react.createElement(LoadingOutlined_default, { className: `${prefixCls}-switcher-loading-icon` });
	}
	let showLeafIcon;
	if (showLine && typeof showLine === "object") showLeafIcon = showLine.showLeafIcon;
	if (isLeaf) {
		if (!showLine) return null;
		if (typeof showLeafIcon !== "boolean" && !!showLeafIcon) {
			const leafIcon = typeof showLeafIcon === "function" ? showLeafIcon(treeNodeProps) : showLeafIcon;
			const leafCls = `${prefixCls}-switcher-line-custom-icon`;
			if (/* @__PURE__ */ import_react.isValidElement(leafIcon)) return cloneElement(leafIcon, { className: (0, import_classnames$1.default)((_a = leafIcon.props) === null || _a === void 0 ? void 0 : _a.className, leafCls) });
			return leafIcon;
		}
		return showLeafIcon ? /* @__PURE__ */ import_react.createElement(FileOutlined_default, { className: `${prefixCls}-switcher-line-icon` }) : /* @__PURE__ */ import_react.createElement("span", { className: `${prefixCls}-switcher-leaf-line` });
	}
	const switcherCls = `${prefixCls}-switcher-icon`;
	const switcher = typeof switcherIcon === "function" ? switcherIcon(treeNodeProps) : switcherIcon;
	if (/* @__PURE__ */ import_react.isValidElement(switcher)) return cloneElement(switcher, { className: (0, import_classnames$1.default)((_b = switcher.props) === null || _b === void 0 ? void 0 : _b.className, switcherCls) });
	if (switcher !== void 0) return switcher;
	if (showLine) return expanded ? /* @__PURE__ */ import_react.createElement(MinusSquareOutlined_default, { className: `${prefixCls}-switcher-line-icon` }) : /* @__PURE__ */ import_react.createElement(PlusSquareOutlined_default, { className: `${prefixCls}-switcher-line-icon` });
	return /* @__PURE__ */ import_react.createElement(CaretDownFilled_default, { className: switcherCls });
};
var iconUtil_default = SwitcherIconCom;
init_es();
var genBaseStyle = (token) => {
	const { componentCls, treePrefixCls, colorBgElevated } = token;
	const treeCls = `.${treePrefixCls}`;
	return [{ [`${componentCls}-dropdown`]: [
		{ padding: `${unit(token.paddingXS)} ${unit(token.calc(token.paddingXS).div(2).equal())}` },
		genTreeStyle(treePrefixCls, merge(token, { colorBgContainer: colorBgElevated }), false),
		{ [treeCls]: {
			borderRadius: 0,
			[`${treeCls}-list-holder-inner`]: {
				alignItems: "stretch",
				[`${treeCls}-treenode`]: { [`${treeCls}-node-content-wrapper`]: { flex: "auto" } }
			}
		} },
		getStyle(`${treePrefixCls}-checkbox`, token),
		{ "&-rtl": {
			direction: "rtl",
			[`${treeCls}-switcher${treeCls}-switcher_close`]: { [`${treeCls}-switcher-icon svg`]: { transform: "rotate(90deg)" } }
		} }
	] }];
};
function useTreeSelectStyle(prefixCls, treePrefixCls, rootCls) {
	return genStyleHooks("TreeSelect", (token) => {
		return genBaseStyle(merge(token, { treePrefixCls }));
	}, initComponentToken)(prefixCls, rootCls);
}
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
init_es$6();
init_omit();
var __rest = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var InternalTreeSelect = (props, ref) => {
	var _a, _b, _c, _d, _e;
	const { prefixCls: customizePrefixCls, size: customizeSize, disabled: customDisabled, bordered = true, style, className, rootClassName, treeCheckable, multiple, listHeight = 256, listItemHeight: customListItemHeight, placement, notFoundContent, switcherIcon, treeLine, getPopupContainer, popupClassName, dropdownClassName, treeIcon = false, transitionName, choiceTransitionName = "", status: customStatus, treeExpandAction, builtinPlacements, dropdownMatchSelectWidth, popupMatchSelectWidth, allowClear, variant: customVariant, dropdownStyle, dropdownRender, popupRender, onDropdownVisibleChange, onOpenChange, tagRender, maxCount, showCheckedStrategy, treeCheckStrictly, styles, classNames: classNames$9 } = props, restProps = __rest(props, [
		"prefixCls",
		"size",
		"disabled",
		"bordered",
		"style",
		"className",
		"rootClassName",
		"treeCheckable",
		"multiple",
		"listHeight",
		"listItemHeight",
		"placement",
		"notFoundContent",
		"switcherIcon",
		"treeLine",
		"getPopupContainer",
		"popupClassName",
		"dropdownClassName",
		"treeIcon",
		"transitionName",
		"choiceTransitionName",
		"status",
		"treeExpandAction",
		"builtinPlacements",
		"dropdownMatchSelectWidth",
		"popupMatchSelectWidth",
		"allowClear",
		"variant",
		"dropdownStyle",
		"dropdownRender",
		"popupRender",
		"onDropdownVisibleChange",
		"onOpenChange",
		"tagRender",
		"maxCount",
		"showCheckedStrategy",
		"treeCheckStrictly",
		"styles",
		"classNames"
	]);
	const { getPopupContainer: getContextPopupContainer, getPrefixCls, renderEmpty, direction, virtual, popupMatchSelectWidth: contextPopupMatchSelectWidth, popupOverflow } = import_react.useContext(ConfigContext);
	const { styles: contextStyles, classNames: contextClassNames } = useComponentConfig("treeSelect");
	const [, token] = useToken();
	const listItemHeight = customListItemHeight !== null && customListItemHeight !== void 0 ? customListItemHeight : (token === null || token === void 0 ? void 0 : token.controlHeightSM) + (token === null || token === void 0 ? void 0 : token.paddingXXS);
	const rootPrefixCls = getPrefixCls();
	const prefixCls = getPrefixCls("select", customizePrefixCls);
	const treePrefixCls = getPrefixCls("select-tree", customizePrefixCls);
	const treeSelectPrefixCls = getPrefixCls("tree-select", customizePrefixCls);
	const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls, direction);
	const rootCls = useCSSVarCls_default(prefixCls);
	const treeSelectRootCls = useCSSVarCls_default(treeSelectPrefixCls);
	const [wrapCSSVar, hashId, cssVarCls] = style_default(prefixCls, rootCls);
	const [treeSelectWrapCSSVar] = useTreeSelectStyle(treeSelectPrefixCls, treePrefixCls, treeSelectRootCls);
	const [variant, enableVariantCls] = useVariants_default("treeSelect", customVariant, bordered);
	const mergedPopupClassName = (0, import_classnames.default)(((_a = classNames$9 === null || classNames$9 === void 0 ? void 0 : classNames$9.popup) === null || _a === void 0 ? void 0 : _a.root) || ((_b = contextClassNames === null || contextClassNames === void 0 ? void 0 : contextClassNames.popup) === null || _b === void 0 ? void 0 : _b.root) || popupClassName || dropdownClassName, `${treeSelectPrefixCls}-dropdown`, { [`${treeSelectPrefixCls}-dropdown-rtl`]: direction === "rtl" }, rootClassName, contextClassNames.root, classNames$9 === null || classNames$9 === void 0 ? void 0 : classNames$9.root, cssVarCls, rootCls, treeSelectRootCls, hashId);
	const mergedPopupStyle = ((_c = styles === null || styles === void 0 ? void 0 : styles.popup) === null || _c === void 0 ? void 0 : _c.root) || ((_d = contextStyles === null || contextStyles === void 0 ? void 0 : contextStyles.popup) === null || _d === void 0 ? void 0 : _d.root) || dropdownStyle;
	const mergedPopupRender = usePopupRender_default(popupRender || dropdownRender);
	const mergedOnOpenChange = onOpenChange || onDropdownVisibleChange;
	const isMultiple = !!(treeCheckable || multiple);
	const mergedMaxCount = import_react.useMemo(() => {
		if (maxCount && (showCheckedStrategy === "SHOW_ALL" && !treeCheckStrictly || showCheckedStrategy === "SHOW_PARENT")) return;
		return maxCount;
	}, [
		maxCount,
		showCheckedStrategy,
		treeCheckStrictly
	]);
	const showSuffixIcon = useShowArrow(props.suffixIcon, props.showArrow);
	const mergedPopupMatchSelectWidth = (_e = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _e !== void 0 ? _e : contextPopupMatchSelectWidth;
	const { status: contextStatus, hasFeedback, isFormItemInput, feedbackIcon } = import_react.useContext(FormItemInputContext);
	const mergedStatus = getMergedStatus(contextStatus, customStatus);
	const { suffixIcon, removeIcon, clearIcon } = useIcons(Object.assign(Object.assign({}, restProps), {
		multiple: isMultiple,
		showSuffixIcon,
		hasFeedback,
		feedbackIcon,
		prefixCls,
		componentName: "TreeSelect"
	}));
	const mergedAllowClear = allowClear === true ? { clearIcon } : allowClear;
	let mergedNotFound;
	if (notFoundContent !== void 0) mergedNotFound = notFoundContent;
	else mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty("Select")) || /* @__PURE__ */ import_react.createElement(defaultRenderEmpty_default, { componentName: "Select" });
	const selectProps = omit(restProps, [
		"suffixIcon",
		"removeIcon",
		"clearIcon",
		"itemIcon",
		"switcherIcon",
		"style"
	]);
	const memoizedPlacement = import_react.useMemo(() => {
		if (placement !== void 0) return placement;
		return direction === "rtl" ? "bottomRight" : "bottomLeft";
	}, [placement, direction]);
	const mergedSize = useSize_default((ctx) => {
		var _a$1;
		return (_a$1 = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a$1 !== void 0 ? _a$1 : ctx;
	});
	const disabled = import_react.useContext(DisabledContext_default);
	const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
	const mergedClassName = (0, import_classnames.default)(!customizePrefixCls && treeSelectPrefixCls, {
		[`${prefixCls}-lg`]: mergedSize === "large",
		[`${prefixCls}-sm`]: mergedSize === "small",
		[`${prefixCls}-rtl`]: direction === "rtl",
		[`${prefixCls}-${variant}`]: enableVariantCls,
		[`${prefixCls}-in-form-item`]: isFormItemInput
	}, getStatusClassNames(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className, rootClassName, contextClassNames.root, classNames$9 === null || classNames$9 === void 0 ? void 0 : classNames$9.root, cssVarCls, rootCls, treeSelectRootCls, hashId);
	const renderSwitcherIcon = (nodeProps) => /* @__PURE__ */ import_react.createElement(iconUtil_default, {
		prefixCls: treePrefixCls,
		switcherIcon,
		treeNodeProps: nodeProps,
		showLine: treeLine
	});
	const [zIndex] = useZIndex("SelectLike", mergedPopupStyle === null || mergedPopupStyle === void 0 ? void 0 : mergedPopupStyle.zIndex);
	return wrapCSSVar(treeSelectWrapCSSVar(/* @__PURE__ */ import_react.createElement(es_default, Object.assign({
		virtual,
		disabled: mergedDisabled
	}, selectProps, {
		dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
		builtinPlacements: mergedBuiltinPlacements_default(builtinPlacements, popupOverflow),
		ref,
		prefixCls,
		className: mergedClassName,
		style: Object.assign(Object.assign({}, styles === null || styles === void 0 ? void 0 : styles.root), style),
		listHeight,
		listItemHeight,
		treeCheckable: treeCheckable ? /* @__PURE__ */ import_react.createElement("span", { className: `${prefixCls}-tree-checkbox-inner` }) : treeCheckable,
		treeLine: !!treeLine,
		suffixIcon,
		multiple: isMultiple,
		placement: memoizedPlacement,
		removeIcon,
		allowClear: mergedAllowClear,
		switcherIcon: renderSwitcherIcon,
		showTreeIcon: treeIcon,
		notFoundContent: mergedNotFound,
		getPopupContainer: getPopupContainer || getContextPopupContainer,
		treeMotion: null,
		dropdownClassName: mergedPopupClassName,
		dropdownStyle: Object.assign(Object.assign({}, mergedPopupStyle), { zIndex }),
		dropdownRender: mergedPopupRender,
		onDropdownVisibleChange: mergedOnOpenChange,
		choiceTransitionName: getTransitionName(rootPrefixCls, "", choiceTransitionName),
		transitionName: getTransitionName(rootPrefixCls, "slide-up", transitionName),
		treeExpandAction,
		tagRender: isMultiple ? tagRender : void 0,
		maxCount: mergedMaxCount,
		showCheckedStrategy,
		treeCheckStrictly
	}))));
};
var TreeSelect = /* @__PURE__ */ import_react.forwardRef(InternalTreeSelect);
/* istanbul ignore next */
var PurePanel = PurePanel_default(TreeSelect, "dropdownAlign", (props) => omit(props, ["visible"]));
TreeSelect.TreeNode = TreeNode_default;
TreeSelect.SHOW_ALL = SHOW_ALL;
TreeSelect.SHOW_PARENT = SHOW_PARENT;
TreeSelect.SHOW_CHILD = SHOW_CHILD;
TreeSelect._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
var tree_select_default = TreeSelect;
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var logger = loggerService.withContext("ObsidianExportDialog");
var { Option } = select_default;
var ObsidianProcessingMethod = {
	APPEND: "1",
	PREPEND: "2",
	NEW_OR_OVERWRITE: "3"
};
var convertToTreeData = (files) => {
	const treeData = [{
		title: i18n_default.t("chat.topics.export.obsidian_root_directory"),
		value: "",
		isLeaf: false,
		selectable: true
	}];
	const pathMap = { "": treeData[0] };
	const folders = files.filter((file) => file.type === "folder");
	const mdFiles = files.filter((file) => file.type === "markdown");
	const sortedFolders = [...folders].sort((a, b) => a.path.split("/").length - b.path.split("/").length);
	for (const folder of sortedFolders) {
		const parts = folder.path.split("/");
		let currentPath = "";
		let parentPath = "";
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			currentPath = currentPath ? `${currentPath}/${part}` : part;
			if (!pathMap[currentPath]) {
				const node = {
					title: part,
					value: currentPath,
					key: currentPath,
					isLeaf: false,
					selectable: true,
					children: []
				};
				const parentNode = pathMap[parentPath];
				if (parentNode) {
					if (!parentNode.children) parentNode.children = [];
					parentNode.children.push(node);
				}
				pathMap[currentPath] = node;
			}
			parentPath = currentPath;
		}
	}
	for (const file of mdFiles) {
		const fullPath = file.path;
		const dirPath = fullPath.substring(0, fullPath.lastIndexOf("/"));
		const fileName = file.name;
		const parentNode = pathMap[dirPath] || pathMap[""];
		const fileNode = {
			title: fileName,
			value: fullPath,
			isLeaf: true,
			selectable: true,
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: { marginRight: 4 },
				children: "📄"
			})
		};
		if (!parentNode.children) parentNode.children = [];
		parentNode.children.push(fileNode);
	}
	return treeData;
};
var PopupContainer = ({ title, obsidianTags, processingMethod, open, resolve, message, messages, topic, rawContent }) => {
	const defaultObsidianVault = store_default.getState().settings.defaultObsidianVault;
	const [state, setState] = (0, import_react.useState)({
		title,
		tags: obsidianTags || "",
		createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
		source: "小豆万象",
		processingMethod,
		folder: ""
	});
	const [hasTitleBeenManuallyEdited, setHasTitleBeenManuallyEdited] = (0, import_react.useState)(false);
	const [vaults, setVaults] = (0, import_react.useState)([]);
	const [files, setFiles] = (0, import_react.useState)([]);
	const [fileTreeData, setFileTreeData] = (0, import_react.useState)([]);
	const [selectedVault, setSelectedVault] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [exportReasoning, setExportReasoning] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (files.length > 0) setFileTreeData(convertToTreeData(files));
		else setFileTreeData([{
			title: i18n_default.t("chat.topics.export.obsidian_root_directory"),
			value: "",
			isLeaf: false,
			selectable: true
		}]);
	}, [files]);
	(0, import_react.useEffect)(() => {
		const fetchVaults = async () => {
			try {
				setLoading(true);
				setError(null);
				const vaultsData = await window.api.obsidian.getVaults();
				if (vaultsData.length === 0) {
					setError(i18n_default.t("chat.topics.export.obsidian_no_vaults"));
					setLoading(false);
					return;
				}
				setVaults(vaultsData);
				const vaultToUse = defaultObsidianVault || vaultsData[0]?.name;
				if (vaultToUse) {
					setSelectedVault(vaultToUse);
					setFiles(await window.api.obsidian.getFiles(vaultToUse));
				}
			} catch (error$1) {
				logger.error("获取Obsidian Vault失败:", error$1);
				setError(i18n_default.t("chat.topics.export.obsidian_fetch_error"));
			} finally {
				setLoading(false);
			}
		};
		fetchVaults();
	}, [defaultObsidianVault]);
	(0, import_react.useEffect)(() => {
		if (selectedVault) {
			const fetchFiles = async () => {
				try {
					setLoading(true);
					setError(null);
					setFiles(await window.api.obsidian.getFiles(selectedVault));
				} catch (error$1) {
					logger.error("获取Obsidian文件失败:", error$1);
					setError(i18n_default.t("chat.topics.export.obsidian_fetch_folders_error"));
				} finally {
					setLoading(false);
				}
			};
			fetchFiles();
		}
	}, [selectedVault]);
	const handleOk = async () => {
		if (!selectedVault) {
			setError(i18n_default.t("chat.topics.export.obsidian_no_vault_selected"));
			return;
		}
		let markdown = "";
		if (rawContent) markdown = rawContent;
		else if (topic) markdown = await topicToMarkdown(topic, exportReasoning);
		else if (messages && messages.length > 0) markdown = messagesToMarkdown(messages, exportReasoning);
		else if (message) markdown = exportReasoning ? messageToMarkdownWithReasoning(message) : messageToMarkdown(message);
		else markdown = "";
		let content = "";
		if (state.processingMethod !== ObsidianProcessingMethod.NEW_OR_OVERWRITE) content = `\n---\n${markdown}`;
		else content = `---\ntitle: ${state.title}\ncreated: ${state.createdAt}\nsource: ${state.source}\ntags: ${state.tags}\n---\n${markdown}`;
		if (content === "") {
			window.toast.error(i18n_default.t("chat.topics.export.obsidian_export_failed"));
			return;
		}
		await navigator.clipboard.writeText(content);
		exportMarkdownToObsidian({
			...state,
			folder: state.folder,
			vault: selectedVault
		});
		setOpen(false);
		resolve(true);
	};
	const [openState, setOpen] = (0, import_react.useState)(open);
	(0, import_react.useEffect)(() => {
		setOpen(open);
	}, [open]);
	const handleCancel = () => {
		setOpen(false);
		resolve(false);
	};
	const handleChange = (key, value) => {
		setState((prevState) => ({
			...prevState,
			[key]: value
		}));
	};
	const handleTitleInputChange = (newTitle) => {
		handleChange("title", newTitle);
		setHasTitleBeenManuallyEdited(true);
	};
	const handleVaultChange = (value) => {
		setSelectedVault(value);
		setState((prevState) => ({
			...prevState,
			folder: ""
		}));
	};
	const handleFileSelect = (value) => {
		handleChange("folder", value);
		if (value) {
			const selectedFile = files.find((file) => file.path === value);
			if (selectedFile) if (selectedFile.type === "markdown") {
				const fileName = selectedFile.name;
				handleChange("title", fileName.endsWith(".md") ? fileName.substring(0, fileName.length - 3) : fileName);
				setHasTitleBeenManuallyEdited(false);
				handleChange("processingMethod", ObsidianProcessingMethod.APPEND);
			} else {
				handleChange("processingMethod", ObsidianProcessingMethod.NEW_OR_OVERWRITE);
				if (!hasTitleBeenManuallyEdited) handleChange("title", title);
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(modal_default, {
		title: i18n_default.t("chat.topics.export.obsidian_atributes"),
		open: openState,
		onOk: handleOk,
		onCancel: handleCancel,
		width: 600,
		closable: true,
		maskClosable: true,
		centered: true,
		transitionName: "animation-move-down",
		okButtonProps: {
			type: "primary",
			disabled: vaults.length === 0 || loading || !!error
		},
		okText: i18n_default.t("chat.topics.export.obsidian_btn"),
		afterClose: () => setOpen(open),
		children: [error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(alert_default, {
			message: error,
			type: "error",
			showIcon: true,
			style: { marginBottom: 16 }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(form_default, {
			layout: "horizontal",
			labelCol: { span: 6 },
			wrapperCol: { span: 18 },
			labelAlign: "left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form_default.Item, {
					label: i18n_default.t("chat.topics.export.obsidian_title"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_default, {
						value: state.title,
						onChange: (e) => handleTitleInputChange(e.target.value),
						placeholder: i18n_default.t("chat.topics.export.obsidian_title_placeholder")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form_default.Item, {
					label: i18n_default.t("chat.topics.export.obsidian_vault"),
					children: vaults.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(select_default, {
						loading,
						value: selectedVault,
						onChange: handleVaultChange,
						placeholder: i18n_default.t("chat.topics.export.obsidian_vault_placeholder"),
						style: { width: "100%" },
						children: vaults.map((vault) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Option, {
							value: vault.name,
							children: vault.name
						}, vault.name))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(empty_default, {
						description: loading ? i18n_default.t("chat.topics.export.obsidian_loading") : i18n_default.t("chat.topics.export.obsidian_no_vaults"),
						image: empty_default.PRESENTED_IMAGE_SIMPLE
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form_default.Item, {
					label: i18n_default.t("chat.topics.export.obsidian_path"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(spin_default, {
						spinning: loading,
						children: selectedVault ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tree_select_default, {
							value: state.folder,
							onChange: handleFileSelect,
							placeholder: i18n_default.t("chat.topics.export.obsidian_path_placeholder"),
							style: { width: "100%" },
							showSearch: true,
							dropdownStyle: {
								maxHeight: 400,
								overflow: "auto"
							},
							treeDefaultExpandAll: false,
							treeNodeFilterProp: "title",
							treeData: fileTreeData
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(empty_default, {
							description: i18n_default.t("chat.topics.export.obsidian_select_vault_first"),
							image: empty_default.PRESENTED_IMAGE_SIMPLE
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form_default.Item, {
					label: i18n_default.t("chat.topics.export.obsidian_tags"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_default, {
						value: state.tags,
						onChange: (e) => handleChange("tags", e.target.value),
						placeholder: i18n_default.t("chat.topics.export.obsidian_tags_placeholder")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form_default.Item, {
					label: i18n_default.t("chat.topics.export.obsidian_created"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_default, {
						value: state.createdAt,
						onChange: (e) => handleChange("createdAt", e.target.value),
						placeholder: i18n_default.t("chat.topics.export.obsidian_created_placeholder")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form_default.Item, {
					label: i18n_default.t("chat.topics.export.obsidian_source"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(input_default, {
						value: state.source,
						onChange: (e) => handleChange("source", e.target.value),
						placeholder: i18n_default.t("chat.topics.export.obsidian_source_placeholder")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form_default.Item, {
					label: i18n_default.t("chat.topics.export.obsidian_operate"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(select_default, {
						value: state.processingMethod,
						onChange: (value) => handleChange("processingMethod", value),
						placeholder: i18n_default.t("chat.topics.export.obsidian_operate_placeholder"),
						allowClear: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Option, {
								value: ObsidianProcessingMethod.APPEND,
								children: i18n_default.t("chat.topics.export.obsidian_operate_append")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Option, {
								value: ObsidianProcessingMethod.PREPEND,
								children: i18n_default.t("chat.topics.export.obsidian_operate_prepend")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Option, {
								value: ObsidianProcessingMethod.NEW_OR_OVERWRITE,
								children: i18n_default.t("chat.topics.export.obsidian_operate_new_or_overwrite")
							})
						]
					})
				}),
				!rawContent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form_default.Item, {
					label: i18n_default.t("chat.topics.export.obsidian_reasoning"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(switch_default, {
						checked: exportReasoning,
						onChange: setExportReasoning
					})
				})
			]
		})]
	});
};
var ObsidianExportPopup = class ObsidianExportPopup {
	static hide() {
		TopView.hide("ObsidianExportPopup");
	}
	static show(options) {
		return new Promise((resolve) => {
			TopView.show(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopupContainer, {
				title: options.title,
				processingMethod: options.processingMethod,
				topic: options.topic,
				message: options.message,
				messages: options.messages,
				rawContent: options.rawContent,
				obsidianTags: "",
				open: true,
				resolve: (v) => {
					resolve(v);
					ObsidianExportPopup.hide();
				}
			}), "ObsidianExportPopup");
		});
	}
};
export { switch_default as n, form_default as r, ObsidianExportPopup as t };
