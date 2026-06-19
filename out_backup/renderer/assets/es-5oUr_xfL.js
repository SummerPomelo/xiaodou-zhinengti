import { n as __esmMin, o as __toESM, r as __export } from "./chunk-0ogMdkZ1.js";
import { $i as init_KeyCode, Ao as init_useLayoutEffect$1, Ar as init_isMobile, Ba as useMergedState, Bs as toArray$1, Dr as init_es$5, Er as es_default$5, Es as useMemo, Fs as init_defineProperty, Go as init_slicedToArray, Gs as require_classnames, Ho as canUseDom, Hs as init_typeof, Is as init_warning, Jo as _toConsumableArray, Ls as warning, Ms as _objectSpread2, Ns as init_objectSpread2, Or as es_default$6, Ps as _defineProperty, Qi as KeyCode_default, Ra as init_es$7, Ri as init_omit, Ro as _objectWithoutProperties, Rs as warning_default, Ss as init_ref, To as init_toArray, Ts as init_useMemo, Uo as init_canUseDom, Us as _extends, Vs as _typeof, Wa as useEvent, Wo as _slicedToArray, Ws as init_extends, Xo as _unsupportedIterableToArray, Yo as init_toConsumableArray, Zo as init_unsupportedIterableToArray, _a as es_default$3, as as _assertThisInitialized, ds as _inherits, fs as init_inherits, gs as init_classCallCheck, hs as _classCallCheck, ia as pickAttrs, jo as useLayoutEffect_default, jr as isMobile_default, kr as init_es$4, ms as init_createClass, ns as init_createSuper, os as init_assertThisInitialized, ps as _createClass, ra as init_pickAttrs, ts as _createSuper, wo as _toArray, ws as useComposeRef, ya as init_es$6, ys as composeRef, za as init_useMergedState, zi as omit, zo as init_objectWithoutProperties, zs as init_toArray$1 } from "./ImageViewer-uT4rjMQ4.js";
import { Ml as init_es$8, jl as es_default$2 } from "./store-Dxt9V8vr.js";
import { t as require_react } from "./react-CGLB_Dcb.js";
var import_react$47, import_classnames$10, TransBtn, TransBtn_default;
var init_TransBtn = __esmMin((() => {
	import_react$47 = /* @__PURE__ */ __toESM(require_react());
	import_classnames$10 = /* @__PURE__ */ __toESM(require_classnames());
	TransBtn = function TransBtn$1(props) {
		var className = props.className, customizeIcon = props.customizeIcon, customizeIconProps = props.customizeIconProps, children = props.children, _onMouseDown = props.onMouseDown, onClick = props.onClick;
		var icon = typeof customizeIcon === "function" ? customizeIcon(customizeIconProps) : customizeIcon;
		return /* @__PURE__ */ import_react$47.createElement("span", {
			className,
			onMouseDown: function onMouseDown(event) {
				event.preventDefault();
				_onMouseDown === null || _onMouseDown === void 0 || _onMouseDown(event);
			},
			style: {
				userSelect: "none",
				WebkitUserSelect: "none"
			},
			unselectable: "on",
			onClick,
			"aria-hidden": true
		}, icon !== void 0 ? icon : /* @__PURE__ */ import_react$47.createElement("span", { className: (0, import_classnames$10.default)(className.split(/\s+/).map(function(cls) {
			return "".concat(cls, "-icon");
		})) }, children));
	};
	TransBtn_default = TransBtn;
}));
var import_react$46, useAllowClear;
var init_useAllowClear = __esmMin((() => {
	init_typeof();
	init_TransBtn();
	import_react$46 = /* @__PURE__ */ __toESM(require_react());
	useAllowClear = function useAllowClear$1(prefixCls, onClearMouseDown, displayValues, allowClear, clearIcon) {
		var disabled = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
		var mergedSearchValue = arguments.length > 6 ? arguments[6] : void 0;
		var mode = arguments.length > 7 ? arguments[7] : void 0;
		var mergedClearIcon = import_react$46.useMemo(function() {
			if (_typeof(allowClear) === "object") return allowClear.clearIcon;
			if (clearIcon) return clearIcon;
		}, [allowClear, clearIcon]);
		return {
			allowClear: import_react$46.useMemo(function() {
				if (!disabled && !!allowClear && (displayValues.length || mergedSearchValue) && !(mode === "combobox" && mergedSearchValue === "")) return true;
				return false;
			}, [
				allowClear,
				disabled,
				displayValues.length,
				mergedSearchValue,
				mode
			]),
			clearIcon: /* @__PURE__ */ import_react$46.createElement(TransBtn_default, {
				className: "".concat(prefixCls, "-clear"),
				onMouseDown: onClearMouseDown,
				customizeIcon: mergedClearIcon
			}, "×")
		};
	};
}));
function useBaseProps() {
	return import_react$45.useContext(BaseSelectContext);
}
var import_react$45, BaseSelectContext;
var init_useBaseProps = __esmMin((() => {
	import_react$45 = /* @__PURE__ */ __toESM(require_react());
	BaseSelectContext = /* @__PURE__ */ import_react$45.createContext(null);
}));
function useDelayReset() {
	var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
	var _React$useState2 = _slicedToArray(import_react$44.useState(false), 2), bool = _React$useState2[0], setBool = _React$useState2[1];
	var delayRef = import_react$44.useRef(null);
	var cancelLatest = function cancelLatest$1() {
		window.clearTimeout(delayRef.current);
	};
	import_react$44.useEffect(function() {
		return cancelLatest;
	}, []);
	return [
		bool,
		function delaySetBool(value, callback) {
			cancelLatest();
			delayRef.current = window.setTimeout(function() {
				setBool(value);
				if (callback) callback();
			}, timeout);
		},
		cancelLatest
	];
}
var import_react$44;
var init_useDelayReset = __esmMin((() => {
	init_slicedToArray();
	import_react$44 = /* @__PURE__ */ __toESM(require_react());
}));
function useLock() {
	var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
	var lockRef = import_react$43.useRef(null);
	var timeoutRef = import_react$43.useRef(null);
	import_react$43.useEffect(function() {
		return function() {
			window.clearTimeout(timeoutRef.current);
		};
	}, []);
	function doLock(locked) {
		if (locked || lockRef.current === null) lockRef.current = locked;
		window.clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(function() {
			lockRef.current = null;
		}, duration);
	}
	return [function() {
		return lockRef.current;
	}, doLock];
}
var import_react$43;
var init_useLock = __esmMin((() => {
	import_react$43 = /* @__PURE__ */ __toESM(require_react());
}));
function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
	var propsRef = import_react$42.useRef(null);
	propsRef.current = {
		open,
		triggerOpen,
		customizedTrigger
	};
	import_react$42.useEffect(function() {
		function onGlobalMouseDown(event) {
			var _propsRef$current;
			if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) return;
			var target = event.target;
			if (target.shadowRoot && event.composed) target = event.composedPath()[0] || target;
			if (propsRef.current.open && elements().filter(function(element) {
				return element;
			}).every(function(element) {
				return !element.contains(target) && element !== target;
			})) propsRef.current.triggerOpen(false);
		}
		window.addEventListener("mousedown", onGlobalMouseDown);
		return function() {
			return window.removeEventListener("mousedown", onGlobalMouseDown);
		};
	}, []);
}
var import_react$42;
var init_useSelectTriggerControl = __esmMin((() => {
	import_react$42 = /* @__PURE__ */ __toESM(require_react());
}));
function isValidateOpenKey(currentKeyCode) {
	return currentKeyCode && ![
		KeyCode_default.ESC,
		KeyCode_default.SHIFT,
		KeyCode_default.BACKSPACE,
		KeyCode_default.TAB,
		KeyCode_default.WIN_KEY,
		KeyCode_default.ALT,
		KeyCode_default.META,
		KeyCode_default.WIN_KEY_RIGHT,
		KeyCode_default.CTRL,
		KeyCode_default.SEMICOLON,
		KeyCode_default.EQUALS,
		KeyCode_default.CAPS_LOCK,
		KeyCode_default.CONTEXT_MENU,
		KeyCode_default.F1,
		KeyCode_default.F2,
		KeyCode_default.F3,
		KeyCode_default.F4,
		KeyCode_default.F5,
		KeyCode_default.F6,
		KeyCode_default.F7,
		KeyCode_default.F8,
		KeyCode_default.F9,
		KeyCode_default.F10,
		KeyCode_default.F11,
		KeyCode_default.F12
	].includes(currentKeyCode);
}
var init_keyUtil$1 = __esmMin((() => {
	init_KeyCode();
}));
var import_react$41, import_classnames$9, RefInput, Input_default;
var init_Input = __esmMin((() => {
	init_objectSpread2();
	import_react$41 = /* @__PURE__ */ __toESM(require_react());
	import_classnames$9 = /* @__PURE__ */ __toESM(require_classnames());
	init_ref();
	init_warning();
	RefInput = /* @__PURE__ */ import_react$41.forwardRef(function Input(props, ref) {
		var _inputNode2;
		var prefixCls = props.prefixCls, id = props.id, inputElement = props.inputElement, disabled = props.disabled, tabIndex = props.tabIndex, autoFocus = props.autoFocus, autoComplete = props.autoComplete, editable = props.editable, activeDescendantId = props.activeDescendantId, value = props.value, maxLength = props.maxLength, _onKeyDown = props.onKeyDown, _onMouseDown = props.onMouseDown, _onChange = props.onChange, onPaste = props.onPaste, _onCompositionStart = props.onCompositionStart, _onCompositionEnd = props.onCompositionEnd, _onBlur = props.onBlur, open = props.open, attrs = props.attrs;
		var inputNode = inputElement || /* @__PURE__ */ import_react$41.createElement("input", null);
		var _inputNode = inputNode, originRef = _inputNode.ref, originProps = _inputNode.props;
		var onOriginKeyDown = originProps.onKeyDown, onOriginChange = originProps.onChange, onOriginMouseDown = originProps.onMouseDown, onOriginCompositionStart = originProps.onCompositionStart, onOriginCompositionEnd = originProps.onCompositionEnd, onOriginBlur = originProps.onBlur, style = originProps.style;
		"maxLength" in inputNode.props;
		inputNode = /* @__PURE__ */ import_react$41.cloneElement(inputNode, _objectSpread2(_objectSpread2(_objectSpread2({ type: "search" }, originProps), {}, {
			id,
			ref: composeRef(ref, originRef),
			disabled,
			tabIndex,
			autoComplete: autoComplete || "off",
			autoFocus,
			className: (0, import_classnames$9.default)("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 || (_inputNode2 = _inputNode2.props) === null || _inputNode2 === void 0 ? void 0 : _inputNode2.className),
			role: "combobox",
			"aria-expanded": open || false,
			"aria-haspopup": "listbox",
			"aria-owns": "".concat(id, "_list"),
			"aria-autocomplete": "list",
			"aria-controls": "".concat(id, "_list"),
			"aria-activedescendant": open ? activeDescendantId : void 0
		}, attrs), {}, {
			value: editable ? value : "",
			maxLength,
			readOnly: !editable,
			unselectable: !editable ? "on" : null,
			style: _objectSpread2(_objectSpread2({}, style), {}, { opacity: editable ? null : 0 }),
			onKeyDown: function onKeyDown(event) {
				_onKeyDown(event);
				if (onOriginKeyDown) onOriginKeyDown(event);
			},
			onMouseDown: function onMouseDown(event) {
				_onMouseDown(event);
				if (onOriginMouseDown) onOriginMouseDown(event);
			},
			onChange: function onChange(event) {
				_onChange(event);
				if (onOriginChange) onOriginChange(event);
			},
			onCompositionStart: function onCompositionStart(event) {
				_onCompositionStart(event);
				if (onOriginCompositionStart) onOriginCompositionStart(event);
			},
			onCompositionEnd: function onCompositionEnd(event) {
				_onCompositionEnd(event);
				if (onOriginCompositionEnd) onOriginCompositionEnd(event);
			},
			onPaste,
			onBlur: function onBlur(event) {
				_onBlur(event);
				if (onOriginBlur) onOriginBlur(event);
			}
		}));
		return inputNode;
	});
	Input_default = RefInput;
}));
function toArray$2(value) {
	if (Array.isArray(value)) return value;
	return value !== void 0 ? [value] : [];
}
function hasValue(value) {
	return value !== void 0 && value !== null;
}
function isComboNoValue(value) {
	return !value && value !== 0;
}
function isTitleType$1(title) {
	return ["string", "number"].includes(_typeof(title));
}
function getTitle(item) {
	var title = void 0;
	if (item) {
		if (isTitleType$1(item.title)) title = item.title.toString();
		else if (isTitleType$1(item.label)) title = item.label.toString();
	}
	return title;
}
var isClient, isBrowserClient$1;
var init_commonUtil = __esmMin((() => {
	init_typeof();
	isClient = typeof window !== "undefined" && window.document && window.document.documentElement;
	isBrowserClient$1 = isClient;
}));
function useLayoutEffect(effect, deps) {
	if (isBrowserClient$1)
 /* istanbul ignore next */
	import_react$40.useLayoutEffect(effect, deps);
	else import_react$40.useEffect(effect, deps);
}
var import_react$40;
var init_useLayoutEffect = __esmMin((() => {
	import_react$40 = /* @__PURE__ */ __toESM(require_react());
	init_commonUtil();
}));
function itemKey$1(value) {
	var _value$key;
	return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}
var import_react$38, import_react$39, import_classnames$8, onPreventMouseDown, SelectSelector, MultipleSelector_default;
var init_MultipleSelector = __esmMin((() => {
	init_defineProperty();
	init_slicedToArray();
	import_react$38 = /* @__PURE__ */ __toESM(require_react());
	import_react$39 = /* @__PURE__ */ __toESM(require_react());
	import_classnames$8 = /* @__PURE__ */ __toESM(require_classnames());
	init_pickAttrs();
	init_es$4();
	init_TransBtn();
	init_Input();
	init_useLayoutEffect();
	init_commonUtil();
	onPreventMouseDown = function onPreventMouseDown$1(event) {
		event.preventDefault();
		event.stopPropagation();
	};
	SelectSelector = function SelectSelector$1(props) {
		var id = props.id, prefixCls = props.prefixCls, values = props.values, open = props.open, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, inputRef = props.inputRef, placeholder = props.placeholder, disabled = props.disabled, mode = props.mode, showSearch = props.showSearch, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, tabIndex = props.tabIndex, removeIcon = props.removeIcon, maxTagCount = props.maxTagCount, maxTagTextLength = props.maxTagTextLength, _props$maxTagPlacehol = props.maxTagPlaceholder, maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function(omittedValues) {
			return "+ ".concat(omittedValues.length, " ...");
		} : _props$maxTagPlacehol, tagRender = props.tagRender, onToggleOpen = props.onToggleOpen, onRemove = props.onRemove, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd, onInputBlur = props.onInputBlur;
		var measureRef = import_react$38.useRef(null);
		var _useState2 = _slicedToArray((0, import_react$39.useState)(0), 2), inputWidth = _useState2[0], setInputWidth = _useState2[1];
		var _useState4 = _slicedToArray((0, import_react$39.useState)(false), 2), focused = _useState4[0], setFocused = _useState4[1];
		var selectionPrefixCls = "".concat(prefixCls, "-selection");
		var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === "tags" ? searchValue : "";
		var inputEditable = mode === "tags" || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused);
		useLayoutEffect(function() {
			setInputWidth(measureRef.current.scrollWidth);
		}, [inputValue]);
		var defaultRenderSelector = function defaultRenderSelector$1(item, content, itemDisabled, closable, onClose) {
			return /* @__PURE__ */ import_react$38.createElement("span", {
				title: getTitle(item),
				className: (0, import_classnames$8.default)("".concat(selectionPrefixCls, "-item"), _defineProperty({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled))
			}, /* @__PURE__ */ import_react$38.createElement("span", { className: "".concat(selectionPrefixCls, "-item-content") }, content), closable && /* @__PURE__ */ import_react$38.createElement(TransBtn_default, {
				className: "".concat(selectionPrefixCls, "-item-remove"),
				onMouseDown: onPreventMouseDown,
				onClick: onClose,
				customizeIcon: removeIcon
			}, "×"));
		};
		var customizeRenderSelector = function customizeRenderSelector$1(value, content, itemDisabled, closable, onClose, isMaxTag) {
			return /* @__PURE__ */ import_react$38.createElement("span", { onMouseDown: function onMouseDown(e) {
				onPreventMouseDown(e);
				onToggleOpen(!open);
			} }, tagRender({
				label: content,
				value,
				disabled: itemDisabled,
				closable,
				onClose,
				isMaxTag: !!isMaxTag
			}));
		};
		var renderItem = function renderItem$1(valueItem) {
			var itemDisabled = valueItem.disabled, label = valueItem.label, value = valueItem.value;
			var closable = !disabled && !itemDisabled;
			var displayLabel = label;
			if (typeof maxTagTextLength === "number") {
				if (typeof label === "string" || typeof label === "number") {
					var strLabel = String(displayLabel);
					if (strLabel.length > maxTagTextLength) displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
				}
			}
			var onClose = function onClose$1(event) {
				if (event) event.stopPropagation();
				onRemove(valueItem);
			};
			return typeof tagRender === "function" ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
		};
		var renderRest = function renderRest$1(omittedValues) {
			if (!values.length) return null;
			var content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
			return typeof tagRender === "function" ? customizeRenderSelector(void 0, content, false, false, void 0, true) : defaultRenderSelector({ title: content }, content, false);
		};
		var inputNode = /* @__PURE__ */ import_react$38.createElement("div", {
			className: "".concat(selectionPrefixCls, "-search"),
			style: { width: inputWidth },
			onFocus: function onFocus() {
				setFocused(true);
			},
			onBlur: function onBlur() {
				setFocused(false);
			}
		}, /* @__PURE__ */ import_react$38.createElement(Input_default, {
			ref: inputRef,
			open,
			prefixCls,
			id,
			inputElement: null,
			disabled,
			autoFocus,
			autoComplete,
			editable: inputEditable,
			activeDescendantId,
			value: inputValue,
			onKeyDown: onInputKeyDown,
			onMouseDown: onInputMouseDown,
			onChange: onInputChange,
			onPaste: onInputPaste,
			onCompositionStart: onInputCompositionStart,
			onCompositionEnd: onInputCompositionEnd,
			onBlur: onInputBlur,
			tabIndex,
			attrs: pickAttrs(props, true)
		}), /* @__PURE__ */ import_react$38.createElement("span", {
			ref: measureRef,
			className: "".concat(selectionPrefixCls, "-search-mirror"),
			"aria-hidden": true
		}, inputValue, "\xA0"));
		var selectionNode = /* @__PURE__ */ import_react$38.createElement(es_default$6, {
			prefixCls: "".concat(selectionPrefixCls, "-overflow"),
			data: values,
			renderItem,
			renderRest,
			suffix: inputNode,
			itemKey: itemKey$1,
			maxCount: maxTagCount
		});
		return /* @__PURE__ */ import_react$38.createElement("span", { className: "".concat(selectionPrefixCls, "-wrap") }, selectionNode, !values.length && !inputValue && /* @__PURE__ */ import_react$38.createElement("span", { className: "".concat(selectionPrefixCls, "-placeholder") }, placeholder));
	};
	MultipleSelector_default = SelectSelector;
}));
var import_react$37, SingleSelector, SingleSelector_default;
var init_SingleSelector = __esmMin((() => {
	init_slicedToArray();
	import_react$37 = /* @__PURE__ */ __toESM(require_react());
	init_pickAttrs();
	init_Input();
	init_commonUtil();
	SingleSelector = function SingleSelector$1(props) {
		var inputElement = props.inputElement, prefixCls = props.prefixCls, id = props.id, inputRef = props.inputRef, disabled = props.disabled, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, mode = props.mode, open = props.open, values = props.values, placeholder = props.placeholder, tabIndex = props.tabIndex, showSearch = props.showSearch, searchValue = props.searchValue, activeValue = props.activeValue, maxLength = props.maxLength, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd, onInputBlur = props.onInputBlur, title = props.title;
		var _React$useState2 = _slicedToArray(import_react$37.useState(false), 2), inputChanged = _React$useState2[0], setInputChanged = _React$useState2[1];
		var combobox = mode === "combobox";
		var inputEditable = combobox || showSearch;
		var item = values[0];
		var inputValue = searchValue || "";
		if (combobox && activeValue && !inputChanged) inputValue = activeValue;
		import_react$37.useEffect(function() {
			if (combobox) setInputChanged(false);
		}, [combobox, activeValue]);
		var hasTextInput = mode !== "combobox" && !open && !showSearch ? false : !!inputValue;
		var selectionTitle = title === void 0 ? getTitle(item) : title;
		var placeholderNode = import_react$37.useMemo(function() {
			if (item) return null;
			return /* @__PURE__ */ import_react$37.createElement("span", {
				className: "".concat(prefixCls, "-selection-placeholder"),
				style: hasTextInput ? { visibility: "hidden" } : void 0
			}, placeholder);
		}, [
			item,
			hasTextInput,
			placeholder,
			prefixCls
		]);
		return /* @__PURE__ */ import_react$37.createElement("span", { className: "".concat(prefixCls, "-selection-wrap") }, /* @__PURE__ */ import_react$37.createElement("span", { className: "".concat(prefixCls, "-selection-search") }, /* @__PURE__ */ import_react$37.createElement(Input_default, {
			ref: inputRef,
			prefixCls,
			id,
			open,
			inputElement,
			disabled,
			autoFocus,
			autoComplete,
			editable: inputEditable,
			activeDescendantId,
			value: inputValue,
			onKeyDown: onInputKeyDown,
			onMouseDown: onInputMouseDown,
			onChange: function onChange(e) {
				setInputChanged(true);
				onInputChange(e);
			},
			onPaste: onInputPaste,
			onCompositionStart: onInputCompositionStart,
			onCompositionEnd: onInputCompositionEnd,
			onBlur: onInputBlur,
			tabIndex,
			attrs: pickAttrs(props, true),
			maxLength: combobox ? maxLength : void 0
		})), !combobox && item ? /* @__PURE__ */ import_react$37.createElement("span", {
			className: "".concat(prefixCls, "-selection-item"),
			title: selectionTitle,
			style: hasTextInput ? { visibility: "hidden" } : void 0
		}, item.label) : null, placeholderNode);
	};
	SingleSelector_default = SingleSelector;
}));
var import_react$35, import_react$36, ForwardSelector, Selector_default;
var init_Selector = __esmMin((() => {
	init_extends();
	init_slicedToArray();
	init_KeyCode();
	import_react$35 = /* @__PURE__ */ __toESM(require_react());
	import_react$36 = /* @__PURE__ */ __toESM(require_react());
	init_useLock();
	init_keyUtil$1();
	init_MultipleSelector();
	init_SingleSelector();
	ForwardSelector = /* @__PURE__ */ import_react$35.forwardRef(function Selector(props, ref) {
		var inputRef = (0, import_react$36.useRef)(null);
		var compositionStatusRef = (0, import_react$36.useRef)(false);
		var prefixCls = props.prefixCls, open = props.open, mode = props.mode, showSearch = props.showSearch, tokenWithEnter = props.tokenWithEnter, disabled = props.disabled, prefix = props.prefix, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSubmit = props.onSearchSubmit, onToggleOpen = props.onToggleOpen, onInputKeyDown = props.onInputKeyDown, onInputBlur = props.onInputBlur, domRef = props.domRef;
		import_react$35.useImperativeHandle(ref, function() {
			return {
				focus: function focus(options) {
					inputRef.current.focus(options);
				},
				blur: function blur() {
					inputRef.current.blur();
				}
			};
		});
		var _useLock2 = _slicedToArray(useLock(0), 2), getInputMouseDown = _useLock2[0], setInputMouseDown = _useLock2[1];
		var onInternalInputKeyDown = function onInternalInputKeyDown$1(event) {
			var which = event.which;
			var isTextAreaElement = inputRef.current instanceof HTMLTextAreaElement;
			if (!isTextAreaElement && open && (which === KeyCode_default.UP || which === KeyCode_default.DOWN)) event.preventDefault();
			if (onInputKeyDown) onInputKeyDown(event);
			if (which === KeyCode_default.ENTER && mode === "tags" && !compositionStatusRef.current && !open) onSearchSubmit === null || onSearchSubmit === void 0 || onSearchSubmit(event.target.value);
			if (isTextAreaElement && !open && ~[
				KeyCode_default.UP,
				KeyCode_default.DOWN,
				KeyCode_default.LEFT,
				KeyCode_default.RIGHT
			].indexOf(which)) return;
			if (isValidateOpenKey(which)) onToggleOpen(true);
		};
		var onInternalInputMouseDown = function onInternalInputMouseDown$1() {
			setInputMouseDown(true);
		};
		var pastedTextRef = (0, import_react$36.useRef)(null);
		var triggerOnSearch = function triggerOnSearch$1(value) {
			if (onSearch(value, true, compositionStatusRef.current) !== false) onToggleOpen(true);
		};
		var onInputCompositionStart = function onInputCompositionStart$1() {
			compositionStatusRef.current = true;
		};
		var onInputCompositionEnd = function onInputCompositionEnd$1(e) {
			compositionStatusRef.current = false;
			if (mode !== "combobox") triggerOnSearch(e.target.value);
		};
		var onInputChange = function onInputChange$1(event) {
			var value = event.target.value;
			if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
				var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
				value = value.replace(replacedText, pastedTextRef.current);
			}
			pastedTextRef.current = null;
			triggerOnSearch(value);
		};
		var onInputPaste = function onInputPaste$1(e) {
			var clipboardData = e.clipboardData;
			pastedTextRef.current = (clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData("text")) || "";
		};
		var onClick = function onClick$1(_ref) {
			if (_ref.target !== inputRef.current) if (document.body.style.msTouchAction !== void 0) setTimeout(function() {
				inputRef.current.focus();
			});
			else inputRef.current.focus();
		};
		var onMouseDown = function onMouseDown$1(event) {
			var inputMouseDown = getInputMouseDown();
			if (event.target !== inputRef.current && !inputMouseDown && !(mode === "combobox" && disabled)) event.preventDefault();
			if (mode !== "combobox" && (!showSearch || !inputMouseDown) || !open) {
				if (open && autoClearSearchValue !== false) onSearch("", true, false);
				onToggleOpen();
			}
		};
		var sharedProps = {
			inputRef,
			onInputKeyDown: onInternalInputKeyDown,
			onInputMouseDown: onInternalInputMouseDown,
			onInputChange,
			onInputPaste,
			onInputCompositionStart,
			onInputCompositionEnd,
			onInputBlur
		};
		var selectNode = mode === "multiple" || mode === "tags" ? /* @__PURE__ */ import_react$35.createElement(MultipleSelector_default, _extends({}, props, sharedProps)) : /* @__PURE__ */ import_react$35.createElement(SingleSelector_default, _extends({}, props, sharedProps));
		return /* @__PURE__ */ import_react$35.createElement("div", {
			ref: domRef,
			className: "".concat(prefixCls, "-selector"),
			onClick,
			onMouseDown
		}, prefix && /* @__PURE__ */ import_react$35.createElement("div", { className: "".concat(prefixCls, "-prefix") }, prefix), selectNode);
	});
	Selector_default = ForwardSelector;
}));
var import_classnames$7, import_react$34, _excluded$11, getBuiltInPlacements, RefSelectTrigger, SelectTrigger_default;
var init_SelectTrigger = __esmMin((() => {
	init_extends();
	init_defineProperty();
	init_objectSpread2();
	init_objectWithoutProperties();
	init_es$5();
	import_classnames$7 = /* @__PURE__ */ __toESM(require_classnames());
	import_react$34 = /* @__PURE__ */ __toESM(require_react());
	_excluded$11 = [
		"prefixCls",
		"disabled",
		"visible",
		"children",
		"popupElement",
		"animation",
		"transitionName",
		"dropdownStyle",
		"dropdownClassName",
		"direction",
		"placement",
		"builtinPlacements",
		"dropdownMatchSelectWidth",
		"dropdownRender",
		"dropdownAlign",
		"getPopupContainer",
		"empty",
		"getTriggerDOMNode",
		"onPopupVisibleChange",
		"onPopupMouseEnter"
	];
	getBuiltInPlacements = function getBuiltInPlacements$1(dropdownMatchSelectWidth) {
		var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
		return {
			bottomLeft: {
				points: ["tl", "bl"],
				offset: [0, 4],
				overflow: {
					adjustX,
					adjustY: 1
				},
				htmlRegion: "scroll"
			},
			bottomRight: {
				points: ["tr", "br"],
				offset: [0, 4],
				overflow: {
					adjustX,
					adjustY: 1
				},
				htmlRegion: "scroll"
			},
			topLeft: {
				points: ["bl", "tl"],
				offset: [0, -4],
				overflow: {
					adjustX,
					adjustY: 1
				},
				htmlRegion: "scroll"
			},
			topRight: {
				points: ["br", "tr"],
				offset: [0, -4],
				overflow: {
					adjustX,
					adjustY: 1
				},
				htmlRegion: "scroll"
			}
		};
	};
	RefSelectTrigger = /* @__PURE__ */ import_react$34.forwardRef(function SelectTrigger(props, ref) {
		var prefixCls = props.prefixCls;
		props.disabled;
		var visible = props.visible, children = props.children, popupElement = props.popupElement, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, _props$direction = props.direction, direction = _props$direction === void 0 ? "ltr" : _props$direction, placement = props.placement, builtinPlacements = props.builtinPlacements, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, getPopupContainer = props.getPopupContainer, empty = props.empty, getTriggerDOMNode = props.getTriggerDOMNode, onPopupVisibleChange = props.onPopupVisibleChange, onPopupMouseEnter = props.onPopupMouseEnter, restProps = _objectWithoutProperties(props, _excluded$11);
		var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
		var popupNode = popupElement;
		if (dropdownRender) popupNode = dropdownRender(popupElement);
		var mergedBuiltinPlacements = import_react$34.useMemo(function() {
			return builtinPlacements || getBuiltInPlacements(dropdownMatchSelectWidth);
		}, [builtinPlacements, dropdownMatchSelectWidth]);
		var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;
		var isNumberPopupWidth = typeof dropdownMatchSelectWidth === "number";
		var stretch = import_react$34.useMemo(function() {
			if (isNumberPopupWidth) return null;
			return dropdownMatchSelectWidth === false ? "minWidth" : "width";
		}, [dropdownMatchSelectWidth, isNumberPopupWidth]);
		var popupStyle = dropdownStyle;
		if (isNumberPopupWidth) popupStyle = _objectSpread2(_objectSpread2({}, popupStyle), {}, { width: dropdownMatchSelectWidth });
		var triggerPopupRef = import_react$34.useRef(null);
		import_react$34.useImperativeHandle(ref, function() {
			return { getPopupElement: function getPopupElement() {
				var _triggerPopupRef$curr;
				return (_triggerPopupRef$curr = triggerPopupRef.current) === null || _triggerPopupRef$curr === void 0 ? void 0 : _triggerPopupRef$curr.popupElement;
			} };
		});
		return /* @__PURE__ */ import_react$34.createElement(es_default$5, _extends({}, restProps, {
			showAction: onPopupVisibleChange ? ["click"] : [],
			hideAction: onPopupVisibleChange ? ["click"] : [],
			popupPlacement: placement || (direction === "rtl" ? "bottomRight" : "bottomLeft"),
			builtinPlacements: mergedBuiltinPlacements,
			prefixCls: dropdownPrefixCls,
			popupTransitionName: mergedTransitionName,
			popup: /* @__PURE__ */ import_react$34.createElement("div", { onMouseEnter: onPopupMouseEnter }, popupNode),
			ref: triggerPopupRef,
			stretch,
			popupAlign: dropdownAlign,
			popupVisible: visible,
			getPopupContainer,
			popupClassName: (0, import_classnames$7.default)(dropdownClassName, _defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
			popupStyle,
			getTriggerDOMNode,
			onPopupVisibleChange
		}), children);
	});
	SelectTrigger_default = RefSelectTrigger;
}));
function getKey$1(data, index) {
	var key = data.key;
	var value;
	if ("value" in data) value = data.value;
	if (key !== null && key !== void 0) return key;
	if (value !== void 0) return value;
	return "rc-index-key-".concat(index);
}
function isValidCount(value) {
	return typeof value !== "undefined" && !Number.isNaN(value);
}
function fillFieldNames$2(fieldNames, childrenAsData) {
	var _ref = fieldNames || {}, label = _ref.label, value = _ref.value, options = _ref.options, groupLabel = _ref.groupLabel;
	var mergedLabel = label || (childrenAsData ? "children" : "label");
	return {
		label: mergedLabel,
		value: value || "value",
		options: options || "options",
		groupLabel: groupLabel || mergedLabel
	};
}
function flattenOptions(options) {
	var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fieldNames = _ref2.fieldNames, childrenAsData = _ref2.childrenAsData;
	var flattenList = [];
	var _fillFieldNames = fillFieldNames$2(fieldNames, false), fieldLabel = _fillFieldNames.label, fieldValue = _fillFieldNames.value, fieldOptions = _fillFieldNames.options, groupLabel = _fillFieldNames.groupLabel;
	function dig(list, isGroupOption) {
		if (!Array.isArray(list)) return;
		list.forEach(function(data) {
			if (isGroupOption || !(fieldOptions in data)) {
				var value = data[fieldValue];
				flattenList.push({
					key: getKey$1(data, flattenList.length),
					groupOption: isGroupOption,
					data,
					label: data[fieldLabel],
					value
				});
			} else {
				var grpLabel = data[groupLabel];
				if (grpLabel === void 0 && childrenAsData) grpLabel = data.label;
				flattenList.push({
					key: getKey$1(data, flattenList.length),
					group: true,
					data,
					label: grpLabel
				});
				dig(data[fieldOptions], true);
			}
		});
	}
	dig(options, false);
	return flattenList;
}
function injectPropsWithOption(option) {
	var newOption = _objectSpread2({}, option);
	if (!("props" in newOption)) Object.defineProperty(newOption, "props", { get: function get() {
		warning_default(false, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`.");
		return newOption;
	} });
	return newOption;
}
var getSeparatedContent;
var init_valueUtil$1 = __esmMin((() => {
	init_toConsumableArray();
	init_toArray();
	init_objectSpread2();
	init_warning();
	getSeparatedContent = function getSeparatedContent$1(text, tokens, end) {
		if (!tokens || !tokens.length) return null;
		var match = false;
		var list = function separate(str, _ref3) {
			var _ref4 = _toArray(_ref3), token = _ref4[0], restTokens = _ref4.slice(1);
			if (!token) return [str];
			var list$1 = str.split(token);
			match = match || list$1.length > 1;
			return list$1.reduce(function(prevList, unitStr) {
				return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
			}, []).filter(Boolean);
		}(text, tokens);
		if (match) return typeof end !== "undefined" ? list.slice(0, end) : list;
		else return null;
	};
}));
var import_react$33, SelectContext, SelectContext_default;
var init_SelectContext = __esmMin((() => {
	import_react$33 = /* @__PURE__ */ __toESM(require_react());
	SelectContext = /* @__PURE__ */ import_react$33.createContext(null);
	SelectContext_default = SelectContext;
}));
function Polite(props) {
	var visible = props.visible, values = props.values;
	if (!visible) return null;
	var MAX_COUNT = 50;
	return /* @__PURE__ */ import_react$32.createElement("span", {
		"aria-live": "polite",
		style: {
			width: 0,
			height: 0,
			position: "absolute",
			overflow: "hidden",
			opacity: 0
		}
	}, "".concat(values.slice(0, MAX_COUNT).map(function(_ref) {
		var label = _ref.label, value = _ref.value;
		return ["number", "string"].includes(_typeof(label)) ? label : value;
	}).join(", ")), values.length > MAX_COUNT ? ", ..." : null);
}
var import_react$32;
var init_Polite = __esmMin((() => {
	init_typeof();
	import_react$32 = /* @__PURE__ */ __toESM(require_react());
}));
var import_classnames$6, import_react$31, _excluded$10, DEFAULT_OMIT_PROPS, isMultiple, BaseSelect, BaseSelect_default;
var init_BaseSelect = __esmMin((() => {
	init_extends();
	init_defineProperty();
	init_toConsumableArray();
	init_slicedToArray();
	init_objectSpread2();
	init_objectWithoutProperties();
	import_classnames$6 = /* @__PURE__ */ __toESM(require_classnames());
	init_useLayoutEffect$1();
	init_useMergedState();
	init_isMobile();
	init_ref();
	import_react$31 = /* @__PURE__ */ __toESM(require_react());
	init_useAllowClear();
	init_useBaseProps();
	init_useDelayReset();
	init_useLock();
	init_useSelectTriggerControl();
	init_Selector();
	init_SelectTrigger();
	init_TransBtn();
	init_valueUtil$1();
	init_SelectContext();
	init_Polite();
	_excluded$10 = [
		"id",
		"prefixCls",
		"className",
		"showSearch",
		"tagRender",
		"direction",
		"omitDomProps",
		"displayValues",
		"onDisplayValuesChange",
		"emptyOptions",
		"notFoundContent",
		"onClear",
		"mode",
		"disabled",
		"loading",
		"getInputElement",
		"getRawInputElement",
		"open",
		"defaultOpen",
		"onDropdownVisibleChange",
		"activeValue",
		"onActiveValueChange",
		"activeDescendantId",
		"searchValue",
		"autoClearSearchValue",
		"onSearch",
		"onSearchSplit",
		"tokenSeparators",
		"allowClear",
		"prefix",
		"suffixIcon",
		"clearIcon",
		"OptionList",
		"animation",
		"transitionName",
		"dropdownStyle",
		"dropdownClassName",
		"dropdownMatchSelectWidth",
		"dropdownRender",
		"dropdownAlign",
		"placement",
		"builtinPlacements",
		"getPopupContainer",
		"showAction",
		"onFocus",
		"onBlur",
		"onKeyUp",
		"onKeyDown",
		"onMouseDown"
	];
	DEFAULT_OMIT_PROPS = [
		"value",
		"onChange",
		"removeIcon",
		"placeholder",
		"autoFocus",
		"maxTagCount",
		"maxTagTextLength",
		"maxTagPlaceholder",
		"choiceTransitionName",
		"onInputKeyDown",
		"onPopupScroll",
		"tabIndex"
	];
	isMultiple = function isMultiple$1(mode) {
		return mode === "tags" || mode === "multiple";
	};
	BaseSelect = /* @__PURE__ */ import_react$31.forwardRef(function(props, ref) {
		var _customizeRawInputEle;
		var id = props.id, prefixCls = props.prefixCls, className = props.className, showSearch = props.showSearch, tagRender = props.tagRender, direction = props.direction, omitDomProps = props.omitDomProps, displayValues = props.displayValues, onDisplayValuesChange = props.onDisplayValuesChange, emptyOptions = props.emptyOptions, _props$notFoundConten = props.notFoundContent, notFoundContent = _props$notFoundConten === void 0 ? "Not Found" : _props$notFoundConten, onClear = props.onClear, mode = props.mode, disabled = props.disabled, loading = props.loading, getInputElement = props.getInputElement, getRawInputElement = props.getRawInputElement, open = props.open, defaultOpen = props.defaultOpen, onDropdownVisibleChange = props.onDropdownVisibleChange, activeValue = props.activeValue, onActiveValueChange = props.onActiveValueChange, activeDescendantId = props.activeDescendantId, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSplit = props.onSearchSplit, tokenSeparators = props.tokenSeparators, allowClear = props.allowClear, prefix = props.prefix, suffixIcon = props.suffixIcon, clearIcon = props.clearIcon, OptionList = props.OptionList, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, placement = props.placement, builtinPlacements = props.builtinPlacements, getPopupContainer = props.getPopupContainer, _props$showAction = props.showAction, showAction = _props$showAction === void 0 ? [] : _props$showAction, onFocus = props.onFocus, onBlur = props.onBlur, onKeyUp = props.onKeyUp, onKeyDown = props.onKeyDown, onMouseDown = props.onMouseDown, restProps = _objectWithoutProperties(props, _excluded$10);
		var multiple = isMultiple(mode);
		var mergedShowSearch = (showSearch !== void 0 ? showSearch : multiple) || mode === "combobox";
		var domProps = _objectSpread2({}, restProps);
		DEFAULT_OMIT_PROPS.forEach(function(propName) {
			delete domProps[propName];
		});
		omitDomProps === null || omitDomProps === void 0 || omitDomProps.forEach(function(propName) {
			delete domProps[propName];
		});
		var _React$useState2 = _slicedToArray(import_react$31.useState(false), 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
		import_react$31.useEffect(function() {
			setMobile(isMobile_default());
		}, []);
		var containerRef = import_react$31.useRef(null);
		var selectorDomRef = import_react$31.useRef(null);
		var triggerRef = import_react$31.useRef(null);
		var selectorRef = import_react$31.useRef(null);
		var listRef = import_react$31.useRef(null);
		var blurRef = import_react$31.useRef(false);
		var _useDelayReset2 = _slicedToArray(useDelayReset(), 3), mockFocused = _useDelayReset2[0], setMockFocused = _useDelayReset2[1], cancelSetMockFocused = _useDelayReset2[2];
		import_react$31.useImperativeHandle(ref, function() {
			var _selectorRef$current, _selectorRef$current2;
			return {
				focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
				blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
				scrollTo: function scrollTo(arg) {
					var _listRef$current;
					return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
				},
				nativeElement: containerRef.current || selectorDomRef.current
			};
		});
		var mergedSearchValue = import_react$31.useMemo(function() {
			var _displayValues$;
			if (mode !== "combobox") return searchValue;
			var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
			return typeof val === "string" || typeof val === "number" ? String(val) : "";
		}, [
			searchValue,
			mode,
			displayValues
		]);
		var customizeInputElement = mode === "combobox" && typeof getInputElement === "function" && getInputElement() || null;
		var customizeRawInputElement = typeof getRawInputElement === "function" && getRawInputElement();
		var customizeRawInputRef = useComposeRef(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 || (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);
		var _React$useState4 = _slicedToArray(import_react$31.useState(false), 2), rendered = _React$useState4[0], setRendered = _React$useState4[1];
		useLayoutEffect_default(function() {
			setRendered(true);
		}, []);
		var _useMergedState2 = _slicedToArray(useMergedState(false, {
			defaultValue: defaultOpen,
			value: open
		}), 2), innerOpen = _useMergedState2[0], setInnerOpen = _useMergedState2[1];
		var mergedOpen = rendered ? innerOpen : false;
		var emptyListContent = !notFoundContent && emptyOptions;
		if (disabled || emptyListContent && mergedOpen && mode === "combobox") mergedOpen = false;
		var triggerOpen = emptyListContent ? false : mergedOpen;
		var onToggleOpen = import_react$31.useCallback(function(newOpen) {
			var nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen;
			if (!disabled) {
				setInnerOpen(nextOpen);
				if (mergedOpen !== nextOpen) onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 || onDropdownVisibleChange(nextOpen);
			}
		}, [
			disabled,
			mergedOpen,
			setInnerOpen,
			onDropdownVisibleChange
		]);
		var tokenWithEnter = import_react$31.useMemo(function() {
			return (tokenSeparators || []).some(function(tokenSeparator) {
				return ["\n", "\r\n"].includes(tokenSeparator);
			});
		}, [tokenSeparators]);
		var _ref = import_react$31.useContext(SelectContext_default) || {}, maxCount = _ref.maxCount, rawValues = _ref.rawValues;
		var onInternalSearch = function onInternalSearch$1(searchText, fromTyping, isCompositing) {
			if (multiple && isValidCount(maxCount) && (rawValues === null || rawValues === void 0 ? void 0 : rawValues.size) >= maxCount) return;
			var ret = true;
			var newSearchText = searchText;
			onActiveValueChange === null || onActiveValueChange === void 0 || onActiveValueChange(null);
			var separatedList = getSeparatedContent(searchText, tokenSeparators, isValidCount(maxCount) ? maxCount - rawValues.size : void 0);
			var patchLabels = isCompositing ? null : separatedList;
			if (mode !== "combobox" && patchLabels) {
				newSearchText = "";
				onSearchSplit === null || onSearchSplit === void 0 || onSearchSplit(patchLabels);
				onToggleOpen(false);
				ret = false;
			}
			if (onSearch && mergedSearchValue !== newSearchText) onSearch(newSearchText, { source: fromTyping ? "typing" : "effect" });
			return ret;
		};
		var onInternalSearchSubmit = function onInternalSearchSubmit$1(searchText) {
			if (!searchText || !searchText.trim()) return;
			onSearch(searchText, { source: "submit" });
		};
		import_react$31.useEffect(function() {
			if (!mergedOpen && !multiple && mode !== "combobox") onInternalSearch("", false, false);
		}, [mergedOpen]);
		import_react$31.useEffect(function() {
			if (innerOpen && disabled) setInnerOpen(false);
			if (disabled && !blurRef.current) setMockFocused(false);
		}, [disabled]);
		var _useLock2 = _slicedToArray(useLock(), 2), getClearLock = _useLock2[0], setClearLock = _useLock2[1];
		var keyLockRef = import_react$31.useRef(false);
		var onInternalKeyDown = function onInternalKeyDown$1(event) {
			var clearLock = getClearLock();
			var key = event.key;
			var isEnterKey = key === "Enter";
			if (isEnterKey) {
				if (mode !== "combobox") event.preventDefault();
				if (!mergedOpen) onToggleOpen(true);
			}
			setClearLock(!!mergedSearchValue);
			if (key === "Backspace" && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
				var cloneDisplayValues = _toConsumableArray(displayValues);
				var removedDisplayValue = null;
				for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
					var current = cloneDisplayValues[i];
					if (!current.disabled) {
						cloneDisplayValues.splice(i, 1);
						removedDisplayValue = current;
						break;
					}
				}
				if (removedDisplayValue) onDisplayValuesChange(cloneDisplayValues, {
					type: "remove",
					values: [removedDisplayValue]
				});
			}
			for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) rest[_key - 1] = arguments[_key];
			if (mergedOpen && (!isEnterKey || !keyLockRef.current)) {
				var _listRef$current2;
				if (isEnterKey) keyLockRef.current = true;
				(_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 || _listRef$current2.onKeyDown.apply(_listRef$current2, [event].concat(rest));
			}
			onKeyDown === null || onKeyDown === void 0 || onKeyDown.apply(void 0, [event].concat(rest));
		};
		var onInternalKeyUp = function onInternalKeyUp$1(event) {
			for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) rest[_key2 - 1] = arguments[_key2];
			if (mergedOpen) {
				var _listRef$current3;
				(_listRef$current3 = listRef.current) === null || _listRef$current3 === void 0 || _listRef$current3.onKeyUp.apply(_listRef$current3, [event].concat(rest));
			}
			if (event.key === "Enter") keyLockRef.current = false;
			onKeyUp === null || onKeyUp === void 0 || onKeyUp.apply(void 0, [event].concat(rest));
		};
		var onSelectorRemove = function onSelectorRemove$1(val) {
			onDisplayValuesChange(displayValues.filter(function(i) {
				return i !== val;
			}), {
				type: "remove",
				values: [val]
			});
		};
		var onInputBlur = function onInputBlur$1() {
			keyLockRef.current = false;
		};
		var focusRef = import_react$31.useRef(false);
		var onContainerFocus = function onContainerFocus$1() {
			setMockFocused(true);
			if (!disabled) {
				if (onFocus && !focusRef.current) onFocus.apply(void 0, arguments);
				if (showAction.includes("focus")) onToggleOpen(true);
			}
			focusRef.current = true;
		};
		var onContainerBlur = function onContainerBlur$1() {
			blurRef.current = true;
			setMockFocused(false, function() {
				focusRef.current = false;
				blurRef.current = false;
				onToggleOpen(false);
			});
			if (disabled) return;
			if (mergedSearchValue) {
				if (mode === "tags") onSearch(mergedSearchValue, { source: "submit" });
				else if (mode === "multiple") onSearch("", { source: "blur" });
			}
			if (onBlur) onBlur.apply(void 0, arguments);
		};
		var activeTimeoutIds = [];
		import_react$31.useEffect(function() {
			return function() {
				activeTimeoutIds.forEach(function(timeoutId) {
					return clearTimeout(timeoutId);
				});
				activeTimeoutIds.splice(0, activeTimeoutIds.length);
			};
		}, []);
		var onInternalMouseDown = function onInternalMouseDown$1(event) {
			var _triggerRef$current;
			var target = event.target;
			var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();
			if (popupElement && popupElement.contains(target)) {
				var timeoutId = setTimeout(function() {
					var index = activeTimeoutIds.indexOf(timeoutId);
					if (index !== -1) activeTimeoutIds.splice(index, 1);
					cancelSetMockFocused();
					if (!mobile && !popupElement.contains(document.activeElement)) {
						var _selectorRef$current3;
						(_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 || _selectorRef$current3.focus();
					}
				});
				activeTimeoutIds.push(timeoutId);
			}
			for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) restArgs[_key3 - 1] = arguments[_key3];
			onMouseDown === null || onMouseDown === void 0 || onMouseDown.apply(void 0, [event].concat(restArgs));
		};
		var forceUpdate = _slicedToArray(import_react$31.useState({}), 2)[1];
		function onPopupMouseEnter() {
			forceUpdate({});
		}
		var onTriggerVisibleChange;
		if (customizeRawInputElement) onTriggerVisibleChange = function onTriggerVisibleChange$1(newOpen) {
			onToggleOpen(newOpen);
		};
		useSelectTriggerControl(function() {
			var _triggerRef$current2;
			return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
		}, triggerOpen, onToggleOpen, !!customizeRawInputElement);
		var baseSelectContext = import_react$31.useMemo(function() {
			return _objectSpread2(_objectSpread2({}, props), {}, {
				notFoundContent,
				open: mergedOpen,
				triggerOpen,
				id,
				showSearch: mergedShowSearch,
				multiple,
				toggleOpen: onToggleOpen
			});
		}, [
			props,
			notFoundContent,
			triggerOpen,
			mergedOpen,
			id,
			mergedShowSearch,
			multiple,
			onToggleOpen
		]);
		var showSuffixIcon = !!suffixIcon || loading;
		var arrowNode;
		if (showSuffixIcon) arrowNode = /* @__PURE__ */ import_react$31.createElement(TransBtn_default, {
			className: (0, import_classnames$6.default)("".concat(prefixCls, "-arrow"), _defineProperty({}, "".concat(prefixCls, "-arrow-loading"), loading)),
			customizeIcon: suffixIcon,
			customizeIconProps: {
				loading,
				searchValue: mergedSearchValue,
				open: mergedOpen,
				focused: mockFocused,
				showSearch: mergedShowSearch
			}
		});
		var _useAllowClear = useAllowClear(prefixCls, function onClearMouseDown() {
			var _selectorRef$current4;
			onClear === null || onClear === void 0 || onClear();
			(_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 || _selectorRef$current4.focus();
			onDisplayValuesChange([], {
				type: "clear",
				values: displayValues
			});
			onInternalSearch("", false, false);
		}, displayValues, allowClear, clearIcon, disabled, mergedSearchValue, mode), mergedAllowClear = _useAllowClear.allowClear, clearNode = _useAllowClear.clearIcon;
		var optionList = /* @__PURE__ */ import_react$31.createElement(OptionList, { ref: listRef });
		var mergedClassName = (0, import_classnames$6.default)(prefixCls, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-focused"), mockFocused), "".concat(prefixCls, "-multiple"), multiple), "".concat(prefixCls, "-single"), !multiple), "".concat(prefixCls, "-allow-clear"), allowClear), "".concat(prefixCls, "-show-arrow"), showSuffixIcon), "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-loading"), loading), "".concat(prefixCls, "-open"), mergedOpen), "".concat(prefixCls, "-customize-input"), customizeInputElement), "".concat(prefixCls, "-show-search"), mergedShowSearch));
		var selectorNode = /* @__PURE__ */ import_react$31.createElement(SelectTrigger_default, {
			ref: triggerRef,
			disabled,
			prefixCls,
			visible: triggerOpen,
			popupElement: optionList,
			animation,
			transitionName,
			dropdownStyle,
			dropdownClassName,
			direction,
			dropdownMatchSelectWidth,
			dropdownRender,
			dropdownAlign,
			placement,
			builtinPlacements,
			getPopupContainer,
			empty: emptyOptions,
			getTriggerDOMNode: function getTriggerDOMNode(node) {
				return selectorDomRef.current || node;
			},
			onPopupVisibleChange: onTriggerVisibleChange,
			onPopupMouseEnter
		}, customizeRawInputElement ? /* @__PURE__ */ import_react$31.cloneElement(customizeRawInputElement, { ref: customizeRawInputRef }) : /* @__PURE__ */ import_react$31.createElement(Selector_default, _extends({}, props, {
			domRef: selectorDomRef,
			prefixCls,
			inputElement: customizeInputElement,
			ref: selectorRef,
			id,
			prefix,
			showSearch: mergedShowSearch,
			autoClearSearchValue,
			mode,
			activeDescendantId,
			tagRender,
			values: displayValues,
			open: mergedOpen,
			onToggleOpen,
			activeValue,
			searchValue: mergedSearchValue,
			onSearch: onInternalSearch,
			onSearchSubmit: onInternalSearchSubmit,
			onRemove: onSelectorRemove,
			tokenWithEnter,
			onInputBlur
		})));
		var renderNode;
		if (customizeRawInputElement) renderNode = selectorNode;
		else renderNode = /* @__PURE__ */ import_react$31.createElement("div", _extends({ className: mergedClassName }, domProps, {
			ref: containerRef,
			onMouseDown: onInternalMouseDown,
			onKeyDown: onInternalKeyDown,
			onKeyUp: onInternalKeyUp,
			onFocus: onContainerFocus,
			onBlur: onContainerBlur
		}), /* @__PURE__ */ import_react$31.createElement(Polite, {
			visible: mockFocused && !mergedOpen,
			values: displayValues
		}), selectorNode, arrowNode, mergedAllowClear && clearNode);
		return /* @__PURE__ */ import_react$31.createElement(BaseSelectContext.Provider, { value: baseSelectContext }, renderNode);
	});
	BaseSelect_default = BaseSelect;
}));
var OptGroup, OptGroup_default;
var init_OptGroup = __esmMin((() => {
	OptGroup = function OptGroup$1() {
		return null;
	};
	OptGroup.isSelectOptGroup = true;
	OptGroup_default = OptGroup;
}));
var Option, Option_default;
var init_Option = __esmMin((() => {
	Option = function Option$1() {
		return null;
	};
	Option.isSelectOption = true;
	Option_default = Option;
}));
/* istanbul ignore file */
function isPlatformMac() {
	return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var init_platformUtil = __esmMin((() => {}));
function isTitleType(content) {
	return typeof content === "string" || typeof content === "number";
}
var import_classnames$5, import_react$29, import_react$30, _excluded$9, RefOptionList$1, OptionList_default$1;
var init_OptionList$1 = __esmMin((() => {
	init_defineProperty();
	init_objectWithoutProperties();
	init_extends();
	init_slicedToArray();
	init_toConsumableArray();
	import_classnames$5 = /* @__PURE__ */ __toESM(require_classnames());
	init_KeyCode();
	init_useMemo();
	init_omit();
	init_pickAttrs();
	init_es$8();
	import_react$29 = /* @__PURE__ */ __toESM(require_react());
	import_react$30 = /* @__PURE__ */ __toESM(require_react());
	init_SelectContext();
	init_TransBtn();
	init_useBaseProps();
	init_platformUtil();
	init_valueUtil$1();
	_excluded$9 = [
		"disabled",
		"title",
		"children",
		"style",
		"className"
	];
	RefOptionList$1 = /* @__PURE__ */ import_react$29.forwardRef(function OptionList(_, ref) {
		var _useBaseProps = useBaseProps(), prefixCls = _useBaseProps.prefixCls, id = _useBaseProps.id, open = _useBaseProps.open, multiple = _useBaseProps.multiple, mode = _useBaseProps.mode, searchValue = _useBaseProps.searchValue, toggleOpen = _useBaseProps.toggleOpen, notFoundContent = _useBaseProps.notFoundContent, onPopupScroll = _useBaseProps.onPopupScroll;
		var _React$useContext = import_react$29.useContext(SelectContext_default), maxCount = _React$useContext.maxCount, flattenOptions$1 = _React$useContext.flattenOptions, onActiveValue = _React$useContext.onActiveValue, defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption, onSelect = _React$useContext.onSelect, menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon, rawValues = _React$useContext.rawValues, fieldNames = _React$useContext.fieldNames, virtual = _React$useContext.virtual, direction = _React$useContext.direction, listHeight = _React$useContext.listHeight, listItemHeight = _React$useContext.listItemHeight, optionRender = _React$useContext.optionRender;
		var itemPrefixCls = "".concat(prefixCls, "-item");
		var memoFlattenOptions = useMemo(function() {
			return flattenOptions$1;
		}, [open, flattenOptions$1], function(prev, next) {
			return next[0] && prev[1] !== next[1];
		});
		var listRef = import_react$29.useRef(null);
		var overMaxCount = import_react$29.useMemo(function() {
			return multiple && isValidCount(maxCount) && (rawValues === null || rawValues === void 0 ? void 0 : rawValues.size) >= maxCount;
		}, [
			multiple,
			maxCount,
			rawValues === null || rawValues === void 0 ? void 0 : rawValues.size
		]);
		var onListMouseDown = function onListMouseDown$1(event) {
			event.preventDefault();
		};
		var scrollIntoView = function scrollIntoView$1(args) {
			var _listRef$current;
			(_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.scrollTo(typeof args === "number" ? { index: args } : args);
		};
		var isSelected = import_react$29.useCallback(function(value) {
			if (mode === "combobox") return false;
			return rawValues.has(value);
		}, [
			mode,
			_toConsumableArray(rawValues).toString(),
			rawValues.size
		]);
		var getEnabledActiveIndex = function getEnabledActiveIndex$1(index) {
			var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
			var len = memoFlattenOptions.length;
			for (var i = 0; i < len; i += 1) {
				var current = (index + i * offset + len) % len;
				var _ref = memoFlattenOptions[current] || {}, group = _ref.group, data = _ref.data;
				if (!group && !(data !== null && data !== void 0 && data.disabled) && (isSelected(data.value) || !overMaxCount)) return current;
			}
			return -1;
		};
		var _React$useState2 = _slicedToArray(import_react$29.useState(function() {
			return getEnabledActiveIndex(0);
		}), 2), activeIndex = _React$useState2[0], setActiveIndex = _React$useState2[1];
		var setActive = function setActive$1(index) {
			var fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
			setActiveIndex(index);
			var info = { source: fromKeyboard ? "keyboard" : "mouse" };
			var flattenItem = memoFlattenOptions[index];
			if (!flattenItem) {
				onActiveValue(null, -1, info);
				return;
			}
			onActiveValue(flattenItem.value, index, info);
		};
		(0, import_react$30.useEffect)(function() {
			setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
		}, [memoFlattenOptions.length, searchValue]);
		var isAriaSelected = import_react$29.useCallback(function(value) {
			if (mode === "combobox") return String(value).toLowerCase() === searchValue.toLowerCase();
			return rawValues.has(value);
		}, [
			mode,
			searchValue,
			_toConsumableArray(rawValues).toString(),
			rawValues.size
		]);
		(0, import_react$30.useEffect)(function() {
			var timeoutId = setTimeout(function() {
				if (!multiple && open && rawValues.size === 1) {
					var value = Array.from(rawValues)[0];
					var index = memoFlattenOptions.findIndex(function(_ref2) {
						return _ref2.data.value === value;
					});
					if (index !== -1) {
						setActive(index);
						scrollIntoView(index);
					}
				}
			});
			if (open) {
				var _listRef$current2;
				(_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 || _listRef$current2.scrollTo(void 0);
			}
			return function() {
				return clearTimeout(timeoutId);
			};
		}, [open, searchValue]);
		var onSelectValue = function onSelectValue$1(value) {
			if (value !== void 0) onSelect(value, { selected: !rawValues.has(value) });
			if (!multiple) toggleOpen(false);
		};
		import_react$29.useImperativeHandle(ref, function() {
			return {
				onKeyDown: function onKeyDown(event) {
					var which = event.which, ctrlKey = event.ctrlKey;
					switch (which) {
						case KeyCode_default.N:
						case KeyCode_default.P:
						case KeyCode_default.UP:
						case KeyCode_default.DOWN:
							var offset = 0;
							if (which === KeyCode_default.UP) offset = -1;
							else if (which === KeyCode_default.DOWN) offset = 1;
							else if (isPlatformMac() && ctrlKey) {
								if (which === KeyCode_default.N) offset = 1;
								else if (which === KeyCode_default.P) offset = -1;
							}
							if (offset !== 0) {
								var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
								scrollIntoView(nextActiveIndex);
								setActive(nextActiveIndex, true);
							}
							break;
						case KeyCode_default.TAB:
						case KeyCode_default.ENTER:
							var _item$data;
							var item = memoFlattenOptions[activeIndex];
							if (item && !(item !== null && item !== void 0 && (_item$data = item.data) !== null && _item$data !== void 0 && _item$data.disabled) && !overMaxCount) onSelectValue(item.value);
							else onSelectValue(void 0);
							if (open) event.preventDefault();
							break;
						case KeyCode_default.ESC:
							toggleOpen(false);
							if (open) event.stopPropagation();
					}
				},
				onKeyUp: function onKeyUp() {},
				scrollTo: function scrollTo(index) {
					scrollIntoView(index);
				}
			};
		});
		if (memoFlattenOptions.length === 0) return /* @__PURE__ */ import_react$29.createElement("div", {
			role: "listbox",
			id: "".concat(id, "_list"),
			className: "".concat(itemPrefixCls, "-empty"),
			onMouseDown: onListMouseDown
		}, notFoundContent);
		var omitFieldNameList = Object.keys(fieldNames).map(function(key) {
			return fieldNames[key];
		});
		var getLabel = function getLabel$1(item) {
			return item.label;
		};
		function getItemAriaProps(item, index) {
			return {
				role: item.group ? "presentation" : "option",
				id: "".concat(id, "_list_").concat(index)
			};
		}
		var renderItem = function renderItem$1(index) {
			var item = memoFlattenOptions[index];
			if (!item) return null;
			var itemData = item.data || {};
			var value = itemData.value;
			var group = item.group;
			var attrs = pickAttrs(itemData, true);
			var mergedLabel = getLabel(item);
			return item ? /* @__PURE__ */ import_react$29.createElement("div", _extends({ "aria-label": typeof mergedLabel === "string" && !group ? mergedLabel : null }, attrs, { key: index }, getItemAriaProps(item, index), { "aria-selected": isAriaSelected(value) }), value) : null;
		};
		var a11yProps = {
			role: "listbox",
			id: "".concat(id, "_list")
		};
		return /* @__PURE__ */ import_react$29.createElement(import_react$29.Fragment, null, virtual && /* @__PURE__ */ import_react$29.createElement("div", _extends({}, a11yProps, { style: {
			height: 0,
			width: 0,
			overflow: "hidden"
		} }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /* @__PURE__ */ import_react$29.createElement(es_default$2, {
			itemKey: "key",
			ref: listRef,
			data: memoFlattenOptions,
			height: listHeight,
			itemHeight: listItemHeight,
			fullHeight: false,
			onMouseDown: onListMouseDown,
			onScroll: onPopupScroll,
			virtual,
			direction,
			innerProps: virtual ? null : a11yProps
		}, function(item, itemIndex) {
			var group = item.group, groupOption = item.groupOption, data = item.data, label = item.label, value = item.value;
			var key = data.key;
			if (group) {
				var _data$title;
				var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : isTitleType(label) ? label.toString() : void 0;
				return /* @__PURE__ */ import_react$29.createElement("div", {
					className: (0, import_classnames$5.default)(itemPrefixCls, "".concat(itemPrefixCls, "-group"), data.className),
					title: groupTitle
				}, label !== void 0 ? label : key);
			}
			var disabled = data.disabled, title = data.title;
			data.children;
			var style = data.style, className = data.className;
			var passedProps = omit(_objectWithoutProperties(data, _excluded$9), omitFieldNameList);
			var selected = isSelected(value);
			var mergedDisabled = disabled || !selected && overMaxCount;
			var optionPrefixCls = "".concat(itemPrefixCls, "-option");
			var optionClassName = (0, import_classnames$5.default)(itemPrefixCls, optionPrefixCls, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(optionPrefixCls, "-grouped"), groupOption), "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !mergedDisabled), "".concat(optionPrefixCls, "-disabled"), mergedDisabled), "".concat(optionPrefixCls, "-selected"), selected));
			var mergedLabel = getLabel(item);
			var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === "function" || selected;
			var content = typeof mergedLabel === "number" ? mergedLabel : mergedLabel || value;
			var optionTitle = isTitleType(content) ? content.toString() : void 0;
			if (title !== void 0) optionTitle = title;
			return /* @__PURE__ */ import_react$29.createElement("div", _extends({}, pickAttrs(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
				"aria-selected": isAriaSelected(value),
				className: optionClassName,
				title: optionTitle,
				onMouseMove: function onMouseMove() {
					if (activeIndex === itemIndex || mergedDisabled) return;
					setActive(itemIndex);
				},
				onClick: function onClick() {
					if (!mergedDisabled) onSelectValue(value);
				},
				style
			}), /* @__PURE__ */ import_react$29.createElement("div", { className: "".concat(optionPrefixCls, "-content") }, typeof optionRender === "function" ? optionRender(item, { index: itemIndex }) : content), /* @__PURE__ */ import_react$29.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /* @__PURE__ */ import_react$29.createElement(TransBtn_default, {
				className: "".concat(itemPrefixCls, "-option-state"),
				customizeIcon: menuItemSelectedIcon,
				customizeIconProps: {
					value,
					disabled: mergedDisabled,
					isSelected: selected
				}
			}, selected ? "✓" : null));
		}));
	});
	OptionList_default$1 = RefOptionList$1;
}));
var import_react$28, useCache_default$1;
var init_useCache$1 = __esmMin((() => {
	init_objectSpread2();
	import_react$28 = /* @__PURE__ */ __toESM(require_react());
	useCache_default$1 = (function(labeledValues, valueOptions) {
		var cacheRef = import_react$28.useRef({
			values: /* @__PURE__ */ new Map(),
			options: /* @__PURE__ */ new Map()
		});
		return [import_react$28.useMemo(function() {
			var _cacheRef$current = cacheRef.current, prevValueCache = _cacheRef$current.values, prevOptionCache = _cacheRef$current.options;
			var patchedValues = labeledValues.map(function(item) {
				if (item.label === void 0) {
					var _prevValueCache$get;
					return _objectSpread2(_objectSpread2({}, item), {}, { label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label });
				}
				return item;
			});
			var valueCache = /* @__PURE__ */ new Map();
			var optionCache = /* @__PURE__ */ new Map();
			patchedValues.forEach(function(item) {
				valueCache.set(item.value, item);
				optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
			});
			cacheRef.current.values = valueCache;
			cacheRef.current.options = optionCache;
			return patchedValues;
		}, [labeledValues, valueOptions]), import_react$28.useCallback(function(val) {
			return valueOptions.get(val) || cacheRef.current.options.get(val);
		}, [valueOptions])];
	});
}));
function includes(test, search) {
	return toArray$2(test).join("").toUpperCase().includes(search);
}
var import_react$27, useFilterOptions_default;
var init_useFilterOptions = __esmMin((() => {
	init_defineProperty();
	init_objectSpread2();
	import_react$27 = /* @__PURE__ */ __toESM(require_react());
	init_commonUtil();
	init_valueUtil$1();
	useFilterOptions_default = (function(options, fieldNames, searchValue, filterOption, optionFilterProp) {
		return import_react$27.useMemo(function() {
			if (!searchValue || filterOption === false) return options;
			var fieldOptions = fieldNames.options, fieldLabel = fieldNames.label, fieldValue = fieldNames.value;
			var filteredOptions = [];
			var customizeFilter = typeof filterOption === "function";
			var upperSearch = searchValue.toUpperCase();
			var filterFunc = customizeFilter ? filterOption : function(_, option) {
				if (optionFilterProp) return includes(option[optionFilterProp], upperSearch);
				if (option[fieldOptions]) return includes(option[fieldLabel !== "children" ? fieldLabel : "label"], upperSearch);
				return includes(option[fieldValue], upperSearch);
			};
			var wrapOption = customizeFilter ? function(opt) {
				return injectPropsWithOption(opt);
			} : function(opt) {
				return opt;
			};
			options.forEach(function(item) {
				if (item[fieldOptions]) {
					if (filterFunc(searchValue, wrapOption(item))) filteredOptions.push(item);
					else {
						var subOptions = item[fieldOptions].filter(function(subItem) {
							return filterFunc(searchValue, wrapOption(subItem));
						});
						if (subOptions.length) filteredOptions.push(_objectSpread2(_objectSpread2({}, item), {}, _defineProperty({}, fieldOptions, subOptions)));
					}
					return;
				}
				if (filterFunc(searchValue, wrapOption(item))) filteredOptions.push(item);
			});
			return filteredOptions;
		}, [
			options,
			filterOption,
			optionFilterProp,
			searchValue,
			fieldNames
		]);
	});
}));
function getUUID() {
	var retId;
	/* istanbul ignore if */
	if (isBrowserClient) {
		retId = uuid;
		uuid += 1;
	} else retId = "TEST_OR_SSR";
	return retId;
}
function useId(id) {
	var _React$useState2 = _slicedToArray(import_react$26.useState(), 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
	import_react$26.useEffect(function() {
		setInnerId("rc_select_".concat(getUUID()));
	}, []);
	return id || innerId;
}
var import_react$26, uuid, isBrowserClient;
var init_useId = __esmMin((() => {
	init_slicedToArray();
	import_react$26 = /* @__PURE__ */ __toESM(require_react());
	init_canUseDom();
	uuid = 0;
	isBrowserClient = canUseDom();
}));
function convertNodeToOption(node) {
	var _ref = node, key = _ref.key, _ref$props = _ref.props, children = _ref$props.children, value = _ref$props.value, restProps = _objectWithoutProperties(_ref$props, _excluded$8);
	return _objectSpread2({
		key,
		value: value !== void 0 ? value : key,
		children
	}, restProps);
}
function convertChildrenToData$1(nodes) {
	var optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
	return toArray$1(nodes).map(function(node, index) {
		if (!/* @__PURE__ */ import_react$25.isValidElement(node) || !node.type) return null;
		var _ref2 = node, isSelectOptGroup = _ref2.type.isSelectOptGroup, key = _ref2.key, _ref2$props = _ref2.props, children = _ref2$props.children, restProps = _objectWithoutProperties(_ref2$props, _excluded2);
		if (optionOnly || !isSelectOptGroup) return convertNodeToOption(node);
		return _objectSpread2(_objectSpread2({
			key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
			label: key
		}, restProps), {}, { options: convertChildrenToData$1(children) });
	}).filter(function(data) {
		return data;
	});
}
var import_react$25, _excluded$8, _excluded2;
var init_legacyUtil$1 = __esmMin((() => {
	init_objectSpread2();
	init_objectWithoutProperties();
	import_react$25 = /* @__PURE__ */ __toESM(require_react());
	init_toArray$1();
	_excluded$8 = ["children", "value"], _excluded2 = ["children"];
}));
var import_react$24, useOptions, useOptions_default;
var init_useOptions = __esmMin((() => {
	import_react$24 = /* @__PURE__ */ __toESM(require_react());
	init_legacyUtil$1();
	useOptions = function useOptions$1(options, children, fieldNames, optionFilterProp, optionLabelProp) {
		return import_react$24.useMemo(function() {
			var mergedOptions = options;
			if (!options) mergedOptions = convertChildrenToData$1(children);
			var valueOptions = /* @__PURE__ */ new Map();
			var labelOptions = /* @__PURE__ */ new Map();
			var setLabelOptions = function setLabelOptions$1(labelOptionsMap, option, key) {
				if (key && typeof key === "string") labelOptionsMap.set(option[key], option);
			};
			(function dig(optionList) {
				var isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
				for (var i = 0; i < optionList.length; i += 1) {
					var option = optionList[i];
					if (!option[fieldNames.options] || isChildren) {
						valueOptions.set(option[fieldNames.value], option);
						setLabelOptions(labelOptions, option, fieldNames.label);
						setLabelOptions(labelOptions, option, optionFilterProp);
						setLabelOptions(labelOptions, option, optionLabelProp);
					} else dig(option[fieldNames.options], true);
				}
			})(mergedOptions);
			return {
				options: mergedOptions,
				valueOptions,
				labelOptions
			};
		}, [
			options,
			children,
			fieldNames,
			optionFilterProp,
			optionLabelProp
		]);
	};
	useOptions_default = useOptions;
}));
function useRefFunc$1(callback) {
	var funcRef = import_react$23.useRef();
	funcRef.current = callback;
	return import_react$23.useCallback(function() {
		return funcRef.current.apply(funcRef, arguments);
	}, []);
}
var import_react$23;
var init_useRefFunc$1 = __esmMin((() => {
	import_react$23 = /* @__PURE__ */ __toESM(require_react());
}));
var init_warningPropsUtil$1 = __esmMin((() => {
	init_toArray$1();
	init_warning();
	require_react();
	init_BaseSelect();
	init_commonUtil();
	init_legacyUtil$1();
}));
function isRawValue$1(value) {
	return !value || _typeof(value) !== "object";
}
var import_react$21, _excluded$7, OMIT_DOM_PROPS, TypedSelect;
var init_Select = __esmMin((() => {
	init_extends();
	init_toConsumableArray();
	init_defineProperty();
	init_objectSpread2();
	init_slicedToArray();
	init_objectWithoutProperties();
	init_typeof();
	init_useMergedState();
	init_warning();
	import_react$21 = /* @__PURE__ */ __toESM(require_react());
	init_BaseSelect();
	init_OptGroup();
	init_Option();
	init_OptionList$1();
	init_SelectContext();
	init_useCache$1();
	init_useFilterOptions();
	init_useId();
	init_useOptions();
	init_useRefFunc$1();
	init_commonUtil();
	init_valueUtil$1();
	init_warningPropsUtil$1();
	_excluded$7 = [
		"id",
		"mode",
		"prefixCls",
		"backfill",
		"fieldNames",
		"inputValue",
		"searchValue",
		"onSearch",
		"autoClearSearchValue",
		"onSelect",
		"onDeselect",
		"dropdownMatchSelectWidth",
		"filterOption",
		"filterSort",
		"optionFilterProp",
		"optionLabelProp",
		"options",
		"optionRender",
		"children",
		"defaultActiveFirstOption",
		"menuItemSelectedIcon",
		"virtual",
		"direction",
		"listHeight",
		"listItemHeight",
		"labelRender",
		"value",
		"defaultValue",
		"labelInValue",
		"onChange",
		"maxCount"
	];
	OMIT_DOM_PROPS = ["inputValue"];
	TypedSelect = /* @__PURE__ */ import_react$21.forwardRef(function(props, ref) {
		var id = props.id, mode = props.mode, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-select" : _props$prefixCls, backfill = props.backfill, fieldNames = props.fieldNames, inputValue = props.inputValue, searchValue = props.searchValue, onSearch = props.onSearch, _props$autoClearSearc = props.autoClearSearchValue, autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc, onSelect = props.onSelect, onDeselect = props.onDeselect, _props$dropdownMatchS = props.dropdownMatchSelectWidth, dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS, filterOption = props.filterOption, filterSort = props.filterSort, optionFilterProp = props.optionFilterProp, optionLabelProp = props.optionLabelProp, options = props.options, optionRender = props.optionRender, children = props.children, defaultActiveFirstOption = props.defaultActiveFirstOption, menuItemSelectedIcon = props.menuItemSelectedIcon, virtual = props.virtual, direction = props.direction, _props$listHeight = props.listHeight, listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight, _props$listItemHeight = props.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight, labelRender = props.labelRender, value = props.value, defaultValue = props.defaultValue, labelInValue = props.labelInValue, onChange = props.onChange, maxCount = props.maxCount, restProps = _objectWithoutProperties(props, _excluded$7);
		var mergedId = useId(id);
		var multiple = isMultiple(mode);
		var childrenAsData = !!(!options && children);
		var mergedFilterOption = import_react$21.useMemo(function() {
			if (filterOption === void 0 && mode === "combobox") return false;
			return filterOption;
		}, [filterOption, mode]);
		var mergedFieldNames = import_react$21.useMemo(function() {
			return fillFieldNames$2(fieldNames, childrenAsData);
		}, [JSON.stringify(fieldNames), childrenAsData]);
		var _useMergedState2 = _slicedToArray(useMergedState("", {
			value: searchValue !== void 0 ? searchValue : inputValue,
			postState: function postState(search) {
				return search || "";
			}
		}), 2), mergedSearchValue = _useMergedState2[0], setSearchValue = _useMergedState2[1];
		var parsedOptions = useOptions_default(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
		var valueOptions = parsedOptions.valueOptions, labelOptions = parsedOptions.labelOptions, mergedOptions = parsedOptions.options;
		var convert2LabelValues = import_react$21.useCallback(function(draftValues) {
			return toArray$2(draftValues).map(function(val) {
				var rawValue;
				var rawLabel;
				var rawKey;
				var rawDisabled;
				var rawTitle;
				if (isRawValue$1(val)) rawValue = val;
				else {
					var _val$value;
					rawKey = val.key;
					rawLabel = val.label;
					rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
				}
				var option = valueOptions.get(rawValue);
				if (option) {
					var _option$key;
					if (rawLabel === void 0) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
					if (rawKey === void 0) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
					rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
					rawTitle = option === null || option === void 0 ? void 0 : option.title;
				}
				return {
					label: rawLabel,
					value: rawValue,
					key: rawKey,
					disabled: rawDisabled,
					title: rawTitle
				};
			});
		}, [
			mergedFieldNames,
			optionLabelProp,
			valueOptions
		]);
		var _useMergedState4 = _slicedToArray(useMergedState(defaultValue, { value }), 2), internalValue = _useMergedState4[0], setInternalValue = _useMergedState4[1];
		var _useCache2 = _slicedToArray(useCache_default$1(import_react$21.useMemo(function() {
			var _values$;
			var values = convert2LabelValues(multiple && internalValue === null ? [] : internalValue);
			if (mode === "combobox" && isComboNoValue((_values$ = values[0]) === null || _values$ === void 0 ? void 0 : _values$.value)) return [];
			return values;
		}, [
			internalValue,
			convert2LabelValues,
			mode,
			multiple
		]), valueOptions), 2), mergedValues = _useCache2[0], getMixedOption = _useCache2[1];
		var displayValues = import_react$21.useMemo(function() {
			if (!mode && mergedValues.length === 1) {
				var firstValue = mergedValues[0];
				if (firstValue.value === null && (firstValue.label === null || firstValue.label === void 0)) return [];
			}
			return mergedValues.map(function(item) {
				var _ref;
				return _objectSpread2(_objectSpread2({}, item), {}, { label: (_ref = typeof labelRender === "function" ? labelRender(item) : item.label) !== null && _ref !== void 0 ? _ref : item.value });
			});
		}, [
			mode,
			mergedValues,
			labelRender
		]);
		var rawValues = import_react$21.useMemo(function() {
			return new Set(mergedValues.map(function(val) {
				return val.value;
			}));
		}, [mergedValues]);
		import_react$21.useEffect(function() {
			if (mode === "combobox") {
				var _mergedValues$;
				var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
				setSearchValue(hasValue(strValue) ? String(strValue) : "");
			}
		}, [mergedValues]);
		var createTagOption = useRefFunc$1(function(val, label) {
			var mergedLabel = label !== null && label !== void 0 ? label : val;
			return _defineProperty(_defineProperty({}, mergedFieldNames.value, val), mergedFieldNames.label, mergedLabel);
		});
		var filteredOptions = useFilterOptions_default(import_react$21.useMemo(function() {
			if (mode !== "tags") return mergedOptions;
			var cloneOptions = _toConsumableArray(mergedOptions);
			var existOptions = function existOptions$1(val) {
				return valueOptions.has(val);
			};
			_toConsumableArray(mergedValues).sort(function(a, b) {
				return a.value < b.value ? -1 : 1;
			}).forEach(function(item) {
				var val = item.value;
				if (!existOptions(val)) cloneOptions.push(createTagOption(val, item.label));
			});
			return cloneOptions;
		}, [
			createTagOption,
			mergedOptions,
			valueOptions,
			mergedValues,
			mode
		]), mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);
		var filledSearchOptions = import_react$21.useMemo(function() {
			if (mode !== "tags" || !mergedSearchValue || filteredOptions.some(function(item) {
				return item[optionFilterProp || "value"] === mergedSearchValue;
			})) return filteredOptions;
			if (filteredOptions.some(function(item) {
				return item[mergedFieldNames.value] === mergedSearchValue;
			})) return filteredOptions;
			return [createTagOption(mergedSearchValue)].concat(_toConsumableArray(filteredOptions));
		}, [
			createTagOption,
			optionFilterProp,
			mode,
			filteredOptions,
			mergedSearchValue,
			mergedFieldNames
		]);
		var sorter = function sorter$1(inputOptions) {
			return _toConsumableArray(inputOptions).sort(function(a, b) {
				return filterSort(a, b, { searchValue: mergedSearchValue });
			}).map(function(item) {
				if (Array.isArray(item.options)) return _objectSpread2(_objectSpread2({}, item), {}, { options: item.options.length > 0 ? sorter$1(item.options) : item.options });
				return item;
			});
		};
		var orderedFilteredOptions = import_react$21.useMemo(function() {
			if (!filterSort) return filledSearchOptions;
			return sorter(filledSearchOptions);
		}, [
			filledSearchOptions,
			filterSort,
			mergedSearchValue
		]);
		var displayOptions = import_react$21.useMemo(function() {
			return flattenOptions(orderedFilteredOptions, {
				fieldNames: mergedFieldNames,
				childrenAsData
			});
		}, [
			orderedFilteredOptions,
			mergedFieldNames,
			childrenAsData
		]);
		var triggerChange = function triggerChange$1(values) {
			var labeledValues = convert2LabelValues(values);
			setInternalValue(labeledValues);
			if (onChange && (labeledValues.length !== mergedValues.length || labeledValues.some(function(newVal, index) {
				var _mergedValues$index;
				return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
			}))) {
				var returnValues = labelInValue ? labeledValues : labeledValues.map(function(v) {
					return v.value;
				});
				var returnOptions = labeledValues.map(function(v) {
					return injectPropsWithOption(getMixedOption(v.value));
				});
				onChange(multiple ? returnValues : returnValues[0], multiple ? returnOptions : returnOptions[0]);
			}
		};
		var _React$useState2 = _slicedToArray(import_react$21.useState(null), 2), activeValue = _React$useState2[0], setActiveValue = _React$useState2[1];
		var _React$useState4 = _slicedToArray(import_react$21.useState(0), 2), accessibilityIndex = _React$useState4[0], setAccessibilityIndex = _React$useState4[1];
		var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== void 0 ? defaultActiveFirstOption : mode !== "combobox";
		var onActiveValue = import_react$21.useCallback(function(active, index) {
			var _ref3$source = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}).source, source = _ref3$source === void 0 ? "keyboard" : _ref3$source;
			setAccessibilityIndex(index);
			if (backfill && mode === "combobox" && active !== null && source === "keyboard") setActiveValue(String(active));
		}, [backfill, mode]);
		var triggerSelect = function triggerSelect$1(val, selected, type) {
			var getSelectEnt = function getSelectEnt$1() {
				var _option$key2;
				var option = getMixedOption(val);
				return [labelInValue ? {
					label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
					value: val,
					key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
				} : val, injectPropsWithOption(option)];
			};
			if (selected && onSelect) {
				var _getSelectEnt2 = _slicedToArray(getSelectEnt(), 2), wrappedValue = _getSelectEnt2[0], _option = _getSelectEnt2[1];
				onSelect(wrappedValue, _option);
			} else if (!selected && onDeselect && type !== "clear") {
				var _getSelectEnt4 = _slicedToArray(getSelectEnt(), 2), _wrappedValue = _getSelectEnt4[0], _option2 = _getSelectEnt4[1];
				onDeselect(_wrappedValue, _option2);
			}
		};
		var onInternalSelect = useRefFunc$1(function(val, info) {
			var cloneValues;
			var mergedSelect = multiple ? info.selected : true;
			if (mergedSelect) cloneValues = multiple ? [].concat(_toConsumableArray(mergedValues), [val]) : [val];
			else cloneValues = mergedValues.filter(function(v) {
				return v.value !== val;
			});
			triggerChange(cloneValues);
			triggerSelect(val, mergedSelect);
			if (mode === "combobox") setActiveValue("");
			else if (!isMultiple || autoClearSearchValue) {
				setSearchValue("");
				setActiveValue("");
			}
		});
		var onDisplayValuesChange = function onDisplayValuesChange$1(nextValues, info) {
			triggerChange(nextValues);
			var type = info.type, values = info.values;
			if (type === "remove" || type === "clear") values.forEach(function(item) {
				triggerSelect(item.value, false, type);
			});
		};
		var onInternalSearch = function onInternalSearch$1(searchText, info) {
			setSearchValue(searchText);
			setActiveValue(null);
			if (info.source === "submit") {
				var formatted = (searchText || "").trim();
				if (formatted) {
					triggerChange(Array.from(new Set([].concat(_toConsumableArray(rawValues), [formatted]))));
					triggerSelect(formatted, true);
					setSearchValue("");
				}
				return;
			}
			if (info.source !== "blur") {
				if (mode === "combobox") triggerChange(searchText);
				onSearch === null || onSearch === void 0 || onSearch(searchText);
			}
		};
		var onInternalSearchSplit = function onInternalSearchSplit$1(words) {
			var patchValues = words;
			if (mode !== "tags") patchValues = words.map(function(word) {
				var opt = labelOptions.get(word);
				return opt === null || opt === void 0 ? void 0 : opt.value;
			}).filter(function(val) {
				return val !== void 0;
			});
			var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), _toConsumableArray(patchValues))));
			triggerChange(newRawValues);
			newRawValues.forEach(function(newRawValue) {
				triggerSelect(newRawValue, true);
			});
		};
		var selectContext = import_react$21.useMemo(function() {
			var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
			return _objectSpread2(_objectSpread2({}, parsedOptions), {}, {
				flattenOptions: displayOptions,
				onActiveValue,
				defaultActiveFirstOption: mergedDefaultActiveFirstOption,
				onSelect: onInternalSelect,
				menuItemSelectedIcon,
				rawValues,
				fieldNames: mergedFieldNames,
				virtual: realVirtual,
				direction,
				listHeight,
				listItemHeight,
				childrenAsData,
				maxCount,
				optionRender
			});
		}, [
			maxCount,
			parsedOptions,
			displayOptions,
			onActiveValue,
			mergedDefaultActiveFirstOption,
			onInternalSelect,
			menuItemSelectedIcon,
			rawValues,
			mergedFieldNames,
			virtual,
			dropdownMatchSelectWidth,
			direction,
			listHeight,
			listItemHeight,
			childrenAsData,
			optionRender
		]);
		return /* @__PURE__ */ import_react$21.createElement(SelectContext_default.Provider, { value: selectContext }, /* @__PURE__ */ import_react$21.createElement(BaseSelect_default, _extends({}, restProps, {
			id: mergedId,
			prefixCls,
			ref,
			omitDomProps: OMIT_DOM_PROPS,
			mode,
			displayValues,
			onDisplayValuesChange,
			direction,
			searchValue: mergedSearchValue,
			onSearch: onInternalSearch,
			autoClearSearchValue,
			onSearchSplit: onInternalSearchSplit,
			dropdownMatchSelectWidth,
			OptionList: OptionList_default$1,
			emptyOptions: !displayOptions.length,
			activeValue,
			activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
		})));
	});
	TypedSelect.Option = Option_default;
	TypedSelect.OptGroup = OptGroup_default;
}));
var init_es$3 = __esmMin((() => {
	init_Select();
	init_Option();
	init_OptGroup();
	init_BaseSelect();
	init_useBaseProps();
}));
function getEntity(keyEntities, key) {
	return keyEntities[key];
}
var init_keyUtil = __esmMin((() => {}));
function getPosition(level, index) {
	return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
	return node && node.type && node.type.isTreeNode;
}
function getKey(key, pos) {
	if (key !== null && key !== void 0) return key;
	return pos;
}
function fillFieldNames$1(fieldNames) {
	var _ref = fieldNames || {}, title = _ref.title, _title = _ref._title, key = _ref.key, children = _ref.children;
	var mergedTitle = title || "title";
	return {
		title: mergedTitle,
		_title: _title || [mergedTitle],
		key: key || "key",
		children: children || "children"
	};
}
function convertTreeToData(rootNodes) {
	function dig(node) {
		return toArray$1(node).map(function(treeNode) {
			if (!isTreeNode(treeNode)) {
				warning_default(!treeNode, "Tree/TreeNode can only accept TreeNode as children.");
				return null;
			}
			var key = treeNode.key;
			var _treeNode$props = treeNode.props, children = _treeNode$props.children, rest = _objectWithoutProperties(_treeNode$props, _excluded$6);
			var dataNode = _objectSpread2({ key }, rest);
			var parsedChildren = dig(children);
			if (parsedChildren.length) dataNode.children = parsedChildren;
			return dataNode;
		}).filter(function(dataNode) {
			return dataNode;
		});
	}
	return dig(rootNodes);
}
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
	var _fillFieldNames = fillFieldNames$1(fieldNames), fieldTitles = _fillFieldNames._title, fieldKey = _fillFieldNames.key, fieldChildren = _fillFieldNames.children;
	var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
	var flattenList = [];
	function dig(list) {
		var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		return list.map(function(treeNode, index) {
			var pos = getPosition(parent ? parent.pos : "0", index);
			var mergedKey = getKey(treeNode[fieldKey], pos);
			var mergedTitle;
			for (var i = 0; i < fieldTitles.length; i += 1) {
				var fieldTitle = fieldTitles[i];
				if (treeNode[fieldTitle] !== void 0) {
					mergedTitle = treeNode[fieldTitle];
					break;
				}
			}
			var flattenNode = Object.assign(omit(treeNode, [].concat(_toConsumableArray(fieldTitles), [fieldKey, fieldChildren])), {
				title: mergedTitle,
				key: mergedKey,
				parent,
				pos,
				children: null,
				data: treeNode,
				isStart: [].concat(_toConsumableArray(parent ? parent.isStart : []), [index === 0]),
				isEnd: [].concat(_toConsumableArray(parent ? parent.isEnd : []), [index === list.length - 1])
			});
			flattenList.push(flattenNode);
			if (expandedKeys === true || expandedKeySet.has(mergedKey)) flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
			else flattenNode.children = [];
			return flattenNode;
		});
	}
	dig(treeNodeList);
	return flattenList;
}
function traverseDataNodes(dataNodes, callback, config) {
	var mergedConfig = {};
	if (_typeof(config) === "object") mergedConfig = config;
	else mergedConfig = { externalGetKey: config };
	mergedConfig = mergedConfig || {};
	var _mergedConfig = mergedConfig, childrenPropName = _mergedConfig.childrenPropName, externalGetKey = _mergedConfig.externalGetKey, fieldNames = _mergedConfig.fieldNames;
	var _fillFieldNames2 = fillFieldNames$1(fieldNames), fieldKey = _fillFieldNames2.key, fieldChildren = _fillFieldNames2.children;
	var mergeChildrenPropName = childrenPropName || fieldChildren;
	var syntheticGetKey;
	if (externalGetKey) {
		if (typeof externalGetKey === "string") syntheticGetKey = function syntheticGetKey$1(node) {
			return node[externalGetKey];
		};
		else if (typeof externalGetKey === "function") syntheticGetKey = function syntheticGetKey$1(node) {
			return externalGetKey(node);
		};
	} else syntheticGetKey = function syntheticGetKey$1(node, pos) {
		return getKey(node[fieldKey], pos);
	};
	function processNode(node, index, parent, pathNodes) {
		var children = node ? node[mergeChildrenPropName] : dataNodes;
		var pos = node ? getPosition(parent.pos, index) : "0";
		var connectNodes = node ? [].concat(_toConsumableArray(pathNodes), [node]) : [];
		if (node) callback({
			node,
			index,
			pos,
			key: syntheticGetKey(node, pos),
			parentPos: parent.node ? parent.pos : null,
			level: parent.level + 1,
			nodes: connectNodes
		});
		if (children) children.forEach(function(subNode, subIndex) {
			processNode(subNode, subIndex, {
				node,
				pos,
				level: parent ? parent.level + 1 : -1
			}, connectNodes);
		});
	}
	processNode(null);
}
function convertDataToEntities(dataNodes) {
	var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, initWrapper = _ref2.initWrapper, processEntity = _ref2.processEntity, onProcessFinished = _ref2.onProcessFinished, externalGetKey = _ref2.externalGetKey, childrenPropName = _ref2.childrenPropName, fieldNames = _ref2.fieldNames;
	var legacyExternalGetKey = arguments.length > 2 ? arguments[2] : void 0;
	var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
	var posEntities = {};
	var keyEntities = {};
	var wrapper = {
		posEntities,
		keyEntities
	};
	if (initWrapper) wrapper = initWrapper(wrapper) || wrapper;
	traverseDataNodes(dataNodes, function(item) {
		var node = item.node, index = item.index, pos = item.pos, key = item.key, parentPos = item.parentPos, level = item.level;
		var entity = {
			node,
			nodes: item.nodes,
			index,
			key,
			pos,
			level
		};
		var mergedKey = getKey(key, pos);
		posEntities[pos] = entity;
		keyEntities[mergedKey] = entity;
		entity.parent = posEntities[parentPos];
		if (entity.parent) {
			entity.parent.children = entity.parent.children || [];
			entity.parent.children.push(entity);
		}
		if (processEntity) processEntity(entity, wrapper);
	}, {
		externalGetKey: mergedExternalGetKey,
		childrenPropName,
		fieldNames
	});
	if (onProcessFinished) onProcessFinished(wrapper);
	return wrapper;
}
function getTreeNodeProps(key, _ref3) {
	var expandedKeys = _ref3.expandedKeys, selectedKeys = _ref3.selectedKeys, loadedKeys = _ref3.loadedKeys, loadingKeys = _ref3.loadingKeys, checkedKeys = _ref3.checkedKeys, halfCheckedKeys = _ref3.halfCheckedKeys, dragOverNodeKey = _ref3.dragOverNodeKey, dropPosition = _ref3.dropPosition, keyEntities = _ref3.keyEntities;
	var entity = getEntity(keyEntities, key);
	return {
		eventKey: key,
		expanded: expandedKeys.indexOf(key) !== -1,
		selected: selectedKeys.indexOf(key) !== -1,
		loaded: loadedKeys.indexOf(key) !== -1,
		loading: loadingKeys.indexOf(key) !== -1,
		checked: checkedKeys.indexOf(key) !== -1,
		halfChecked: halfCheckedKeys.indexOf(key) !== -1,
		pos: String(entity ? entity.pos : ""),
		dragOver: dragOverNodeKey === key && dropPosition === 0,
		dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
		dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
	};
}
function convertNodePropsToEventData(props) {
	var data = props.data, expanded = props.expanded, selected = props.selected, checked = props.checked, loaded = props.loaded, loading = props.loading, halfChecked = props.halfChecked, dragOver = props.dragOver, dragOverGapTop = props.dragOverGapTop, dragOverGapBottom = props.dragOverGapBottom, pos = props.pos, active = props.active, eventKey = props.eventKey;
	var eventData = _objectSpread2(_objectSpread2({}, data), {}, {
		expanded,
		selected,
		checked,
		loaded,
		loading,
		halfChecked,
		dragOver,
		dragOverGapTop,
		dragOverGapBottom,
		pos,
		active,
		key: eventKey
	});
	if (!("props" in eventData)) Object.defineProperty(eventData, "props", { get: function get() {
		warning_default(false, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.");
		return props;
	} });
	return eventData;
}
var _excluded$6;
var init_treeUtil = __esmMin((() => {
	init_typeof();
	init_toConsumableArray();
	init_objectSpread2();
	init_objectWithoutProperties();
	init_toArray$1();
	init_omit();
	init_warning();
	init_keyUtil();
	_excluded$6 = ["children"];
}));
function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
	var filteredKeys = /* @__PURE__ */ new Set();
	halfCheckedKeys.forEach(function(key) {
		if (!checkedKeys.has(key)) filteredKeys.add(key);
	});
	return filteredKeys;
}
function isCheckDisabled$1(node) {
	var _ref = node || {}, disabled = _ref.disabled, disableCheckbox = _ref.disableCheckbox, checkable = _ref.checkable;
	return !!(disabled || disableCheckbox) || checkable === false;
}
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
	var checkedKeys = new Set(keys);
	var halfCheckedKeys = /* @__PURE__ */ new Set();
	for (var level = 0; level <= maxLevel; level += 1) (levelEntities.get(level) || /* @__PURE__ */ new Set()).forEach(function(entity) {
		var key = entity.key, node = entity.node, _entity$children = entity.children, children = _entity$children === void 0 ? [] : _entity$children;
		if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) children.filter(function(childEntity) {
			return !syntheticGetCheckDisabled(childEntity.node);
		}).forEach(function(childEntity) {
			checkedKeys.add(childEntity.key);
		});
	});
	var visitedKeys = /* @__PURE__ */ new Set();
	for (var _level = maxLevel; _level >= 0; _level -= 1) (levelEntities.get(_level) || /* @__PURE__ */ new Set()).forEach(function(entity) {
		var parent = entity.parent, node = entity.node;
		if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) return;
		if (syntheticGetCheckDisabled(entity.parent.node)) {
			visitedKeys.add(parent.key);
			return;
		}
		var allChecked = true;
		var partialChecked = false;
		(parent.children || []).filter(function(childEntity) {
			return !syntheticGetCheckDisabled(childEntity.node);
		}).forEach(function(_ref2) {
			var key = _ref2.key;
			var checked = checkedKeys.has(key);
			if (allChecked && !checked) allChecked = false;
			if (!partialChecked && (checked || halfCheckedKeys.has(key))) partialChecked = true;
		});
		if (allChecked) checkedKeys.add(parent.key);
		if (partialChecked) halfCheckedKeys.add(parent.key);
		visitedKeys.add(parent.key);
	});
	return {
		checkedKeys: Array.from(checkedKeys),
		halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
	};
}
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
	var checkedKeys = new Set(keys);
	var halfCheckedKeys = new Set(halfKeys);
	for (var level = 0; level <= maxLevel; level += 1) (levelEntities.get(level) || /* @__PURE__ */ new Set()).forEach(function(entity) {
		var key = entity.key, node = entity.node, _entity$children2 = entity.children, children = _entity$children2 === void 0 ? [] : _entity$children2;
		if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) children.filter(function(childEntity) {
			return !syntheticGetCheckDisabled(childEntity.node);
		}).forEach(function(childEntity) {
			checkedKeys.delete(childEntity.key);
		});
	});
	halfCheckedKeys = /* @__PURE__ */ new Set();
	var visitedKeys = /* @__PURE__ */ new Set();
	for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) (levelEntities.get(_level2) || /* @__PURE__ */ new Set()).forEach(function(entity) {
		var parent = entity.parent, node = entity.node;
		if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) return;
		if (syntheticGetCheckDisabled(entity.parent.node)) {
			visitedKeys.add(parent.key);
			return;
		}
		var allChecked = true;
		var partialChecked = false;
		(parent.children || []).filter(function(childEntity) {
			return !syntheticGetCheckDisabled(childEntity.node);
		}).forEach(function(_ref3) {
			var key = _ref3.key;
			var checked = checkedKeys.has(key);
			if (allChecked && !checked) allChecked = false;
			if (!partialChecked && (checked || halfCheckedKeys.has(key))) partialChecked = true;
		});
		if (!allChecked) checkedKeys.delete(parent.key);
		if (partialChecked) halfCheckedKeys.add(parent.key);
		visitedKeys.add(parent.key);
	});
	return {
		checkedKeys: Array.from(checkedKeys),
		halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
	};
}
function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
	var warningMissKeys = [];
	var syntheticGetCheckDisabled;
	if (getCheckDisabled) syntheticGetCheckDisabled = getCheckDisabled;
	else syntheticGetCheckDisabled = isCheckDisabled$1;
	var keys = new Set(keyList.filter(function(key) {
		var hasEntity = !!getEntity(keyEntities, key);
		if (!hasEntity) warningMissKeys.push(key);
		return hasEntity;
	}));
	var levelEntities = /* @__PURE__ */ new Map();
	var maxLevel = 0;
	Object.keys(keyEntities).forEach(function(key) {
		var entity = keyEntities[key];
		var level = entity.level;
		var levelSet = levelEntities.get(level);
		if (!levelSet) {
			levelSet = /* @__PURE__ */ new Set();
			levelEntities.set(level, levelSet);
		}
		levelSet.add(entity);
		maxLevel = Math.max(maxLevel, level);
	});
	warning_default(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function(key) {
		return "'".concat(key, "'");
	}).join(", ")));
	var result;
	if (checked === true) result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
	else result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
	return result;
}
var init_conductUtil = __esmMin((() => {
	init_warning();
	init_keyUtil();
}));
function _createForOfIteratorHelper(r, e) {
	var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (!t) {
		if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
			t && (r = t);
			var _n = 0, F = function F$1() {};
			return {
				s: F,
				n: function n() {
					return _n >= r.length ? { done: !0 } : {
						done: !1,
						value: r[_n++]
					};
				},
				e: function e$1(r$1) {
					throw r$1;
				},
				f: F
			};
		}
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var o, a = !0, u = !1;
	return {
		s: function s() {
			t = t.call(r);
		},
		n: function n() {
			var r$1 = t.next();
			return a = r$1.done, r$1;
		},
		e: function e$1(r$1) {
			u = !0, o = r$1;
		},
		f: function f() {
			try {
				a || null == t["return"] || t["return"]();
			} finally {
				if (u) throw o;
			}
		}
	};
}
var init_createForOfIteratorHelper = __esmMin((() => {
	init_unsupportedIterableToArray();
}));
var es_exports$2 = /* @__PURE__ */ __export({ default: () => es_default$4 }, 1);
var import_react$20, import_classnames$4, _excluded$5, Switch, es_default$4;
var init_es$2 = __esmMin((() => {
	init_extends();
	init_defineProperty();
	init_slicedToArray();
	init_objectWithoutProperties();
	import_react$20 = /* @__PURE__ */ __toESM(require_react());
	import_classnames$4 = /* @__PURE__ */ __toESM(require_classnames());
	init_useMergedState();
	init_KeyCode();
	_excluded$5 = [
		"prefixCls",
		"className",
		"checked",
		"defaultChecked",
		"disabled",
		"loadingIcon",
		"checkedChildren",
		"unCheckedChildren",
		"onClick",
		"onChange",
		"onKeyDown"
	];
	Switch = /* @__PURE__ */ import_react$20.forwardRef(function(_ref, ref) {
		var _classNames;
		var _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-switch" : _ref$prefixCls, className = _ref.className, checked = _ref.checked, defaultChecked = _ref.defaultChecked, disabled = _ref.disabled, loadingIcon = _ref.loadingIcon, checkedChildren = _ref.checkedChildren, unCheckedChildren = _ref.unCheckedChildren, onClick = _ref.onClick, onChange = _ref.onChange, onKeyDown = _ref.onKeyDown, restProps = _objectWithoutProperties(_ref, _excluded$5);
		var _useMergedState2 = _slicedToArray(useMergedState(false, {
			value: checked,
			defaultValue: defaultChecked
		}), 2), innerChecked = _useMergedState2[0], setInnerChecked = _useMergedState2[1];
		function triggerChange(newChecked, event) {
			var mergedChecked = innerChecked;
			if (!disabled) {
				mergedChecked = newChecked;
				setInnerChecked(mergedChecked);
				onChange === null || onChange === void 0 || onChange(mergedChecked, event);
			}
			return mergedChecked;
		}
		function onInternalKeyDown(e) {
			if (e.which === KeyCode_default.LEFT) triggerChange(false, e);
			else if (e.which === KeyCode_default.RIGHT) triggerChange(true, e);
			onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
		}
		function onInternalClick(e) {
			var ret = triggerChange(!innerChecked, e);
			onClick === null || onClick === void 0 || onClick(ret, e);
		}
		var switchClassName = (0, import_classnames$4.default)(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-checked"), innerChecked), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
		return /* @__PURE__ */ import_react$20.createElement("button", _extends({}, restProps, {
			type: "button",
			role: "switch",
			"aria-checked": innerChecked,
			disabled,
			className: switchClassName,
			ref,
			onKeyDown: onInternalKeyDown,
			onClick: onInternalClick
		}), loadingIcon, /* @__PURE__ */ import_react$20.createElement("span", { className: "".concat(prefixCls, "-inner") }, /* @__PURE__ */ import_react$20.createElement("span", { className: "".concat(prefixCls, "-inner-checked") }, checkedChildren), /* @__PURE__ */ import_react$20.createElement("span", { className: "".concat(prefixCls, "-inner-unchecked") }, unCheckedChildren)));
	});
	Switch.displayName = "Switch";
	es_default$4 = Switch;
}));
var import_react$19, TreeContext, UnstableContext;
var init_contextTypes = __esmMin((() => {
	import_react$19 = /* @__PURE__ */ __toESM(require_react());
	TreeContext = /* @__PURE__ */ import_react$19.createContext(null);
	UnstableContext = /* @__PURE__ */ import_react$19.createContext({});
}));
var import_classnames$3, import_react$18, Indent, Indent_default;
var init_Indent = __esmMin((() => {
	init_defineProperty();
	import_classnames$3 = /* @__PURE__ */ __toESM(require_classnames());
	import_react$18 = /* @__PURE__ */ __toESM(require_react());
	Indent = function Indent$1(_ref) {
		var prefixCls = _ref.prefixCls, level = _ref.level, isStart = _ref.isStart, isEnd = _ref.isEnd;
		var baseClassName = "".concat(prefixCls, "-indent-unit");
		var list = [];
		for (var i = 0; i < level; i += 1) list.push(/* @__PURE__ */ import_react$18.createElement("span", {
			key: i,
			className: (0, import_classnames$3.default)(baseClassName, _defineProperty(_defineProperty({}, "".concat(baseClassName, "-start"), isStart[i]), "".concat(baseClassName, "-end"), isEnd[i]))
		}));
		return /* @__PURE__ */ import_react$18.createElement("span", {
			"aria-hidden": "true",
			className: "".concat(prefixCls, "-indent")
		}, list);
	};
	Indent_default = /* @__PURE__ */ import_react$18.memo(Indent);
}));
var import_react$17, import_classnames$2, _excluded$4, ICON_OPEN, ICON_CLOSE, defaultTitle, TreeNode$1, TreeNode_default$1;
var init_TreeNode$1 = __esmMin((() => {
	init_extends();
	init_defineProperty();
	init_objectSpread2();
	init_slicedToArray();
	init_objectWithoutProperties();
	import_react$17 = /* @__PURE__ */ __toESM(require_react());
	import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames());
	init_pickAttrs();
	init_contextTypes();
	init_Indent();
	init_keyUtil();
	init_treeUtil();
	_excluded$4 = [
		"eventKey",
		"className",
		"style",
		"dragOver",
		"dragOverGapTop",
		"dragOverGapBottom",
		"isLeaf",
		"isStart",
		"isEnd",
		"expanded",
		"selected",
		"checked",
		"halfChecked",
		"loading",
		"domRef",
		"active",
		"data",
		"onMouseMove",
		"selectable"
	];
	ICON_OPEN = "open";
	ICON_CLOSE = "close";
	defaultTitle = "---";
	TreeNode$1 = function TreeNode$2(props) {
		var _unstableContext$node, _context$filterTreeNo, _classNames4;
		var eventKey = props.eventKey, className = props.className, style = props.style, dragOver = props.dragOver, dragOverGapTop = props.dragOverGapTop, dragOverGapBottom = props.dragOverGapBottom, isLeaf = props.isLeaf, isStart = props.isStart, isEnd = props.isEnd, expanded = props.expanded, selected = props.selected, checked = props.checked, halfChecked = props.halfChecked, loading = props.loading, domRef = props.domRef, active = props.active, data = props.data, onMouseMove = props.onMouseMove, selectable = props.selectable, otherProps = _objectWithoutProperties(props, _excluded$4);
		var context = import_react$17.useContext(TreeContext);
		var unstableContext = import_react$17.useContext(UnstableContext);
		var selectHandleRef = import_react$17.useRef(null);
		var _React$useState2 = _slicedToArray(import_react$17.useState(false), 2), dragNodeHighlight = _React$useState2[0], setDragNodeHighlight = _React$useState2[1];
		var isDisabled = !!(context.disabled || props.disabled || (_unstableContext$node = unstableContext.nodeDisabled) !== null && _unstableContext$node !== void 0 && _unstableContext$node.call(unstableContext, data));
		var isCheckable = import_react$17.useMemo(function() {
			if (!context.checkable || props.checkable === false) return false;
			return context.checkable;
		}, [context.checkable, props.checkable]);
		var onSelect = function onSelect$1(e) {
			if (isDisabled) return;
			context.onNodeSelect(e, convertNodePropsToEventData(props));
		};
		var onCheck = function onCheck$1(e) {
			if (isDisabled) return;
			if (!isCheckable || props.disableCheckbox) return;
			context.onNodeCheck(e, convertNodePropsToEventData(props), !checked);
		};
		var isSelectable = import_react$17.useMemo(function() {
			if (typeof selectable === "boolean") return selectable;
			return context.selectable;
		}, [selectable, context.selectable]);
		var onSelectorClick = function onSelectorClick$1(e) {
			context.onNodeClick(e, convertNodePropsToEventData(props));
			if (isSelectable) onSelect(e);
			else onCheck(e);
		};
		var onSelectorDoubleClick = function onSelectorDoubleClick$1(e) {
			context.onNodeDoubleClick(e, convertNodePropsToEventData(props));
		};
		var onMouseEnter = function onMouseEnter$1(e) {
			context.onNodeMouseEnter(e, convertNodePropsToEventData(props));
		};
		var onMouseLeave = function onMouseLeave$1(e) {
			context.onNodeMouseLeave(e, convertNodePropsToEventData(props));
		};
		var onContextMenu = function onContextMenu$1(e) {
			context.onNodeContextMenu(e, convertNodePropsToEventData(props));
		};
		var isDraggable = import_react$17.useMemo(function() {
			return !!(context.draggable && (!context.draggable.nodeDraggable || context.draggable.nodeDraggable(data)));
		}, [context.draggable, data]);
		var onDragStart = function onDragStart$1(e) {
			e.stopPropagation();
			setDragNodeHighlight(true);
			context.onNodeDragStart(e, props);
			try {
				e.dataTransfer.setData("text/plain", "");
			} catch (_unused) {}
		};
		var onDragEnter = function onDragEnter$1(e) {
			e.preventDefault();
			e.stopPropagation();
			context.onNodeDragEnter(e, props);
		};
		var onDragOver = function onDragOver$1(e) {
			e.preventDefault();
			e.stopPropagation();
			context.onNodeDragOver(e, props);
		};
		var onDragLeave = function onDragLeave$1(e) {
			e.stopPropagation();
			context.onNodeDragLeave(e, props);
		};
		var onDragEnd = function onDragEnd$1(e) {
			e.stopPropagation();
			setDragNodeHighlight(false);
			context.onNodeDragEnd(e, props);
		};
		var onDrop = function onDrop$1(e) {
			e.preventDefault();
			e.stopPropagation();
			setDragNodeHighlight(false);
			context.onNodeDrop(e, props);
		};
		var onExpand = function onExpand$1(e) {
			if (loading) return;
			context.onNodeExpand(e, convertNodePropsToEventData(props));
		};
		var hasChildren = import_react$17.useMemo(function() {
			var children = (getEntity(context.keyEntities, eventKey) || {}).children;
			return Boolean((children || []).length);
		}, [context.keyEntities, eventKey]);
		var memoizedIsLeaf = import_react$17.useMemo(function() {
			if (isLeaf === false) return false;
			return isLeaf || !context.loadData && !hasChildren || context.loadData && props.loaded && !hasChildren;
		}, [
			isLeaf,
			context.loadData,
			hasChildren,
			props.loaded
		]);
		import_react$17.useEffect(function() {
			if (loading) return;
			if (typeof context.loadData === "function" && expanded && !memoizedIsLeaf && !props.loaded) context.onNodeLoad(convertNodePropsToEventData(props));
		}, [
			loading,
			context.loadData,
			context.onNodeLoad,
			expanded,
			memoizedIsLeaf,
			props
		]);
		var dragHandlerNode = import_react$17.useMemo(function() {
			var _context$draggable;
			if (!((_context$draggable = context.draggable) !== null && _context$draggable !== void 0 && _context$draggable.icon)) return null;
			return /* @__PURE__ */ import_react$17.createElement("span", { className: "".concat(context.prefixCls, "-draggable-icon") }, context.draggable.icon);
		}, [context.draggable]);
		var renderSwitcherIconDom = function renderSwitcherIconDom$1(isInternalLeaf) {
			var switcherIcon = props.switcherIcon || context.switcherIcon;
			if (typeof switcherIcon === "function") return switcherIcon(_objectSpread2(_objectSpread2({}, props), {}, { isLeaf: isInternalLeaf }));
			return switcherIcon;
		};
		var renderSwitcher = function renderSwitcher$1() {
			if (memoizedIsLeaf) {
				var _switcherIconDom = renderSwitcherIconDom(true);
				return _switcherIconDom !== false ? /* @__PURE__ */ import_react$17.createElement("span", { className: (0, import_classnames$2.default)("".concat(context.prefixCls, "-switcher"), "".concat(context.prefixCls, "-switcher-noop")) }, _switcherIconDom) : null;
			}
			var switcherIconDom = renderSwitcherIconDom(false);
			return switcherIconDom !== false ? /* @__PURE__ */ import_react$17.createElement("span", {
				onClick: onExpand,
				className: (0, import_classnames$2.default)("".concat(context.prefixCls, "-switcher"), "".concat(context.prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE))
			}, switcherIconDom) : null;
		};
		var checkboxNode = import_react$17.useMemo(function() {
			if (!isCheckable) return null;
			var $custom = typeof isCheckable !== "boolean" ? isCheckable : null;
			return /* @__PURE__ */ import_react$17.createElement("span", {
				className: (0, import_classnames$2.default)("".concat(context.prefixCls, "-checkbox"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(context.prefixCls, "-checkbox-checked"), checked), "".concat(context.prefixCls, "-checkbox-indeterminate"), !checked && halfChecked), "".concat(context.prefixCls, "-checkbox-disabled"), isDisabled || props.disableCheckbox)),
				onClick: onCheck,
				role: "checkbox",
				"aria-checked": halfChecked ? "mixed" : checked,
				"aria-disabled": isDisabled || props.disableCheckbox,
				"aria-label": "Select ".concat(typeof props.title === "string" ? props.title : "tree node")
			}, $custom);
		}, [
			isCheckable,
			checked,
			halfChecked,
			isDisabled,
			props.disableCheckbox,
			props.title
		]);
		var nodeState = import_react$17.useMemo(function() {
			if (memoizedIsLeaf) return null;
			return expanded ? ICON_OPEN : ICON_CLOSE;
		}, [memoizedIsLeaf, expanded]);
		var iconNode = import_react$17.useMemo(function() {
			return /* @__PURE__ */ import_react$17.createElement("span", { className: (0, import_classnames$2.default)("".concat(context.prefixCls, "-iconEle"), "".concat(context.prefixCls, "-icon__").concat(nodeState || "docu"), _defineProperty({}, "".concat(context.prefixCls, "-icon_loading"), loading)) });
		}, [
			context.prefixCls,
			nodeState,
			loading
		]);
		var dropIndicatorNode = import_react$17.useMemo(function() {
			var rootDraggable = Boolean(context.draggable);
			if (!(!props.disabled && rootDraggable && context.dragOverNodeKey === eventKey)) return null;
			return context.dropIndicatorRender({
				dropPosition: context.dropPosition,
				dropLevelOffset: context.dropLevelOffset,
				indent: context.indent,
				prefixCls: context.prefixCls,
				direction: context.direction
			});
		}, [
			context.dropPosition,
			context.dropLevelOffset,
			context.indent,
			context.prefixCls,
			context.direction,
			context.draggable,
			context.dragOverNodeKey,
			context.dropIndicatorRender
		]);
		var selectorNode = import_react$17.useMemo(function() {
			var _props$title = props.title, title = _props$title === void 0 ? defaultTitle : _props$title;
			var wrapClass = "".concat(context.prefixCls, "-node-content-wrapper");
			var $icon;
			if (context.showIcon) {
				var currentIcon = props.icon || context.icon;
				$icon = currentIcon ? /* @__PURE__ */ import_react$17.createElement("span", { className: (0, import_classnames$2.default)("".concat(context.prefixCls, "-iconEle"), "".concat(context.prefixCls, "-icon__customize")) }, typeof currentIcon === "function" ? currentIcon(props) : currentIcon) : iconNode;
			} else if (context.loadData && loading) $icon = iconNode;
			var titleNode;
			if (typeof title === "function") titleNode = title(data);
			else if (context.titleRender) titleNode = context.titleRender(data);
			else titleNode = title;
			return /* @__PURE__ */ import_react$17.createElement("span", {
				ref: selectHandleRef,
				title: typeof title === "string" ? title : "",
				className: (0, import_classnames$2.default)(wrapClass, "".concat(wrapClass, "-").concat(nodeState || "normal"), _defineProperty({}, "".concat(context.prefixCls, "-node-selected"), !isDisabled && (selected || dragNodeHighlight))),
				onMouseEnter,
				onMouseLeave,
				onContextMenu,
				onClick: onSelectorClick,
				onDoubleClick: onSelectorDoubleClick
			}, $icon, /* @__PURE__ */ import_react$17.createElement("span", { className: "".concat(context.prefixCls, "-title") }, titleNode), dropIndicatorNode);
		}, [
			context.prefixCls,
			context.showIcon,
			props,
			context.icon,
			iconNode,
			context.titleRender,
			data,
			nodeState,
			onMouseEnter,
			onMouseLeave,
			onContextMenu,
			onSelectorClick,
			onSelectorDoubleClick
		]);
		var dataOrAriaAttributeProps = pickAttrs(otherProps, {
			aria: true,
			data: true
		});
		var level = (getEntity(context.keyEntities, eventKey) || {}).level;
		var isEndNode = isEnd[isEnd.length - 1];
		var draggableWithoutDisabled = !isDisabled && isDraggable;
		var dragging = context.draggingNodeKey === eventKey;
		var ariaSelected = selectable !== void 0 ? { "aria-selected": !!selectable } : void 0;
		return /* @__PURE__ */ import_react$17.createElement("div", _extends({
			ref: domRef,
			role: "treeitem",
			"aria-expanded": isLeaf ? void 0 : expanded,
			className: (0, import_classnames$2.default)(className, "".concat(context.prefixCls, "-treenode"), (_classNames4 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classNames4, "".concat(context.prefixCls, "-treenode-disabled"), isDisabled), "".concat(context.prefixCls, "-treenode-switcher-").concat(expanded ? "open" : "close"), !isLeaf), "".concat(context.prefixCls, "-treenode-checkbox-checked"), checked), "".concat(context.prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), "".concat(context.prefixCls, "-treenode-selected"), selected), "".concat(context.prefixCls, "-treenode-loading"), loading), "".concat(context.prefixCls, "-treenode-active"), active), "".concat(context.prefixCls, "-treenode-leaf-last"), isEndNode), "".concat(context.prefixCls, "-treenode-draggable"), isDraggable), "dragging", dragging), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_classNames4, "drop-target", context.dropTargetKey === eventKey), "drop-container", context.dropContainerKey === eventKey), "drag-over", !isDisabled && dragOver), "drag-over-gap-top", !isDisabled && dragOverGapTop), "drag-over-gap-bottom", !isDisabled && dragOverGapBottom), "filter-node", (_context$filterTreeNo = context.filterTreeNode) === null || _context$filterTreeNo === void 0 ? void 0 : _context$filterTreeNo.call(context, convertNodePropsToEventData(props))), "".concat(context.prefixCls, "-treenode-leaf"), memoizedIsLeaf))),
			style,
			draggable: draggableWithoutDisabled,
			onDragStart: draggableWithoutDisabled ? onDragStart : void 0,
			onDragEnter: isDraggable ? onDragEnter : void 0,
			onDragOver: isDraggable ? onDragOver : void 0,
			onDragLeave: isDraggable ? onDragLeave : void 0,
			onDrop: isDraggable ? onDrop : void 0,
			onDragEnd: isDraggable ? onDragEnd : void 0,
			onMouseMove
		}, ariaSelected, dataOrAriaAttributeProps), /* @__PURE__ */ import_react$17.createElement(Indent_default, {
			prefixCls: context.prefixCls,
			level,
			isStart,
			isEnd
		}), dragHandlerNode, renderSwitcher(), checkboxNode, selectorNode);
	};
	TreeNode$1.isTreeNode = 1;
	TreeNode_default$1 = TreeNode$1;
}));
function arrDel(list, value) {
	if (!list) return [];
	var clone = list.slice();
	var index = clone.indexOf(value);
	if (index >= 0) clone.splice(index, 1);
	return clone;
}
function arrAdd(list, value) {
	var clone = (list || []).slice();
	if (clone.indexOf(value) === -1) clone.push(value);
	return clone;
}
function posToArr(pos) {
	return pos.split("-");
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
	var dragChildrenKeys = [];
	var entity = getEntity(keyEntities, dragNodeKey);
	function dig() {
		(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).forEach(function(_ref) {
			var key = _ref.key, children = _ref.children;
			dragChildrenKeys.push(key);
			dig(children);
		});
	}
	dig(entity.children);
	return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
	if (treeNodeEntity.parent) {
		var posArr = posToArr(treeNodeEntity.pos);
		return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
	}
	return false;
}
function isFirstChild(treeNodeEntity) {
	var posArr = posToArr(treeNodeEntity.pos);
	return Number(posArr[posArr.length - 1]) === 0;
}
function calcDropPosition(event, dragNodeProps, targetNodeProps, indent, startMousePosition, allowDrop, flattenedNodes, keyEntities, expandKeys, direction) {
	var _abstractDropNodeEnti;
	var clientX = event.clientX, clientY = event.clientY;
	var _getBoundingClientRec = event.target.getBoundingClientRect(), top = _getBoundingClientRec.top, height = _getBoundingClientRec.height;
	var rawDropLevelOffset = ((direction === "rtl" ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX) - 12) / indent;
	var filteredExpandKeys = expandKeys.filter(function(key) {
		var _keyEntities$key;
		return (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0 || (_keyEntities$key = _keyEntities$key.children) === null || _keyEntities$key === void 0 ? void 0 : _keyEntities$key.length;
	});
	var abstractDropNodeEntity = getEntity(keyEntities, targetNodeProps.eventKey);
	if (clientY < top + height / 2) {
		var nodeIndex = flattenedNodes.findIndex(function(flattenedNode) {
			return flattenedNode.key === abstractDropNodeEntity.key;
		});
		var prevNodeKey = flattenedNodes[nodeIndex <= 0 ? 0 : nodeIndex - 1].key;
		abstractDropNodeEntity = getEntity(keyEntities, prevNodeKey);
	}
	var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
	var abstractDragOverEntity = abstractDropNodeEntity;
	var dragOverNodeKey = abstractDropNodeEntity.key;
	var dropPosition = 0;
	var dropLevelOffset = 0;
	if (!filteredExpandKeys.includes(initialAbstractDropNodeKey)) for (var i = 0; i < rawDropLevelOffset; i += 1) if (isLastChild(abstractDropNodeEntity)) {
		abstractDropNodeEntity = abstractDropNodeEntity.parent;
		dropLevelOffset += 1;
	} else break;
	var abstractDragDataNode = dragNodeProps.data;
	var abstractDropDataNode = abstractDropNodeEntity.node;
	var dropAllowed = true;
	if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop({
		dragNode: abstractDragDataNode,
		dropNode: abstractDropDataNode,
		dropPosition: -1
	}) && abstractDropNodeEntity.key === targetNodeProps.eventKey) dropPosition = -1;
	else if ((abstractDragOverEntity.children || []).length && filteredExpandKeys.includes(dragOverNodeKey)) if (allowDrop({
		dragNode: abstractDragDataNode,
		dropNode: abstractDropDataNode,
		dropPosition: 0
	})) dropPosition = 0;
	else dropAllowed = false;
	else if (dropLevelOffset === 0) if (rawDropLevelOffset > -1.5) if (allowDrop({
		dragNode: abstractDragDataNode,
		dropNode: abstractDropDataNode,
		dropPosition: 1
	})) dropPosition = 1;
	else dropAllowed = false;
	else if (allowDrop({
		dragNode: abstractDragDataNode,
		dropNode: abstractDropDataNode,
		dropPosition: 0
	})) dropPosition = 0;
	else if (allowDrop({
		dragNode: abstractDragDataNode,
		dropNode: abstractDropDataNode,
		dropPosition: 1
	})) dropPosition = 1;
	else dropAllowed = false;
	else if (allowDrop({
		dragNode: abstractDragDataNode,
		dropNode: abstractDropDataNode,
		dropPosition: 1
	})) dropPosition = 1;
	else dropAllowed = false;
	return {
		dropPosition,
		dropLevelOffset,
		dropTargetKey: abstractDropNodeEntity.key,
		dropTargetPos: abstractDropNodeEntity.pos,
		dragOverNodeKey,
		dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
		dropAllowed
	};
}
function calcSelectedKeys(selectedKeys, props) {
	if (!selectedKeys) return void 0;
	if (props.multiple) return selectedKeys.slice();
	if (selectedKeys.length) return [selectedKeys[0]];
	return selectedKeys;
}
function parseCheckedKeys(keys) {
	if (!keys) return null;
	var keyProps;
	if (Array.isArray(keys)) keyProps = {
		checkedKeys: keys,
		halfCheckedKeys: void 0
	};
	else if (_typeof(keys) === "object") keyProps = {
		checkedKeys: keys.checked || void 0,
		halfCheckedKeys: keys.halfChecked || void 0
	};
	else {
		warning_default(false, "`checkedKeys` is not an array or an object");
		return null;
	}
	return keyProps;
}
function conductExpandParent(keyList, keyEntities) {
	var expandedKeys = /* @__PURE__ */ new Set();
	function conductUp(key) {
		if (expandedKeys.has(key)) return;
		var entity = getEntity(keyEntities, key);
		if (!entity) return;
		expandedKeys.add(key);
		var parent = entity.parent;
		if (entity.node.disabled) return;
		if (parent) conductUp(parent.key);
	}
	(keyList || []).forEach(function(key) {
		conductUp(key);
	});
	return _toConsumableArray(expandedKeys);
}
var init_util = __esmMin((() => {
	init_toConsumableArray();
	init_typeof();
	init_warning();
	require_react();
	init_TreeNode$1();
	init_keyUtil();
	init_treeUtil();
}));
var import_react$15, DropIndicator, DropIndicator_default;
var init_DropIndicator = __esmMin((() => {
	import_react$15 = /* @__PURE__ */ __toESM(require_react());
	DropIndicator = function DropIndicator$1(props) {
		var dropPosition = props.dropPosition, dropLevelOffset = props.dropLevelOffset, indent = props.indent;
		var style = {
			pointerEvents: "none",
			position: "absolute",
			right: 0,
			backgroundColor: "red",
			height: 2
		};
		switch (dropPosition) {
			case -1:
				style.top = 0;
				style.left = -dropLevelOffset * indent;
				break;
			case 1:
				style.bottom = 0;
				style.left = -dropLevelOffset * indent;
				break;
			case 0:
				style.bottom = 0;
				style.left = indent;
				break;
		}
		return /* @__PURE__ */ import_react$15.createElement("div", { style });
	};
	DropIndicator_default = DropIndicator;
}));
function _objectDestructuringEmpty(t) {
	if (null == t) throw new TypeError("Cannot destructure " + t);
}
var init_objectDestructuringEmpty = __esmMin((() => {}));
function useUnmount(triggerStart, triggerEnd) {
	var _React$useState2 = _slicedToArray(import_react$14.useState(false), 2), firstMount = _React$useState2[0], setFirstMount = _React$useState2[1];
	useLayoutEffect_default(function() {
		if (firstMount) {
			triggerStart();
			return function() {
				triggerEnd();
			};
		}
	}, [firstMount]);
	useLayoutEffect_default(function() {
		setFirstMount(true);
		return function() {
			setFirstMount(false);
		};
	}, []);
}
var import_react$14, useUnmount_default;
var init_useUnmount = __esmMin((() => {
	init_slicedToArray();
	import_react$14 = /* @__PURE__ */ __toESM(require_react());
	init_useLayoutEffect$1();
	useUnmount_default = useUnmount;
}));
var import_classnames$1, import_react$13, _excluded$3, MotionTreeNode, MotionTreeNode_default;
var init_MotionTreeNode = __esmMin((() => {
	init_extends();
	init_objectDestructuringEmpty();
	init_slicedToArray();
	init_objectWithoutProperties();
	import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames());
	init_es$6();
	init_useLayoutEffect$1();
	import_react$13 = /* @__PURE__ */ __toESM(require_react());
	init_contextTypes();
	init_TreeNode$1();
	init_useUnmount();
	init_treeUtil();
	_excluded$3 = [
		"className",
		"style",
		"motion",
		"motionNodes",
		"motionType",
		"onMotionStart",
		"onMotionEnd",
		"active",
		"treeNodeRequiredProps"
	];
	MotionTreeNode = /* @__PURE__ */ import_react$13.forwardRef(function(oriProps, ref) {
		var className = oriProps.className, style = oriProps.style, motion = oriProps.motion, motionNodes = oriProps.motionNodes, motionType = oriProps.motionType, onOriginMotionStart = oriProps.onMotionStart, onOriginMotionEnd = oriProps.onMotionEnd, active = oriProps.active, treeNodeRequiredProps = oriProps.treeNodeRequiredProps, props = _objectWithoutProperties(oriProps, _excluded$3);
		var _React$useState2 = _slicedToArray(import_react$13.useState(true), 2), visible = _React$useState2[0], setVisible = _React$useState2[1];
		var prefixCls = import_react$13.useContext(TreeContext).prefixCls;
		var targetVisible = motionNodes && motionType !== "hide";
		useLayoutEffect_default(function() {
			if (motionNodes) {
				if (targetVisible !== visible) setVisible(targetVisible);
			}
		}, [motionNodes]);
		var triggerMotionStart = function triggerMotionStart$1() {
			if (motionNodes) onOriginMotionStart();
		};
		var triggerMotionEndRef = import_react$13.useRef(false);
		var triggerMotionEnd = function triggerMotionEnd$1() {
			if (motionNodes && !triggerMotionEndRef.current) {
				triggerMotionEndRef.current = true;
				onOriginMotionEnd();
			}
		};
		useUnmount_default(triggerMotionStart, triggerMotionEnd);
		var onVisibleChanged = function onVisibleChanged$1(nextVisible) {
			if (targetVisible === nextVisible) triggerMotionEnd();
		};
		if (motionNodes) return /* @__PURE__ */ import_react$13.createElement(es_default$3, _extends({
			ref,
			visible
		}, motion, {
			motionAppear: motionType === "show",
			onVisibleChanged
		}), function(_ref, motionRef) {
			var motionClassName = _ref.className, motionStyle = _ref.style;
			return /* @__PURE__ */ import_react$13.createElement("div", {
				ref: motionRef,
				className: (0, import_classnames$1.default)("".concat(prefixCls, "-treenode-motion"), motionClassName),
				style: motionStyle
			}, motionNodes.map(function(treeNode) {
				var restProps = Object.assign({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
				delete restProps.children;
				var treeNodeProps = getTreeNodeProps(key, treeNodeRequiredProps);
				return /* @__PURE__ */ import_react$13.createElement(TreeNode_default$1, _extends({}, restProps, treeNodeProps, {
					title,
					active,
					data: treeNode.data,
					key,
					isStart,
					isEnd
				}));
			}));
		});
		return /* @__PURE__ */ import_react$13.createElement(TreeNode_default$1, _extends({
			domRef: ref,
			className,
			style
		}, props, { active }));
	});
	MotionTreeNode_default = MotionTreeNode;
}));
function findExpandedKeys() {
	var prev = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
	var next = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	var prevLen = prev.length;
	var nextLen = next.length;
	if (Math.abs(prevLen - nextLen) !== 1) return {
		add: false,
		key: null
	};
	function find(shorter, longer) {
		var cache = /* @__PURE__ */ new Map();
		shorter.forEach(function(key) {
			cache.set(key, true);
		});
		var keys = longer.filter(function(key) {
			return !cache.has(key);
		});
		return keys.length === 1 ? keys[0] : null;
	}
	if (prevLen < nextLen) return {
		add: true,
		key: find(prev, next)
	};
	return {
		add: false,
		key: find(next, prev)
	};
}
function getExpandRange(shorter, longer, key) {
	var shorterEndNode = shorter[shorter.findIndex(function(data) {
		return data.key === key;
	}) + 1];
	var longerStartIndex = longer.findIndex(function(data) {
		return data.key === key;
	});
	if (shorterEndNode) {
		var longerEndIndex = longer.findIndex(function(data) {
			return data.key === shorterEndNode.key;
		});
		return longer.slice(longerStartIndex + 1, longerEndIndex);
	}
	return longer.slice(longerStartIndex + 1);
}
var init_diffUtil = __esmMin((() => {}));
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
	if (virtual === false || !height) return list;
	return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
	var key = item.key, pos = item.pos;
	return getKey(key, pos);
}
function getAccessibilityPath(item) {
	var path = String(item.data.key);
	var current = item;
	while (current.parent) {
		current = current.parent;
		path = "".concat(current.data.key, " > ").concat(path);
	}
	return path;
}
var import_react$12, _excluded$2, HIDDEN_STYLE$1, noop, MOTION_KEY, MotionNode, MotionEntity, MotionFlattenData, NodeList, NodeList_default;
var init_NodeList = __esmMin((() => {
	init_extends();
	init_objectDestructuringEmpty();
	init_slicedToArray();
	init_objectWithoutProperties();
	init_useLayoutEffect$1();
	init_es$8();
	import_react$12 = /* @__PURE__ */ __toESM(require_react());
	init_MotionTreeNode();
	init_diffUtil();
	init_treeUtil();
	_excluded$2 = [
		"prefixCls",
		"data",
		"selectable",
		"checkable",
		"expandedKeys",
		"selectedKeys",
		"checkedKeys",
		"loadedKeys",
		"loadingKeys",
		"halfCheckedKeys",
		"keyEntities",
		"disabled",
		"dragging",
		"dragOverNodeKey",
		"dropPosition",
		"motion",
		"height",
		"itemHeight",
		"virtual",
		"scrollWidth",
		"focusable",
		"activeItem",
		"focused",
		"tabIndex",
		"onKeyDown",
		"onFocus",
		"onBlur",
		"onActiveChange",
		"onListChangeStart",
		"onListChangeEnd"
	];
	HIDDEN_STYLE$1 = {
		width: 0,
		height: 0,
		display: "flex",
		overflow: "hidden",
		opacity: 0,
		border: 0,
		padding: 0,
		margin: 0
	};
	noop = function noop$1() {};
	MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
	MotionNode = { key: MOTION_KEY };
	MotionEntity = {
		key: MOTION_KEY,
		level: 0,
		index: 0,
		pos: "0",
		node: MotionNode,
		nodes: [MotionNode]
	};
	MotionFlattenData = {
		parent: null,
		children: [],
		pos: MotionEntity.pos,
		data: MotionNode,
		title: null,
		key: MOTION_KEY,
		isStart: [],
		isEnd: []
	};
	NodeList = /* @__PURE__ */ import_react$12.forwardRef(function(props, ref) {
		var prefixCls = props.prefixCls, data = props.data;
		props.selectable;
		props.checkable;
		var expandedKeys = props.expandedKeys, selectedKeys = props.selectedKeys, checkedKeys = props.checkedKeys, loadedKeys = props.loadedKeys, loadingKeys = props.loadingKeys, halfCheckedKeys = props.halfCheckedKeys, keyEntities = props.keyEntities, disabled = props.disabled, dragging = props.dragging, dragOverNodeKey = props.dragOverNodeKey, dropPosition = props.dropPosition, motion = props.motion, height = props.height, itemHeight = props.itemHeight, virtual = props.virtual, scrollWidth = props.scrollWidth, focusable = props.focusable, activeItem = props.activeItem, focused = props.focused, tabIndex = props.tabIndex, onKeyDown = props.onKeyDown, onFocus = props.onFocus, onBlur = props.onBlur, onActiveChange = props.onActiveChange, onListChangeStart = props.onListChangeStart, onListChangeEnd = props.onListChangeEnd, domProps = _objectWithoutProperties(props, _excluded$2);
		var listRef = import_react$12.useRef(null);
		var indentMeasurerRef = import_react$12.useRef(null);
		import_react$12.useImperativeHandle(ref, function() {
			return {
				scrollTo: function scrollTo(scroll) {
					listRef.current.scrollTo(scroll);
				},
				getIndentWidth: function getIndentWidth() {
					return indentMeasurerRef.current.offsetWidth;
				}
			};
		});
		var _React$useState2 = _slicedToArray(import_react$12.useState(expandedKeys), 2), prevExpandedKeys = _React$useState2[0], setPrevExpandedKeys = _React$useState2[1];
		var _React$useState4 = _slicedToArray(import_react$12.useState(data), 2), prevData = _React$useState4[0], setPrevData = _React$useState4[1];
		var _React$useState6 = _slicedToArray(import_react$12.useState(data), 2), transitionData = _React$useState6[0], setTransitionData = _React$useState6[1];
		var _React$useState8 = _slicedToArray(import_react$12.useState([]), 2), transitionRange = _React$useState8[0], setTransitionRange = _React$useState8[1];
		var _React$useState10 = _slicedToArray(import_react$12.useState(null), 2), motionType = _React$useState10[0], setMotionType = _React$useState10[1];
		var dataRef = import_react$12.useRef(data);
		dataRef.current = data;
		function onMotionEnd() {
			var latestData = dataRef.current;
			setPrevData(latestData);
			setTransitionData(latestData);
			setTransitionRange([]);
			setMotionType(null);
			onListChangeEnd();
		}
		useLayoutEffect_default(function() {
			setPrevExpandedKeys(expandedKeys);
			var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys);
			if (diffExpanded.key !== null) if (diffExpanded.add) {
				var keyIndex = prevData.findIndex(function(_ref) {
					return _ref.key === diffExpanded.key;
				});
				var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data, diffExpanded.key), virtual, height, itemHeight);
				var newTransitionData = prevData.slice();
				newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
				setTransitionData(newTransitionData);
				setTransitionRange(rangeNodes);
				setMotionType("show");
			} else {
				var _keyIndex = data.findIndex(function(_ref2) {
					return _ref2.key === diffExpanded.key;
				});
				var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data, prevData, diffExpanded.key), virtual, height, itemHeight);
				var _newTransitionData = data.slice();
				_newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
				setTransitionData(_newTransitionData);
				setTransitionRange(_rangeNodes);
				setMotionType("hide");
			}
			else if (prevData !== data) {
				setPrevData(data);
				setTransitionData(data);
			}
		}, [expandedKeys, data]);
		import_react$12.useEffect(function() {
			if (!dragging) onMotionEnd();
		}, [dragging]);
		var mergedData = motion ? transitionData : data;
		var treeNodeRequiredProps = {
			expandedKeys,
			selectedKeys,
			loadedKeys,
			loadingKeys,
			checkedKeys,
			halfCheckedKeys,
			dragOverNodeKey,
			dropPosition,
			keyEntities
		};
		return /* @__PURE__ */ import_react$12.createElement(import_react$12.Fragment, null, focused && activeItem && /* @__PURE__ */ import_react$12.createElement("span", {
			style: HIDDEN_STYLE$1,
			"aria-live": "assertive"
		}, getAccessibilityPath(activeItem)), /* @__PURE__ */ import_react$12.createElement("div", null, /* @__PURE__ */ import_react$12.createElement("input", {
			style: HIDDEN_STYLE$1,
			disabled: focusable === false || disabled,
			tabIndex: focusable !== false ? tabIndex : null,
			onKeyDown,
			onFocus,
			onBlur,
			value: "",
			onChange: noop,
			"aria-label": "for screen reader"
		})), /* @__PURE__ */ import_react$12.createElement("div", {
			className: "".concat(prefixCls, "-treenode"),
			"aria-hidden": true,
			style: {
				position: "absolute",
				pointerEvents: "none",
				visibility: "hidden",
				height: 0,
				overflow: "hidden",
				border: 0,
				padding: 0
			}
		}, /* @__PURE__ */ import_react$12.createElement("div", { className: "".concat(prefixCls, "-indent") }, /* @__PURE__ */ import_react$12.createElement("div", {
			ref: indentMeasurerRef,
			className: "".concat(prefixCls, "-indent-unit")
		}))), /* @__PURE__ */ import_react$12.createElement(es_default$2, _extends({}, domProps, {
			data: mergedData,
			itemKey,
			height,
			fullHeight: false,
			virtual,
			itemHeight,
			scrollWidth,
			prefixCls: "".concat(prefixCls, "-list"),
			ref: listRef,
			role: "tree",
			onVisibleChange: function onVisibleChange(originList) {
				if (originList.every(function(item) {
					return itemKey(item) !== MOTION_KEY;
				})) onMotionEnd();
			}
		}), function(treeNode) {
			var pos = treeNode.pos, restProps = Object.assign({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)), title = treeNode.title, key = treeNode.key, isStart = treeNode.isStart, isEnd = treeNode.isEnd;
			var mergedKey = getKey(key, pos);
			delete restProps.key;
			delete restProps.children;
			var treeNodeProps = getTreeNodeProps(mergedKey, treeNodeRequiredProps);
			return /* @__PURE__ */ import_react$12.createElement(MotionTreeNode_default, _extends({}, restProps, treeNodeProps, {
				title,
				active: !!activeItem && key === activeItem.key,
				pos,
				data: treeNode.data,
				isStart,
				isEnd,
				motion,
				motionNodes: key === MOTION_KEY ? transitionRange : null,
				motionType,
				onMotionStart: onListChangeStart,
				onMotionEnd,
				treeNodeRequiredProps,
				onMouseMove: function onMouseMove() {
					onActiveChange(null);
				}
			}));
		}));
	});
	NodeList_default = NodeList;
}));
var import_classnames, import_react$11, MAX_RETRY_TIMES, Tree, Tree_default;
var init_Tree = __esmMin((() => {
	init_extends();
	init_typeof();
	init_objectSpread2();
	init_toConsumableArray();
	init_classCallCheck();
	init_createClass();
	init_assertThisInitialized();
	init_inherits();
	init_createSuper();
	init_defineProperty();
	import_classnames = /* @__PURE__ */ __toESM(require_classnames());
	init_KeyCode();
	init_pickAttrs();
	init_warning();
	import_react$11 = /* @__PURE__ */ __toESM(require_react());
	init_contextTypes();
	init_DropIndicator();
	init_NodeList();
	init_TreeNode$1();
	init_util();
	init_conductUtil();
	init_keyUtil();
	init_treeUtil();
	MAX_RETRY_TIMES = 10;
	Tree = /* @__PURE__ */ function(_React$Component) {
		_inherits(Tree$1, _React$Component);
		var _super = _createSuper(Tree$1);
		function Tree$1() {
			var _this;
			_classCallCheck(this, Tree$1);
			for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) _args[_key] = arguments[_key];
			_this = _super.call.apply(_super, [this].concat(_args));
			_defineProperty(_assertThisInitialized(_this), "destroyed", false);
			_defineProperty(_assertThisInitialized(_this), "delayedDragEnterLogic", void 0);
			_defineProperty(_assertThisInitialized(_this), "loadingRetryTimes", {});
			_defineProperty(_assertThisInitialized(_this), "state", {
				keyEntities: {},
				indent: null,
				selectedKeys: [],
				checkedKeys: [],
				halfCheckedKeys: [],
				loadedKeys: [],
				loadingKeys: [],
				expandedKeys: [],
				draggingNodeKey: null,
				dragChildrenKeys: [],
				dropTargetKey: null,
				dropPosition: null,
				dropContainerKey: null,
				dropLevelOffset: null,
				dropTargetPos: null,
				dropAllowed: true,
				dragOverNodeKey: null,
				treeData: [],
				flattenNodes: [],
				focused: false,
				activeKey: null,
				listChanging: false,
				prevProps: null,
				fieldNames: fillFieldNames$1()
			});
			_defineProperty(_assertThisInitialized(_this), "dragStartMousePosition", null);
			_defineProperty(_assertThisInitialized(_this), "dragNodeProps", null);
			_defineProperty(_assertThisInitialized(_this), "currentMouseOverDroppableNodeKey", null);
			_defineProperty(_assertThisInitialized(_this), "listRef", /* @__PURE__ */ import_react$11.createRef());
			_defineProperty(_assertThisInitialized(_this), "onNodeDragStart", function(event, nodeProps) {
				var _this$state = _this.state, expandedKeys = _this$state.expandedKeys, keyEntities = _this$state.keyEntities;
				var onDragStart = _this.props.onDragStart;
				var eventKey = nodeProps.eventKey;
				_this.dragNodeProps = nodeProps;
				_this.dragStartMousePosition = {
					x: event.clientX,
					y: event.clientY
				};
				var newExpandedKeys = arrDel(expandedKeys, eventKey);
				_this.setState({
					draggingNodeKey: eventKey,
					dragChildrenKeys: getDragChildrenKeys(eventKey, keyEntities),
					indent: _this.listRef.current.getIndentWidth()
				});
				_this.setExpandedKeys(newExpandedKeys);
				window.addEventListener("dragend", _this.onWindowDragEnd);
				onDragStart === null || onDragStart === void 0 || onDragStart({
					event,
					node: convertNodePropsToEventData(nodeProps)
				});
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeDragEnter", function(event, nodeProps) {
				var _this$state2 = _this.state, expandedKeys = _this$state2.expandedKeys, keyEntities = _this$state2.keyEntities, dragChildrenKeys = _this$state2.dragChildrenKeys, flattenNodes = _this$state2.flattenNodes, indent = _this$state2.indent;
				var _this$props = _this.props, onDragEnter = _this$props.onDragEnter, onExpand = _this$props.onExpand, allowDrop = _this$props.allowDrop, direction = _this$props.direction;
				var pos = nodeProps.pos, eventKey = nodeProps.eventKey;
				if (_this.currentMouseOverDroppableNodeKey !== eventKey) _this.currentMouseOverDroppableNodeKey = eventKey;
				if (!_this.dragNodeProps) {
					_this.resetDragState();
					return;
				}
				var _calcDropPosition = calcDropPosition(event, _this.dragNodeProps, nodeProps, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction), dropPosition = _calcDropPosition.dropPosition, dropLevelOffset = _calcDropPosition.dropLevelOffset, dropTargetKey = _calcDropPosition.dropTargetKey, dropContainerKey = _calcDropPosition.dropContainerKey, dropTargetPos = _calcDropPosition.dropTargetPos, dropAllowed = _calcDropPosition.dropAllowed, dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
				if (dragChildrenKeys.includes(dropTargetKey) || !dropAllowed) {
					_this.resetDragState();
					return;
				}
				if (!_this.delayedDragEnterLogic) _this.delayedDragEnterLogic = {};
				Object.keys(_this.delayedDragEnterLogic).forEach(function(key) {
					clearTimeout(_this.delayedDragEnterLogic[key]);
				});
				if (_this.dragNodeProps.eventKey !== nodeProps.eventKey) {
					event.persist();
					_this.delayedDragEnterLogic[pos] = window.setTimeout(function() {
						if (_this.state.draggingNodeKey === null) return;
						var newExpandedKeys = _toConsumableArray(expandedKeys);
						var entity = getEntity(keyEntities, nodeProps.eventKey);
						if (entity && (entity.children || []).length) newExpandedKeys = arrAdd(expandedKeys, nodeProps.eventKey);
						if (!_this.props.hasOwnProperty("expandedKeys")) _this.setExpandedKeys(newExpandedKeys);
						onExpand === null || onExpand === void 0 || onExpand(newExpandedKeys, {
							node: convertNodePropsToEventData(nodeProps),
							expanded: true,
							nativeEvent: event.nativeEvent
						});
					}, 800);
				}
				if (_this.dragNodeProps.eventKey === dropTargetKey && dropLevelOffset === 0) {
					_this.resetDragState();
					return;
				}
				_this.setState({
					dragOverNodeKey,
					dropPosition,
					dropLevelOffset,
					dropTargetKey,
					dropContainerKey,
					dropTargetPos,
					dropAllowed
				});
				onDragEnter === null || onDragEnter === void 0 || onDragEnter({
					event,
					node: convertNodePropsToEventData(nodeProps),
					expandedKeys
				});
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeDragOver", function(event, nodeProps) {
				var _this$state3 = _this.state, dragChildrenKeys = _this$state3.dragChildrenKeys, flattenNodes = _this$state3.flattenNodes, keyEntities = _this$state3.keyEntities, expandedKeys = _this$state3.expandedKeys, indent = _this$state3.indent;
				var _this$props2 = _this.props, onDragOver = _this$props2.onDragOver, allowDrop = _this$props2.allowDrop, direction = _this$props2.direction;
				if (!_this.dragNodeProps) return;
				var _calcDropPosition2 = calcDropPosition(event, _this.dragNodeProps, nodeProps, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction), dropPosition = _calcDropPosition2.dropPosition, dropLevelOffset = _calcDropPosition2.dropLevelOffset, dropTargetKey = _calcDropPosition2.dropTargetKey, dropContainerKey = _calcDropPosition2.dropContainerKey, dropTargetPos = _calcDropPosition2.dropTargetPos, dropAllowed = _calcDropPosition2.dropAllowed, dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
				if (dragChildrenKeys.includes(dropTargetKey) || !dropAllowed) return;
				if (_this.dragNodeProps.eventKey === dropTargetKey && dropLevelOffset === 0) {
					if (!(_this.state.dropPosition === null && _this.state.dropLevelOffset === null && _this.state.dropTargetKey === null && _this.state.dropContainerKey === null && _this.state.dropTargetPos === null && _this.state.dropAllowed === false && _this.state.dragOverNodeKey === null)) _this.resetDragState();
				} else if (!(dropPosition === _this.state.dropPosition && dropLevelOffset === _this.state.dropLevelOffset && dropTargetKey === _this.state.dropTargetKey && dropContainerKey === _this.state.dropContainerKey && dropTargetPos === _this.state.dropTargetPos && dropAllowed === _this.state.dropAllowed && dragOverNodeKey === _this.state.dragOverNodeKey)) _this.setState({
					dropPosition,
					dropLevelOffset,
					dropTargetKey,
					dropContainerKey,
					dropTargetPos,
					dropAllowed,
					dragOverNodeKey
				});
				onDragOver === null || onDragOver === void 0 || onDragOver({
					event,
					node: convertNodePropsToEventData(nodeProps)
				});
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeDragLeave", function(event, nodeProps) {
				if (_this.currentMouseOverDroppableNodeKey === nodeProps.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
					_this.resetDragState();
					_this.currentMouseOverDroppableNodeKey = null;
				}
				var onDragLeave = _this.props.onDragLeave;
				onDragLeave === null || onDragLeave === void 0 || onDragLeave({
					event,
					node: convertNodePropsToEventData(nodeProps)
				});
			});
			_defineProperty(_assertThisInitialized(_this), "onWindowDragEnd", function(event) {
				_this.onNodeDragEnd(event, null, true);
				window.removeEventListener("dragend", _this.onWindowDragEnd);
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeDragEnd", function(event, nodeProps) {
				var onDragEnd = _this.props.onDragEnd;
				_this.setState({ dragOverNodeKey: null });
				_this.cleanDragState();
				onDragEnd === null || onDragEnd === void 0 || onDragEnd({
					event,
					node: convertNodePropsToEventData(nodeProps)
				});
				_this.dragNodeProps = null;
				window.removeEventListener("dragend", _this.onWindowDragEnd);
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeDrop", function(event, _) {
				var _this$getActiveItem;
				var outsideTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
				var _this$state4 = _this.state, dragChildrenKeys = _this$state4.dragChildrenKeys, dropPosition = _this$state4.dropPosition, dropTargetKey = _this$state4.dropTargetKey, dropTargetPos = _this$state4.dropTargetPos;
				if (!_this$state4.dropAllowed) return;
				var onDrop = _this.props.onDrop;
				_this.setState({ dragOverNodeKey: null });
				_this.cleanDragState();
				if (dropTargetKey === null) return;
				var abstractDropNodeProps = _objectSpread2(_objectSpread2({}, getTreeNodeProps(dropTargetKey, _this.getTreeNodeRequiredProps())), {}, {
					active: ((_this$getActiveItem = _this.getActiveItem()) === null || _this$getActiveItem === void 0 ? void 0 : _this$getActiveItem.key) === dropTargetKey,
					data: getEntity(_this.state.keyEntities, dropTargetKey).node
				});
				warning_default(!dragChildrenKeys.includes(dropTargetKey), "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
				var posArr = posToArr(dropTargetPos);
				var dropResult = {
					event,
					node: convertNodePropsToEventData(abstractDropNodeProps),
					dragNode: _this.dragNodeProps ? convertNodePropsToEventData(_this.dragNodeProps) : null,
					dragNodesKeys: [_this.dragNodeProps.eventKey].concat(dragChildrenKeys),
					dropToGap: dropPosition !== 0,
					dropPosition: dropPosition + Number(posArr[posArr.length - 1])
				};
				if (!outsideTree) onDrop === null || onDrop === void 0 || onDrop(dropResult);
				_this.dragNodeProps = null;
			});
			_defineProperty(_assertThisInitialized(_this), "cleanDragState", function() {
				if (_this.state.draggingNodeKey !== null) _this.setState({
					draggingNodeKey: null,
					dropPosition: null,
					dropContainerKey: null,
					dropTargetKey: null,
					dropLevelOffset: null,
					dropAllowed: true,
					dragOverNodeKey: null
				});
				_this.dragStartMousePosition = null;
				_this.currentMouseOverDroppableNodeKey = null;
			});
			_defineProperty(_assertThisInitialized(_this), "triggerExpandActionExpand", function(e, treeNode) {
				var _this$state5 = _this.state, expandedKeys = _this$state5.expandedKeys, flattenNodes = _this$state5.flattenNodes;
				var expanded = treeNode.expanded, key = treeNode.key;
				if (treeNode.isLeaf || e.shiftKey || e.metaKey || e.ctrlKey) return;
				var node = flattenNodes.filter(function(nodeItem) {
					return nodeItem.key === key;
				})[0];
				var eventNode = convertNodePropsToEventData(_objectSpread2(_objectSpread2({}, getTreeNodeProps(key, _this.getTreeNodeRequiredProps())), {}, { data: node.data }));
				_this.setExpandedKeys(expanded ? arrDel(expandedKeys, key) : arrAdd(expandedKeys, key));
				_this.onNodeExpand(e, eventNode);
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeClick", function(e, treeNode) {
				var _this$props3 = _this.props, onClick = _this$props3.onClick;
				if (_this$props3.expandAction === "click") _this.triggerExpandActionExpand(e, treeNode);
				onClick === null || onClick === void 0 || onClick(e, treeNode);
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeDoubleClick", function(e, treeNode) {
				var _this$props4 = _this.props, onDoubleClick = _this$props4.onDoubleClick;
				if (_this$props4.expandAction === "doubleClick") _this.triggerExpandActionExpand(e, treeNode);
				onDoubleClick === null || onDoubleClick === void 0 || onDoubleClick(e, treeNode);
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeSelect", function(e, treeNode) {
				var selectedKeys = _this.state.selectedKeys;
				var _this$state6 = _this.state, keyEntities = _this$state6.keyEntities, fieldNames = _this$state6.fieldNames;
				var _this$props5 = _this.props, onSelect = _this$props5.onSelect, multiple = _this$props5.multiple;
				var selected = treeNode.selected;
				var key = treeNode[fieldNames.key];
				var targetSelected = !selected;
				if (!targetSelected) selectedKeys = arrDel(selectedKeys, key);
				else if (!multiple) selectedKeys = [key];
				else selectedKeys = arrAdd(selectedKeys, key);
				var selectedNodes = selectedKeys.map(function(selectedKey) {
					var entity = getEntity(keyEntities, selectedKey);
					return entity ? entity.node : null;
				}).filter(Boolean);
				_this.setUncontrolledState({ selectedKeys });
				onSelect === null || onSelect === void 0 || onSelect(selectedKeys, {
					event: "select",
					selected: targetSelected,
					node: treeNode,
					selectedNodes,
					nativeEvent: e.nativeEvent
				});
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeCheck", function(e, treeNode, checked) {
				var _this$state7 = _this.state, keyEntities = _this$state7.keyEntities, oriCheckedKeys = _this$state7.checkedKeys, oriHalfCheckedKeys = _this$state7.halfCheckedKeys;
				var _this$props6 = _this.props, checkStrictly = _this$props6.checkStrictly, onCheck = _this$props6.onCheck;
				var key = treeNode.key;
				var checkedObj;
				var eventObj = {
					event: "check",
					node: treeNode,
					checked,
					nativeEvent: e.nativeEvent
				};
				if (checkStrictly) {
					var checkedKeys = checked ? arrAdd(oriCheckedKeys, key) : arrDel(oriCheckedKeys, key);
					checkedObj = {
						checked: checkedKeys,
						halfChecked: arrDel(oriHalfCheckedKeys, key)
					};
					eventObj.checkedNodes = checkedKeys.map(function(checkedKey) {
						return getEntity(keyEntities, checkedKey);
					}).filter(Boolean).map(function(entity) {
						return entity.node;
					});
					_this.setUncontrolledState({ checkedKeys });
				} else {
					var _conductCheck = conductCheck([].concat(_toConsumableArray(oriCheckedKeys), [key]), true, keyEntities), _checkedKeys = _conductCheck.checkedKeys, _halfCheckedKeys = _conductCheck.halfCheckedKeys;
					if (!checked) {
						var keySet = new Set(_checkedKeys);
						keySet.delete(key);
						var _conductCheck2 = conductCheck(Array.from(keySet), {
							checked: false,
							halfCheckedKeys: _halfCheckedKeys
						}, keyEntities);
						_checkedKeys = _conductCheck2.checkedKeys;
						_halfCheckedKeys = _conductCheck2.halfCheckedKeys;
					}
					checkedObj = _checkedKeys;
					eventObj.checkedNodes = [];
					eventObj.checkedNodesPositions = [];
					eventObj.halfCheckedKeys = _halfCheckedKeys;
					_checkedKeys.forEach(function(checkedKey) {
						var entity = getEntity(keyEntities, checkedKey);
						if (!entity) return;
						var node = entity.node, pos = entity.pos;
						eventObj.checkedNodes.push(node);
						eventObj.checkedNodesPositions.push({
							node,
							pos
						});
					});
					_this.setUncontrolledState({ checkedKeys: _checkedKeys }, false, { halfCheckedKeys: _halfCheckedKeys });
				}
				onCheck === null || onCheck === void 0 || onCheck(checkedObj, eventObj);
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeLoad", function(treeNode) {
				var _entity$children;
				var key = treeNode.key;
				var keyEntities = _this.state.keyEntities;
				var entity = getEntity(keyEntities, key);
				if (entity !== null && entity !== void 0 && (_entity$children = entity.children) !== null && _entity$children !== void 0 && _entity$children.length) return;
				var loadPromise = new Promise(function(resolve, reject) {
					_this.setState(function(_ref) {
						var _ref$loadedKeys = _ref.loadedKeys, loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys, _ref$loadingKeys = _ref.loadingKeys, loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
						var _this$props7 = _this.props, loadData = _this$props7.loadData, onLoad = _this$props7.onLoad;
						if (!loadData || loadedKeys.includes(key) || loadingKeys.includes(key)) return null;
						loadData(treeNode).then(function() {
							var currentLoadedKeys = _this.state.loadedKeys;
							var newLoadedKeys = arrAdd(currentLoadedKeys, key);
							onLoad === null || onLoad === void 0 || onLoad(newLoadedKeys, {
								event: "load",
								node: treeNode
							});
							_this.setUncontrolledState({ loadedKeys: newLoadedKeys });
							_this.setState(function(prevState) {
								return { loadingKeys: arrDel(prevState.loadingKeys, key) };
							});
							resolve();
						}).catch(function(e) {
							_this.setState(function(prevState) {
								return { loadingKeys: arrDel(prevState.loadingKeys, key) };
							});
							_this.loadingRetryTimes[key] = (_this.loadingRetryTimes[key] || 0) + 1;
							if (_this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
								var currentLoadedKeys = _this.state.loadedKeys;
								warning_default(false, "Retry for `loadData` many times but still failed. No more retry.");
								_this.setUncontrolledState({ loadedKeys: arrAdd(currentLoadedKeys, key) });
								resolve();
							}
							reject(e);
						});
						return { loadingKeys: arrAdd(loadingKeys, key) };
					});
				});
				loadPromise.catch(function() {});
				return loadPromise;
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeMouseEnter", function(event, node) {
				var onMouseEnter = _this.props.onMouseEnter;
				onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter({
					event,
					node
				});
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeMouseLeave", function(event, node) {
				var onMouseLeave = _this.props.onMouseLeave;
				onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave({
					event,
					node
				});
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeContextMenu", function(event, node) {
				var onRightClick = _this.props.onRightClick;
				if (onRightClick) {
					event.preventDefault();
					onRightClick({
						event,
						node
					});
				}
			});
			_defineProperty(_assertThisInitialized(_this), "onFocus", function() {
				var onFocus = _this.props.onFocus;
				_this.setState({ focused: true });
				for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
				onFocus === null || onFocus === void 0 || onFocus.apply(void 0, args);
			});
			_defineProperty(_assertThisInitialized(_this), "onBlur", function() {
				var onBlur = _this.props.onBlur;
				_this.setState({ focused: false });
				_this.onActiveChange(null);
				for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
				onBlur === null || onBlur === void 0 || onBlur.apply(void 0, args);
			});
			_defineProperty(_assertThisInitialized(_this), "getTreeNodeRequiredProps", function() {
				var _this$state8 = _this.state, expandedKeys = _this$state8.expandedKeys, selectedKeys = _this$state8.selectedKeys, loadedKeys = _this$state8.loadedKeys, loadingKeys = _this$state8.loadingKeys, checkedKeys = _this$state8.checkedKeys, halfCheckedKeys = _this$state8.halfCheckedKeys, dragOverNodeKey = _this$state8.dragOverNodeKey, dropPosition = _this$state8.dropPosition, keyEntities = _this$state8.keyEntities;
				return {
					expandedKeys: expandedKeys || [],
					selectedKeys: selectedKeys || [],
					loadedKeys: loadedKeys || [],
					loadingKeys: loadingKeys || [],
					checkedKeys: checkedKeys || [],
					halfCheckedKeys: halfCheckedKeys || [],
					dragOverNodeKey,
					dropPosition,
					keyEntities
				};
			});
			_defineProperty(_assertThisInitialized(_this), "setExpandedKeys", function(expandedKeys) {
				var _this$state9 = _this.state, treeData = _this$state9.treeData, fieldNames = _this$state9.fieldNames;
				var flattenNodes = flattenTreeData(treeData, expandedKeys, fieldNames);
				_this.setUncontrolledState({
					expandedKeys,
					flattenNodes
				}, true);
			});
			_defineProperty(_assertThisInitialized(_this), "onNodeExpand", function(e, treeNode) {
				var expandedKeys = _this.state.expandedKeys;
				var _this$state10 = _this.state, listChanging = _this$state10.listChanging, fieldNames = _this$state10.fieldNames;
				var _this$props8 = _this.props, onExpand = _this$props8.onExpand, loadData = _this$props8.loadData;
				var expanded = treeNode.expanded;
				var key = treeNode[fieldNames.key];
				if (listChanging) return;
				var certain = expandedKeys.includes(key);
				var targetExpanded = !expanded;
				warning_default(expanded && certain || !expanded && !certain, "Expand state not sync with index check");
				expandedKeys = targetExpanded ? arrAdd(expandedKeys, key) : arrDel(expandedKeys, key);
				_this.setExpandedKeys(expandedKeys);
				onExpand === null || onExpand === void 0 || onExpand(expandedKeys, {
					node: treeNode,
					expanded: targetExpanded,
					nativeEvent: e.nativeEvent
				});
				if (targetExpanded && loadData) {
					var loadPromise = _this.onNodeLoad(treeNode);
					if (loadPromise) loadPromise.then(function() {
						var newFlattenTreeData = flattenTreeData(_this.state.treeData, expandedKeys, fieldNames);
						_this.setUncontrolledState({ flattenNodes: newFlattenTreeData });
					}).catch(function() {
						var currentExpandedKeys = _this.state.expandedKeys;
						var expandedKeysToRestore = arrDel(currentExpandedKeys, key);
						_this.setExpandedKeys(expandedKeysToRestore);
					});
				}
			});
			_defineProperty(_assertThisInitialized(_this), "onListChangeStart", function() {
				_this.setUncontrolledState({ listChanging: true });
			});
			_defineProperty(_assertThisInitialized(_this), "onListChangeEnd", function() {
				setTimeout(function() {
					_this.setUncontrolledState({ listChanging: false });
				});
			});
			_defineProperty(_assertThisInitialized(_this), "onActiveChange", function(newActiveKey) {
				var activeKey = _this.state.activeKey;
				var _this$props9 = _this.props, onActiveChange = _this$props9.onActiveChange, _this$props9$itemScro = _this$props9.itemScrollOffset, itemScrollOffset = _this$props9$itemScro === void 0 ? 0 : _this$props9$itemScro;
				if (activeKey === newActiveKey) return;
				_this.setState({ activeKey: newActiveKey });
				if (newActiveKey !== null) _this.scrollTo({
					key: newActiveKey,
					offset: itemScrollOffset
				});
				onActiveChange === null || onActiveChange === void 0 || onActiveChange(newActiveKey);
			});
			_defineProperty(_assertThisInitialized(_this), "getActiveItem", function() {
				var _this$state11 = _this.state, activeKey = _this$state11.activeKey, flattenNodes = _this$state11.flattenNodes;
				if (activeKey === null) return null;
				return flattenNodes.find(function(_ref2) {
					return _ref2.key === activeKey;
				}) || null;
			});
			_defineProperty(_assertThisInitialized(_this), "offsetActiveKey", function(offset) {
				var _this$state12 = _this.state, flattenNodes = _this$state12.flattenNodes, activeKey = _this$state12.activeKey;
				var index = flattenNodes.findIndex(function(_ref3) {
					return _ref3.key === activeKey;
				});
				if (index === -1 && offset < 0) index = flattenNodes.length;
				index = (index + offset + flattenNodes.length) % flattenNodes.length;
				var item = flattenNodes[index];
				if (item) {
					var _key4 = item.key;
					_this.onActiveChange(_key4);
				} else _this.onActiveChange(null);
			});
			_defineProperty(_assertThisInitialized(_this), "onKeyDown", function(event) {
				var _this$state13 = _this.state, activeKey = _this$state13.activeKey, expandedKeys = _this$state13.expandedKeys, checkedKeys = _this$state13.checkedKeys, fieldNames = _this$state13.fieldNames;
				var _this$props10 = _this.props, onKeyDown = _this$props10.onKeyDown, checkable = _this$props10.checkable, selectable = _this$props10.selectable;
				switch (event.which) {
					case KeyCode_default.UP:
						_this.offsetActiveKey(-1);
						event.preventDefault();
						break;
					case KeyCode_default.DOWN:
						_this.offsetActiveKey(1);
						event.preventDefault();
						break;
				}
				var activeItem = _this.getActiveItem();
				if (activeItem && activeItem.data) {
					var treeNodeRequiredProps = _this.getTreeNodeRequiredProps();
					var expandable = activeItem.data.isLeaf === false || !!(activeItem.data[fieldNames.children] || []).length;
					var eventNode = convertNodePropsToEventData(_objectSpread2(_objectSpread2({}, getTreeNodeProps(activeKey, treeNodeRequiredProps)), {}, {
						data: activeItem.data,
						active: true
					}));
					switch (event.which) {
						case KeyCode_default.LEFT:
							if (expandable && expandedKeys.includes(activeKey)) _this.onNodeExpand({}, eventNode);
							else if (activeItem.parent) _this.onActiveChange(activeItem.parent.key);
							event.preventDefault();
							break;
						case KeyCode_default.RIGHT:
							if (expandable && !expandedKeys.includes(activeKey)) _this.onNodeExpand({}, eventNode);
							else if (activeItem.children && activeItem.children.length) _this.onActiveChange(activeItem.children[0].key);
							event.preventDefault();
							break;
						case KeyCode_default.ENTER:
						case KeyCode_default.SPACE:
							if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) _this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
							else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) _this.onNodeSelect({}, eventNode);
							break;
					}
				}
				onKeyDown === null || onKeyDown === void 0 || onKeyDown(event);
			});
			_defineProperty(_assertThisInitialized(_this), "setUncontrolledState", function(state) {
				var atomic = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
				var forceState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
				if (!_this.destroyed) {
					var needSync = false;
					var allPassed = true;
					var newState = {};
					Object.keys(state).forEach(function(name) {
						if (_this.props.hasOwnProperty(name)) {
							allPassed = false;
							return;
						}
						needSync = true;
						newState[name] = state[name];
					});
					if (needSync && (!atomic || allPassed)) _this.setState(_objectSpread2(_objectSpread2({}, newState), forceState));
				}
			});
			_defineProperty(_assertThisInitialized(_this), "scrollTo", function(scroll) {
				_this.listRef.current.scrollTo(scroll);
			});
			return _this;
		}
		_createClass(Tree$1, [
			{
				key: "componentDidMount",
				value: function componentDidMount() {
					this.destroyed = false;
					this.onUpdated();
				}
			},
			{
				key: "componentDidUpdate",
				value: function componentDidUpdate() {
					this.onUpdated();
				}
			},
			{
				key: "onUpdated",
				value: function onUpdated() {
					var _this$props11 = this.props, activeKey = _this$props11.activeKey, _this$props11$itemScr = _this$props11.itemScrollOffset, itemScrollOffset = _this$props11$itemScr === void 0 ? 0 : _this$props11$itemScr;
					if (activeKey !== void 0 && activeKey !== this.state.activeKey) {
						this.setState({ activeKey });
						if (activeKey !== null) this.scrollTo({
							key: activeKey,
							offset: itemScrollOffset
						});
					}
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					window.removeEventListener("dragend", this.onWindowDragEnd);
					this.destroyed = true;
				}
			},
			{
				key: "resetDragState",
				value: function resetDragState() {
					this.setState({
						dragOverNodeKey: null,
						dropPosition: null,
						dropLevelOffset: null,
						dropTargetKey: null,
						dropContainerKey: null,
						dropTargetPos: null,
						dropAllowed: false
					});
				}
			},
			{
				key: "render",
				value: function render() {
					var _this$state14 = this.state, focused = _this$state14.focused, flattenNodes = _this$state14.flattenNodes, keyEntities = _this$state14.keyEntities, draggingNodeKey = _this$state14.draggingNodeKey, activeKey = _this$state14.activeKey, dropLevelOffset = _this$state14.dropLevelOffset, dropContainerKey = _this$state14.dropContainerKey, dropTargetKey = _this$state14.dropTargetKey, dropPosition = _this$state14.dropPosition, dragOverNodeKey = _this$state14.dragOverNodeKey, indent = _this$state14.indent;
					var _this$props12 = this.props, prefixCls = _this$props12.prefixCls, className = _this$props12.className, style = _this$props12.style, showLine = _this$props12.showLine, focusable = _this$props12.focusable, _this$props12$tabInde = _this$props12.tabIndex, tabIndex = _this$props12$tabInde === void 0 ? 0 : _this$props12$tabInde, selectable = _this$props12.selectable, showIcon = _this$props12.showIcon, icon = _this$props12.icon, switcherIcon = _this$props12.switcherIcon, draggable = _this$props12.draggable, checkable = _this$props12.checkable, checkStrictly = _this$props12.checkStrictly, disabled = _this$props12.disabled, motion = _this$props12.motion, loadData = _this$props12.loadData, filterTreeNode = _this$props12.filterTreeNode, height = _this$props12.height, itemHeight = _this$props12.itemHeight, scrollWidth = _this$props12.scrollWidth, virtual = _this$props12.virtual, titleRender = _this$props12.titleRender, dropIndicatorRender = _this$props12.dropIndicatorRender, onContextMenu = _this$props12.onContextMenu, onScroll = _this$props12.onScroll, direction = _this$props12.direction, rootClassName = _this$props12.rootClassName, rootStyle = _this$props12.rootStyle;
					var domProps = pickAttrs(this.props, {
						aria: true,
						data: true
					});
					var draggableConfig;
					if (draggable) if (_typeof(draggable) === "object") draggableConfig = draggable;
					else if (typeof draggable === "function") draggableConfig = { nodeDraggable: draggable };
					else draggableConfig = {};
					var contextValue = {
						prefixCls,
						selectable,
						showIcon,
						icon,
						switcherIcon,
						draggable: draggableConfig,
						draggingNodeKey,
						checkable,
						checkStrictly,
						disabled,
						keyEntities,
						dropLevelOffset,
						dropContainerKey,
						dropTargetKey,
						dropPosition,
						dragOverNodeKey,
						indent,
						direction,
						dropIndicatorRender,
						loadData,
						filterTreeNode,
						titleRender,
						onNodeClick: this.onNodeClick,
						onNodeDoubleClick: this.onNodeDoubleClick,
						onNodeExpand: this.onNodeExpand,
						onNodeSelect: this.onNodeSelect,
						onNodeCheck: this.onNodeCheck,
						onNodeLoad: this.onNodeLoad,
						onNodeMouseEnter: this.onNodeMouseEnter,
						onNodeMouseLeave: this.onNodeMouseLeave,
						onNodeContextMenu: this.onNodeContextMenu,
						onNodeDragStart: this.onNodeDragStart,
						onNodeDragEnter: this.onNodeDragEnter,
						onNodeDragOver: this.onNodeDragOver,
						onNodeDragLeave: this.onNodeDragLeave,
						onNodeDragEnd: this.onNodeDragEnd,
						onNodeDrop: this.onNodeDrop
					};
					return /* @__PURE__ */ import_react$11.createElement(TreeContext.Provider, { value: contextValue }, /* @__PURE__ */ import_react$11.createElement("div", {
						className: (0, import_classnames.default)(prefixCls, className, rootClassName, _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-show-line"), showLine), "".concat(prefixCls, "-focused"), focused), "".concat(prefixCls, "-active-focused"), activeKey !== null)),
						style: rootStyle
					}, /* @__PURE__ */ import_react$11.createElement(NodeList_default, _extends({
						ref: this.listRef,
						prefixCls,
						style,
						data: flattenNodes,
						disabled,
						selectable,
						checkable: !!checkable,
						motion,
						dragging: draggingNodeKey !== null,
						height,
						itemHeight,
						virtual,
						focusable,
						focused,
						tabIndex,
						activeItem: this.getActiveItem(),
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown,
						onActiveChange: this.onActiveChange,
						onListChangeStart: this.onListChangeStart,
						onListChangeEnd: this.onListChangeEnd,
						onContextMenu,
						onScroll,
						scrollWidth
					}, this.getTreeNodeRequiredProps(), domProps))));
				}
			}
		], [{
			key: "getDerivedStateFromProps",
			value: function getDerivedStateFromProps(props, prevState) {
				var prevProps = prevState.prevProps;
				var newState = { prevProps: props };
				function needSync(name) {
					return !prevProps && props.hasOwnProperty(name) || prevProps && prevProps[name] !== props[name];
				}
				var treeData;
				var fieldNames = prevState.fieldNames;
				if (needSync("fieldNames")) {
					fieldNames = fillFieldNames$1(props.fieldNames);
					newState.fieldNames = fieldNames;
				}
				if (needSync("treeData")) treeData = props.treeData;
				else if (needSync("children")) {
					warning_default(false, "`children` of Tree is deprecated. Please use `treeData` instead.");
					treeData = convertTreeToData(props.children);
				}
				if (treeData) {
					newState.treeData = treeData;
					var entitiesMap = convertDataToEntities(treeData, { fieldNames });
					newState.keyEntities = _objectSpread2(_defineProperty({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities);
				}
				var keyEntities = newState.keyEntities || prevState.keyEntities;
				if (needSync("expandedKeys") || prevProps && needSync("autoExpandParent")) newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? conductExpandParent(props.expandedKeys, keyEntities) : props.expandedKeys;
				else if (!prevProps && props.defaultExpandAll) {
					var cloneKeyEntities = _objectSpread2({}, keyEntities);
					delete cloneKeyEntities[MOTION_KEY];
					var nextExpandedKeys = [];
					Object.keys(cloneKeyEntities).forEach(function(key) {
						var entity = cloneKeyEntities[key];
						if (entity.children && entity.children.length) nextExpandedKeys.push(entity.key);
					});
					newState.expandedKeys = nextExpandedKeys;
				} else if (!prevProps && props.defaultExpandedKeys) newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? conductExpandParent(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
				if (!newState.expandedKeys) delete newState.expandedKeys;
				if (treeData || newState.expandedKeys) newState.flattenNodes = flattenTreeData(treeData || prevState.treeData, newState.expandedKeys || prevState.expandedKeys, fieldNames);
				if (props.selectable) {
					if (needSync("selectedKeys")) newState.selectedKeys = calcSelectedKeys(props.selectedKeys, props);
					else if (!prevProps && props.defaultSelectedKeys) newState.selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
				}
				if (props.checkable) {
					var checkedKeyEntity;
					if (needSync("checkedKeys")) checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
					else if (!prevProps && props.defaultCheckedKeys) checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
					else if (treeData) checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {
						checkedKeys: prevState.checkedKeys,
						halfCheckedKeys: prevState.halfCheckedKeys
					};
					if (checkedKeyEntity) {
						var _checkedKeyEntity = checkedKeyEntity, _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys, checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che, _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys, halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
						if (!props.checkStrictly) {
							var conductKeys = conductCheck(checkedKeys, true, keyEntities);
							checkedKeys = conductKeys.checkedKeys;
							halfCheckedKeys = conductKeys.halfCheckedKeys;
						}
						newState.checkedKeys = checkedKeys;
						newState.halfCheckedKeys = halfCheckedKeys;
					}
				}
				if (needSync("loadedKeys")) newState.loadedKeys = props.loadedKeys;
				return newState;
			}
		}]);
		return Tree$1;
	}(import_react$11.Component);
	_defineProperty(Tree, "defaultProps", {
		prefixCls: "rc-tree",
		showLine: false,
		showIcon: true,
		selectable: true,
		multiple: false,
		checkable: false,
		disabled: false,
		checkStrictly: false,
		draggable: false,
		defaultExpandParent: true,
		autoExpandParent: false,
		defaultExpandAll: false,
		defaultExpandedKeys: [],
		defaultCheckedKeys: [],
		defaultSelectedKeys: [],
		dropIndicatorRender: DropIndicator_default,
		allowDrop: function allowDrop() {
			return true;
		},
		expandAction: false
	});
	_defineProperty(Tree, "TreeNode", TreeNode_default$1);
	Tree_default = Tree;
}));
var es_exports$1 = /* @__PURE__ */ __export({
	TreeNode: () => TreeNode_default$1,
	UnstableContext: () => UnstableContext,
	default: () => es_default$1
}, 1);
var es_default$1;
var init_es$1 = __esmMin((() => {
	init_Tree();
	init_TreeNode$1();
	init_contextTypes();
	es_default$1 = Tree_default;
}));
var import_react$10, useCache_default;
var init_useCache = __esmMin((() => {
	init_objectSpread2();
	import_react$10 = /* @__PURE__ */ __toESM(require_react());
	useCache_default = (function(values) {
		var cacheRef = import_react$10.useRef({ valueLabels: /* @__PURE__ */ new Map() });
		return import_react$10.useMemo(function() {
			var valueLabels = cacheRef.current.valueLabels;
			var valueLabelsCache = /* @__PURE__ */ new Map();
			var filledValues = values.map(function(item) {
				var value = item.value, label = item.label;
				var mergedLabel = label !== null && label !== void 0 ? label : valueLabels.get(value);
				valueLabelsCache.set(value, mergedLabel);
				return _objectSpread2(_objectSpread2({}, item), {}, { label: mergedLabel });
			});
			cacheRef.current.valueLabels = valueLabelsCache;
			return [filledValues];
		}, [values]);
	});
}));
var import_react$9, useCheckedKeys, useCheckedKeys_default;
var init_useCheckedKeys = __esmMin((() => {
	init_toConsumableArray();
	import_react$9 = /* @__PURE__ */ __toESM(require_react());
	init_conductUtil();
	useCheckedKeys = function useCheckedKeys$1(rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities) {
		return import_react$9.useMemo(function() {
			var extractValues = function extractValues$1(values) {
				return values.map(function(_ref) {
					return _ref.value;
				});
			};
			var checkedKeys = extractValues(rawLabeledValues);
			var halfCheckedKeys = extractValues(rawHalfCheckedValues);
			var missingValues = checkedKeys.filter(function(key) {
				return !keyEntities[key];
			});
			var finalCheckedKeys = checkedKeys;
			var finalHalfCheckedKeys = halfCheckedKeys;
			if (treeConduction) {
				var conductResult = conductCheck(checkedKeys, true, keyEntities);
				finalCheckedKeys = conductResult.checkedKeys;
				finalHalfCheckedKeys = conductResult.halfCheckedKeys;
			}
			return [Array.from(new Set([].concat(_toConsumableArray(missingValues), _toConsumableArray(finalCheckedKeys)))), finalHalfCheckedKeys];
		}, [
			rawLabeledValues,
			rawHalfCheckedValues,
			treeConduction,
			keyEntities
		]);
	};
	useCheckedKeys_default = useCheckedKeys;
}));
var toArray, fillFieldNames, isCheckDisabled, getAllKeys, isNil;
var init_valueUtil = __esmMin((() => {
	toArray = function toArray$3(value) {
		return Array.isArray(value) ? value : value !== void 0 ? [value] : [];
	};
	fillFieldNames = function fillFieldNames$3(fieldNames) {
		var _ref = fieldNames || {}, label = _ref.label, value = _ref.value, children = _ref.children;
		return {
			_title: label ? [label] : ["title", "label"],
			value: value || "value",
			key: value || "value",
			children: children || "children"
		};
	};
	isCheckDisabled = function isCheckDisabled$2(node) {
		return !node || node.disabled || node.disableCheckbox || node.checkable === false;
	};
	getAllKeys = function getAllKeys$1(treeData, fieldNames) {
		var keys = [];
		(function dig(list) {
			list.forEach(function(item) {
				var children = item[fieldNames.children];
				if (children) {
					keys.push(item[fieldNames.value]);
					dig(children);
				}
			});
		})(treeData);
		return keys;
	};
	isNil = function isNil$1(val) {
		return val === null || val === void 0;
	};
}));
var import_react$8, useDataEntities_default;
var init_useDataEntities = __esmMin((() => {
	init_objectSpread2();
	import_react$8 = /* @__PURE__ */ __toESM(require_react());
	init_treeUtil();
	init_warning();
	useDataEntities_default = (function(treeData, fieldNames) {
		return import_react$8.useMemo(function() {
			return convertDataToEntities(treeData, {
				fieldNames,
				initWrapper: function initWrapper(wrapper) {
					return _objectSpread2(_objectSpread2({}, wrapper), {}, { valueEntities: /* @__PURE__ */ new Map() });
				},
				processEntity: function processEntity(entity, wrapper) {
					var val = entity.node[fieldNames.value];
					wrapper.valueEntities.set(val, entity);
				}
			});
		}, [treeData, fieldNames]);
	});
}));
var TreeNode, TreeNode_default;
var init_TreeNode = __esmMin((() => {
	TreeNode = function TreeNode$2() {
		return null;
	};
	TreeNode_default = TreeNode;
}));
function convertChildrenToData(nodes) {
	return toArray$1(nodes).map(function(node) {
		if (!/* @__PURE__ */ import_react$7.isValidElement(node) || !node.type) return null;
		var _ref = node, key = _ref.key, _ref$props = _ref.props, children = _ref$props.children, value = _ref$props.value, restProps = _objectWithoutProperties(_ref$props, _excluded$1);
		var data = _objectSpread2({
			key,
			value
		}, restProps);
		var childData = convertChildrenToData(children);
		if (childData.length) data.children = childData;
		return data;
	}).filter(function(data) {
		return data;
	});
}
function fillLegacyProps(dataNode) {
	if (!dataNode) return dataNode;
	var cloneNode = _objectSpread2({}, dataNode);
	if (!("props" in cloneNode)) Object.defineProperty(cloneNode, "props", { get: function get() {
		warning_default(false, "New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access.");
		return cloneNode;
	} });
	return cloneNode;
}
function fillAdditionalInfo(extra, triggerValue, checkedValues, treeData, showPosition, fieldNames) {
	var triggerNode = null;
	var nodeList = null;
	function generateMap() {
		function dig(list) {
			var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "0";
			var parentIncluded = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
			return list.map(function(option, index) {
				var pos = "".concat(level, "-").concat(index);
				var value = option[fieldNames.value];
				var included = checkedValues.includes(value);
				var children = dig(option[fieldNames.children] || [], pos, included);
				var node = /* @__PURE__ */ import_react$7.createElement(TreeNode_default, option, children.map(function(child) {
					return child.node;
				}));
				if (triggerValue === value) triggerNode = node;
				if (included) {
					var checkedNode = {
						pos,
						node,
						children
					};
					if (!parentIncluded) nodeList.push(checkedNode);
					return checkedNode;
				}
				return null;
			}).filter(function(node) {
				return node;
			});
		}
		if (!nodeList) {
			nodeList = [];
			dig(treeData);
			nodeList.sort(function(_ref2, _ref3) {
				var val1 = _ref2.node.props.value;
				var val2 = _ref3.node.props.value;
				return checkedValues.indexOf(val1) - checkedValues.indexOf(val2);
			});
		}
	}
	Object.defineProperty(extra, "triggerNode", { get: function get() {
		warning_default(false, "`triggerNode` is deprecated. Please consider decoupling data with node.");
		generateMap();
		return triggerNode;
	} });
	Object.defineProperty(extra, "allCheckedNodes", { get: function get() {
		warning_default(false, "`allCheckedNodes` is deprecated. Please consider decoupling data with node.");
		generateMap();
		if (showPosition) return nodeList;
		return nodeList.map(function(_ref4) {
			return _ref4.node;
		});
	} });
}
var import_react$7, _excluded$1;
var init_legacyUtil = __esmMin((() => {
	init_objectSpread2();
	init_objectWithoutProperties();
	import_react$7 = /* @__PURE__ */ __toESM(require_react());
	init_toArray$1();
	init_warning();
	init_TreeNode();
	_excluded$1 = ["children", "value"];
}));
var import_react$6, useFilterTreeData, useFilterTreeData_default;
var init_useFilterTreeData = __esmMin((() => {
	init_defineProperty();
	init_objectSpread2();
	import_react$6 = /* @__PURE__ */ __toESM(require_react());
	init_legacyUtil();
	useFilterTreeData = function useFilterTreeData$1(treeData, searchValue, options) {
		var fieldNames = options.fieldNames, treeNodeFilterProp = options.treeNodeFilterProp, filterTreeNode = options.filterTreeNode;
		var fieldChildren = fieldNames.children;
		return import_react$6.useMemo(function() {
			if (!searchValue || filterTreeNode === false) return treeData;
			var filterOptionFunc = typeof filterTreeNode === "function" ? filterTreeNode : function(_, dataNode) {
				return String(dataNode[treeNodeFilterProp]).toUpperCase().includes(searchValue.toUpperCase());
			};
			return function filterTreeNodes(nodes) {
				var keepAll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
				return nodes.reduce(function(filtered, node) {
					var children = node[fieldChildren];
					var isMatch = keepAll || filterOptionFunc(searchValue, fillLegacyProps(node));
					var filteredChildren = filterTreeNodes(children || [], isMatch);
					if (isMatch || filteredChildren.length) filtered.push(_objectSpread2(_objectSpread2({}, node), {}, _defineProperty({ isLeaf: void 0 }, fieldChildren, filteredChildren)));
					return filtered;
				}, []);
			}(treeData);
		}, [
			treeData,
			searchValue,
			fieldChildren,
			treeNodeFilterProp,
			filterTreeNode
		]);
	};
	useFilterTreeData_default = useFilterTreeData;
}));
function useRefFunc(callback) {
	var funcRef = import_react$5.useRef();
	funcRef.current = callback;
	return import_react$5.useCallback(function() {
		return funcRef.current.apply(funcRef, arguments);
	}, []);
}
var import_react$5;
var init_useRefFunc = __esmMin((() => {
	import_react$5 = /* @__PURE__ */ __toESM(require_react());
}));
function buildTreeStructure(nodes, config) {
	var id = config.id, pId = config.pId, rootPId = config.rootPId;
	var nodeMap = /* @__PURE__ */ new Map();
	var rootNodes = [];
	nodes.forEach(function(node) {
		var nodeKey = node[id];
		var clonedNode = _objectSpread2(_objectSpread2({}, node), {}, { key: node.key || nodeKey });
		nodeMap.set(nodeKey, clonedNode);
	});
	nodeMap.forEach(function(node) {
		var parentKey = node[pId];
		var parent = nodeMap.get(parentKey);
		if (parent) {
			parent.children = parent.children || [];
			parent.children.push(node);
		} else if (parentKey === rootPId || rootPId === null) rootNodes.push(node);
	});
	return rootNodes;
}
function useTreeData(treeData, children, simpleMode) {
	return import_react$4.useMemo(function() {
		if (treeData) {
			if (simpleMode) return buildTreeStructure(treeData, _objectSpread2({
				id: "id",
				pId: "pId",
				rootPId: null
			}, _typeof(simpleMode) === "object" ? simpleMode : {}));
			return treeData;
		}
		return convertChildrenToData(children);
	}, [
		children,
		simpleMode,
		treeData
	]);
}
var import_react$4;
var init_useTreeData = __esmMin((() => {
	init_typeof();
	init_objectSpread2();
	import_react$4 = /* @__PURE__ */ __toESM(require_react());
	init_legacyUtil();
}));
var import_react$3, LegacySelectContext, LegacyContext_default;
var init_LegacyContext = __esmMin((() => {
	import_react$3 = /* @__PURE__ */ __toESM(require_react());
	LegacySelectContext = /* @__PURE__ */ import_react$3.createContext(null);
	LegacyContext_default = LegacySelectContext;
}));
var import_react$2, TreeSelectContext, TreeSelectContext_default;
var init_TreeSelectContext = __esmMin((() => {
	import_react$2 = /* @__PURE__ */ __toESM(require_react());
	TreeSelectContext = /* @__PURE__ */ import_react$2.createContext(null);
	TreeSelectContext_default = TreeSelectContext;
}));
var import_react$1, HIDDEN_STYLE, RefOptionList, OptionList_default;
var init_OptionList = __esmMin((() => {
	init_extends();
	init_createForOfIteratorHelper();
	init_toConsumableArray();
	init_slicedToArray();
	init_es$3();
	init_es$1();
	init_KeyCode();
	init_useMemo();
	import_react$1 = /* @__PURE__ */ __toESM(require_react());
	init_LegacyContext();
	init_TreeSelectContext();
	init_valueUtil();
	init_es$7();
	HIDDEN_STYLE = {
		width: 0,
		height: 0,
		display: "flex",
		overflow: "hidden",
		opacity: 0,
		border: 0,
		padding: 0,
		margin: 0
	};
	RefOptionList = /* @__PURE__ */ import_react$1.forwardRef(function OptionList(_, ref) {
		var _useBaseProps = useBaseProps(), prefixCls = _useBaseProps.prefixCls, multiple = _useBaseProps.multiple, searchValue = _useBaseProps.searchValue, toggleOpen = _useBaseProps.toggleOpen, open = _useBaseProps.open, notFoundContent = _useBaseProps.notFoundContent;
		var _React$useContext = import_react$1.useContext(TreeSelectContext_default), virtual = _React$useContext.virtual, listHeight = _React$useContext.listHeight, listItemHeight = _React$useContext.listItemHeight, listItemScrollOffset = _React$useContext.listItemScrollOffset, treeData = _React$useContext.treeData, fieldNames = _React$useContext.fieldNames, onSelect = _React$useContext.onSelect, dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth, treeExpandAction = _React$useContext.treeExpandAction, treeTitleRender = _React$useContext.treeTitleRender, onPopupScroll = _React$useContext.onPopupScroll, leftMaxCount = _React$useContext.leftMaxCount, leafCountOnly = _React$useContext.leafCountOnly, valueEntities = _React$useContext.valueEntities;
		var _React$useContext2 = import_react$1.useContext(LegacyContext_default), checkable = _React$useContext2.checkable, checkedKeys = _React$useContext2.checkedKeys, halfCheckedKeys = _React$useContext2.halfCheckedKeys, treeExpandedKeys = _React$useContext2.treeExpandedKeys, treeDefaultExpandAll = _React$useContext2.treeDefaultExpandAll, treeDefaultExpandedKeys = _React$useContext2.treeDefaultExpandedKeys, onTreeExpand = _React$useContext2.onTreeExpand, treeIcon = _React$useContext2.treeIcon, showTreeIcon = _React$useContext2.showTreeIcon, switcherIcon = _React$useContext2.switcherIcon, treeLine = _React$useContext2.treeLine, treeNodeFilterProp = _React$useContext2.treeNodeFilterProp, loadData = _React$useContext2.loadData, treeLoadedKeys = _React$useContext2.treeLoadedKeys, treeMotion = _React$useContext2.treeMotion, onTreeLoad = _React$useContext2.onTreeLoad, keyEntities = _React$useContext2.keyEntities;
		var treeRef = import_react$1.useRef();
		var memoTreeData = useMemo(function() {
			return treeData;
		}, [open, treeData], function(prev, next) {
			return next[0] && prev[1] !== next[1];
		});
		var mergedCheckedKeys = import_react$1.useMemo(function() {
			if (!checkable) return null;
			return {
				checked: checkedKeys,
				halfChecked: halfCheckedKeys
			};
		}, [
			checkable,
			checkedKeys,
			halfCheckedKeys
		]);
		import_react$1.useEffect(function() {
			if (open && !multiple && checkedKeys.length) {
				var _treeRef$current;
				(_treeRef$current = treeRef.current) === null || _treeRef$current === void 0 || _treeRef$current.scrollTo({ key: checkedKeys[0] });
			}
		}, [open]);
		var onListMouseDown = function onListMouseDown$1(event) {
			event.preventDefault();
		};
		var onInternalSelect = function onInternalSelect$1(__, info) {
			var node = info.node;
			if (checkable && isCheckDisabled(node)) return;
			onSelect(node.key, { selected: !checkedKeys.includes(node.key) });
			if (!multiple) toggleOpen(false);
		};
		var _React$useState2 = _slicedToArray(import_react$1.useState(treeDefaultExpandedKeys), 2), expandedKeys = _React$useState2[0], setExpandedKeys = _React$useState2[1];
		var _React$useState4 = _slicedToArray(import_react$1.useState(null), 2), searchExpandedKeys = _React$useState4[0], setSearchExpandedKeys = _React$useState4[1];
		var mergedExpandedKeys = import_react$1.useMemo(function() {
			if (treeExpandedKeys) return _toConsumableArray(treeExpandedKeys);
			return searchValue ? searchExpandedKeys : expandedKeys;
		}, [
			expandedKeys,
			searchExpandedKeys,
			treeExpandedKeys,
			searchValue
		]);
		var onInternalExpand = function onInternalExpand$1(keys) {
			setExpandedKeys(keys);
			setSearchExpandedKeys(keys);
			if (onTreeExpand) onTreeExpand(keys);
		};
		var lowerSearchValue = String(searchValue).toLowerCase();
		var filterTreeNode = function filterTreeNode$1(treeNode) {
			if (!lowerSearchValue) return false;
			return String(treeNode[treeNodeFilterProp]).toLowerCase().includes(lowerSearchValue);
		};
		import_react$1.useEffect(function() {
			if (searchValue) setSearchExpandedKeys(getAllKeys(treeData, fieldNames));
		}, [searchValue]);
		var _React$useState6 = _slicedToArray(import_react$1.useState(function() {
			return /* @__PURE__ */ new Map();
		}), 2), disabledCache = _React$useState6[0], setDisabledCache = _React$useState6[1];
		import_react$1.useEffect(function() {
			if (leftMaxCount) setDisabledCache(/* @__PURE__ */ new Map());
		}, [leftMaxCount]);
		function getDisabledWithCache(node) {
			var value = node[fieldNames.value];
			if (!disabledCache.has(value)) {
				var entity = valueEntities.get(value);
				if (!((entity.children || []).length === 0)) {
					var checkableChildrenCount = entity.children.filter(function(childTreeNode) {
						return !childTreeNode.node.disabled && !childTreeNode.node.disableCheckbox && !checkedKeys.includes(childTreeNode.node[fieldNames.value]);
					}).length;
					disabledCache.set(value, checkableChildrenCount > leftMaxCount);
				} else disabledCache.set(value, false);
			}
			return disabledCache.get(value);
		}
		var nodeDisabled = useEvent(function(node) {
			var nodeValue = node[fieldNames.value];
			if (checkedKeys.includes(nodeValue)) return false;
			if (leftMaxCount === null) return false;
			if (leftMaxCount <= 0) return true;
			if (leafCountOnly && leftMaxCount) return getDisabledWithCache(node);
			return false;
		});
		var getFirstMatchingNode = function getFirstMatchingNode$1(nodes) {
			var _iterator = _createForOfIteratorHelper(nodes), _step;
			try {
				for (_iterator.s(); !(_step = _iterator.n()).done;) {
					var node = _step.value;
					if (node.disabled || node.selectable === false) continue;
					if (searchValue) {
						if (filterTreeNode(node)) return node;
					} else return node;
					if (node[fieldNames.children]) {
						var matchInChildren = getFirstMatchingNode$1(node[fieldNames.children]);
						if (matchInChildren) return matchInChildren;
					}
				}
			} catch (err) {
				_iterator.e(err);
			} finally {
				_iterator.f();
			}
			return null;
		};
		var _React$useState8 = _slicedToArray(import_react$1.useState(null), 2), activeKey = _React$useState8[0], setActiveKey = _React$useState8[1];
		var activeEntity = keyEntities[activeKey];
		import_react$1.useEffect(function() {
			if (!open) return;
			var nextActiveKey = null;
			var getFirstNode = function getFirstNode$1() {
				var firstNode = getFirstMatchingNode(memoTreeData);
				return firstNode ? firstNode[fieldNames.value] : null;
			};
			if (!multiple && checkedKeys.length && !searchValue) nextActiveKey = checkedKeys[0];
			else nextActiveKey = getFirstNode();
			setActiveKey(nextActiveKey);
		}, [open, searchValue]);
		import_react$1.useImperativeHandle(ref, function() {
			var _treeRef$current2;
			return {
				scrollTo: (_treeRef$current2 = treeRef.current) === null || _treeRef$current2 === void 0 ? void 0 : _treeRef$current2.scrollTo,
				onKeyDown: function onKeyDown(event) {
					var _treeRef$current3;
					switch (event.which) {
						case KeyCode_default.UP:
						case KeyCode_default.DOWN:
						case KeyCode_default.LEFT:
						case KeyCode_default.RIGHT:
							(_treeRef$current3 = treeRef.current) === null || _treeRef$current3 === void 0 || _treeRef$current3.onKeyDown(event);
							break;
						case KeyCode_default.ENTER:
							if (activeEntity) {
								var isNodeDisabled = nodeDisabled(activeEntity.node);
								var _ref = (activeEntity === null || activeEntity === void 0 ? void 0 : activeEntity.node) || {}, selectable = _ref.selectable, value = _ref.value, disabled = _ref.disabled;
								if (selectable !== false && !disabled && !isNodeDisabled) onInternalSelect(null, {
									node: { key: activeKey },
									selected: !checkedKeys.includes(value)
								});
							}
							break;
						case KeyCode_default.ESC: toggleOpen(false);
					}
				},
				onKeyUp: function onKeyUp() {}
			};
		});
		var syncLoadData = useMemo(function() {
			return searchValue ? false : true;
		}, [searchValue, treeExpandedKeys || expandedKeys], function(_ref2, _ref3) {
			var preSearchValue = _slicedToArray(_ref2, 1)[0];
			var _ref5 = _slicedToArray(_ref3, 2), nextSearchValue = _ref5[0], nextExcludeSearchExpandedKeys = _ref5[1];
			return preSearchValue !== nextSearchValue && !!(nextSearchValue || nextExcludeSearchExpandedKeys);
		}) ? loadData : null;
		if (memoTreeData.length === 0) return /* @__PURE__ */ import_react$1.createElement("div", {
			role: "listbox",
			className: "".concat(prefixCls, "-empty"),
			onMouseDown: onListMouseDown
		}, notFoundContent);
		var treeProps = { fieldNames };
		if (treeLoadedKeys) treeProps.loadedKeys = treeLoadedKeys;
		if (mergedExpandedKeys) treeProps.expandedKeys = mergedExpandedKeys;
		return /* @__PURE__ */ import_react$1.createElement("div", { onMouseDown: onListMouseDown }, activeEntity && open && /* @__PURE__ */ import_react$1.createElement("span", {
			style: HIDDEN_STYLE,
			"aria-live": "assertive"
		}, activeEntity.node.value), /* @__PURE__ */ import_react$1.createElement(UnstableContext.Provider, { value: { nodeDisabled } }, /* @__PURE__ */ import_react$1.createElement(es_default$1, _extends({
			ref: treeRef,
			focusable: false,
			prefixCls: "".concat(prefixCls, "-tree"),
			treeData: memoTreeData,
			height: listHeight,
			itemHeight: listItemHeight,
			itemScrollOffset: listItemScrollOffset,
			virtual: virtual !== false && dropdownMatchSelectWidth !== false,
			multiple,
			icon: treeIcon,
			showIcon: showTreeIcon,
			switcherIcon,
			showLine: treeLine,
			loadData: syncLoadData,
			motion: treeMotion,
			activeKey,
			checkable,
			checkStrictly: true,
			checkedKeys: mergedCheckedKeys,
			selectedKeys: !checkable ? checkedKeys : [],
			defaultExpandAll: treeDefaultExpandAll,
			titleRender: treeTitleRender
		}, treeProps, {
			onActiveChange: setActiveKey,
			onSelect: onInternalSelect,
			onCheck: onInternalSelect,
			onExpand: onInternalExpand,
			onLoad: onTreeLoad,
			filterTreeNode,
			expandAction: treeExpandAction,
			onScroll: onPopupScroll
		}))));
	});
	OptionList_default = RefOptionList;
}));
function formatStrategyValues(values, strategy, keyEntities, fieldNames) {
	var valueSet = new Set(values);
	if (strategy === "SHOW_CHILD") return values.filter(function(key) {
		var entity = keyEntities[key];
		return !entity || !entity.children || !entity.children.some(function(_ref) {
			var node = _ref.node;
			return valueSet.has(node[fieldNames.value]);
		}) || !entity.children.every(function(_ref2) {
			var node = _ref2.node;
			return isCheckDisabled(node) || valueSet.has(node[fieldNames.value]);
		});
	});
	if (strategy === "SHOW_PARENT") return values.filter(function(key) {
		var entity = keyEntities[key];
		var parent = entity ? entity.parent : null;
		return !parent || isCheckDisabled(parent.node) || !valueSet.has(parent.key);
	});
	return values;
}
var SHOW_ALL, SHOW_PARENT, SHOW_CHILD;
var init_strategyUtil = __esmMin((() => {
	init_valueUtil();
	SHOW_ALL = "SHOW_ALL";
	SHOW_PARENT = "SHOW_PARENT";
	SHOW_CHILD = "SHOW_CHILD";
}));
var init_warningPropsUtil = __esmMin((() => {
	init_warning();
}));
function isRawValue(value) {
	return !value || _typeof(value) !== "object";
}
var import_react, _excluded, GenericTreeSelect, TreeSelect_default;
var init_TreeSelect = __esmMin((() => {
	init_extends();
	init_toConsumableArray();
	init_objectSpread2();
	init_slicedToArray();
	init_objectWithoutProperties();
	init_typeof();
	init_es$3();
	init_useId();
	init_conductUtil();
	init_useMergedState();
	init_warning();
	import_react = /* @__PURE__ */ __toESM(require_react());
	init_useCache();
	init_useCheckedKeys();
	init_useDataEntities();
	init_useFilterTreeData();
	init_useRefFunc();
	init_useTreeData();
	init_LegacyContext();
	init_OptionList();
	init_TreeNode();
	init_TreeSelectContext();
	init_legacyUtil();
	init_strategyUtil();
	init_valueUtil();
	init_warningPropsUtil();
	_excluded = [
		"id",
		"prefixCls",
		"value",
		"defaultValue",
		"onChange",
		"onSelect",
		"onDeselect",
		"searchValue",
		"inputValue",
		"onSearch",
		"autoClearSearchValue",
		"filterTreeNode",
		"treeNodeFilterProp",
		"showCheckedStrategy",
		"treeNodeLabelProp",
		"multiple",
		"treeCheckable",
		"treeCheckStrictly",
		"labelInValue",
		"maxCount",
		"fieldNames",
		"treeDataSimpleMode",
		"treeData",
		"children",
		"loadData",
		"treeLoadedKeys",
		"onTreeLoad",
		"treeDefaultExpandAll",
		"treeExpandedKeys",
		"treeDefaultExpandedKeys",
		"onTreeExpand",
		"treeExpandAction",
		"virtual",
		"listHeight",
		"listItemHeight",
		"listItemScrollOffset",
		"onDropdownVisibleChange",
		"dropdownMatchSelectWidth",
		"treeLine",
		"treeIcon",
		"showTreeIcon",
		"switcherIcon",
		"treeMotion",
		"treeTitleRender",
		"onPopupScroll"
	];
	GenericTreeSelect = /* @__PURE__ */ import_react.forwardRef(function(props, ref) {
		var id = props.id, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-tree-select" : _props$prefixCls, value = props.value, defaultValue = props.defaultValue, onChange = props.onChange, onSelect = props.onSelect, onDeselect = props.onDeselect, searchValue = props.searchValue, inputValue = props.inputValue, onSearch = props.onSearch, _props$autoClearSearc = props.autoClearSearchValue, autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc, filterTreeNode = props.filterTreeNode, _props$treeNodeFilter = props.treeNodeFilterProp, treeNodeFilterProp = _props$treeNodeFilter === void 0 ? "value" : _props$treeNodeFilter, showCheckedStrategy = props.showCheckedStrategy, treeNodeLabelProp = props.treeNodeLabelProp, multiple = props.multiple, treeCheckable = props.treeCheckable, treeCheckStrictly = props.treeCheckStrictly, labelInValue = props.labelInValue, maxCount = props.maxCount, fieldNames = props.fieldNames, treeDataSimpleMode = props.treeDataSimpleMode, treeData = props.treeData, children = props.children, loadData = props.loadData, treeLoadedKeys = props.treeLoadedKeys, onTreeLoad = props.onTreeLoad, treeDefaultExpandAll = props.treeDefaultExpandAll, treeExpandedKeys = props.treeExpandedKeys, treeDefaultExpandedKeys = props.treeDefaultExpandedKeys, onTreeExpand = props.onTreeExpand, treeExpandAction = props.treeExpandAction, virtual = props.virtual, _props$listHeight = props.listHeight, listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight, _props$listItemHeight = props.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight, _props$listItemScroll = props.listItemScrollOffset, listItemScrollOffset = _props$listItemScroll === void 0 ? 0 : _props$listItemScroll, onDropdownVisibleChange = props.onDropdownVisibleChange, _props$dropdownMatchS = props.dropdownMatchSelectWidth, dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS, treeLine = props.treeLine, treeIcon = props.treeIcon, showTreeIcon = props.showTreeIcon, switcherIcon = props.switcherIcon, treeMotion = props.treeMotion, treeTitleRender = props.treeTitleRender, onPopupScroll = props.onPopupScroll, restProps = _objectWithoutProperties(props, _excluded);
		var mergedId = useId(id);
		var treeConduction = treeCheckable && !treeCheckStrictly;
		var mergedCheckable = treeCheckable || treeCheckStrictly;
		var mergedLabelInValue = treeCheckStrictly || labelInValue;
		var mergedMultiple = mergedCheckable || multiple;
		var _useMergedState2 = _slicedToArray(useMergedState(defaultValue, { value }), 2), internalValue = _useMergedState2[0], setInternalValue = _useMergedState2[1];
		var mergedShowCheckedStrategy = import_react.useMemo(function() {
			if (!treeCheckable) return SHOW_ALL;
			return showCheckedStrategy || "SHOW_CHILD";
		}, [showCheckedStrategy, treeCheckable]);
		var mergedFieldNames = import_react.useMemo(function() {
			return fillFieldNames(fieldNames);
		}, [JSON.stringify(fieldNames)]);
		var _useMergedState4 = _slicedToArray(useMergedState("", {
			value: searchValue !== void 0 ? searchValue : inputValue,
			postState: function postState(search) {
				return search || "";
			}
		}), 2), mergedSearchValue = _useMergedState4[0], setSearchValue = _useMergedState4[1];
		var onInternalSearch = function onInternalSearch$1(searchText) {
			setSearchValue(searchText);
			onSearch === null || onSearch === void 0 || onSearch(searchText);
		};
		var mergedTreeData = useTreeData(treeData, children, treeDataSimpleMode);
		var _useDataEntities = useDataEntities_default(mergedTreeData, mergedFieldNames), keyEntities = _useDataEntities.keyEntities, valueEntities = _useDataEntities.valueEntities;
		var splitRawValues = import_react.useCallback(function(newRawValues) {
			var missingRawValues = [];
			var existRawValues = [];
			newRawValues.forEach(function(val) {
				if (valueEntities.has(val)) existRawValues.push(val);
				else missingRawValues.push(val);
			});
			return {
				missingRawValues,
				existRawValues
			};
		}, [valueEntities]);
		var filteredTreeData = useFilterTreeData_default(mergedTreeData, mergedSearchValue, {
			fieldNames: mergedFieldNames,
			treeNodeFilterProp,
			filterTreeNode
		});
		var getLabel = import_react.useCallback(function(item) {
			if (item) {
				if (treeNodeLabelProp) return item[treeNodeLabelProp];
				var titleList = mergedFieldNames._title;
				for (var i = 0; i < titleList.length; i += 1) {
					var title = item[titleList[i]];
					if (title !== void 0) return title;
				}
			}
		}, [mergedFieldNames, treeNodeLabelProp]);
		var toLabeledValues = import_react.useCallback(function(draftValues) {
			return toArray(draftValues).map(function(val) {
				if (isRawValue(val)) return { value: val };
				return val;
			});
		}, []);
		var convert2LabelValues = import_react.useCallback(function(draftValues) {
			return toLabeledValues(draftValues).map(function(item) {
				var rawLabel = item.label;
				var rawValue = item.value, rawHalfChecked = item.halfChecked;
				var rawDisabled;
				var entity = valueEntities.get(rawValue);
				if (entity) {
					var _rawLabel;
					rawLabel = treeTitleRender ? treeTitleRender(entity.node) : (_rawLabel = rawLabel) !== null && _rawLabel !== void 0 ? _rawLabel : getLabel(entity.node);
					rawDisabled = entity.node.disabled;
				} else if (rawLabel === void 0) rawLabel = toLabeledValues(internalValue).find(function(labeledItem) {
					return labeledItem.value === rawValue;
				}).label;
				return {
					label: rawLabel,
					value: rawValue,
					halfChecked: rawHalfChecked,
					disabled: rawDisabled
				};
			});
		}, [
			valueEntities,
			getLabel,
			toLabeledValues,
			internalValue
		]);
		var rawMixedLabeledValues = import_react.useMemo(function() {
			return toLabeledValues(internalValue === null ? [] : internalValue);
		}, [toLabeledValues, internalValue]);
		var _React$useMemo2 = _slicedToArray(import_react.useMemo(function() {
			var fullCheckValues = [];
			var halfCheckValues = [];
			rawMixedLabeledValues.forEach(function(item) {
				if (item.halfChecked) halfCheckValues.push(item);
				else fullCheckValues.push(item);
			});
			return [fullCheckValues, halfCheckValues];
		}, [rawMixedLabeledValues]), 2), rawLabeledValues = _React$useMemo2[0], rawHalfLabeledValues = _React$useMemo2[1];
		var rawValues = import_react.useMemo(function() {
			return rawLabeledValues.map(function(item) {
				return item.value;
			});
		}, [rawLabeledValues]);
		var _useCheckedKeys2 = _slicedToArray(useCheckedKeys_default(rawLabeledValues, rawHalfLabeledValues, treeConduction, keyEntities), 2), rawCheckedValues = _useCheckedKeys2[0], rawHalfCheckedValues = _useCheckedKeys2[1];
		var cachedDisplayValues = _slicedToArray(useCache_default(import_react.useMemo(function() {
			var rawDisplayValues = convert2LabelValues(formatStrategyValues(rawCheckedValues, mergedShowCheckedStrategy, keyEntities, mergedFieldNames).map(function(key) {
				var _keyEntities$key$node, _keyEntities$key;
				return (_keyEntities$key$node = (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0 || (_keyEntities$key = _keyEntities$key.node) === null || _keyEntities$key === void 0 ? void 0 : _keyEntities$key[mergedFieldNames.value]) !== null && _keyEntities$key$node !== void 0 ? _keyEntities$key$node : key;
			}).map(function(val) {
				var targetItem = rawLabeledValues.find(function(item) {
					return item.value === val;
				});
				return {
					value: val,
					label: labelInValue ? targetItem === null || targetItem === void 0 ? void 0 : targetItem.label : treeTitleRender === null || treeTitleRender === void 0 ? void 0 : treeTitleRender(targetItem)
				};
			}));
			var firstVal = rawDisplayValues[0];
			if (!mergedMultiple && firstVal && isNil(firstVal.value) && isNil(firstVal.label)) return [];
			return rawDisplayValues.map(function(item) {
				var _item$label;
				return _objectSpread2(_objectSpread2({}, item), {}, { label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value });
			});
		}, [
			mergedFieldNames,
			mergedMultiple,
			rawCheckedValues,
			rawLabeledValues,
			convert2LabelValues,
			mergedShowCheckedStrategy,
			keyEntities
		])), 1)[0];
		var mergedMaxCount = import_react.useMemo(function() {
			if (mergedMultiple && (mergedShowCheckedStrategy === "SHOW_CHILD" || treeCheckStrictly || !treeCheckable)) return maxCount;
			return null;
		}, [
			maxCount,
			mergedMultiple,
			treeCheckStrictly,
			mergedShowCheckedStrategy,
			treeCheckable
		]);
		var triggerChange = useRefFunc(function(newRawValues, extra, source) {
			var formattedKeyList = formatStrategyValues(newRawValues, mergedShowCheckedStrategy, keyEntities, mergedFieldNames);
			if (mergedMaxCount && formattedKeyList.length > mergedMaxCount) return;
			setInternalValue(convert2LabelValues(newRawValues));
			if (autoClearSearchValue) setSearchValue("");
			if (onChange) {
				var eventValues = newRawValues;
				if (treeConduction) eventValues = formattedKeyList.map(function(key) {
					var entity = valueEntities.get(key);
					return entity ? entity.node[mergedFieldNames.value] : key;
				});
				var _ref = extra || {
					triggerValue: void 0,
					selected: void 0
				}, triggerValue = _ref.triggerValue, selected = _ref.selected;
				var returnRawValues = eventValues;
				if (treeCheckStrictly) {
					var halfValues = rawHalfLabeledValues.filter(function(item) {
						return !eventValues.includes(item.value);
					});
					returnRawValues = [].concat(_toConsumableArray(returnRawValues), _toConsumableArray(halfValues));
				}
				var returnLabeledValues = convert2LabelValues(returnRawValues);
				var additionalInfo = {
					preValue: rawLabeledValues,
					triggerValue
				};
				var showPosition = true;
				if (treeCheckStrictly || source === "selection" && !selected) showPosition = false;
				fillAdditionalInfo(additionalInfo, triggerValue, newRawValues, mergedTreeData, showPosition, mergedFieldNames);
				if (mergedCheckable) additionalInfo.checked = selected;
				else additionalInfo.selected = selected;
				var returnValues = mergedLabelInValue ? returnLabeledValues : returnLabeledValues.map(function(item) {
					return item.value;
				});
				onChange(mergedMultiple ? returnValues : returnValues[0], mergedLabelInValue ? null : returnLabeledValues.map(function(item) {
					return item.label;
				}), additionalInfo);
			}
		});
		var onOptionSelect = import_react.useCallback(function(selectedKey, _ref2) {
			var _node$mergedFieldName;
			var selected = _ref2.selected, source = _ref2.source;
			var entity = keyEntities[selectedKey];
			var node = entity === null || entity === void 0 ? void 0 : entity.node;
			var selectedValue = (_node$mergedFieldName = node === null || node === void 0 ? void 0 : node[mergedFieldNames.value]) !== null && _node$mergedFieldName !== void 0 ? _node$mergedFieldName : selectedKey;
			if (!mergedMultiple) triggerChange([selectedValue], {
				selected: true,
				triggerValue: selectedValue
			}, "option");
			else {
				var newRawValues = selected ? [].concat(_toConsumableArray(rawValues), [selectedValue]) : rawCheckedValues.filter(function(v) {
					return v !== selectedValue;
				});
				if (treeConduction) {
					var _splitRawValues = splitRawValues(newRawValues), missingRawValues = _splitRawValues.missingRawValues;
					var keyList = _splitRawValues.existRawValues.map(function(val) {
						return valueEntities.get(val).key;
					});
					var checkedKeys;
					if (selected) checkedKeys = conductCheck(keyList, true, keyEntities).checkedKeys;
					else checkedKeys = conductCheck(keyList, {
						checked: false,
						halfCheckedKeys: rawHalfCheckedValues
					}, keyEntities).checkedKeys;
					newRawValues = [].concat(_toConsumableArray(missingRawValues), _toConsumableArray(checkedKeys.map(function(key) {
						return keyEntities[key].node[mergedFieldNames.value];
					})));
				}
				triggerChange(newRawValues, {
					selected,
					triggerValue: selectedValue
				}, source || "option");
			}
			if (selected || !mergedMultiple) onSelect === null || onSelect === void 0 || onSelect(selectedValue, fillLegacyProps(node));
			else onDeselect === null || onDeselect === void 0 || onDeselect(selectedValue, fillLegacyProps(node));
		}, [
			splitRawValues,
			valueEntities,
			keyEntities,
			mergedFieldNames,
			mergedMultiple,
			rawValues,
			triggerChange,
			treeConduction,
			onSelect,
			onDeselect,
			rawCheckedValues,
			rawHalfCheckedValues,
			maxCount
		]);
		var onInternalDropdownVisibleChange = import_react.useCallback(function(open) {
			if (onDropdownVisibleChange) {
				var legacyParam = {};
				Object.defineProperty(legacyParam, "documentClickClose", { get: function get() {
					warning_default(false, "Second param of `onDropdownVisibleChange` has been removed.");
					return false;
				} });
				onDropdownVisibleChange(open, legacyParam);
			}
		}, [onDropdownVisibleChange]);
		var onDisplayValuesChange = useRefFunc(function(newValues, info) {
			var newRawValues = newValues.map(function(item) {
				return item.value;
			});
			if (info.type === "clear") {
				triggerChange(newRawValues, {}, "selection");
				return;
			}
			if (info.values.length) onOptionSelect(info.values[0].value, {
				selected: false,
				source: "selection"
			});
		});
		var treeSelectContext = import_react.useMemo(function() {
			return {
				virtual,
				dropdownMatchSelectWidth,
				listHeight,
				listItemHeight,
				listItemScrollOffset,
				treeData: filteredTreeData,
				fieldNames: mergedFieldNames,
				onSelect: onOptionSelect,
				treeExpandAction,
				treeTitleRender,
				onPopupScroll,
				leftMaxCount: maxCount === void 0 ? null : maxCount - cachedDisplayValues.length,
				leafCountOnly: mergedShowCheckedStrategy === "SHOW_CHILD" && !treeCheckStrictly && !!treeCheckable,
				valueEntities
			};
		}, [
			virtual,
			dropdownMatchSelectWidth,
			listHeight,
			listItemHeight,
			listItemScrollOffset,
			filteredTreeData,
			mergedFieldNames,
			onOptionSelect,
			treeExpandAction,
			treeTitleRender,
			onPopupScroll,
			maxCount,
			cachedDisplayValues.length,
			mergedShowCheckedStrategy,
			treeCheckStrictly,
			treeCheckable,
			valueEntities
		]);
		var legacyContext = import_react.useMemo(function() {
			return {
				checkable: mergedCheckable,
				loadData,
				treeLoadedKeys,
				onTreeLoad,
				checkedKeys: rawCheckedValues,
				halfCheckedKeys: rawHalfCheckedValues,
				treeDefaultExpandAll,
				treeExpandedKeys,
				treeDefaultExpandedKeys,
				onTreeExpand,
				treeIcon,
				treeMotion,
				showTreeIcon,
				switcherIcon,
				treeLine,
				treeNodeFilterProp,
				keyEntities
			};
		}, [
			mergedCheckable,
			loadData,
			treeLoadedKeys,
			onTreeLoad,
			rawCheckedValues,
			rawHalfCheckedValues,
			treeDefaultExpandAll,
			treeExpandedKeys,
			treeDefaultExpandedKeys,
			onTreeExpand,
			treeIcon,
			treeMotion,
			showTreeIcon,
			switcherIcon,
			treeLine,
			treeNodeFilterProp,
			keyEntities
		]);
		return /* @__PURE__ */ import_react.createElement(TreeSelectContext_default.Provider, { value: treeSelectContext }, /* @__PURE__ */ import_react.createElement(LegacyContext_default.Provider, { value: legacyContext }, /* @__PURE__ */ import_react.createElement(BaseSelect_default, _extends({ ref }, restProps, {
			id: mergedId,
			prefixCls,
			mode: mergedMultiple ? "multiple" : void 0,
			displayValues: cachedDisplayValues,
			onDisplayValuesChange,
			searchValue: mergedSearchValue,
			onSearch: onInternalSearch,
			OptionList: OptionList_default,
			emptyOptions: !mergedTreeData.length,
			onDropdownVisibleChange: onInternalDropdownVisibleChange,
			dropdownMatchSelectWidth
		}))));
	});
	GenericTreeSelect.TreeNode = TreeNode_default;
	GenericTreeSelect.SHOW_ALL = SHOW_ALL;
	GenericTreeSelect.SHOW_PARENT = SHOW_PARENT;
	GenericTreeSelect.SHOW_CHILD = SHOW_CHILD;
	TreeSelect_default = GenericTreeSelect;
}));
var es_exports = /* @__PURE__ */ __export({
	SHOW_ALL: () => SHOW_ALL,
	SHOW_CHILD: () => SHOW_CHILD,
	SHOW_PARENT: () => SHOW_PARENT,
	TreeNode: () => TreeNode_default,
	default: () => es_default
}, 1);
var es_default;
var init_es = __esmMin((() => {
	init_TreeSelect();
	init_TreeNode();
	init_strategyUtil();
	es_default = TreeSelect_default;
}));
export { useBaseProps as C, BaseSelect_default as S, convertDataToEntities as _, SHOW_CHILD as a, init_useId as b, es_exports$1 as c, es_exports$2 as d, init_es$2 as f, init_conductUtil as g, conductCheck as h, SHOW_ALL as i, init_es$1 as l, init_createForOfIteratorHelper as m, es_exports as n, SHOW_PARENT as o, _createForOfIteratorHelper as p, init_es as r, TreeNode_default as s, es_default as t, es_default$4 as u, init_treeUtil as v, useId as x, init_es$3 as y };
