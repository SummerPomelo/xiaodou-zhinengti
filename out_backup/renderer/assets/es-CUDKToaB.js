import { n as __esmMin, o as __toESM, r as __export } from "./chunk-0ogMdkZ1.js";
import { $i as init_KeyCode, $n as es_default$8, Ao as init_useLayoutEffect, Ar as init_isMobile, Ba as useMergedState, Fs as init_defineProperty, Go as init_slicedToArray, Gs as require_classnames, Hs as init_typeof, Io as init_isEqual, Is as init_warning, Jo as _toConsumableArray, Ko as init_raf, Lo as isEqual_default, Mo as useLayoutUpdateEffect, Ms as _objectSpread2, Ns as init_objectSpread2, Ps as _defineProperty, Qi as KeyCode_default, Qo as es_default$6, Ro as _objectWithoutProperties, Rs as warning_default, Ss as init_ref, Ua as init_useEvent, Us as _extends, Vs as _typeof, Wa as useEvent, Wo as _slicedToArray, Ws as init_extends, Yo as init_toConsumableArray, _a as es_default$5, ar as init_es$5, es as init_es$7, gs as init_classCallCheck, hs as _classCallCheck, jo as useLayoutEffect_default, jr as isMobile_default, js as require_react_dom, ms as init_createClass, nr as MenuItem_default, ps as _createClass, qo as raf_default, rr as es_default$7, tr as init_es$6, ws as useComposeRef, ya as init_es$8, ys as composeRef, za as init_useMergedState, zo as init_objectWithoutProperties } from "./ImageViewer-uT4rjMQ4.js";
import { Ic as init_es$9, Lc as BaseInput_default, Rc as init_commonUtils, zc as triggerFocus } from "./store-Dxt9V8vr.js";
import { t as require_react } from "./react-CGLB_Dcb.js";
var import_react$39, TabContext_default;
var init_TabContext = __esmMin((() => {
	import_react$39 = /* @__PURE__ */ __toESM(require_react());
	TabContext_default = /* @__PURE__ */ (0, import_react$39.createContext)(null);
}));
var import_react$38, useIndicator, useIndicator_default;
var init_useIndicator = __esmMin((() => {
	init_slicedToArray();
	init_raf();
	import_react$38 = /* @__PURE__ */ __toESM(require_react());
	useIndicator = function useIndicator$1(options) {
		var activeTabOffset = options.activeTabOffset, horizontal = options.horizontal, rtl = options.rtl, _options$indicator = options.indicator, indicator = _options$indicator === void 0 ? {} : _options$indicator;
		var size = indicator.size, _indicator$align = indicator.align, align = _indicator$align === void 0 ? "center" : _indicator$align;
		var _useState2 = _slicedToArray((0, import_react$38.useState)(), 2), inkStyle = _useState2[0], setInkStyle = _useState2[1];
		var inkBarRafRef = (0, import_react$38.useRef)();
		var getLength = import_react$38.useCallback(function(origin) {
			if (typeof size === "function") return size(origin);
			if (typeof size === "number") return size;
			return origin;
		}, [size]);
		function cleanInkBarRaf() {
			raf_default.cancel(inkBarRafRef.current);
		}
		(0, import_react$38.useEffect)(function() {
			var newInkStyle = {};
			if (activeTabOffset) if (horizontal) {
				newInkStyle.width = getLength(activeTabOffset.width);
				var key = rtl ? "right" : "left";
				if (align === "start") newInkStyle[key] = activeTabOffset[key];
				if (align === "center") {
					newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width / 2;
					newInkStyle.transform = rtl ? "translateX(50%)" : "translateX(-50%)";
				}
				if (align === "end") {
					newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width;
					newInkStyle.transform = "translateX(-100%)";
				}
			} else {
				newInkStyle.height = getLength(activeTabOffset.height);
				if (align === "start") newInkStyle.top = activeTabOffset.top;
				if (align === "center") {
					newInkStyle.top = activeTabOffset.top + activeTabOffset.height / 2;
					newInkStyle.transform = "translateY(-50%)";
				}
				if (align === "end") {
					newInkStyle.top = activeTabOffset.top + activeTabOffset.height;
					newInkStyle.transform = "translateY(-100%)";
				}
			}
			cleanInkBarRaf();
			inkBarRafRef.current = raf_default(function() {
				if (!(inkStyle && newInkStyle && Object.keys(newInkStyle).every(function(key$1) {
					var newValue = newInkStyle[key$1];
					var oldValue = inkStyle[key$1];
					return typeof newValue === "number" && typeof oldValue === "number" ? Math.round(newValue) === Math.round(oldValue) : newValue === oldValue;
				}))) setInkStyle(newInkStyle);
			});
			return cleanInkBarRaf;
		}, [
			JSON.stringify(activeTabOffset),
			horizontal,
			rtl,
			align,
			getLength
		]);
		return { style: inkStyle };
	};
	useIndicator_default = useIndicator;
}));
function useOffsets(tabs, tabSizes, holderScrollWidth) {
	return (0, import_react$37.useMemo)(function() {
		var _tabs$;
		var map = /* @__PURE__ */ new Map();
		var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE$1;
		var rightOffset = lastOffset.left + lastOffset.width;
		for (var i = 0; i < tabs.length; i += 1) {
			var key = tabs[i].key;
			var data = tabSizes.get(key);
			if (!data) {
				var _tabs;
				data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE$1;
			}
			var entity = map.get(key) || _objectSpread2({}, data);
			entity.right = rightOffset - entity.left - entity.width;
			map.set(key, entity);
		}
		return map;
	}, [
		tabs.map(function(tab) {
			return tab.key;
		}).join("_"),
		tabSizes,
		holderScrollWidth
	]);
}
var import_react$37, DEFAULT_SIZE$1;
var init_useOffsets = __esmMin((() => {
	init_objectSpread2();
	import_react$37 = /* @__PURE__ */ __toESM(require_react());
	DEFAULT_SIZE$1 = {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	};
}));
function useSyncState(defaultState, onChange) {
	var stateRef = import_react$36.useRef(defaultState);
	var forceUpdate = _slicedToArray(import_react$36.useState({}), 2)[1];
	function setState(updater) {
		var newValue = typeof updater === "function" ? updater(stateRef.current) : updater;
		if (newValue !== stateRef.current) onChange(newValue, stateRef.current);
		stateRef.current = newValue;
		forceUpdate({});
	}
	return [stateRef.current, setState];
}
var import_react$36;
var init_useSyncState = __esmMin((() => {
	init_slicedToArray();
	import_react$36 = /* @__PURE__ */ __toESM(require_react());
}));
function useTouchMove(ref, onOffset) {
	var _useState2 = _slicedToArray((0, import_react$35.useState)(), 2), touchPosition = _useState2[0], setTouchPosition = _useState2[1];
	var _useState4 = _slicedToArray((0, import_react$35.useState)(0), 2), lastTimestamp = _useState4[0], setLastTimestamp = _useState4[1];
	var _useState6 = _slicedToArray((0, import_react$35.useState)(0), 2), lastTimeDiff = _useState6[0], setLastTimeDiff = _useState6[1];
	var _useState8 = _slicedToArray((0, import_react$35.useState)(), 2), lastOffset = _useState8[0], setLastOffset = _useState8[1];
	var motionRef = (0, import_react$35.useRef)();
	function onTouchStart(e) {
		var _e$touches$ = e.touches[0], screenX = _e$touches$.screenX, screenY = _e$touches$.screenY;
		setTouchPosition({
			x: screenX,
			y: screenY
		});
		window.clearInterval(motionRef.current);
	}
	function onTouchMove(e) {
		if (!touchPosition) return;
		var _e$touches$2 = e.touches[0], screenX = _e$touches$2.screenX, screenY = _e$touches$2.screenY;
		setTouchPosition({
			x: screenX,
			y: screenY
		});
		var offsetX = screenX - touchPosition.x;
		var offsetY = screenY - touchPosition.y;
		onOffset(offsetX, offsetY);
		var now = Date.now();
		setLastTimestamp(now);
		setLastTimeDiff(now - lastTimestamp);
		setLastOffset({
			x: offsetX,
			y: offsetY
		});
	}
	function onTouchEnd() {
		if (!touchPosition) return;
		setTouchPosition(null);
		setLastOffset(null);
		if (lastOffset) {
			var distanceX = lastOffset.x / lastTimeDiff;
			var distanceY = lastOffset.y / lastTimeDiff;
			var absX = Math.abs(distanceX);
			var absY = Math.abs(distanceY);
			if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
			var currentX = distanceX;
			var currentY = distanceY;
			motionRef.current = window.setInterval(function() {
				if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
					window.clearInterval(motionRef.current);
					return;
				}
				currentX *= SPEED_OFF_MULTIPLE;
				currentY *= SPEED_OFF_MULTIPLE;
				onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
			}, REFRESH_INTERVAL);
		}
	}
	var lastWheelDirectionRef = (0, import_react$35.useRef)();
	function onWheel(e) {
		var deltaX = e.deltaX, deltaY = e.deltaY;
		var mixed = 0;
		var absX = Math.abs(deltaX);
		var absY = Math.abs(deltaY);
		if (absX === absY) mixed = lastWheelDirectionRef.current === "x" ? deltaX : deltaY;
		else if (absX > absY) {
			mixed = deltaX;
			lastWheelDirectionRef.current = "x";
		} else {
			mixed = deltaY;
			lastWheelDirectionRef.current = "y";
		}
		if (onOffset(-mixed, -mixed)) e.preventDefault();
	}
	var touchEventsRef = (0, import_react$35.useRef)(null);
	touchEventsRef.current = {
		onTouchStart,
		onTouchMove,
		onTouchEnd,
		onWheel
	};
	import_react$34.useEffect(function() {
		function onProxyTouchStart(e) {
			touchEventsRef.current.onTouchStart(e);
		}
		function onProxyTouchMove(e) {
			touchEventsRef.current.onTouchMove(e);
		}
		function onProxyTouchEnd(e) {
			touchEventsRef.current.onTouchEnd(e);
		}
		function onProxyWheel(e) {
			touchEventsRef.current.onWheel(e);
		}
		document.addEventListener("touchmove", onProxyTouchMove, { passive: false });
		document.addEventListener("touchend", onProxyTouchEnd, { passive: true });
		ref.current.addEventListener("touchstart", onProxyTouchStart, { passive: true });
		ref.current.addEventListener("wheel", onProxyWheel, { passive: false });
		return function() {
			document.removeEventListener("touchmove", onProxyTouchMove);
			document.removeEventListener("touchend", onProxyTouchEnd);
		};
	}, []);
}
var import_react$34, import_react$35, MIN_SWIPE_DISTANCE, STOP_SWIPE_DISTANCE, REFRESH_INTERVAL, SPEED_OFF_MULTIPLE;
var init_useTouchMove = __esmMin((() => {
	init_slicedToArray();
	import_react$34 = /* @__PURE__ */ __toESM(require_react());
	import_react$35 = /* @__PURE__ */ __toESM(require_react());
	MIN_SWIPE_DISTANCE = .1;
	STOP_SWIPE_DISTANCE = .01;
	REFRESH_INTERVAL = 20;
	SPEED_OFF_MULTIPLE = Math.pow(.995, REFRESH_INTERVAL);
}));
function useUpdate(callback) {
	var _useState2 = _slicedToArray((0, import_react$33.useState)(0), 2), count = _useState2[0], setCount = _useState2[1];
	var effectRef = (0, import_react$33.useRef)(0);
	var callbackRef = (0, import_react$33.useRef)();
	callbackRef.current = callback;
	useLayoutUpdateEffect(function() {
		var _callbackRef$current;
		(_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 || _callbackRef$current.call(callbackRef);
	}, [count]);
	return function() {
		if (effectRef.current !== count) return;
		effectRef.current += 1;
		setCount(effectRef.current);
	};
}
function useUpdateState(defaultState) {
	var batchRef = (0, import_react$33.useRef)([]);
	var forceUpdate = _slicedToArray((0, import_react$33.useState)({}), 2)[1];
	var state = (0, import_react$33.useRef)(typeof defaultState === "function" ? defaultState() : defaultState);
	var flushUpdate = useUpdate(function() {
		var current = state.current;
		batchRef.current.forEach(function(callback) {
			current = callback(current);
		});
		batchRef.current = [];
		state.current = current;
		forceUpdate({});
	});
	function updater(callback) {
		batchRef.current.push(callback);
		flushUpdate();
	}
	return [state.current, updater];
}
var import_react$33;
var init_useUpdate = __esmMin((() => {
	init_slicedToArray();
	init_useLayoutEffect();
	import_react$33 = /* @__PURE__ */ __toESM(require_react());
}));
function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, _ref) {
	var tabs = _ref.tabs, tabPosition = _ref.tabPosition, rtl = _ref.rtl;
	var charUnit;
	var position;
	var transformSize;
	if (["top", "bottom"].includes(tabPosition)) {
		charUnit = "width";
		position = rtl ? "right" : "left";
		transformSize = Math.abs(transform);
	} else {
		charUnit = "height";
		position = "top";
		transformSize = -transform;
	}
	return (0, import_react$32.useMemo)(function() {
		if (!tabs.length) return [0, 0];
		var len = tabs.length;
		var endIndex = len;
		for (var i = 0; i < len; i += 1) {
			var offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;
			if (Math.floor(offset[position] + offset[charUnit]) > Math.floor(transformSize + visibleTabContentValue)) {
				endIndex = i - 1;
				break;
			}
		}
		var startIndex = 0;
		for (var _i = len - 1; _i >= 0; _i -= 1) if ((tabOffsets.get(tabs[_i].key) || DEFAULT_SIZE)[position] < transformSize) {
			startIndex = _i + 1;
			break;
		}
		return startIndex > endIndex ? [0, -1] : [startIndex, endIndex];
	}, [
		tabOffsets,
		visibleTabContentValue,
		tabContentSizeValue,
		addNodeSizeValue,
		operationNodeSizeValue,
		transformSize,
		tabPosition,
		tabs.map(function(tab) {
			return tab.key;
		}).join("_"),
		rtl
	]);
}
var import_react$32, DEFAULT_SIZE;
var init_useVisibleRange = __esmMin((() => {
	import_react$32 = /* @__PURE__ */ __toESM(require_react());
	DEFAULT_SIZE = {
		width: 0,
		height: 0,
		left: 0,
		top: 0,
		right: 0
	};
}));
function stringify(obj) {
	var tgt;
	if (obj instanceof Map) {
		tgt = {};
		obj.forEach(function(v, k) {
			tgt[k] = v;
		});
	} else tgt = obj;
	return JSON.stringify(tgt);
}
function genDataNodeKey(key) {
	return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
}
function getRemovable(closable, closeIcon, editable, disabled) {
	if (!editable || disabled || closable === false || closable === void 0 && (closeIcon === false || closeIcon === null)) return false;
	return true;
}
var RC_TABS_DOUBLE_QUOTE;
var init_util$1 = __esmMin((() => {
	RC_TABS_DOUBLE_QUOTE = "TABS_DQ";
}));
var import_react$31, AddButton, AddButton_default;
var init_AddButton = __esmMin((() => {
	import_react$31 = /* @__PURE__ */ __toESM(require_react());
	AddButton = /* @__PURE__ */ import_react$31.forwardRef(function(props, ref) {
		var prefixCls = props.prefixCls, editable = props.editable, locale = props.locale, style = props.style;
		if (!editable || editable.showAdd === false) return null;
		return /* @__PURE__ */ import_react$31.createElement("button", {
			ref,
			type: "button",
			className: "".concat(prefixCls, "-nav-add"),
			style,
			"aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || "Add tab",
			onClick: function onClick(event) {
				editable.onEdit("add", { event });
			}
		}, editable.addIcon || "+");
	});
	AddButton_default = AddButton;
}));
var import_react$30, ExtraContent, ExtraContent_default;
var init_ExtraContent = __esmMin((() => {
	init_typeof();
	import_react$30 = /* @__PURE__ */ __toESM(require_react());
	ExtraContent = /* @__PURE__ */ import_react$30.forwardRef(function(props, ref) {
		var position = props.position, prefixCls = props.prefixCls, extra = props.extra;
		if (!extra) return null;
		var content;
		var assertExtra = {};
		if (_typeof(extra) === "object" && !/* @__PURE__ */ import_react$30.isValidElement(extra)) assertExtra = extra;
		else assertExtra.right = extra;
		if (position === "right") content = assertExtra.right;
		if (position === "left") content = assertExtra.left;
		return content ? /* @__PURE__ */ import_react$30.createElement("div", {
			className: "".concat(prefixCls, "-extra-content"),
			ref
		}, content) : null;
	});
	ExtraContent_default = ExtraContent;
}));
var import_classnames$15, import_react$28, import_react$29, OperationNode, OperationNode_default;
var init_OperationNode = __esmMin((() => {
	init_extends();
	init_defineProperty();
	init_slicedToArray();
	import_classnames$15 = /* @__PURE__ */ __toESM(require_classnames());
	init_es$5();
	init_es$6();
	init_KeyCode();
	import_react$28 = /* @__PURE__ */ __toESM(require_react());
	import_react$29 = /* @__PURE__ */ __toESM(require_react());
	init_util$1();
	init_AddButton();
	OperationNode = /* @__PURE__ */ import_react$28.forwardRef(function(props, ref) {
		var prefixCls = props.prefixCls, id = props.id, tabs = props.tabs, locale = props.locale, mobile = props.mobile, _props$more = props.more, moreProps = _props$more === void 0 ? {} : _props$more, style = props.style, className = props.className, editable = props.editable, tabBarGutter = props.tabBarGutter, rtl = props.rtl, removeAriaLabel = props.removeAriaLabel, onTabClick = props.onTabClick, getPopupContainer = props.getPopupContainer, popupClassName = props.popupClassName;
		var _useState2 = _slicedToArray((0, import_react$29.useState)(false), 2), open = _useState2[0], setOpen = _useState2[1];
		var _useState4 = _slicedToArray((0, import_react$29.useState)(null), 2), selectedKey = _useState4[0], setSelectedKey = _useState4[1];
		var _moreProps$icon = moreProps.icon, moreIcon = _moreProps$icon === void 0 ? "More" : _moreProps$icon;
		var popupId = "".concat(id, "-more-popup");
		var dropdownPrefix = "".concat(prefixCls, "-dropdown");
		var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
		var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
		function onRemoveTab(event, key) {
			event.preventDefault();
			event.stopPropagation();
			editable.onEdit("remove", {
				key,
				event
			});
		}
		var menu = /* @__PURE__ */ import_react$28.createElement(es_default$8, {
			onClick: function onClick(_ref) {
				var key = _ref.key, domEvent = _ref.domEvent;
				onTabClick(key, domEvent);
				setOpen(false);
			},
			prefixCls: "".concat(dropdownPrefix, "-menu"),
			id: popupId,
			tabIndex: -1,
			role: "listbox",
			"aria-activedescendant": selectedItemId,
			selectedKeys: [selectedKey],
			"aria-label": dropdownAriaLabel !== void 0 ? dropdownAriaLabel : "expanded dropdown"
		}, tabs.map(function(tab) {
			var closable = tab.closable, disabled = tab.disabled, closeIcon = tab.closeIcon, key = tab.key, label = tab.label;
			var removable = getRemovable(closable, closeIcon, editable, disabled);
			return /* @__PURE__ */ import_react$28.createElement(MenuItem_default, {
				key,
				id: "".concat(popupId, "-").concat(key),
				role: "option",
				"aria-controls": id && "".concat(id, "-panel-").concat(key),
				disabled
			}, /* @__PURE__ */ import_react$28.createElement("span", null, label), removable && /* @__PURE__ */ import_react$28.createElement("button", {
				type: "button",
				"aria-label": removeAriaLabel || "remove",
				tabIndex: 0,
				className: "".concat(dropdownPrefix, "-menu-item-remove"),
				onClick: function onClick(e) {
					e.stopPropagation();
					onRemoveTab(e, key);
				}
			}, closeIcon || editable.removeIcon || "×"));
		}));
		function selectOffset(offset) {
			var enabledTabs = tabs.filter(function(tab$1) {
				return !tab$1.disabled;
			});
			var selectedIndex = enabledTabs.findIndex(function(tab$1) {
				return tab$1.key === selectedKey;
			}) || 0;
			var len = enabledTabs.length;
			for (var i = 0; i < len; i += 1) {
				selectedIndex = (selectedIndex + offset + len) % len;
				var tab = enabledTabs[selectedIndex];
				if (!tab.disabled) {
					setSelectedKey(tab.key);
					return;
				}
			}
		}
		function onKeyDown(e) {
			var which = e.which;
			if (!open) {
				if ([
					KeyCode_default.DOWN,
					KeyCode_default.SPACE,
					KeyCode_default.ENTER
				].includes(which)) {
					setOpen(true);
					e.preventDefault();
				}
				return;
			}
			switch (which) {
				case KeyCode_default.UP:
					selectOffset(-1);
					e.preventDefault();
					break;
				case KeyCode_default.DOWN:
					selectOffset(1);
					e.preventDefault();
					break;
				case KeyCode_default.ESC:
					setOpen(false);
					break;
				case KeyCode_default.SPACE:
				case KeyCode_default.ENTER:
					if (selectedKey !== null) onTabClick(selectedKey, e);
					break;
			}
		}
		(0, import_react$29.useEffect)(function() {
			var ele = document.getElementById(selectedItemId);
			if (ele && ele.scrollIntoView) ele.scrollIntoView(false);
		}, [selectedKey]);
		(0, import_react$29.useEffect)(function() {
			if (!open) setSelectedKey(null);
		}, [open]);
		var moreStyle = _defineProperty({}, rtl ? "marginRight" : "marginLeft", tabBarGutter);
		if (!tabs.length) {
			moreStyle.visibility = "hidden";
			moreStyle.order = 1;
		}
		var overlayClassName = (0, import_classnames$15.default)(_defineProperty({}, "".concat(dropdownPrefix, "-rtl"), rtl));
		var moreNode = mobile ? null : /* @__PURE__ */ import_react$28.createElement(es_default$7, _extends({
			prefixCls: dropdownPrefix,
			overlay: menu,
			visible: tabs.length ? open : false,
			onVisibleChange: setOpen,
			overlayClassName: (0, import_classnames$15.default)(overlayClassName, popupClassName),
			mouseEnterDelay: .1,
			mouseLeaveDelay: .1,
			getPopupContainer
		}, moreProps), /* @__PURE__ */ import_react$28.createElement("button", {
			type: "button",
			className: "".concat(prefixCls, "-nav-more"),
			style: moreStyle,
			"aria-haspopup": "listbox",
			"aria-controls": popupId,
			id: "".concat(id, "-more"),
			"aria-expanded": open,
			onKeyDown
		}, moreIcon));
		return /* @__PURE__ */ import_react$28.createElement("div", {
			className: (0, import_classnames$15.default)("".concat(prefixCls, "-nav-operations"), className),
			style,
			ref
		}, moreNode, /* @__PURE__ */ import_react$28.createElement(AddButton_default, {
			prefixCls,
			locale,
			editable
		}));
	});
	OperationNode_default = /* @__PURE__ */ import_react$28.memo(OperationNode, function(_, next) {
		return next.tabMoving;
	});
}));
var import_classnames$14, import_react$27, TabNode, TabNode_default;
var init_TabNode = __esmMin((() => {
	init_defineProperty();
	import_classnames$14 = /* @__PURE__ */ __toESM(require_classnames());
	import_react$27 = /* @__PURE__ */ __toESM(require_react());
	init_util$1();
	TabNode = function TabNode$1(props) {
		var prefixCls = props.prefixCls, id = props.id, active = props.active, focus = props.focus, _props$tab = props.tab, key = _props$tab.key, label = _props$tab.label, disabled = _props$tab.disabled, closeIcon = _props$tab.closeIcon, icon = _props$tab.icon, closable = props.closable, renderWrapper = props.renderWrapper, removeAriaLabel = props.removeAriaLabel, editable = props.editable, onClick = props.onClick, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, onMouseDown = props.onMouseDown, onMouseUp = props.onMouseUp, style = props.style, tabCount = props.tabCount, currentPosition = props.currentPosition;
		var tabPrefix = "".concat(prefixCls, "-tab");
		var removable = getRemovable(closable, closeIcon, editable, disabled);
		function onInternalClick(e) {
			if (disabled) return;
			onClick(e);
		}
		function onRemoveTab(event) {
			event.preventDefault();
			event.stopPropagation();
			editable.onEdit("remove", {
				key,
				event
			});
		}
		var labelNode = import_react$27.useMemo(function() {
			return icon && typeof label === "string" ? /* @__PURE__ */ import_react$27.createElement("span", null, label) : label;
		}, [label, icon]);
		var btnRef = import_react$27.useRef(null);
		import_react$27.useEffect(function() {
			if (focus && btnRef.current) btnRef.current.focus();
		}, [focus]);
		var node = /* @__PURE__ */ import_react$27.createElement("div", {
			key,
			"data-node-key": genDataNodeKey(key),
			className: (0, import_classnames$14.default)(tabPrefix, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(tabPrefix, "-with-remove"), removable), "".concat(tabPrefix, "-active"), active), "".concat(tabPrefix, "-disabled"), disabled), "".concat(tabPrefix, "-focus"), focus)),
			style,
			onClick: onInternalClick
		}, /* @__PURE__ */ import_react$27.createElement("div", {
			ref: btnRef,
			role: "tab",
			"aria-selected": active,
			id: id && "".concat(id, "-tab-").concat(key),
			className: "".concat(tabPrefix, "-btn"),
			"aria-controls": id && "".concat(id, "-panel-").concat(key),
			"aria-disabled": disabled,
			tabIndex: disabled ? null : active ? 0 : -1,
			onClick: function onClick$1(e) {
				e.stopPropagation();
				onInternalClick(e);
			},
			onKeyDown,
			onMouseDown,
			onMouseUp,
			onFocus,
			onBlur
		}, focus && /* @__PURE__ */ import_react$27.createElement("div", {
			"aria-live": "polite",
			style: {
				width: 0,
				height: 0,
				position: "absolute",
				overflow: "hidden",
				opacity: 0
			}
		}, "Tab ".concat(currentPosition, " of ").concat(tabCount)), icon && /* @__PURE__ */ import_react$27.createElement("span", { className: "".concat(tabPrefix, "-icon") }, icon), label && labelNode), removable && /* @__PURE__ */ import_react$27.createElement("button", {
			type: "button",
			role: "tab",
			"aria-label": removeAriaLabel || "remove",
			tabIndex: active ? 0 : -1,
			className: "".concat(tabPrefix, "-remove"),
			onClick: function onClick$1(e) {
				e.stopPropagation();
				onRemoveTab(e);
			}
		}, closeIcon || editable.removeIcon || "×"));
		return renderWrapper ? renderWrapper(node) : node;
	};
	TabNode_default = TabNode;
}));
var import_classnames$13, import_react$25, import_react$26, getTabSize, getSize, getUnitValue, TabNavList, TabNavList_default;
var init_TabNavList = __esmMin((() => {
	init_extends();
	init_defineProperty();
	init_toConsumableArray();
	init_objectSpread2();
	init_slicedToArray();
	import_classnames$13 = /* @__PURE__ */ __toESM(require_classnames());
	init_es$7();
	init_useEvent();
	init_ref();
	import_react$25 = /* @__PURE__ */ __toESM(require_react());
	import_react$26 = /* @__PURE__ */ __toESM(require_react());
	init_TabContext();
	init_useIndicator();
	init_useOffsets();
	init_useSyncState();
	init_useTouchMove();
	init_useUpdate();
	init_useVisibleRange();
	init_util$1();
	init_AddButton();
	init_ExtraContent();
	init_OperationNode();
	init_TabNode();
	getTabSize = function getTabSize$1(tab, containerRect) {
		var offsetWidth = tab.offsetWidth, offsetHeight = tab.offsetHeight, offsetTop = tab.offsetTop, offsetLeft = tab.offsetLeft;
		var _tab$getBoundingClien = tab.getBoundingClientRect(), width = _tab$getBoundingClien.width, height = _tab$getBoundingClien.height, left = _tab$getBoundingClien.left, top = _tab$getBoundingClien.top;
		if (Math.abs(width - offsetWidth) < 1) return [
			width,
			height,
			left - containerRect.left,
			top - containerRect.top
		];
		return [
			offsetWidth,
			offsetHeight,
			offsetLeft,
			offsetTop
		];
	};
	getSize = function getSize$1(refObj) {
		var _ref = refObj.current || {}, _ref$offsetWidth = _ref.offsetWidth, offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth, _ref$offsetHeight = _ref.offsetHeight, offsetHeight = _ref$offsetHeight === void 0 ? 0 : _ref$offsetHeight;
		if (refObj.current) {
			var _refObj$current$getBo = refObj.current.getBoundingClientRect(), width = _refObj$current$getBo.width, height = _refObj$current$getBo.height;
			if (Math.abs(width - offsetWidth) < 1) return [width, height];
		}
		return [offsetWidth, offsetHeight];
	};
	getUnitValue = function getUnitValue$1(size, tabPositionTopOrBottom) {
		return size[tabPositionTopOrBottom ? 0 : 1];
	};
	TabNavList = /* @__PURE__ */ import_react$25.forwardRef(function(props, ref) {
		var className = props.className, style = props.style, id = props.id, animated = props.animated, activeKey = props.activeKey, rtl = props.rtl, extra = props.extra, editable = props.editable, locale = props.locale, tabPosition = props.tabPosition, tabBarGutter = props.tabBarGutter, children = props.children, onTabClick = props.onTabClick, onTabScroll = props.onTabScroll, indicator = props.indicator;
		var _React$useContext = import_react$25.useContext(TabContext_default), prefixCls = _React$useContext.prefixCls, tabs = _React$useContext.tabs;
		var containerRef = (0, import_react$26.useRef)(null);
		var extraLeftRef = (0, import_react$26.useRef)(null);
		var extraRightRef = (0, import_react$26.useRef)(null);
		var tabsWrapperRef = (0, import_react$26.useRef)(null);
		var tabListRef = (0, import_react$26.useRef)(null);
		var operationsRef = (0, import_react$26.useRef)(null);
		var innerAddButtonRef = (0, import_react$26.useRef)(null);
		var tabPositionTopOrBottom = tabPosition === "top" || tabPosition === "bottom";
		var _useSyncState2 = _slicedToArray(useSyncState(0, function(next, prev) {
			if (tabPositionTopOrBottom && onTabScroll) onTabScroll({ direction: next > prev ? "left" : "right" });
		}), 2), transformLeft = _useSyncState2[0], setTransformLeft = _useSyncState2[1];
		var _useSyncState4 = _slicedToArray(useSyncState(0, function(next, prev) {
			if (!tabPositionTopOrBottom && onTabScroll) onTabScroll({ direction: next > prev ? "top" : "bottom" });
		}), 2), transformTop = _useSyncState4[0], setTransformTop = _useSyncState4[1];
		var _useState2 = _slicedToArray((0, import_react$26.useState)([0, 0]), 2), containerExcludeExtraSize = _useState2[0], setContainerExcludeExtraSize = _useState2[1];
		var _useState4 = _slicedToArray((0, import_react$26.useState)([0, 0]), 2), tabContentSize = _useState4[0], setTabContentSize = _useState4[1];
		var _useState6 = _slicedToArray((0, import_react$26.useState)([0, 0]), 2), addSize = _useState6[0], setAddSize = _useState6[1];
		var _useState8 = _slicedToArray((0, import_react$26.useState)([0, 0]), 2), operationSize = _useState8[0], setOperationSize = _useState8[1];
		var _useUpdateState2 = _slicedToArray(useUpdateState(/* @__PURE__ */ new Map()), 2), tabSizes = _useUpdateState2[0], setTabSizes = _useUpdateState2[1];
		var tabOffsets = useOffsets(tabs, tabSizes, tabContentSize[0]);
		var containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
		var tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
		var addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
		var operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
		var needScroll = Math.floor(containerExcludeExtraSizeValue) < Math.floor(tabContentSizeValue + addSizeValue);
		var visibleTabContentValue = needScroll ? containerExcludeExtraSizeValue - operationSizeValue : containerExcludeExtraSizeValue - addSizeValue;
		var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
		var transformMin = 0;
		var transformMax = 0;
		if (!tabPositionTopOrBottom) {
			transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
			transformMax = 0;
		} else if (rtl) {
			transformMin = 0;
			transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
		} else {
			transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
			transformMax = 0;
		}
		function alignInRange(value) {
			if (value < transformMin) return transformMin;
			if (value > transformMax) return transformMax;
			return value;
		}
		var touchMovingRef = (0, import_react$26.useRef)(null);
		var _useState10 = _slicedToArray((0, import_react$26.useState)(), 2), lockAnimation = _useState10[0], setLockAnimation = _useState10[1];
		function doLockAnimation() {
			setLockAnimation(Date.now());
		}
		function clearTouchMoving() {
			if (touchMovingRef.current) clearTimeout(touchMovingRef.current);
		}
		useTouchMove(tabsWrapperRef, function(offsetX, offsetY) {
			function doMove(setState, offset) {
				setState(function(value) {
					return alignInRange(value + offset);
				});
			}
			if (!needScroll) return false;
			if (tabPositionTopOrBottom) doMove(setTransformLeft, offsetX);
			else doMove(setTransformTop, offsetY);
			clearTouchMoving();
			doLockAnimation();
			return true;
		});
		(0, import_react$26.useEffect)(function() {
			clearTouchMoving();
			if (lockAnimation) touchMovingRef.current = setTimeout(function() {
				setLockAnimation(0);
			}, 100);
			return clearTouchMoving;
		}, [lockAnimation]);
		var _useVisibleRange2 = _slicedToArray(useVisibleRange(tabOffsets, visibleTabContentValue, tabPositionTopOrBottom ? transformLeft : transformTop, tabContentSizeValue, addSizeValue, operationSizeValue, _objectSpread2(_objectSpread2({}, props), {}, { tabs })), 2), visibleStart = _useVisibleRange2[0], visibleEnd = _useVisibleRange2[1];
		var scrollToTab = useEvent(function() {
			var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : activeKey;
			var tabOffset = tabOffsets.get(key) || {
				width: 0,
				height: 0,
				left: 0,
				right: 0,
				top: 0
			};
			if (tabPositionTopOrBottom) {
				var newTransform = transformLeft;
				if (rtl) {
					if (tabOffset.right < transformLeft) newTransform = tabOffset.right;
					else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
				} else if (tabOffset.left < -transformLeft) newTransform = -tabOffset.left;
				else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
				setTransformTop(0);
				setTransformLeft(alignInRange(newTransform));
			} else {
				var _newTransform = transformTop;
				if (tabOffset.top < -transformTop) _newTransform = -tabOffset.top;
				else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) _newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
				setTransformLeft(0);
				setTransformTop(alignInRange(_newTransform));
			}
		});
		var _useState12 = _slicedToArray((0, import_react$26.useState)(), 2), focusKey = _useState12[0], setFocusKey = _useState12[1];
		var _useState14 = _slicedToArray((0, import_react$26.useState)(false), 2), isMouse = _useState14[0], setIsMouse = _useState14[1];
		var enabledTabs = tabs.filter(function(tab) {
			return !tab.disabled;
		}).map(function(tab) {
			return tab.key;
		});
		var onOffset = function onOffset$1(offset) {
			var currentIndex = enabledTabs.indexOf(focusKey || activeKey);
			var len = enabledTabs.length;
			var newKey = enabledTabs[(currentIndex + offset + len) % len];
			setFocusKey(newKey);
		};
		var handleRemoveTab = function handleRemoveTab$1(removalTabKey, e) {
			var removeIndex = enabledTabs.indexOf(removalTabKey);
			var removeTab = tabs.find(function(tab) {
				return tab.key === removalTabKey;
			});
			if (getRemovable(removeTab === null || removeTab === void 0 ? void 0 : removeTab.closable, removeTab === null || removeTab === void 0 ? void 0 : removeTab.closeIcon, editable, removeTab === null || removeTab === void 0 ? void 0 : removeTab.disabled)) {
				e.preventDefault();
				e.stopPropagation();
				editable.onEdit("remove", {
					key: removalTabKey,
					event: e
				});
				if (removeIndex === enabledTabs.length - 1) onOffset(-1);
				else onOffset(1);
			}
		};
		var handleMouseDown = function handleMouseDown$1(key, e) {
			setIsMouse(true);
			if (e.button === 1) handleRemoveTab(key, e);
		};
		var handleKeyDown = function handleKeyDown$1(e) {
			var code = e.code;
			var isRTL = rtl && tabPositionTopOrBottom;
			var firstEnabledTab = enabledTabs[0];
			var lastEnabledTab = enabledTabs[enabledTabs.length - 1];
			switch (code) {
				case "ArrowLeft":
					if (tabPositionTopOrBottom) onOffset(isRTL ? 1 : -1);
					break;
				case "ArrowRight":
					if (tabPositionTopOrBottom) onOffset(isRTL ? -1 : 1);
					break;
				case "ArrowUp":
					e.preventDefault();
					if (!tabPositionTopOrBottom) onOffset(-1);
					break;
				case "ArrowDown":
					e.preventDefault();
					if (!tabPositionTopOrBottom) onOffset(1);
					break;
				case "Home":
					e.preventDefault();
					setFocusKey(firstEnabledTab);
					break;
				case "End":
					e.preventDefault();
					setFocusKey(lastEnabledTab);
					break;
				case "Enter":
				case "Space":
					e.preventDefault();
					onTabClick(focusKey !== null && focusKey !== void 0 ? focusKey : activeKey, e);
					break;
				case "Backspace":
				case "Delete":
					handleRemoveTab(focusKey, e);
					break;
			}
		};
		var tabNodeStyle = {};
		if (tabPositionTopOrBottom) tabNodeStyle[rtl ? "marginRight" : "marginLeft"] = tabBarGutter;
		else tabNodeStyle.marginTop = tabBarGutter;
		var tabNodes = tabs.map(function(tab, i) {
			var key = tab.key;
			return /* @__PURE__ */ import_react$25.createElement(TabNode_default, {
				id,
				prefixCls,
				key,
				tab,
				style: i === 0 ? void 0 : tabNodeStyle,
				closable: tab.closable,
				editable,
				active: key === activeKey,
				focus: key === focusKey,
				renderWrapper: children,
				removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
				tabCount: enabledTabs.length,
				currentPosition: i + 1,
				onClick: function onClick(e) {
					onTabClick(key, e);
				},
				onKeyDown: handleKeyDown,
				onFocus: function onFocus() {
					if (!isMouse) setFocusKey(key);
					scrollToTab(key);
					doLockAnimation();
					if (!tabsWrapperRef.current) return;
					if (!rtl) tabsWrapperRef.current.scrollLeft = 0;
					tabsWrapperRef.current.scrollTop = 0;
				},
				onBlur: function onBlur() {
					setFocusKey(void 0);
				},
				onMouseDown: function onMouseDown(e) {
					return handleMouseDown(key, e);
				},
				onMouseUp: function onMouseUp() {
					setIsMouse(false);
				}
			});
		});
		var updateTabSizes = function updateTabSizes$1() {
			return setTabSizes(function() {
				var _tabListRef$current;
				var newSizes = /* @__PURE__ */ new Map();
				var listRect = (_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.getBoundingClientRect();
				tabs.forEach(function(_ref2) {
					var _tabListRef$current2;
					var key = _ref2.key;
					var btnNode = (_tabListRef$current2 = tabListRef.current) === null || _tabListRef$current2 === void 0 ? void 0 : _tabListRef$current2.querySelector("[data-node-key=\"".concat(genDataNodeKey(key), "\"]"));
					if (btnNode) {
						var _getTabSize2 = _slicedToArray(getTabSize(btnNode, listRect), 4), width = _getTabSize2[0], height = _getTabSize2[1], left = _getTabSize2[2], top = _getTabSize2[3];
						newSizes.set(key, {
							width,
							height,
							left,
							top
						});
					}
				});
				return newSizes;
			});
		};
		(0, import_react$26.useEffect)(function() {
			updateTabSizes();
		}, [tabs.map(function(tab) {
			return tab.key;
		}).join("_")]);
		var onListHolderResize = useUpdate(function() {
			var containerSize = getSize(containerRef);
			var extraLeftSize = getSize(extraLeftRef);
			var extraRightSize = getSize(extraRightRef);
			setContainerExcludeExtraSize([containerSize[0] - extraLeftSize[0] - extraRightSize[0], containerSize[1] - extraLeftSize[1] - extraRightSize[1]]);
			var newAddSize = getSize(innerAddButtonRef);
			setAddSize(newAddSize);
			setOperationSize(getSize(operationsRef));
			var tabContentFullSize = getSize(tabListRef);
			setTabContentSize([tabContentFullSize[0] - newAddSize[0], tabContentFullSize[1] - newAddSize[1]]);
			updateTabSizes();
		});
		var startHiddenTabs = tabs.slice(0, visibleStart);
		var endHiddenTabs = tabs.slice(visibleEnd + 1);
		var hiddenTabs = [].concat(_toConsumableArray(startHiddenTabs), _toConsumableArray(endHiddenTabs));
		var activeTabOffset = tabOffsets.get(activeKey);
		var indicatorStyle = useIndicator_default({
			activeTabOffset,
			horizontal: tabPositionTopOrBottom,
			indicator,
			rtl
		}).style;
		(0, import_react$26.useEffect)(function() {
			scrollToTab();
		}, [
			activeKey,
			transformMin,
			transformMax,
			stringify(activeTabOffset),
			stringify(tabOffsets),
			tabPositionTopOrBottom
		]);
		(0, import_react$26.useEffect)(function() {
			onListHolderResize();
		}, [rtl]);
		var hasDropdown = !!hiddenTabs.length;
		var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
		var pingLeft;
		var pingRight;
		var pingTop;
		var pingBottom;
		if (tabPositionTopOrBottom) if (rtl) {
			pingRight = transformLeft > 0;
			pingLeft = transformLeft !== transformMax;
		} else {
			pingLeft = transformLeft < 0;
			pingRight = transformLeft !== transformMin;
		}
		else {
			pingTop = transformTop < 0;
			pingBottom = transformTop !== transformMin;
		}
		return /* @__PURE__ */ import_react$25.createElement(es_default$6, { onResize: onListHolderResize }, /* @__PURE__ */ import_react$25.createElement("div", {
			ref: useComposeRef(ref, containerRef),
			role: "tablist",
			"aria-orientation": tabPositionTopOrBottom ? "horizontal" : "vertical",
			className: (0, import_classnames$13.default)("".concat(prefixCls, "-nav"), className),
			style,
			onKeyDown: function onKeyDown() {
				doLockAnimation();
			}
		}, /* @__PURE__ */ import_react$25.createElement(ExtraContent_default, {
			ref: extraLeftRef,
			position: "left",
			extra,
			prefixCls
		}), /* @__PURE__ */ import_react$25.createElement(es_default$6, { onResize: onListHolderResize }, /* @__PURE__ */ import_react$25.createElement("div", {
			className: (0, import_classnames$13.default)(wrapPrefix, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(wrapPrefix, "-ping-left"), pingLeft), "".concat(wrapPrefix, "-ping-right"), pingRight), "".concat(wrapPrefix, "-ping-top"), pingTop), "".concat(wrapPrefix, "-ping-bottom"), pingBottom)),
			ref: tabsWrapperRef
		}, /* @__PURE__ */ import_react$25.createElement(es_default$6, { onResize: onListHolderResize }, /* @__PURE__ */ import_react$25.createElement("div", {
			ref: tabListRef,
			className: "".concat(prefixCls, "-nav-list"),
			style: {
				transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
				transition: lockAnimation ? "none" : void 0
			}
		}, tabNodes, /* @__PURE__ */ import_react$25.createElement(AddButton_default, {
			ref: innerAddButtonRef,
			prefixCls,
			locale,
			editable,
			style: _objectSpread2(_objectSpread2({}, tabNodes.length === 0 ? void 0 : tabNodeStyle), {}, { visibility: hasDropdown ? "hidden" : null })
		}), /* @__PURE__ */ import_react$25.createElement("div", {
			className: (0, import_classnames$13.default)("".concat(prefixCls, "-ink-bar"), _defineProperty({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
			style: indicatorStyle
		}))))), /* @__PURE__ */ import_react$25.createElement(OperationNode_default, _extends({}, props, {
			removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
			ref: operationsRef,
			prefixCls,
			tabs: hiddenTabs,
			className: !hasDropdown && operationsHiddenClassName,
			tabMoving: !!lockAnimation
		})), /* @__PURE__ */ import_react$25.createElement(ExtraContent_default, {
			ref: extraRightRef,
			position: "right",
			extra,
			prefixCls
		})));
	});
	TabNavList_default = TabNavList;
}));
var import_classnames$12, import_react$24, TabPane, TabPane_default;
var init_TabPane = __esmMin((() => {
	import_classnames$12 = /* @__PURE__ */ __toESM(require_classnames());
	import_react$24 = /* @__PURE__ */ __toESM(require_react());
	TabPane = /* @__PURE__ */ import_react$24.forwardRef(function(props, ref) {
		var prefixCls = props.prefixCls, className = props.className, style = props.style, id = props.id, active = props.active, tabKey = props.tabKey, children = props.children;
		return /* @__PURE__ */ import_react$24.createElement("div", {
			id: id && "".concat(id, "-panel-").concat(tabKey),
			role: "tabpanel",
			tabIndex: active ? 0 : -1,
			"aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
			"aria-hidden": !active,
			style,
			className: (0, import_classnames$12.default)(prefixCls, active && "".concat(prefixCls, "-active"), className),
			ref
		}, children);
	});
	TabPane_default = TabPane;
}));
var import_react$23, _excluded$7, _excluded2$1, TabNavListWrapper, Wrapper_default;
var init_Wrapper = __esmMin((() => {
	init_extends();
	init_objectSpread2();
	init_objectWithoutProperties();
	import_react$23 = /* @__PURE__ */ __toESM(require_react());
	init_TabNavList();
	init_TabContext();
	init_TabPane();
	_excluded$7 = ["renderTabBar"], _excluded2$1 = ["label", "key"];
	TabNavListWrapper = function TabNavListWrapper$1(_ref) {
		var renderTabBar = _ref.renderTabBar, restProps = _objectWithoutProperties(_ref, _excluded$7);
		var tabs = import_react$23.useContext(TabContext_default).tabs;
		if (renderTabBar) return renderTabBar(_objectSpread2(_objectSpread2({}, restProps), {}, { panes: tabs.map(function(_ref2) {
			var label = _ref2.label, key = _ref2.key, restTabProps = _objectWithoutProperties(_ref2, _excluded2$1);
			return /* @__PURE__ */ import_react$23.createElement(TabPane_default, _extends({
				tab: label,
				key,
				tabKey: key
			}, restTabProps));
		}) }), TabNavList_default);
		return /* @__PURE__ */ import_react$23.createElement(TabNavList_default, restProps);
	};
	Wrapper_default = TabNavListWrapper;
}));
var import_classnames$11, import_react$22, _excluded$6, TabPanelList, TabPanelList_default;
var init_TabPanelList = __esmMin((() => {
	init_extends();
	init_objectSpread2();
	init_objectWithoutProperties();
	init_defineProperty();
	import_classnames$11 = /* @__PURE__ */ __toESM(require_classnames());
	init_es$8();
	import_react$22 = /* @__PURE__ */ __toESM(require_react());
	init_TabContext();
	init_TabPane();
	_excluded$6 = [
		"key",
		"forceRender",
		"style",
		"className",
		"destroyInactiveTabPane"
	];
	TabPanelList = function TabPanelList$1(props) {
		var id = props.id, activeKey = props.activeKey, animated = props.animated, tabPosition = props.tabPosition, destroyInactiveTabPane = props.destroyInactiveTabPane;
		var _React$useContext = import_react$22.useContext(TabContext_default), prefixCls = _React$useContext.prefixCls, tabs = _React$useContext.tabs;
		var tabPaneAnimated = animated.tabPane;
		var tabPanePrefixCls = "".concat(prefixCls, "-tabpane");
		return /* @__PURE__ */ import_react$22.createElement("div", { className: (0, import_classnames$11.default)("".concat(prefixCls, "-content-holder")) }, /* @__PURE__ */ import_react$22.createElement("div", { className: (0, import_classnames$11.default)("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), _defineProperty({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated)) }, tabs.map(function(item) {
			var key = item.key, forceRender = item.forceRender, paneStyle = item.style, paneClassName = item.className, itemDestroyInactiveTabPane = item.destroyInactiveTabPane, restTabProps = _objectWithoutProperties(item, _excluded$6);
			var active = key === activeKey;
			return /* @__PURE__ */ import_react$22.createElement(es_default$5, _extends({
				key,
				visible: active,
				forceRender,
				removeOnLeave: !!(destroyInactiveTabPane || itemDestroyInactiveTabPane),
				leavedClassName: "".concat(tabPanePrefixCls, "-hidden")
			}, animated.tabPaneMotion), function(_ref, ref) {
				var motionStyle = _ref.style, motionClassName = _ref.className;
				return /* @__PURE__ */ import_react$22.createElement(TabPane_default, _extends({}, restTabProps, {
					prefixCls: tabPanePrefixCls,
					id,
					tabKey: key,
					animated: tabPaneAnimated,
					active,
					style: _objectSpread2(_objectSpread2({}, paneStyle), motionStyle),
					className: (0, import_classnames$11.default)(paneClassName, motionClassName),
					ref
				}));
			});
		})));
	};
	TabPanelList_default = TabPanelList;
}));
function useAnimateConfig() {
	var animated = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
		inkBar: true,
		tabPane: false
	};
	var mergedAnimated;
	if (animated === false) mergedAnimated = {
		inkBar: false,
		tabPane: false
	};
	else if (animated === true) mergedAnimated = {
		inkBar: true,
		tabPane: false
	};
	else mergedAnimated = _objectSpread2({ inkBar: true }, _typeof(animated) === "object" ? animated : {});
	if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === void 0) mergedAnimated.tabPane = true;
	if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) mergedAnimated.tabPane = false;
	return mergedAnimated;
}
var init_useAnimateConfig = __esmMin((() => {
	init_typeof();
	init_objectSpread2();
	init_warning();
}));
var import_classnames$10, import_react$20, import_react$21, _excluded$5, uuid, Tabs, Tabs_default;
var init_Tabs = __esmMin((() => {
	init_extends();
	init_defineProperty();
	init_objectSpread2();
	init_slicedToArray();
	init_typeof();
	init_objectWithoutProperties();
	import_classnames$10 = /* @__PURE__ */ __toESM(require_classnames());
	init_useMergedState();
	init_isMobile();
	import_react$20 = /* @__PURE__ */ __toESM(require_react());
	import_react$21 = /* @__PURE__ */ __toESM(require_react());
	init_TabContext();
	init_Wrapper();
	init_TabPanelList();
	init_useAnimateConfig();
	_excluded$5 = [
		"id",
		"prefixCls",
		"className",
		"items",
		"direction",
		"activeKey",
		"defaultActiveKey",
		"editable",
		"animated",
		"tabPosition",
		"tabBarGutter",
		"tabBarStyle",
		"tabBarExtraContent",
		"locale",
		"more",
		"destroyInactiveTabPane",
		"renderTabBar",
		"onChange",
		"onTabClick",
		"onTabScroll",
		"getPopupContainer",
		"popupClassName",
		"indicator"
	];
	uuid = 0;
	Tabs = /* @__PURE__ */ import_react$20.forwardRef(function(props, ref) {
		var id = props.id, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-tabs" : _props$prefixCls, className = props.className, items = props.items, direction = props.direction, activeKey = props.activeKey, defaultActiveKey = props.defaultActiveKey, editable = props.editable, animated = props.animated, _props$tabPosition = props.tabPosition, tabPosition = _props$tabPosition === void 0 ? "top" : _props$tabPosition, tabBarGutter = props.tabBarGutter, tabBarStyle = props.tabBarStyle, tabBarExtraContent = props.tabBarExtraContent, locale = props.locale, more = props.more, destroyInactiveTabPane = props.destroyInactiveTabPane, renderTabBar = props.renderTabBar, onChange = props.onChange, onTabClick = props.onTabClick, onTabScroll = props.onTabScroll, getPopupContainer = props.getPopupContainer, popupClassName = props.popupClassName, indicator = props.indicator, restProps = _objectWithoutProperties(props, _excluded$5);
		var tabs = import_react$20.useMemo(function() {
			return (items || []).filter(function(item) {
				return item && _typeof(item) === "object" && "key" in item;
			});
		}, [items]);
		var rtl = direction === "rtl";
		var mergedAnimated = useAnimateConfig(animated);
		var _useState2 = _slicedToArray((0, import_react$21.useState)(false), 2), mobile = _useState2[0], setMobile = _useState2[1];
		(0, import_react$21.useEffect)(function() {
			setMobile(isMobile_default());
		}, []);
		var _useMergedState2 = _slicedToArray(useMergedState(function() {
			var _tabs$;
			return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
		}, {
			value: activeKey,
			defaultValue: defaultActiveKey
		}), 2), mergedActiveKey = _useMergedState2[0], setMergedActiveKey = _useMergedState2[1];
		var _useState4 = _slicedToArray((0, import_react$21.useState)(function() {
			return tabs.findIndex(function(tab) {
				return tab.key === mergedActiveKey;
			});
		}), 2), activeIndex = _useState4[0], setActiveIndex = _useState4[1];
		(0, import_react$21.useEffect)(function() {
			var newActiveIndex = tabs.findIndex(function(tab) {
				return tab.key === mergedActiveKey;
			});
			if (newActiveIndex === -1) {
				var _tabs$newActiveIndex;
				newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
				setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
			}
			setActiveIndex(newActiveIndex);
		}, [
			tabs.map(function(tab) {
				return tab.key;
			}).join("_"),
			mergedActiveKey,
			activeIndex
		]);
		var _useMergedState4 = _slicedToArray(useMergedState(null, { value: id }), 2), mergedId = _useMergedState4[0], setMergedId = _useMergedState4[1];
		(0, import_react$21.useEffect)(function() {
			if (!id) {
				setMergedId("rc-tabs-".concat(uuid));
				uuid += 1;
			}
		}, []);
		function onInternalTabClick(key, e) {
			onTabClick === null || onTabClick === void 0 || onTabClick(key, e);
			var isActiveChanged = key !== mergedActiveKey;
			setMergedActiveKey(key);
			if (isActiveChanged) onChange === null || onChange === void 0 || onChange(key);
		}
		var sharedProps = {
			id: mergedId,
			activeKey: mergedActiveKey,
			animated: mergedAnimated,
			tabPosition,
			rtl,
			mobile
		};
		var tabNavBarProps = _objectSpread2(_objectSpread2({}, sharedProps), {}, {
			editable,
			locale,
			more,
			tabBarGutter,
			onTabClick: onInternalTabClick,
			onTabScroll,
			extra: tabBarExtraContent,
			style: tabBarStyle,
			panes: null,
			getPopupContainer,
			popupClassName,
			indicator
		});
		return /* @__PURE__ */ import_react$20.createElement(TabContext_default.Provider, { value: {
			tabs,
			prefixCls
		} }, /* @__PURE__ */ import_react$20.createElement("div", _extends({
			ref,
			id,
			className: (0, import_classnames$10.default)(prefixCls, "".concat(prefixCls, "-").concat(tabPosition), _defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-mobile"), mobile), "".concat(prefixCls, "-editable"), editable), "".concat(prefixCls, "-rtl"), rtl), className)
		}, restProps), /* @__PURE__ */ import_react$20.createElement(Wrapper_default, _extends({}, tabNavBarProps, { renderTabBar })), /* @__PURE__ */ import_react$20.createElement(TabPanelList_default, _extends({ destroyInactiveTabPane }, sharedProps, { animated: mergedAnimated }))));
	});
	Tabs_default = Tabs;
}));
var es_exports$3 = /* @__PURE__ */ __export({ default: () => es_default$4 }, 1);
var es_default$4;
var init_es$4 = __esmMin((() => {
	init_Tabs();
	es_default$4 = Tabs_default;
}));
function supportBigInt() {
	return typeof BigInt === "function";
}
var init_supportUtil = __esmMin((() => {}));
function isEmpty(value) {
	return !value && value !== 0 && !Number.isNaN(value) || !String(value).trim();
}
function trimNumber(numStr) {
	var str = numStr.trim();
	var negative = str.startsWith("-");
	if (negative) str = str.slice(1);
	str = str.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, "");
	if (str.startsWith(".")) str = "0".concat(str);
	var trimStr = str || "0";
	var splitNumber = trimStr.split(".");
	var integerStr = splitNumber[0] || "0";
	var decimalStr = splitNumber[1] || "0";
	if (integerStr === "0" && decimalStr === "0") negative = false;
	var negativeStr = negative ? "-" : "";
	return {
		negative,
		negativeStr,
		trimStr,
		integerStr,
		decimalStr,
		fullStr: "".concat(negativeStr).concat(trimStr)
	};
}
function isE(number) {
	var str = String(number);
	return !Number.isNaN(Number(str)) && str.includes("e");
}
function getNumberPrecision(number) {
	var numStr = String(number);
	if (isE(number)) {
		var precision = Number(numStr.slice(numStr.indexOf("e-") + 2));
		var decimalMatch = numStr.match(/\.(\d+)/);
		if (decimalMatch !== null && decimalMatch !== void 0 && decimalMatch[1]) precision += decimalMatch[1].length;
		return precision;
	}
	return numStr.includes(".") && validateNumber(numStr) ? numStr.length - numStr.indexOf(".") - 1 : 0;
}
function num2str(number) {
	var numStr = String(number);
	if (isE(number)) {
		if (number > Number.MAX_SAFE_INTEGER) return String(supportBigInt() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER);
		if (number < Number.MIN_SAFE_INTEGER) return String(supportBigInt() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER);
		numStr = number.toFixed(getNumberPrecision(numStr));
	}
	return trimNumber(numStr).fullStr;
}
function validateNumber(num) {
	if (typeof num === "number") return !Number.isNaN(num);
	if (!num) return false;
	return /^\s*-?\d+(\.\d+)?\s*$/.test(num) || /^\s*-?\d+\.\s*$/.test(num) || /^\s*-?\.\d+\s*$/.test(num);
}
var init_numberUtil$1 = __esmMin((() => {
	init_supportUtil();
}));
var BigIntDecimal;
var init_BigIntDecimal = __esmMin((() => {
	init_classCallCheck();
	init_createClass();
	init_defineProperty();
	init_numberUtil$1();
	BigIntDecimal = /* @__PURE__ */ function() {
		function BigIntDecimal$1(value) {
			_classCallCheck(this, BigIntDecimal$1);
			_defineProperty(this, "origin", "");
			_defineProperty(this, "negative", void 0);
			_defineProperty(this, "integer", void 0);
			_defineProperty(this, "decimal", void 0);
			_defineProperty(this, "decimalLen", void 0);
			_defineProperty(this, "empty", void 0);
			_defineProperty(this, "nan", void 0);
			if (isEmpty(value)) {
				this.empty = true;
				return;
			}
			this.origin = String(value);
			if (value === "-" || Number.isNaN(value)) {
				this.nan = true;
				return;
			}
			var mergedValue = value;
			if (isE(mergedValue)) mergedValue = Number(mergedValue);
			mergedValue = typeof mergedValue === "string" ? mergedValue : num2str(mergedValue);
			if (validateNumber(mergedValue)) {
				var trimRet = trimNumber(mergedValue);
				this.negative = trimRet.negative;
				var numbers = trimRet.trimStr.split(".");
				this.integer = BigInt(numbers[0]);
				var decimalStr = numbers[1] || "0";
				this.decimal = BigInt(decimalStr);
				this.decimalLen = decimalStr.length;
			} else this.nan = true;
		}
		_createClass(BigIntDecimal$1, [
			{
				key: "getMark",
				value: function getMark() {
					return this.negative ? "-" : "";
				}
			},
			{
				key: "getIntegerStr",
				value: function getIntegerStr() {
					return this.integer.toString();
				}
			},
			{
				key: "getDecimalStr",
				value: function getDecimalStr() {
					return this.decimal.toString().padStart(this.decimalLen, "0");
				}
			},
			{
				key: "alignDecimal",
				value: function alignDecimal(decimalLength) {
					var str = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(decimalLength, "0"));
					return BigInt(str);
				}
			},
			{
				key: "negate",
				value: function negate() {
					var clone = new BigIntDecimal$1(this.toString());
					clone.negative = !clone.negative;
					return clone;
				}
			},
			{
				key: "cal",
				value: function cal(offset, calculator, calDecimalLen) {
					var maxDecimalLength = Math.max(this.getDecimalStr().length, offset.getDecimalStr().length);
					var valueStr = calculator(this.alignDecimal(maxDecimalLength), offset.alignDecimal(maxDecimalLength)).toString();
					var nextDecimalLength = calDecimalLen(maxDecimalLength);
					var _trimNumber = trimNumber(valueStr), negativeStr = _trimNumber.negativeStr, trimStr = _trimNumber.trimStr;
					var hydrateValueStr = "".concat(negativeStr).concat(trimStr.padStart(nextDecimalLength + 1, "0"));
					return new BigIntDecimal$1("".concat(hydrateValueStr.slice(0, -nextDecimalLength), ".").concat(hydrateValueStr.slice(-nextDecimalLength)));
				}
			},
			{
				key: "add",
				value: function add(value) {
					if (this.isInvalidate()) return new BigIntDecimal$1(value);
					var offset = new BigIntDecimal$1(value);
					if (offset.isInvalidate()) return this;
					return this.cal(offset, function(num1, num2) {
						return num1 + num2;
					}, function(len) {
						return len;
					});
				}
			},
			{
				key: "multi",
				value: function multi(value) {
					var target = new BigIntDecimal$1(value);
					if (this.isInvalidate() || target.isInvalidate()) return new BigIntDecimal$1(NaN);
					return this.cal(target, function(num1, num2) {
						return num1 * num2;
					}, function(len) {
						return len * 2;
					});
				}
			},
			{
				key: "isEmpty",
				value: function isEmpty$1() {
					return this.empty;
				}
			},
			{
				key: "isNaN",
				value: function isNaN() {
					return this.nan;
				}
			},
			{
				key: "isInvalidate",
				value: function isInvalidate() {
					return this.isEmpty() || this.isNaN();
				}
			},
			{
				key: "equals",
				value: function equals(target) {
					return this.toString() === (target === null || target === void 0 ? void 0 : target.toString());
				}
			},
			{
				key: "lessEquals",
				value: function lessEquals(target) {
					return this.add(target.negate().toString()).toNumber() <= 0;
				}
			},
			{
				key: "toNumber",
				value: function toNumber() {
					if (this.isNaN()) return NaN;
					return Number(this.toString());
				}
			},
			{
				key: "toString",
				value: function toString() {
					if (!(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true)) return this.origin;
					if (this.isInvalidate()) return "";
					return trimNumber("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr;
				}
			}
		]);
		return BigIntDecimal$1;
	}();
}));
var NumberDecimal;
var init_NumberDecimal = __esmMin((() => {
	init_classCallCheck();
	init_createClass();
	init_defineProperty();
	init_numberUtil$1();
	NumberDecimal = /* @__PURE__ */ function() {
		function NumberDecimal$1(value) {
			_classCallCheck(this, NumberDecimal$1);
			_defineProperty(this, "origin", "");
			_defineProperty(this, "number", void 0);
			_defineProperty(this, "empty", void 0);
			if (isEmpty(value)) {
				this.empty = true;
				return;
			}
			this.origin = String(value);
			this.number = Number(value);
		}
		_createClass(NumberDecimal$1, [
			{
				key: "negate",
				value: function negate() {
					return new NumberDecimal$1(-this.toNumber());
				}
			},
			{
				key: "add",
				value: function add(value) {
					if (this.isInvalidate()) return new NumberDecimal$1(value);
					var target = Number(value);
					if (Number.isNaN(target)) return this;
					var number = this.number + target;
					if (number > Number.MAX_SAFE_INTEGER) return new NumberDecimal$1(Number.MAX_SAFE_INTEGER);
					if (number < Number.MIN_SAFE_INTEGER) return new NumberDecimal$1(Number.MIN_SAFE_INTEGER);
					var maxPrecision = Math.max(getNumberPrecision(this.number), getNumberPrecision(target));
					return new NumberDecimal$1(number.toFixed(maxPrecision));
				}
			},
			{
				key: "multi",
				value: function multi(value) {
					var target = Number(value);
					if (this.isInvalidate() || Number.isNaN(target)) return new NumberDecimal$1(NaN);
					var number = this.number * target;
					if (number > Number.MAX_SAFE_INTEGER) return new NumberDecimal$1(Number.MAX_SAFE_INTEGER);
					if (number < Number.MIN_SAFE_INTEGER) return new NumberDecimal$1(Number.MIN_SAFE_INTEGER);
					var maxPrecision = Math.max(getNumberPrecision(this.number), getNumberPrecision(target));
					return new NumberDecimal$1(number.toFixed(maxPrecision));
				}
			},
			{
				key: "isEmpty",
				value: function isEmpty$1() {
					return this.empty;
				}
			},
			{
				key: "isNaN",
				value: function isNaN() {
					return Number.isNaN(this.number);
				}
			},
			{
				key: "isInvalidate",
				value: function isInvalidate() {
					return this.isEmpty() || this.isNaN();
				}
			},
			{
				key: "equals",
				value: function equals(target) {
					return this.toNumber() === (target === null || target === void 0 ? void 0 : target.toNumber());
				}
			},
			{
				key: "lessEquals",
				value: function lessEquals(target) {
					return this.add(target.negate().toString()).toNumber() <= 0;
				}
			},
			{
				key: "toNumber",
				value: function toNumber() {
					return this.number;
				}
			},
			{
				key: "toString",
				value: function toString() {
					if (!(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true)) return this.origin;
					if (this.isInvalidate()) return "";
					return num2str(this.number);
				}
			}
		]);
		return NumberDecimal$1;
	}();
}));
function getMiniDecimal(value) {
	if (supportBigInt()) return new BigIntDecimal(value);
	return new NumberDecimal(value);
}
function toFixed(numStr, separatorStr, precision) {
	var cutOnly = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
	if (numStr === "") return "";
	var _trimNumber = trimNumber(numStr), negativeStr = _trimNumber.negativeStr, integerStr = _trimNumber.integerStr, decimalStr = _trimNumber.decimalStr;
	var precisionDecimalStr = "".concat(separatorStr).concat(decimalStr);
	var numberWithoutDecimal = "".concat(negativeStr).concat(integerStr);
	if (precision >= 0) {
		var advancedNum = Number(decimalStr[precision]);
		if (advancedNum >= 5 && !cutOnly) return toFixed(getMiniDecimal(numStr).add("".concat(negativeStr, "0.").concat("0".repeat(precision)).concat(10 - advancedNum)).toString(), separatorStr, precision, cutOnly);
		if (precision === 0) return numberWithoutDecimal;
		return "".concat(numberWithoutDecimal).concat(separatorStr).concat(decimalStr.padEnd(precision, "0").slice(0, precision));
	}
	if (precisionDecimalStr === ".0") return numberWithoutDecimal;
	return "".concat(numberWithoutDecimal).concat(precisionDecimalStr);
}
var init_MiniDecimal = __esmMin((() => {
	init_BigIntDecimal();
	init_NumberDecimal();
	init_numberUtil$1();
	init_supportUtil();
}));
var es_default$3;
var init_es$3 = __esmMin((() => {
	init_MiniDecimal();
	init_MiniDecimal();
	init_numberUtil$1();
	es_default$3 = getMiniDecimal;
}));
function proxyObject(obj, extendProps) {
	if (typeof Proxy !== "undefined" && obj) return new Proxy(obj, { get: function get(target, prop) {
		if (extendProps[prop]) return extendProps[prop];
		var originProp = target[prop];
		return typeof originProp === "function" ? originProp.bind(target) : originProp;
	} });
	return obj;
}
var init_proxyObject = __esmMin((() => {}));
function useCursor(input, focused) {
	var selectionRef = (0, import_react$19.useRef)(null);
	function recordCursor() {
		try {
			var start = input.selectionStart, end = input.selectionEnd, value = input.value;
			selectionRef.current = {
				start,
				end,
				value,
				beforeTxt: value.substring(0, start),
				afterTxt: value.substring(end)
			};
		} catch (e) {}
	}
	function restoreCursor() {
		if (input && selectionRef.current && focused) try {
			var value = input.value;
			var _selectionRef$current = selectionRef.current, beforeTxt = _selectionRef$current.beforeTxt, afterTxt = _selectionRef$current.afterTxt, start = _selectionRef$current.start;
			var startPos = value.length;
			if (value.startsWith(beforeTxt)) startPos = beforeTxt.length;
			else if (value.endsWith(afterTxt)) startPos = value.length - selectionRef.current.afterTxt.length;
			else {
				var beforeLastChar = beforeTxt[start - 1];
				var newIndex = value.indexOf(beforeLastChar, start - 1);
				if (newIndex !== -1) startPos = newIndex + 1;
			}
			input.setSelectionRange(startPos, startPos);
		} catch (e) {
			warning_default(false, "Something warning of cursor restore. Please fire issue about this: ".concat(e.message));
		}
	}
	return [recordCursor, restoreCursor];
}
var import_react$19;
var init_useCursor = __esmMin((() => {
	import_react$19 = /* @__PURE__ */ __toESM(require_react());
	init_warning();
}));
var import_react$18, useMobile, useMobile_default;
var init_useMobile = __esmMin((() => {
	init_slicedToArray();
	import_react$18 = /* @__PURE__ */ __toESM(require_react());
	init_isMobile();
	init_useLayoutEffect();
	useMobile = function useMobile$1() {
		var _useState2 = _slicedToArray((0, import_react$18.useState)(false), 2), mobile = _useState2[0], setMobile = _useState2[1];
		useLayoutEffect_default(function() {
			setMobile(isMobile_default());
		}, []);
		return mobile;
	};
	useMobile_default = useMobile;
}));
function StepHandler(_ref) {
	var prefixCls = _ref.prefixCls, upNode = _ref.upNode, downNode = _ref.downNode, upDisabled = _ref.upDisabled, downDisabled = _ref.downDisabled, onStep = _ref.onStep;
	var stepTimeoutRef = import_react$17.useRef();
	var frameIds = import_react$17.useRef([]);
	var onStepRef = import_react$17.useRef();
	onStepRef.current = onStep;
	var onStopStep = function onStopStep$1() {
		clearTimeout(stepTimeoutRef.current);
	};
	var onStepMouseDown = function onStepMouseDown$1(e, up) {
		e.preventDefault();
		onStopStep();
		onStepRef.current(up);
		function loopStep() {
			onStepRef.current(up);
			stepTimeoutRef.current = setTimeout(loopStep, STEP_INTERVAL);
		}
		stepTimeoutRef.current = setTimeout(loopStep, STEP_DELAY);
	};
	import_react$17.useEffect(function() {
		return function() {
			onStopStep();
			frameIds.current.forEach(function(id) {
				return raf_default.cancel(id);
			});
		};
	}, []);
	if (useMobile_default()) return null;
	var handlerClassName = "".concat(prefixCls, "-handler");
	var upClassName = (0, import_classnames$9.default)(handlerClassName, "".concat(handlerClassName, "-up"), _defineProperty({}, "".concat(handlerClassName, "-up-disabled"), upDisabled));
	var downClassName = (0, import_classnames$9.default)(handlerClassName, "".concat(handlerClassName, "-down"), _defineProperty({}, "".concat(handlerClassName, "-down-disabled"), downDisabled));
	var safeOnStopStep = function safeOnStopStep$1() {
		return frameIds.current.push(raf_default(onStopStep));
	};
	var sharedHandlerProps = {
		unselectable: "on",
		role: "button",
		onMouseUp: safeOnStopStep,
		onMouseLeave: safeOnStopStep
	};
	return /* @__PURE__ */ import_react$17.createElement("div", { className: "".concat(handlerClassName, "-wrap") }, /* @__PURE__ */ import_react$17.createElement("span", _extends({}, sharedHandlerProps, {
		onMouseDown: function onMouseDown(e) {
			onStepMouseDown(e, true);
		},
		"aria-label": "Increase Value",
		"aria-disabled": upDisabled,
		className: upClassName
	}), upNode || /* @__PURE__ */ import_react$17.createElement("span", {
		unselectable: "on",
		className: "".concat(prefixCls, "-handler-up-inner")
	})), /* @__PURE__ */ import_react$17.createElement("span", _extends({}, sharedHandlerProps, {
		onMouseDown: function onMouseDown(e) {
			onStepMouseDown(e, false);
		},
		"aria-label": "Decrease Value",
		"aria-disabled": downDisabled,
		className: downClassName
	}), downNode || /* @__PURE__ */ import_react$17.createElement("span", {
		unselectable: "on",
		className: "".concat(prefixCls, "-handler-down-inner")
	})));
}
var import_react$17, import_classnames$9, STEP_INTERVAL, STEP_DELAY;
var init_StepHandler = __esmMin((() => {
	init_extends();
	init_defineProperty();
	import_react$17 = /* @__PURE__ */ __toESM(require_react());
	import_classnames$9 = /* @__PURE__ */ __toESM(require_classnames());
	init_useMobile();
	init_raf();
	STEP_INTERVAL = 200;
	STEP_DELAY = 600;
}));
function getDecupleSteps(step) {
	var stepStr = typeof step === "number" ? num2str(step) : trimNumber(step).fullStr;
	if (!stepStr.includes(".")) return step + "0";
	return trimNumber(stepStr.replace(/(\d)\.(\d)/g, "$1$2.")).fullStr;
}
var init_numberUtil = __esmMin((() => {
	init_es$3();
}));
var import_react$16, useFrame_default;
var init_useFrame = __esmMin((() => {
	import_react$16 = /* @__PURE__ */ __toESM(require_react());
	init_raf();
	useFrame_default = (function() {
		var idRef = (0, import_react$16.useRef)(0);
		var cleanUp = function cleanUp$1() {
			raf_default.cancel(idRef.current);
		};
		(0, import_react$16.useEffect)(function() {
			return cleanUp;
		}, []);
		return function(callback) {
			cleanUp();
			idRef.current = raf_default(function() {
				callback();
			});
		};
	});
}));
var import_classnames$8, import_react$15, _excluded$4, _excluded2, getDecimalValue, getDecimalIfValidate, InternalInputNumber, InputNumber, InputNumber_default;
var init_InputNumber = __esmMin((() => {
	init_extends();
	init_defineProperty();
	init_typeof();
	init_slicedToArray();
	init_objectWithoutProperties();
	init_es$3();
	import_classnames$8 = /* @__PURE__ */ __toESM(require_classnames());
	init_es$9();
	init_useLayoutEffect();
	init_proxyObject();
	init_ref();
	import_react$15 = /* @__PURE__ */ __toESM(require_react());
	init_useCursor();
	init_StepHandler();
	init_numberUtil();
	init_commonUtils();
	init_useFrame();
	_excluded$4 = [
		"prefixCls",
		"className",
		"style",
		"min",
		"max",
		"step",
		"defaultValue",
		"value",
		"disabled",
		"readOnly",
		"upHandler",
		"downHandler",
		"keyboard",
		"changeOnWheel",
		"controls",
		"classNames",
		"stringMode",
		"parser",
		"formatter",
		"precision",
		"decimalSeparator",
		"onChange",
		"onInput",
		"onPressEnter",
		"onStep",
		"changeOnBlur",
		"domRef"
	], _excluded2 = [
		"disabled",
		"style",
		"prefixCls",
		"value",
		"prefix",
		"suffix",
		"addonBefore",
		"addonAfter",
		"className",
		"classNames"
	];
	getDecimalValue = function getDecimalValue$1(stringMode, decimalValue) {
		if (stringMode || decimalValue.isEmpty()) return decimalValue.toString();
		return decimalValue.toNumber();
	};
	getDecimalIfValidate = function getDecimalIfValidate$1(value) {
		var decimal = es_default$3(value);
		return decimal.isInvalidate() ? null : decimal;
	};
	InternalInputNumber = /* @__PURE__ */ import_react$15.forwardRef(function(props, ref) {
		var prefixCls = props.prefixCls, className = props.className, style = props.style, min = props.min, max = props.max, _props$step = props.step, step = _props$step === void 0 ? 1 : _props$step, defaultValue = props.defaultValue, value = props.value, disabled = props.disabled, readOnly = props.readOnly, upHandler = props.upHandler, downHandler = props.downHandler, keyboard = props.keyboard, _props$changeOnWheel = props.changeOnWheel, changeOnWheel = _props$changeOnWheel === void 0 ? false : _props$changeOnWheel, _props$controls = props.controls, controls = _props$controls === void 0 ? true : _props$controls;
		props.classNames;
		var stringMode = props.stringMode, parser = props.parser, formatter = props.formatter, precision = props.precision, decimalSeparator = props.decimalSeparator, onChange = props.onChange, onInput = props.onInput, onPressEnter = props.onPressEnter, onStep = props.onStep, _props$changeOnBlur = props.changeOnBlur, changeOnBlur = _props$changeOnBlur === void 0 ? true : _props$changeOnBlur, domRef = props.domRef, inputProps = _objectWithoutProperties(props, _excluded$4);
		var inputClassName = "".concat(prefixCls, "-input");
		var inputRef = import_react$15.useRef(null);
		var _React$useState2 = _slicedToArray(import_react$15.useState(false), 2), focus = _React$useState2[0], setFocus = _React$useState2[1];
		var userTypingRef = import_react$15.useRef(false);
		var compositionRef = import_react$15.useRef(false);
		var shiftKeyRef = import_react$15.useRef(false);
		var _React$useState4 = _slicedToArray(import_react$15.useState(function() {
			return es_default$3(value !== null && value !== void 0 ? value : defaultValue);
		}), 2), decimalValue = _React$useState4[0], setDecimalValue = _React$useState4[1];
		function setUncontrolledDecimalValue(newDecimal) {
			if (value === void 0) setDecimalValue(newDecimal);
		}
		var getPrecision = import_react$15.useCallback(function(numStr, userTyping) {
			if (userTyping) return;
			if (precision >= 0) return precision;
			return Math.max(getNumberPrecision(numStr), getNumberPrecision(step));
		}, [precision, step]);
		var mergedParser = import_react$15.useCallback(function(num) {
			var numStr = String(num);
			if (parser) return parser(numStr);
			var parsedStr = numStr;
			if (decimalSeparator) parsedStr = parsedStr.replace(decimalSeparator, ".");
			return parsedStr.replace(/[^\w.-]+/g, "");
		}, [parser, decimalSeparator]);
		var inputValueRef = import_react$15.useRef("");
		var mergedFormatter = import_react$15.useCallback(function(number, userTyping) {
			if (formatter) return formatter(number, {
				userTyping,
				input: String(inputValueRef.current)
			});
			var str = typeof number === "number" ? num2str(number) : number;
			if (!userTyping) {
				var mergedPrecision = getPrecision(str, userTyping);
				if (validateNumber(str) && (decimalSeparator || mergedPrecision >= 0)) str = toFixed(str, decimalSeparator || ".", mergedPrecision);
			}
			return str;
		}, [
			formatter,
			getPrecision,
			decimalSeparator
		]);
		var _React$useState6 = _slicedToArray(import_react$15.useState(function() {
			var initValue = defaultValue !== null && defaultValue !== void 0 ? defaultValue : value;
			if (decimalValue.isInvalidate() && ["string", "number"].includes(_typeof(initValue))) return Number.isNaN(initValue) ? "" : initValue;
			return mergedFormatter(decimalValue.toString(), false);
		}), 2), inputValue = _React$useState6[0], setInternalInputValue = _React$useState6[1];
		inputValueRef.current = inputValue;
		function setInputValue(newValue, userTyping) {
			setInternalInputValue(mergedFormatter(newValue.isInvalidate() ? newValue.toString(false) : newValue.toString(!userTyping), userTyping));
		}
		var maxDecimal = import_react$15.useMemo(function() {
			return getDecimalIfValidate(max);
		}, [max, precision]);
		var minDecimal = import_react$15.useMemo(function() {
			return getDecimalIfValidate(min);
		}, [min, precision]);
		var upDisabled = import_react$15.useMemo(function() {
			if (!maxDecimal || !decimalValue || decimalValue.isInvalidate()) return false;
			return maxDecimal.lessEquals(decimalValue);
		}, [maxDecimal, decimalValue]);
		var downDisabled = import_react$15.useMemo(function() {
			if (!minDecimal || !decimalValue || decimalValue.isInvalidate()) return false;
			return decimalValue.lessEquals(minDecimal);
		}, [minDecimal, decimalValue]);
		var _useCursor2 = _slicedToArray(useCursor(inputRef.current, focus), 2), recordCursor = _useCursor2[0], restoreCursor = _useCursor2[1];
		var getRangeValue = function getRangeValue$1(target) {
			if (maxDecimal && !target.lessEquals(maxDecimal)) return maxDecimal;
			if (minDecimal && !minDecimal.lessEquals(target)) return minDecimal;
			return null;
		};
		var isInRange = function isInRange$1(target) {
			return !getRangeValue(target);
		};
		var triggerValueUpdate = function triggerValueUpdate$1(newValue, userTyping) {
			var updateValue = newValue;
			var isRangeValidate = isInRange(updateValue) || updateValue.isEmpty();
			if (!updateValue.isEmpty() && !userTyping) {
				updateValue = getRangeValue(updateValue) || updateValue;
				isRangeValidate = true;
			}
			if (!readOnly && !disabled && isRangeValidate) {
				var numStr = updateValue.toString();
				var mergedPrecision = getPrecision(numStr, userTyping);
				if (mergedPrecision >= 0) {
					updateValue = es_default$3(toFixed(numStr, ".", mergedPrecision));
					if (!isInRange(updateValue)) updateValue = es_default$3(toFixed(numStr, ".", mergedPrecision, true));
				}
				if (!updateValue.equals(decimalValue)) {
					setUncontrolledDecimalValue(updateValue);
					onChange === null || onChange === void 0 || onChange(updateValue.isEmpty() ? null : getDecimalValue(stringMode, updateValue));
					if (value === void 0) setInputValue(updateValue, userTyping);
				}
				return updateValue;
			}
			return decimalValue;
		};
		var onNextPromise = useFrame_default();
		var collectInputValue = function collectInputValue$1(inputStr) {
			recordCursor();
			inputValueRef.current = inputStr;
			setInternalInputValue(inputStr);
			if (!compositionRef.current) {
				var finalDecimal = es_default$3(mergedParser(inputStr));
				if (!finalDecimal.isNaN()) triggerValueUpdate(finalDecimal, true);
			}
			onInput === null || onInput === void 0 || onInput(inputStr);
			onNextPromise(function() {
				var nextInputStr = inputStr;
				if (!parser) nextInputStr = inputStr.replace(/。/g, ".");
				if (nextInputStr !== inputStr) collectInputValue$1(nextInputStr);
			});
		};
		var onCompositionStart = function onCompositionStart$1() {
			compositionRef.current = true;
		};
		var onCompositionEnd = function onCompositionEnd$1() {
			compositionRef.current = false;
			collectInputValue(inputRef.current.value);
		};
		var onInternalInput = function onInternalInput$1(e) {
			collectInputValue(e.target.value);
		};
		var onInternalStep = function onInternalStep$1(up) {
			var _inputRef$current;
			if (up && upDisabled || !up && downDisabled) return;
			userTypingRef.current = false;
			var stepDecimal = es_default$3(shiftKeyRef.current ? getDecupleSteps(step) : step);
			if (!up) stepDecimal = stepDecimal.negate();
			var updatedValue = triggerValueUpdate((decimalValue || es_default$3(0)).add(stepDecimal.toString()), false);
			onStep === null || onStep === void 0 || onStep(getDecimalValue(stringMode, updatedValue), {
				offset: shiftKeyRef.current ? getDecupleSteps(step) : step,
				type: up ? "up" : "down"
			});
			(_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
		};
		var flushInputValue = function flushInputValue$1(userTyping) {
			var parsedValue = es_default$3(mergedParser(inputValue));
			var formatValue;
			if (!parsedValue.isNaN()) formatValue = triggerValueUpdate(parsedValue, userTyping);
			else formatValue = triggerValueUpdate(decimalValue, userTyping);
			if (value !== void 0) setInputValue(decimalValue, false);
			else if (!formatValue.isNaN()) setInputValue(formatValue, false);
		};
		var onBeforeInput = function onBeforeInput$1() {
			userTypingRef.current = true;
		};
		var onKeyDown = function onKeyDown$1(event) {
			var key = event.key, shiftKey = event.shiftKey;
			userTypingRef.current = true;
			shiftKeyRef.current = shiftKey;
			if (key === "Enter") {
				if (!compositionRef.current) userTypingRef.current = false;
				flushInputValue(false);
				onPressEnter === null || onPressEnter === void 0 || onPressEnter(event);
			}
			if (keyboard === false) return;
			if (!compositionRef.current && [
				"Up",
				"ArrowUp",
				"Down",
				"ArrowDown"
			].includes(key)) {
				onInternalStep(key === "Up" || key === "ArrowUp");
				event.preventDefault();
			}
		};
		var onKeyUp = function onKeyUp$1() {
			userTypingRef.current = false;
			shiftKeyRef.current = false;
		};
		import_react$15.useEffect(function() {
			if (changeOnWheel && focus) {
				var onWheel = function onWheel$1(event) {
					onInternalStep(event.deltaY < 0);
					event.preventDefault();
				};
				var input = inputRef.current;
				if (input) {
					input.addEventListener("wheel", onWheel, { passive: false });
					return function() {
						return input.removeEventListener("wheel", onWheel);
					};
				}
			}
		});
		var onBlur = function onBlur$1() {
			if (changeOnBlur) flushInputValue(false);
			setFocus(false);
			userTypingRef.current = false;
		};
		useLayoutUpdateEffect(function() {
			if (!decimalValue.isInvalidate()) setInputValue(decimalValue, false);
		}, [precision, formatter]);
		useLayoutUpdateEffect(function() {
			var newValue = es_default$3(value);
			setDecimalValue(newValue);
			var currentParsedValue = es_default$3(mergedParser(inputValue));
			if (!newValue.equals(currentParsedValue) || !userTypingRef.current || formatter) setInputValue(newValue, userTypingRef.current);
		}, [value]);
		useLayoutUpdateEffect(function() {
			if (formatter) restoreCursor();
		}, [inputValue]);
		return /* @__PURE__ */ import_react$15.createElement("div", {
			ref: domRef,
			className: (0, import_classnames$8.default)(prefixCls, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-focused"), focus), "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-readonly"), readOnly), "".concat(prefixCls, "-not-a-number"), decimalValue.isNaN()), "".concat(prefixCls, "-out-of-range"), !decimalValue.isInvalidate() && !isInRange(decimalValue))),
			style,
			onFocus: function onFocus() {
				setFocus(true);
			},
			onBlur,
			onKeyDown,
			onKeyUp,
			onCompositionStart,
			onCompositionEnd,
			onBeforeInput
		}, controls && /* @__PURE__ */ import_react$15.createElement(StepHandler, {
			prefixCls,
			upNode: upHandler,
			downNode: downHandler,
			upDisabled,
			downDisabled,
			onStep: onInternalStep
		}), /* @__PURE__ */ import_react$15.createElement("div", { className: "".concat(inputClassName, "-wrap") }, /* @__PURE__ */ import_react$15.createElement("input", _extends({
			autoComplete: "off",
			role: "spinbutton",
			"aria-valuemin": min,
			"aria-valuemax": max,
			"aria-valuenow": decimalValue.isInvalidate() ? null : decimalValue.toString(),
			step
		}, inputProps, {
			ref: composeRef(inputRef, ref),
			className: inputClassName,
			value: inputValue,
			onChange: onInternalInput,
			disabled,
			readOnly
		}))));
	});
	InputNumber = /* @__PURE__ */ import_react$15.forwardRef(function(props, ref) {
		var disabled = props.disabled, style = props.style, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-input-number" : _props$prefixCls, value = props.value, prefix = props.prefix, suffix = props.suffix, addonBefore = props.addonBefore, addonAfter = props.addonAfter, className = props.className, classNames$11 = props.classNames, rest = _objectWithoutProperties(props, _excluded2);
		var holderRef = import_react$15.useRef(null);
		var inputNumberDomRef = import_react$15.useRef(null);
		var inputFocusRef = import_react$15.useRef(null);
		var focus = function focus$1(option) {
			if (inputFocusRef.current) triggerFocus(inputFocusRef.current, option);
		};
		import_react$15.useImperativeHandle(ref, function() {
			return proxyObject(inputFocusRef.current, {
				focus,
				nativeElement: holderRef.current.nativeElement || inputNumberDomRef.current
			});
		});
		return /* @__PURE__ */ import_react$15.createElement(BaseInput_default, {
			className,
			triggerFocus: focus,
			prefixCls,
			value,
			disabled,
			style,
			prefix,
			suffix,
			addonAfter,
			addonBefore,
			classNames: classNames$11,
			components: {
				affixWrapper: "div",
				groupWrapper: "div",
				wrapper: "div",
				groupAddon: "div"
			},
			ref: holderRef
		}, /* @__PURE__ */ import_react$15.createElement(InternalInputNumber, _extends({
			prefixCls,
			disabled,
			ref: inputFocusRef,
			domRef: inputNumberDomRef,
			className: classNames$11 === null || classNames$11 === void 0 ? void 0 : classNames$11.input
		}, rest)));
	});
	InputNumber_default = InputNumber;
}));
var es_exports$2 = /* @__PURE__ */ __export({ default: () => es_default$2 }, 1);
var es_default$2;
var init_es$2 = __esmMin((() => {
	init_InputNumber();
	es_default$2 = InputNumber_default;
}));
function getOffset(value, min, max) {
	return (value - min) / (max - min);
}
function getDirectionStyle(direction, value, min, max) {
	var offset = getOffset(value, min, max);
	var positionStyle = {};
	switch (direction) {
		case "rtl":
			positionStyle.right = "".concat(offset * 100, "%");
			positionStyle.transform = "translateX(50%)";
			break;
		case "btt":
			positionStyle.bottom = "".concat(offset * 100, "%");
			positionStyle.transform = "translateY(50%)";
			break;
		case "ttb":
			positionStyle.top = "".concat(offset * 100, "%");
			positionStyle.transform = "translateY(-50%)";
			break;
		default:
			positionStyle.left = "".concat(offset * 100, "%");
			positionStyle.transform = "translateX(-50%)";
			break;
	}
	return positionStyle;
}
function getIndex(value, index) {
	return Array.isArray(value) ? value[index] : value;
}
var init_util = __esmMin((() => {}));
var import_react$14, SliderContext, context_default, UnstableContext;
var init_context = __esmMin((() => {
	import_react$14 = /* @__PURE__ */ __toESM(require_react());
	SliderContext = /* @__PURE__ */ import_react$14.createContext({
		min: 0,
		max: 0,
		direction: "ltr",
		step: 1,
		includedStart: 0,
		includedEnd: 0,
		tabIndex: 0,
		keyboard: true,
		styles: {},
		classNames: {}
	});
	context_default = SliderContext;
	UnstableContext = /* @__PURE__ */ import_react$14.createContext({});
}));
var import_classnames$7, import_react$13, _excluded$3, Handle, Handle_default;
var init_Handle = __esmMin((() => {
	init_extends();
	init_objectSpread2();
	init_defineProperty();
	init_objectWithoutProperties();
	import_classnames$7 = /* @__PURE__ */ __toESM(require_classnames());
	init_KeyCode();
	import_react$13 = /* @__PURE__ */ __toESM(require_react());
	init_context();
	init_util();
	_excluded$3 = [
		"prefixCls",
		"value",
		"valueIndex",
		"onStartMove",
		"onDelete",
		"style",
		"render",
		"dragging",
		"draggingDelete",
		"onOffsetChange",
		"onChangeComplete",
		"onFocus",
		"onMouseEnter"
	];
	Handle = /* @__PURE__ */ import_react$13.forwardRef(function(props, ref) {
		var prefixCls = props.prefixCls, value = props.value, valueIndex = props.valueIndex, onStartMove = props.onStartMove, onDelete = props.onDelete, style = props.style, render = props.render, dragging = props.dragging, draggingDelete = props.draggingDelete, onOffsetChange = props.onOffsetChange, onChangeComplete = props.onChangeComplete, onFocus = props.onFocus, onMouseEnter = props.onMouseEnter, restProps = _objectWithoutProperties(props, _excluded$3);
		var _React$useContext = import_react$13.useContext(context_default), min = _React$useContext.min, max = _React$useContext.max, direction = _React$useContext.direction, disabled = _React$useContext.disabled, keyboard = _React$useContext.keyboard, range = _React$useContext.range, tabIndex = _React$useContext.tabIndex, ariaLabelForHandle = _React$useContext.ariaLabelForHandle, ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle, ariaRequired = _React$useContext.ariaRequired, ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle, styles = _React$useContext.styles, classNames$11 = _React$useContext.classNames;
		var handlePrefixCls = "".concat(prefixCls, "-handle");
		var onInternalStartMove = function onInternalStartMove$1(e) {
			if (!disabled) onStartMove(e, valueIndex);
		};
		var onInternalFocus = function onInternalFocus$1(e) {
			onFocus === null || onFocus === void 0 || onFocus(e, valueIndex);
		};
		var onInternalMouseEnter = function onInternalMouseEnter$1(e) {
			onMouseEnter(e, valueIndex);
		};
		var onKeyDown = function onKeyDown$1(e) {
			if (!disabled && keyboard) {
				var offset = null;
				switch (e.which || e.keyCode) {
					case KeyCode_default.LEFT:
						offset = direction === "ltr" || direction === "btt" ? -1 : 1;
						break;
					case KeyCode_default.RIGHT:
						offset = direction === "ltr" || direction === "btt" ? 1 : -1;
						break;
					case KeyCode_default.UP:
						offset = direction !== "ttb" ? 1 : -1;
						break;
					case KeyCode_default.DOWN:
						offset = direction !== "ttb" ? -1 : 1;
						break;
					case KeyCode_default.HOME:
						offset = "min";
						break;
					case KeyCode_default.END:
						offset = "max";
						break;
					case KeyCode_default.PAGE_UP:
						offset = 2;
						break;
					case KeyCode_default.PAGE_DOWN:
						offset = -2;
						break;
					case KeyCode_default.BACKSPACE:
					case KeyCode_default.DELETE:
						onDelete === null || onDelete === void 0 || onDelete(valueIndex);
						break;
				}
				if (offset !== null) {
					e.preventDefault();
					onOffsetChange(offset, valueIndex);
				}
			}
		};
		var handleKeyUp = function handleKeyUp$1(e) {
			switch (e.which || e.keyCode) {
				case KeyCode_default.LEFT:
				case KeyCode_default.RIGHT:
				case KeyCode_default.UP:
				case KeyCode_default.DOWN:
				case KeyCode_default.HOME:
				case KeyCode_default.END:
				case KeyCode_default.PAGE_UP:
				case KeyCode_default.PAGE_DOWN:
					onChangeComplete === null || onChangeComplete === void 0 || onChangeComplete();
					break;
			}
		};
		var positionStyle = getDirectionStyle(direction, value, min, max);
		var divProps = {};
		if (valueIndex !== null) {
			var _getIndex;
			divProps = {
				tabIndex: disabled ? null : getIndex(tabIndex, valueIndex),
				role: "slider",
				"aria-valuemin": min,
				"aria-valuemax": max,
				"aria-valuenow": value,
				"aria-disabled": disabled,
				"aria-label": getIndex(ariaLabelForHandle, valueIndex),
				"aria-labelledby": getIndex(ariaLabelledByForHandle, valueIndex),
				"aria-required": getIndex(ariaRequired, valueIndex),
				"aria-valuetext": (_getIndex = getIndex(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0 ? void 0 : _getIndex(value),
				"aria-orientation": direction === "ltr" || direction === "rtl" ? "horizontal" : "vertical",
				onMouseDown: onInternalStartMove,
				onTouchStart: onInternalStartMove,
				onFocus: onInternalFocus,
				onMouseEnter: onInternalMouseEnter,
				onKeyDown,
				onKeyUp: handleKeyUp
			};
		}
		var handleNode = /* @__PURE__ */ import_react$13.createElement("div", _extends({
			ref,
			className: (0, import_classnames$7.default)(handlePrefixCls, _defineProperty(_defineProperty(_defineProperty({}, "".concat(handlePrefixCls, "-").concat(valueIndex + 1), valueIndex !== null && range), "".concat(handlePrefixCls, "-dragging"), dragging), "".concat(handlePrefixCls, "-dragging-delete"), draggingDelete), classNames$11.handle),
			style: _objectSpread2(_objectSpread2(_objectSpread2({}, positionStyle), style), styles.handle)
		}, divProps, restProps));
		if (render) handleNode = render(handleNode, {
			index: valueIndex,
			prefixCls,
			value,
			dragging,
			draggingDelete
		});
		return handleNode;
	});
	Handle_default = Handle;
}));
var import_react$12, import_react_dom, _excluded$2, Handles, Handles_default;
var init_Handles = __esmMin((() => {
	init_extends();
	init_objectSpread2();
	init_slicedToArray();
	init_objectWithoutProperties();
	import_react$12 = /* @__PURE__ */ __toESM(require_react());
	import_react_dom = require_react_dom();
	init_util();
	init_Handle();
	_excluded$2 = [
		"prefixCls",
		"style",
		"onStartMove",
		"onOffsetChange",
		"values",
		"handleRender",
		"activeHandleRender",
		"draggingIndex",
		"draggingDelete",
		"onFocus"
	];
	Handles = /* @__PURE__ */ import_react$12.forwardRef(function(props, ref) {
		var prefixCls = props.prefixCls, style = props.style, onStartMove = props.onStartMove, onOffsetChange = props.onOffsetChange, values = props.values, handleRender = props.handleRender, activeHandleRender = props.activeHandleRender, draggingIndex = props.draggingIndex, draggingDelete = props.draggingDelete, onFocus = props.onFocus, restProps = _objectWithoutProperties(props, _excluded$2);
		var handlesRef = import_react$12.useRef({});
		var _React$useState2 = _slicedToArray(import_react$12.useState(false), 2), activeVisible = _React$useState2[0], setActiveVisible = _React$useState2[1];
		var _React$useState4 = _slicedToArray(import_react$12.useState(-1), 2), activeIndex = _React$useState4[0], setActiveIndex = _React$useState4[1];
		var onActive = function onActive$1(index) {
			setActiveIndex(index);
			setActiveVisible(true);
		};
		var onHandleFocus = function onHandleFocus$1(e, index) {
			onActive(index);
			onFocus === null || onFocus === void 0 || onFocus(e);
		};
		var onHandleMouseEnter = function onHandleMouseEnter$1(e, index) {
			onActive(index);
		};
		import_react$12.useImperativeHandle(ref, function() {
			return {
				focus: function focus(index) {
					var _handlesRef$current$i;
					(_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 || _handlesRef$current$i.focus();
				},
				hideHelp: function hideHelp() {
					(0, import_react_dom.flushSync)(function() {
						setActiveVisible(false);
					});
				}
			};
		});
		var handleProps = _objectSpread2({
			prefixCls,
			onStartMove,
			onOffsetChange,
			render: handleRender,
			onFocus: onHandleFocus,
			onMouseEnter: onHandleMouseEnter
		}, restProps);
		return /* @__PURE__ */ import_react$12.createElement(import_react$12.Fragment, null, values.map(function(value, index) {
			var dragging = draggingIndex === index;
			return /* @__PURE__ */ import_react$12.createElement(Handle_default, _extends({
				ref: function ref$1(node) {
					if (!node) delete handlesRef.current[index];
					else handlesRef.current[index] = node;
				},
				dragging,
				draggingDelete: dragging && draggingDelete,
				style: getIndex(style, index),
				key: index,
				value,
				valueIndex: index
			}, handleProps));
		}), activeHandleRender && activeVisible && /* @__PURE__ */ import_react$12.createElement(Handle_default, _extends({ key: "a11y" }, handleProps, {
			value: values[activeIndex],
			valueIndex: null,
			dragging: draggingIndex !== -1,
			draggingDelete,
			render: activeHandleRender,
			style: { pointerEvents: "none" },
			tabIndex: null,
			"aria-hidden": true
		})));
	});
	Handles_default = Handles;
}));
var import_classnames$6, import_react$11, Mark, Mark_default;
var init_Mark = __esmMin((() => {
	init_objectSpread2();
	init_defineProperty();
	import_classnames$6 = /* @__PURE__ */ __toESM(require_classnames());
	import_react$11 = /* @__PURE__ */ __toESM(require_react());
	init_context();
	init_util();
	Mark = function Mark$1(props) {
		var prefixCls = props.prefixCls, style = props.style, children = props.children, value = props.value, _onClick = props.onClick;
		var _React$useContext = import_react$11.useContext(context_default), min = _React$useContext.min, max = _React$useContext.max, direction = _React$useContext.direction, includedStart = _React$useContext.includedStart, includedEnd = _React$useContext.includedEnd, included = _React$useContext.included;
		var textCls = "".concat(prefixCls, "-text");
		var positionStyle = getDirectionStyle(direction, value, min, max);
		return /* @__PURE__ */ import_react$11.createElement("span", {
			className: (0, import_classnames$6.default)(textCls, _defineProperty({}, "".concat(textCls, "-active"), included && includedStart <= value && value <= includedEnd)),
			style: _objectSpread2(_objectSpread2({}, positionStyle), style),
			onMouseDown: function onMouseDown(e) {
				e.stopPropagation();
			},
			onClick: function onClick() {
				_onClick(value);
			}
		}, children);
	};
	Mark_default = Mark;
}));
var import_react$10, Marks, Marks_default;
var init_Marks = __esmMin((() => {
	import_react$10 = /* @__PURE__ */ __toESM(require_react());
	init_Mark();
	Marks = function Marks$1(props) {
		var prefixCls = props.prefixCls, marks = props.marks, onClick = props.onClick;
		var markPrefixCls = "".concat(prefixCls, "-mark");
		if (!marks.length) return null;
		return /* @__PURE__ */ import_react$10.createElement("div", { className: markPrefixCls }, marks.map(function(_ref) {
			var value = _ref.value, style = _ref.style, label = _ref.label;
			return /* @__PURE__ */ import_react$10.createElement(Mark_default, {
				key: value,
				prefixCls: markPrefixCls,
				style,
				value,
				onClick
			}, label);
		}));
	};
	Marks_default = Marks;
}));
var import_classnames$5, import_react$9, Dot, Dot_default;
var init_Dot = __esmMin((() => {
	init_defineProperty();
	init_objectSpread2();
	import_classnames$5 = /* @__PURE__ */ __toESM(require_classnames());
	import_react$9 = /* @__PURE__ */ __toESM(require_react());
	init_context();
	init_util();
	Dot = function Dot$1(props) {
		var prefixCls = props.prefixCls, value = props.value, style = props.style, activeStyle = props.activeStyle;
		var _React$useContext = import_react$9.useContext(context_default), min = _React$useContext.min, max = _React$useContext.max, direction = _React$useContext.direction, included = _React$useContext.included, includedStart = _React$useContext.includedStart, includedEnd = _React$useContext.includedEnd;
		var dotClassName = "".concat(prefixCls, "-dot");
		var active = included && includedStart <= value && value <= includedEnd;
		var mergedStyle = _objectSpread2(_objectSpread2({}, getDirectionStyle(direction, value, min, max)), typeof style === "function" ? style(value) : style);
		if (active) mergedStyle = _objectSpread2(_objectSpread2({}, mergedStyle), typeof activeStyle === "function" ? activeStyle(value) : activeStyle);
		return /* @__PURE__ */ import_react$9.createElement("span", {
			className: (0, import_classnames$5.default)(dotClassName, _defineProperty({}, "".concat(dotClassName, "-active"), active)),
			style: mergedStyle
		});
	};
	Dot_default = Dot;
}));
var import_react$8, Steps$1, Steps_default$1;
var init_Steps$1 = __esmMin((() => {
	import_react$8 = /* @__PURE__ */ __toESM(require_react());
	init_context();
	init_Dot();
	Steps$1 = function Steps$2(props) {
		var prefixCls = props.prefixCls, marks = props.marks, dots = props.dots, style = props.style, activeStyle = props.activeStyle;
		var _React$useContext = import_react$8.useContext(context_default), min = _React$useContext.min, max = _React$useContext.max, step = _React$useContext.step;
		var stepDots = import_react$8.useMemo(function() {
			var dotSet = /* @__PURE__ */ new Set();
			marks.forEach(function(mark) {
				dotSet.add(mark.value);
			});
			if (dots && step !== null) {
				var current = min;
				while (current <= max) {
					dotSet.add(current);
					current += step;
				}
			}
			return Array.from(dotSet);
		}, [
			min,
			max,
			step,
			dots,
			marks
		]);
		return /* @__PURE__ */ import_react$8.createElement("div", { className: "".concat(prefixCls, "-step") }, stepDots.map(function(dotValue) {
			return /* @__PURE__ */ import_react$8.createElement(Dot_default, {
				prefixCls,
				key: dotValue,
				value: dotValue,
				style,
				activeStyle
			});
		}));
	};
	Steps_default$1 = Steps$1;
}));
var import_classnames$4, import_react$7, Track, Track_default;
var init_Track = __esmMin((() => {
	init_objectSpread2();
	init_defineProperty();
	import_classnames$4 = /* @__PURE__ */ __toESM(require_classnames());
	import_react$7 = /* @__PURE__ */ __toESM(require_react());
	init_context();
	init_util();
	Track = function Track$1(props) {
		var prefixCls = props.prefixCls, style = props.style, start = props.start, end = props.end, index = props.index, onStartMove = props.onStartMove, replaceCls = props.replaceCls;
		var _React$useContext = import_react$7.useContext(context_default), direction = _React$useContext.direction, min = _React$useContext.min, max = _React$useContext.max, disabled = _React$useContext.disabled, range = _React$useContext.range, classNames$11 = _React$useContext.classNames;
		var trackPrefixCls = "".concat(prefixCls, "-track");
		var offsetStart = getOffset(start, min, max);
		var offsetEnd = getOffset(end, min, max);
		var onInternalStartMove = function onInternalStartMove$1(e) {
			if (!disabled && onStartMove) onStartMove(e, -1);
		};
		var positionStyle = {};
		switch (direction) {
			case "rtl":
				positionStyle.right = "".concat(offsetStart * 100, "%");
				positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
				break;
			case "btt":
				positionStyle.bottom = "".concat(offsetStart * 100, "%");
				positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
				break;
			case "ttb":
				positionStyle.top = "".concat(offsetStart * 100, "%");
				positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
				break;
			default:
				positionStyle.left = "".concat(offsetStart * 100, "%");
				positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
		}
		var className = replaceCls || (0, import_classnames$4.default)(trackPrefixCls, _defineProperty(_defineProperty({}, "".concat(trackPrefixCls, "-").concat(index + 1), index !== null && range), "".concat(prefixCls, "-track-draggable"), onStartMove), classNames$11.track);
		return /* @__PURE__ */ import_react$7.createElement("div", {
			className,
			style: _objectSpread2(_objectSpread2({}, positionStyle), style),
			onMouseDown: onInternalStartMove,
			onTouchStart: onInternalStartMove
		});
	};
	Track_default = Track;
}));
var import_classnames$3, import_react$6, Tracks, Tracks_default;
var init_Tracks = __esmMin((() => {
	init_objectSpread2();
	import_classnames$3 = /* @__PURE__ */ __toESM(require_classnames());
	import_react$6 = /* @__PURE__ */ __toESM(require_react());
	init_context();
	init_util();
	init_Track();
	Tracks = function Tracks$1(props) {
		var prefixCls = props.prefixCls, style = props.style, values = props.values, startPoint = props.startPoint, onStartMove = props.onStartMove;
		var _React$useContext = import_react$6.useContext(context_default), included = _React$useContext.included, range = _React$useContext.range, min = _React$useContext.min, styles = _React$useContext.styles, classNames$11 = _React$useContext.classNames;
		var trackList = import_react$6.useMemo(function() {
			if (!range) {
				if (values.length === 0) return [];
				var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
				var endValue = values[0];
				return [{
					start: Math.min(startValue, endValue),
					end: Math.max(startValue, endValue)
				}];
			}
			var list = [];
			for (var i = 0; i < values.length - 1; i += 1) list.push({
				start: values[i],
				end: values[i + 1]
			});
			return list;
		}, [
			values,
			range,
			startPoint,
			min
		]);
		if (!included) return null;
		var tracksNode = trackList !== null && trackList !== void 0 && trackList.length && (classNames$11.tracks || styles.tracks) ? /* @__PURE__ */ import_react$6.createElement(Track_default, {
			index: null,
			prefixCls,
			start: trackList[0].start,
			end: trackList[trackList.length - 1].end,
			replaceCls: (0, import_classnames$3.default)(classNames$11.tracks, "".concat(prefixCls, "-tracks")),
			style: styles.tracks
		}) : null;
		return /* @__PURE__ */ import_react$6.createElement(import_react$6.Fragment, null, tracksNode, trackList.map(function(_ref, index) {
			var start = _ref.start, end = _ref.end;
			return /* @__PURE__ */ import_react$6.createElement(Track_default, {
				index,
				prefixCls,
				style: _objectSpread2(_objectSpread2({}, getIndex(style, index)), styles.track),
				start,
				end,
				key: index,
				onStartMove
			});
		}));
	};
	Tracks_default = Tracks;
}));
function getPosition(e) {
	var obj = "targetTouches" in e ? e.targetTouches[0] : e;
	return {
		pageX: obj.pageX,
		pageY: obj.pageY
	};
}
function useDrag(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues, editable, minCount) {
	var _React$useState2 = _slicedToArray(import_react$5.useState(null), 2), draggingValue = _React$useState2[0], setDraggingValue = _React$useState2[1];
	var _React$useState4 = _slicedToArray(import_react$5.useState(-1), 2), draggingIndex = _React$useState4[0], setDraggingIndex = _React$useState4[1];
	var _React$useState6 = _slicedToArray(import_react$5.useState(false), 2), draggingDelete = _React$useState6[0], setDraggingDelete = _React$useState6[1];
	var _React$useState8 = _slicedToArray(import_react$5.useState(rawValues), 2), cacheValues = _React$useState8[0], setCacheValues = _React$useState8[1];
	var _React$useState10 = _slicedToArray(import_react$5.useState(rawValues), 2), originValues = _React$useState10[0], setOriginValues = _React$useState10[1];
	var mouseMoveEventRef = import_react$5.useRef(null);
	var mouseUpEventRef = import_react$5.useRef(null);
	var touchEventTargetRef = import_react$5.useRef(null);
	var _React$useContext = import_react$5.useContext(UnstableContext), onDragStart = _React$useContext.onDragStart, onDragChange = _React$useContext.onDragChange;
	useLayoutEffect_default(function() {
		if (draggingIndex === -1) setCacheValues(rawValues);
	}, [rawValues, draggingIndex]);
	import_react$5.useEffect(function() {
		return function() {
			document.removeEventListener("mousemove", mouseMoveEventRef.current);
			document.removeEventListener("mouseup", mouseUpEventRef.current);
			if (touchEventTargetRef.current) {
				touchEventTargetRef.current.removeEventListener("touchmove", mouseMoveEventRef.current);
				touchEventTargetRef.current.removeEventListener("touchend", mouseUpEventRef.current);
			}
		};
	}, []);
	var flushValues = function flushValues$1(nextValues, nextValue, deleteMark) {
		if (nextValue !== void 0) setDraggingValue(nextValue);
		setCacheValues(nextValues);
		var changeValues = nextValues;
		if (deleteMark) changeValues = nextValues.filter(function(_, i) {
			return i !== draggingIndex;
		});
		triggerChange(changeValues);
		if (onDragChange) onDragChange({
			rawValues: nextValues,
			deleteIndex: deleteMark ? draggingIndex : -1,
			draggingIndex,
			draggingValue: nextValue
		});
	};
	var updateCacheValue = useEvent(function(valueIndex, offsetPercent, deleteMark) {
		if (valueIndex === -1) {
			var startValue = originValues[0];
			var endValue = originValues[originValues.length - 1];
			var maxStartOffset = min - startValue;
			var maxEndOffset = max - endValue;
			var offset = offsetPercent * (max - min);
			offset = Math.max(offset, maxStartOffset);
			offset = Math.min(offset, maxEndOffset);
			offset = formatValue(startValue + offset) - startValue;
			flushValues(originValues.map(function(val) {
				return val + offset;
			}));
		} else {
			var offsetDist = (max - min) * offsetPercent;
			var cloneValues = _toConsumableArray(cacheValues);
			cloneValues[valueIndex] = originValues[valueIndex];
			var next = offsetValues(cloneValues, offsetDist, valueIndex, "dist");
			flushValues(next.values, next.value, deleteMark);
		}
	});
	return [
		draggingIndex,
		draggingValue,
		draggingDelete,
		import_react$5.useMemo(function() {
			var sourceValues = _toConsumableArray(rawValues).sort(function(a, b) {
				return a - b;
			});
			var targetValues = _toConsumableArray(cacheValues).sort(function(a, b) {
				return a - b;
			});
			var counts = {};
			targetValues.forEach(function(val) {
				counts[val] = (counts[val] || 0) + 1;
			});
			sourceValues.forEach(function(val) {
				counts[val] = (counts[val] || 0) - 1;
			});
			var maxDiffCount = editable ? 1 : 0;
			return Object.values(counts).reduce(function(prev, next) {
				return prev + Math.abs(next);
			}, 0) <= maxDiffCount ? cacheValues : rawValues;
		}, [
			rawValues,
			cacheValues,
			editable
		]),
		function onStartMove(e, valueIndex, startValues) {
			e.stopPropagation();
			var initialValues = startValues || rawValues;
			var originValue = initialValues[valueIndex];
			setDraggingIndex(valueIndex);
			setDraggingValue(originValue);
			setOriginValues(initialValues);
			setCacheValues(initialValues);
			setDraggingDelete(false);
			var _getPosition = getPosition(e), startX = _getPosition.pageX, startY = _getPosition.pageY;
			var deleteMark = false;
			if (onDragStart) onDragStart({
				rawValues: initialValues,
				draggingIndex: valueIndex,
				draggingValue: originValue
			});
			var onMouseMove = function onMouseMove$1(event) {
				event.preventDefault();
				var _getPosition2 = getPosition(event), moveX = _getPosition2.pageX, moveY = _getPosition2.pageY;
				var offsetX = moveX - startX;
				var offsetY = moveY - startY;
				var _containerRef$current = containerRef.current.getBoundingClientRect(), width = _containerRef$current.width, height = _containerRef$current.height;
				var offSetPercent;
				var removeDist;
				switch (direction) {
					case "btt":
						offSetPercent = -offsetY / height;
						removeDist = offsetX;
						break;
					case "ttb":
						offSetPercent = offsetY / height;
						removeDist = offsetX;
						break;
					case "rtl":
						offSetPercent = -offsetX / width;
						removeDist = offsetY;
						break;
					default:
						offSetPercent = offsetX / width;
						removeDist = offsetY;
				}
				deleteMark = editable ? Math.abs(removeDist) > REMOVE_DIST && minCount < cacheValues.length : false;
				setDraggingDelete(deleteMark);
				updateCacheValue(valueIndex, offSetPercent, deleteMark);
			};
			var onMouseUp = function onMouseUp$1(event) {
				event.preventDefault();
				document.removeEventListener("mouseup", onMouseUp$1);
				document.removeEventListener("mousemove", onMouseMove);
				if (touchEventTargetRef.current) {
					touchEventTargetRef.current.removeEventListener("touchmove", mouseMoveEventRef.current);
					touchEventTargetRef.current.removeEventListener("touchend", mouseUpEventRef.current);
				}
				mouseMoveEventRef.current = null;
				mouseUpEventRef.current = null;
				touchEventTargetRef.current = null;
				finishChange(deleteMark);
				setDraggingIndex(-1);
				setDraggingDelete(false);
			};
			document.addEventListener("mouseup", onMouseUp);
			document.addEventListener("mousemove", onMouseMove);
			e.currentTarget.addEventListener("touchend", onMouseUp);
			e.currentTarget.addEventListener("touchmove", onMouseMove);
			mouseMoveEventRef.current = onMouseMove;
			mouseUpEventRef.current = onMouseUp;
			touchEventTargetRef.current = e.currentTarget;
		}
	];
}
var import_react$5, REMOVE_DIST, useDrag_default;
var init_useDrag = __esmMin((() => {
	init_toConsumableArray();
	init_slicedToArray();
	import_react$5 = /* @__PURE__ */ __toESM(require_react());
	init_useEvent();
	init_useLayoutEffect();
	init_context();
	REMOVE_DIST = 130;
	useDrag_default = useDrag;
}));
function useOffset(min, max, step, markList, allowCross, pushable) {
	var formatRangeValue = import_react$4.useCallback(function(val) {
		return Math.max(min, Math.min(max, val));
	}, [min, max]);
	var formatStepValue = import_react$4.useCallback(function(val) {
		if (step !== null) {
			var stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step;
			var getDecimal = function getDecimal$1(num) {
				return (String(num).split(".")[1] || "").length;
			};
			var maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
			var fixedValue = Number(stepValue.toFixed(maxDecimal));
			return min <= fixedValue && fixedValue <= max ? fixedValue : null;
		}
		return null;
	}, [
		step,
		min,
		max,
		formatRangeValue
	]);
	var formatValue = import_react$4.useCallback(function(val) {
		var formatNextValue = formatRangeValue(val);
		var alignValues = markList.map(function(mark) {
			return mark.value;
		});
		if (step !== null) alignValues.push(formatStepValue(val));
		alignValues.push(min, max);
		var closeValue = alignValues[0];
		var closeDist = max - min;
		alignValues.forEach(function(alignValue) {
			var dist = Math.abs(formatNextValue - alignValue);
			if (dist <= closeDist) {
				closeValue = alignValue;
				closeDist = dist;
			}
		});
		return closeValue;
	}, [
		min,
		max,
		markList,
		step,
		formatRangeValue,
		formatStepValue
	]);
	var offsetValue = function offsetValue$1(values, offset, valueIndex) {
		var mode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
		if (typeof offset === "number") {
			var nextValue;
			var originValue = values[valueIndex];
			var targetDistValue = originValue + offset;
			var potentialValues = [];
			markList.forEach(function(mark) {
				potentialValues.push(mark.value);
			});
			potentialValues.push(min, max);
			potentialValues.push(formatStepValue(originValue));
			var sign = offset > 0 ? 1 : -1;
			if (mode === "unit") potentialValues.push(formatStepValue(originValue + sign * step));
			else potentialValues.push(formatStepValue(targetDistValue));
			potentialValues = potentialValues.filter(function(val) {
				return val !== null;
			}).filter(function(val) {
				return offset < 0 ? val <= originValue : val >= originValue;
			});
			if (mode === "unit") potentialValues = potentialValues.filter(function(val) {
				return val !== originValue;
			});
			var compareValue = mode === "unit" ? originValue : targetDistValue;
			nextValue = potentialValues[0];
			var valueDist = Math.abs(nextValue - compareValue);
			potentialValues.forEach(function(potentialValue) {
				var dist = Math.abs(potentialValue - compareValue);
				if (dist < valueDist) {
					nextValue = potentialValue;
					valueDist = dist;
				}
			});
			if (nextValue === void 0) return offset < 0 ? min : max;
			if (mode === "dist") return nextValue;
			if (Math.abs(offset) > 1) {
				var cloneValues = _toConsumableArray(values);
				cloneValues[valueIndex] = nextValue;
				return offsetValue$1(cloneValues, offset - sign, valueIndex, mode);
			}
			return nextValue;
		} else if (offset === "min") return min;
		else if (offset === "max") return max;
	};
	var offsetChangedValue = function offsetChangedValue$1(values, offset, valueIndex) {
		var mode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
		var originValue = values[valueIndex];
		var nextValue = offsetValue(values, offset, valueIndex, mode);
		return {
			value: nextValue,
			changed: nextValue !== originValue
		};
	};
	var needPush = function needPush$1(dist) {
		return pushable === null && dist === 0 || typeof pushable === "number" && dist < pushable;
	};
	return [formatValue, function offsetValues(values, offset, valueIndex) {
		var mode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "unit";
		var nextValues = values.map(formatValue);
		var originValue = nextValues[valueIndex];
		nextValues[valueIndex] = offsetValue(nextValues, offset, valueIndex, mode);
		if (allowCross === false) {
			var pushNum = pushable || 0;
			if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
			if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
		} else if (typeof pushable === "number" || pushable === null) {
			for (var i = valueIndex + 1; i < nextValues.length; i += 1) {
				var changed = true;
				while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
					var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);
					nextValues[i] = _offsetChangedValue.value;
					changed = _offsetChangedValue.changed;
				}
			}
			for (var _i = valueIndex; _i > 0; _i -= 1) {
				var _changed = true;
				while (needPush(nextValues[_i] - nextValues[_i - 1]) && _changed) {
					var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);
					nextValues[_i - 1] = _offsetChangedValue2.value;
					_changed = _offsetChangedValue2.changed;
				}
			}
			for (var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1) {
				var _changed2 = true;
				while (needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2) {
					var _offsetChangedValue3 = offsetChangedValue(nextValues, -1, _i2 - 1);
					nextValues[_i2 - 1] = _offsetChangedValue3.value;
					_changed2 = _offsetChangedValue3.changed;
				}
			}
			for (var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1) {
				var _changed3 = true;
				while (needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3) {
					var _offsetChangedValue4 = offsetChangedValue(nextValues, 1, _i3 + 1);
					nextValues[_i3 + 1] = _offsetChangedValue4.value;
					_changed3 = _offsetChangedValue4.changed;
				}
			}
		}
		return {
			value: nextValues[valueIndex],
			values: nextValues
		};
	}];
}
var import_react$4;
var init_useOffset = __esmMin((() => {
	init_toConsumableArray();
	import_react$4 = /* @__PURE__ */ __toESM(require_react());
}));
function useRange(range) {
	return (0, import_react$3.useMemo)(function() {
		if (range === true || !range) return [
			!!range,
			false,
			false,
			0
		];
		var editable = range.editable, draggableTrack = range.draggableTrack, minCount = range.minCount, maxCount = range.maxCount;
		return [
			true,
			editable,
			!editable && draggableTrack,
			minCount || 0,
			maxCount
		];
	}, [range]);
}
var import_react$3;
var init_useRange = __esmMin((() => {
	init_warning();
	import_react$3 = /* @__PURE__ */ __toESM(require_react());
}));
var import_classnames$2, import_react$2, Slider, Slider_default;
var init_Slider = __esmMin((() => {
	init_objectSpread2();
	init_defineProperty();
	init_toConsumableArray();
	init_typeof();
	init_slicedToArray();
	import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames());
	init_useEvent();
	init_useMergedState();
	init_isEqual();
	init_warning();
	import_react$2 = /* @__PURE__ */ __toESM(require_react());
	init_Handles();
	init_Marks();
	init_Steps$1();
	init_Tracks();
	init_context();
	init_useDrag();
	init_useOffset();
	init_useRange();
	Slider = /* @__PURE__ */ import_react$2.forwardRef(function(props, ref) {
		var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-slider" : _props$prefixCls, className = props.className, style = props.style, classNames$11 = props.classNames, styles = props.styles, id = props.id, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$keyboard = props.keyboard, keyboard = _props$keyboard === void 0 ? true : _props$keyboard, autoFocus = props.autoFocus, onFocus = props.onFocus, onBlur = props.onBlur, _props$min = props.min, min = _props$min === void 0 ? 0 : _props$min, _props$max = props.max, max = _props$max === void 0 ? 100 : _props$max, _props$step = props.step, step = _props$step === void 0 ? 1 : _props$step, value = props.value, defaultValue = props.defaultValue, range = props.range, count = props.count, onChange = props.onChange, onBeforeChange = props.onBeforeChange, onAfterChange = props.onAfterChange, onChangeComplete = props.onChangeComplete, _props$allowCross = props.allowCross, allowCross = _props$allowCross === void 0 ? true : _props$allowCross, _props$pushable = props.pushable, pushable = _props$pushable === void 0 ? false : _props$pushable, reverse = props.reverse, vertical = props.vertical, _props$included = props.included, included = _props$included === void 0 ? true : _props$included, startPoint = props.startPoint, trackStyle = props.trackStyle, handleStyle = props.handleStyle, railStyle = props.railStyle, dotStyle = props.dotStyle, activeDotStyle = props.activeDotStyle, marks = props.marks, dots = props.dots, handleRender = props.handleRender, activeHandleRender = props.activeHandleRender, track = props.track, _props$tabIndex = props.tabIndex, tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex, ariaLabelForHandle = props.ariaLabelForHandle, ariaLabelledByForHandle = props.ariaLabelledByForHandle, ariaRequired = props.ariaRequired, ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
		var handlesRef = import_react$2.useRef(null);
		var containerRef = import_react$2.useRef(null);
		var direction = import_react$2.useMemo(function() {
			if (vertical) return reverse ? "ttb" : "btt";
			return reverse ? "rtl" : "ltr";
		}, [reverse, vertical]);
		var _useRange2 = _slicedToArray(useRange(range), 5), rangeEnabled = _useRange2[0], rangeEditable = _useRange2[1], rangeDraggableTrack = _useRange2[2], minCount = _useRange2[3], maxCount = _useRange2[4];
		var mergedMin = import_react$2.useMemo(function() {
			return isFinite(min) ? min : 0;
		}, [min]);
		var mergedMax = import_react$2.useMemo(function() {
			return isFinite(max) ? max : 100;
		}, [max]);
		var mergedStep = import_react$2.useMemo(function() {
			return step !== null && step <= 0 ? 1 : step;
		}, [step]);
		var mergedPush = import_react$2.useMemo(function() {
			if (typeof pushable === "boolean") return pushable ? mergedStep : false;
			return pushable >= 0 ? pushable : false;
		}, [pushable, mergedStep]);
		var markList = import_react$2.useMemo(function() {
			return Object.keys(marks || {}).map(function(key) {
				var mark = marks[key];
				var markObj = { value: Number(key) };
				if (mark && _typeof(mark) === "object" && !/* @__PURE__ */ import_react$2.isValidElement(mark) && ("label" in mark || "style" in mark)) {
					markObj.style = mark.style;
					markObj.label = mark.label;
				} else markObj.label = mark;
				return markObj;
			}).filter(function(_ref) {
				var label = _ref.label;
				return label || typeof label === "number";
			}).sort(function(a, b) {
				return a.value - b.value;
			});
		}, [marks]);
		var _useOffset2 = _slicedToArray(useOffset(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush), 2), formatValue = _useOffset2[0], offsetValues = _useOffset2[1];
		var _useMergedState2 = _slicedToArray(useMergedState(defaultValue, { value }), 2), mergedValue = _useMergedState2[0], setValue = _useMergedState2[1];
		var rawValues = import_react$2.useMemo(function() {
			var valueList = mergedValue === null || mergedValue === void 0 ? [] : Array.isArray(mergedValue) ? mergedValue : [mergedValue];
			var _valueList$ = _slicedToArray(valueList, 1)[0];
			var returnValues = mergedValue === null ? [] : [_valueList$ === void 0 ? mergedMin : _valueList$];
			if (rangeEnabled) {
				returnValues = _toConsumableArray(valueList);
				if (count || mergedValue === void 0) {
					var pointCount = count >= 0 ? count + 1 : 2;
					returnValues = returnValues.slice(0, pointCount);
					while (returnValues.length < pointCount) {
						var _returnValues;
						returnValues.push((_returnValues = returnValues[returnValues.length - 1]) !== null && _returnValues !== void 0 ? _returnValues : mergedMin);
					}
				}
				returnValues.sort(function(a, b) {
					return a - b;
				});
			}
			returnValues.forEach(function(val, index) {
				returnValues[index] = formatValue(val);
			});
			return returnValues;
		}, [
			mergedValue,
			rangeEnabled,
			mergedMin,
			count,
			formatValue
		]);
		var getTriggerValue = function getTriggerValue$1(triggerValues) {
			return rangeEnabled ? triggerValues : triggerValues[0];
		};
		var triggerChange = useEvent(function(nextValues) {
			var cloneNextValues = _toConsumableArray(nextValues).sort(function(a, b) {
				return a - b;
			});
			if (onChange && !isEqual_default(cloneNextValues, rawValues, true)) onChange(getTriggerValue(cloneNextValues));
			setValue(cloneNextValues);
		});
		var finishChange = useEvent(function(draggingDelete$1) {
			if (draggingDelete$1) handlesRef.current.hideHelp();
			var finishValue = getTriggerValue(rawValues);
			onAfterChange === null || onAfterChange === void 0 || onAfterChange(finishValue);
			warning_default(!onAfterChange, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead.");
			onChangeComplete === null || onChangeComplete === void 0 || onChangeComplete(finishValue);
		});
		var onDelete = function onDelete$1(index) {
			if (disabled || !rangeEditable || rawValues.length <= minCount) return;
			var cloneNextValues = _toConsumableArray(rawValues);
			cloneNextValues.splice(index, 1);
			onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(getTriggerValue(cloneNextValues));
			triggerChange(cloneNextValues);
			var nextFocusIndex = Math.max(0, index - 1);
			handlesRef.current.hideHelp();
			handlesRef.current.focus(nextFocusIndex);
		};
		var _useDrag2 = _slicedToArray(useDrag_default(containerRef, direction, rawValues, mergedMin, mergedMax, formatValue, triggerChange, finishChange, offsetValues, rangeEditable, minCount), 5), draggingIndex = _useDrag2[0], draggingValue = _useDrag2[1], draggingDelete = _useDrag2[2], cacheValues = _useDrag2[3], onStartDrag = _useDrag2[4];
		var changeToCloseValue = function changeToCloseValue$1(newValue, e) {
			if (!disabled) {
				var cloneNextValues = _toConsumableArray(rawValues);
				var valueIndex = 0;
				var valueBeforeIndex = 0;
				var valueDist = mergedMax - mergedMin;
				rawValues.forEach(function(val, index) {
					var dist = Math.abs(newValue - val);
					if (dist <= valueDist) {
						valueDist = dist;
						valueIndex = index;
					}
					if (val < newValue) valueBeforeIndex = index;
				});
				var focusIndex = valueIndex;
				if (rangeEditable && valueDist !== 0 && (!maxCount || rawValues.length < maxCount)) {
					cloneNextValues.splice(valueBeforeIndex + 1, 0, newValue);
					focusIndex = valueBeforeIndex + 1;
				} else cloneNextValues[valueIndex] = newValue;
				if (rangeEnabled && !rawValues.length && count === void 0) cloneNextValues.push(newValue);
				var nextValue = getTriggerValue(cloneNextValues);
				onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(nextValue);
				triggerChange(cloneNextValues);
				if (e) {
					var _document$activeEleme, _document$activeEleme2;
					(_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 || (_document$activeEleme2 = _document$activeEleme.blur) === null || _document$activeEleme2 === void 0 || _document$activeEleme2.call(_document$activeEleme);
					handlesRef.current.focus(focusIndex);
					onStartDrag(e, focusIndex, cloneNextValues);
				} else {
					onAfterChange === null || onAfterChange === void 0 || onAfterChange(nextValue);
					warning_default(!onAfterChange, "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead.");
					onChangeComplete === null || onChangeComplete === void 0 || onChangeComplete(nextValue);
				}
			}
		};
		var onSliderMouseDown = function onSliderMouseDown$1(e) {
			e.preventDefault();
			var _containerRef$current = containerRef.current.getBoundingClientRect(), width = _containerRef$current.width, height = _containerRef$current.height, left = _containerRef$current.left, top = _containerRef$current.top, bottom = _containerRef$current.bottom, right = _containerRef$current.right;
			var clientX = e.clientX, clientY = e.clientY;
			var percent;
			switch (direction) {
				case "btt":
					percent = (bottom - clientY) / height;
					break;
				case "ttb":
					percent = (clientY - top) / height;
					break;
				case "rtl":
					percent = (right - clientX) / width;
					break;
				default: percent = (clientX - left) / width;
			}
			changeToCloseValue(formatValue(mergedMin + percent * (mergedMax - mergedMin)), e);
		};
		var _React$useState2 = _slicedToArray(import_react$2.useState(null), 2), keyboardValue = _React$useState2[0], setKeyboardValue = _React$useState2[1];
		var onHandleOffsetChange = function onHandleOffsetChange$1(offset, valueIndex) {
			if (!disabled) {
				var next = offsetValues(rawValues, offset, valueIndex);
				onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(getTriggerValue(rawValues));
				triggerChange(next.values);
				setKeyboardValue(next.value);
			}
		};
		import_react$2.useEffect(function() {
			if (keyboardValue !== null) {
				var valueIndex = rawValues.indexOf(keyboardValue);
				if (valueIndex >= 0) handlesRef.current.focus(valueIndex);
			}
			setKeyboardValue(null);
		}, [keyboardValue]);
		var mergedDraggableTrack = import_react$2.useMemo(function() {
			if (rangeDraggableTrack && mergedStep === null) return false;
			return rangeDraggableTrack;
		}, [rangeDraggableTrack, mergedStep]);
		var onStartMove = useEvent(function(e, valueIndex) {
			onStartDrag(e, valueIndex);
			onBeforeChange === null || onBeforeChange === void 0 || onBeforeChange(getTriggerValue(rawValues));
		});
		var dragging = draggingIndex !== -1;
		import_react$2.useEffect(function() {
			if (!dragging) {
				var valueIndex = rawValues.lastIndexOf(draggingValue);
				handlesRef.current.focus(valueIndex);
			}
		}, [dragging]);
		var sortedCacheValues = import_react$2.useMemo(function() {
			return _toConsumableArray(cacheValues).sort(function(a, b) {
				return a - b;
			});
		}, [cacheValues]);
		var _React$useMemo2 = _slicedToArray(import_react$2.useMemo(function() {
			if (!rangeEnabled) return [mergedMin, sortedCacheValues[0]];
			return [sortedCacheValues[0], sortedCacheValues[sortedCacheValues.length - 1]];
		}, [
			sortedCacheValues,
			rangeEnabled,
			mergedMin
		]), 2), includedStart = _React$useMemo2[0], includedEnd = _React$useMemo2[1];
		import_react$2.useImperativeHandle(ref, function() {
			return {
				focus: function focus() {
					handlesRef.current.focus(0);
				},
				blur: function blur() {
					var _containerRef$current2;
					var activeElement = document.activeElement;
					if ((_containerRef$current2 = containerRef.current) !== null && _containerRef$current2 !== void 0 && _containerRef$current2.contains(activeElement)) activeElement === null || activeElement === void 0 || activeElement.blur();
				}
			};
		});
		import_react$2.useEffect(function() {
			if (autoFocus) handlesRef.current.focus(0);
		}, []);
		var context = import_react$2.useMemo(function() {
			return {
				min: mergedMin,
				max: mergedMax,
				direction,
				disabled,
				keyboard,
				step: mergedStep,
				included,
				includedStart,
				includedEnd,
				range: rangeEnabled,
				tabIndex,
				ariaLabelForHandle,
				ariaLabelledByForHandle,
				ariaRequired,
				ariaValueTextFormatterForHandle,
				styles: styles || {},
				classNames: classNames$11 || {}
			};
		}, [
			mergedMin,
			mergedMax,
			direction,
			disabled,
			keyboard,
			mergedStep,
			included,
			includedStart,
			includedEnd,
			rangeEnabled,
			tabIndex,
			ariaLabelForHandle,
			ariaLabelledByForHandle,
			ariaRequired,
			ariaValueTextFormatterForHandle,
			styles,
			classNames$11
		]);
		return /* @__PURE__ */ import_react$2.createElement(context_default.Provider, { value: context }, /* @__PURE__ */ import_react$2.createElement("div", {
			ref: containerRef,
			className: (0, import_classnames$2.default)(prefixCls, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-vertical"), vertical), "".concat(prefixCls, "-horizontal"), !vertical), "".concat(prefixCls, "-with-marks"), markList.length)),
			style,
			onMouseDown: onSliderMouseDown,
			id
		}, /* @__PURE__ */ import_react$2.createElement("div", {
			className: (0, import_classnames$2.default)("".concat(prefixCls, "-rail"), classNames$11 === null || classNames$11 === void 0 ? void 0 : classNames$11.rail),
			style: _objectSpread2(_objectSpread2({}, railStyle), styles === null || styles === void 0 ? void 0 : styles.rail)
		}), track !== false && /* @__PURE__ */ import_react$2.createElement(Tracks_default, {
			prefixCls,
			style: trackStyle,
			values: rawValues,
			startPoint,
			onStartMove: mergedDraggableTrack ? onStartMove : void 0
		}), /* @__PURE__ */ import_react$2.createElement(Steps_default$1, {
			prefixCls,
			marks: markList,
			dots,
			style: dotStyle,
			activeStyle: activeDotStyle
		}), /* @__PURE__ */ import_react$2.createElement(Handles_default, {
			ref: handlesRef,
			prefixCls,
			style: handleStyle,
			values: cacheValues,
			draggingIndex,
			draggingDelete,
			onStartMove,
			onOffsetChange: onHandleOffsetChange,
			onFocus,
			onBlur,
			handleRender,
			activeHandleRender,
			onChangeComplete: finishChange,
			onDelete: rangeEditable ? onDelete : void 0
		}), /* @__PURE__ */ import_react$2.createElement(Marks_default, {
			prefixCls,
			marks: markList,
			onClick: changeToCloseValue
		})));
	});
	Slider_default = Slider;
}));
var es_exports$1 = /* @__PURE__ */ __export({
	UnstableContext: () => UnstableContext,
	default: () => es_default$1
}, 1);
var es_default$1;
var init_es$1 = __esmMin((() => {
	init_Slider();
	init_context();
	es_default$1 = Slider_default;
}));
function isString(str) {
	return typeof str === "string";
}
function Step(props) {
	var _classNames2, className = props.className, prefixCls = props.prefixCls, style = props.style, active = props.active, status = props.status, iconPrefix = props.iconPrefix, icon = props.icon;
	props.wrapperStyle;
	var stepNumber = props.stepNumber, disabled = props.disabled, description = props.description, title = props.title, subTitle = props.subTitle, progressDot = props.progressDot, stepIcon = props.stepIcon, tailContent = props.tailContent, icons = props.icons, stepIndex = props.stepIndex, onStepClick = props.onStepClick, onClick = props.onClick, render = props.render, restProps = _objectWithoutProperties(props, _excluded$1);
	var clickable = !!onStepClick && !disabled;
	var accessibilityProps = {};
	if (clickable) {
		accessibilityProps.role = "button";
		accessibilityProps.tabIndex = 0;
		accessibilityProps.onClick = function(e) {
			onClick === null || onClick === void 0 || onClick(e);
			onStepClick(stepIndex);
		};
		accessibilityProps.onKeyDown = function(e) {
			var which = e.which;
			if (which === KeyCode_default.ENTER || which === KeyCode_default.SPACE) onStepClick(stepIndex);
		};
	}
	var renderIconNode = function renderIconNode$1() {
		var _classNames;
		var iconNode;
		var iconClassName = (0, import_classnames$1.default)("".concat(prefixCls, "-icon"), "".concat(iconPrefix, "icon"), (_classNames = {}, _defineProperty(_classNames, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), _defineProperty(_classNames, "".concat(iconPrefix, "icon-check"), !icon && status === "finish" && (icons && !icons.finish || !icons)), _defineProperty(_classNames, "".concat(iconPrefix, "icon-cross"), !icon && status === "error" && (icons && !icons.error || !icons)), _classNames));
		var iconDot = /* @__PURE__ */ import_react$1.createElement("span", { className: "".concat(prefixCls, "-icon-dot") });
		if (progressDot) if (typeof progressDot === "function") iconNode = /* @__PURE__ */ import_react$1.createElement("span", { className: "".concat(prefixCls, "-icon") }, progressDot(iconDot, {
			index: stepNumber - 1,
			status,
			title,
			description
		}));
		else iconNode = /* @__PURE__ */ import_react$1.createElement("span", { className: "".concat(prefixCls, "-icon") }, iconDot);
		else if (icon && !isString(icon)) iconNode = /* @__PURE__ */ import_react$1.createElement("span", { className: "".concat(prefixCls, "-icon") }, icon);
		else if (icons && icons.finish && status === "finish") iconNode = /* @__PURE__ */ import_react$1.createElement("span", { className: "".concat(prefixCls, "-icon") }, icons.finish);
		else if (icons && icons.error && status === "error") iconNode = /* @__PURE__ */ import_react$1.createElement("span", { className: "".concat(prefixCls, "-icon") }, icons.error);
		else if (icon || status === "finish" || status === "error") iconNode = /* @__PURE__ */ import_react$1.createElement("span", { className: iconClassName });
		else iconNode = /* @__PURE__ */ import_react$1.createElement("span", { className: "".concat(prefixCls, "-icon") }, stepNumber);
		if (stepIcon) iconNode = stepIcon({
			index: stepNumber - 1,
			status,
			title,
			description,
			node: iconNode
		});
		return iconNode;
	};
	var mergedStatus = status || "wait";
	var classString = (0, import_classnames$1.default)("".concat(prefixCls, "-item"), "".concat(prefixCls, "-item-").concat(mergedStatus), className, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-item-custom"), icon), _defineProperty(_classNames2, "".concat(prefixCls, "-item-active"), active), _defineProperty(_classNames2, "".concat(prefixCls, "-item-disabled"), disabled === true), _classNames2));
	var stepItemStyle = _objectSpread2({}, style);
	var stepNode = /* @__PURE__ */ import_react$1.createElement("div", _extends({}, restProps, {
		className: classString,
		style: stepItemStyle
	}), /* @__PURE__ */ import_react$1.createElement("div", _extends({ onClick }, accessibilityProps, { className: "".concat(prefixCls, "-item-container") }), /* @__PURE__ */ import_react$1.createElement("div", { className: "".concat(prefixCls, "-item-tail") }, tailContent), /* @__PURE__ */ import_react$1.createElement("div", { className: "".concat(prefixCls, "-item-icon") }, renderIconNode()), /* @__PURE__ */ import_react$1.createElement("div", { className: "".concat(prefixCls, "-item-content") }, /* @__PURE__ */ import_react$1.createElement("div", { className: "".concat(prefixCls, "-item-title") }, title, subTitle && /* @__PURE__ */ import_react$1.createElement("div", {
		title: typeof subTitle === "string" ? subTitle : void 0,
		className: "".concat(prefixCls, "-item-subtitle")
	}, subTitle)), description && /* @__PURE__ */ import_react$1.createElement("div", { className: "".concat(prefixCls, "-item-description") }, description))));
	if (render) stepNode = render(stepNode) || null;
	return stepNode;
}
var import_react$1, import_classnames$1, _excluded$1, Step_default;
var init_Step = __esmMin((() => {
	init_extends();
	init_objectSpread2();
	init_defineProperty();
	init_objectWithoutProperties();
	import_react$1 = /* @__PURE__ */ __toESM(require_react());
	import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames());
	init_KeyCode();
	_excluded$1 = [
		"className",
		"prefixCls",
		"style",
		"active",
		"status",
		"iconPrefix",
		"icon",
		"wrapperStyle",
		"stepNumber",
		"disabled",
		"description",
		"title",
		"subTitle",
		"progressDot",
		"stepIcon",
		"tailContent",
		"icons",
		"stepIndex",
		"onStepClick",
		"onClick",
		"render"
	];
	Step_default = Step;
}));
function Steps(props) {
	var _classNames, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-steps" : _props$prefixCls, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style, className = props.className;
	props.children;
	var _props$direction = props.direction, direction = _props$direction === void 0 ? "horizontal" : _props$direction, _props$type = props.type, type = _props$type === void 0 ? "default" : _props$type, _props$labelPlacement = props.labelPlacement, labelPlacement = _props$labelPlacement === void 0 ? "horizontal" : _props$labelPlacement, _props$iconPrefix = props.iconPrefix, iconPrefix = _props$iconPrefix === void 0 ? "rc" : _props$iconPrefix, _props$status = props.status, status = _props$status === void 0 ? "process" : _props$status, size = props.size, _props$current = props.current, current = _props$current === void 0 ? 0 : _props$current, _props$progressDot = props.progressDot, progressDot = _props$progressDot === void 0 ? false : _props$progressDot, stepIcon = props.stepIcon, _props$initial = props.initial, initial = _props$initial === void 0 ? 0 : _props$initial, icons = props.icons, onChange = props.onChange, itemRender = props.itemRender, _props$items = props.items, items = _props$items === void 0 ? [] : _props$items, restProps = _objectWithoutProperties(props, _excluded);
	var isNav = type === "navigation";
	var isInline = type === "inline";
	var mergedProgressDot = isInline || progressDot;
	var mergedDirection = isInline ? "horizontal" : direction;
	var mergedSize = isInline ? void 0 : size;
	var adjustedLabelPlacement = mergedProgressDot ? "vertical" : labelPlacement;
	var classString = (0, import_classnames.default)(prefixCls, "".concat(prefixCls, "-").concat(mergedDirection), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), _defineProperty(_classNames, "".concat(prefixCls, "-label-").concat(adjustedLabelPlacement), mergedDirection === "horizontal"), _defineProperty(_classNames, "".concat(prefixCls, "-dot"), !!mergedProgressDot), _defineProperty(_classNames, "".concat(prefixCls, "-navigation"), isNav), _defineProperty(_classNames, "".concat(prefixCls, "-inline"), isInline), _classNames));
	var onStepClick = function onStepClick$1(next) {
		if (onChange && current !== next) onChange(next);
	};
	return /* @__PURE__ */ import_react.createElement("div", _extends({
		className: classString,
		style
	}, restProps), items.filter(function(item) {
		return item;
	}).map(function renderStep(item, index) {
		var mergedItem = _objectSpread2({}, item);
		var stepNumber = initial + index;
		if (status === "error" && index === current - 1) mergedItem.className = "".concat(prefixCls, "-next-error");
		if (!mergedItem.status) if (stepNumber === current) mergedItem.status = status;
		else if (stepNumber < current) mergedItem.status = "finish";
		else mergedItem.status = "wait";
		if (isInline) {
			mergedItem.icon = void 0;
			mergedItem.subTitle = void 0;
		}
		if (!mergedItem.render && itemRender) mergedItem.render = function(stepItem) {
			return itemRender(mergedItem, stepItem);
		};
		return /* @__PURE__ */ import_react.createElement(Step_default, _extends({}, mergedItem, {
			active: stepNumber === current,
			stepNumber: stepNumber + 1,
			stepIndex: stepNumber,
			key: stepNumber,
			prefixCls,
			iconPrefix,
			wrapperStyle: style,
			progressDot: mergedProgressDot,
			stepIcon,
			icons,
			onStepClick: onChange && onStepClick
		}));
	}));
}
var import_classnames, import_react, _excluded, Steps_default;
var init_Steps = __esmMin((() => {
	init_extends();
	init_objectSpread2();
	init_defineProperty();
	init_objectWithoutProperties();
	import_classnames = /* @__PURE__ */ __toESM(require_classnames());
	import_react = /* @__PURE__ */ __toESM(require_react());
	init_Step();
	_excluded = [
		"prefixCls",
		"style",
		"className",
		"children",
		"direction",
		"type",
		"labelPlacement",
		"iconPrefix",
		"status",
		"size",
		"current",
		"progressDot",
		"stepIcon",
		"initial",
		"icons",
		"onChange",
		"itemRender",
		"items"
	];
	Steps.Step = Step_default;
	Steps_default = Steps;
}));
var es_exports = /* @__PURE__ */ __export({
	Step: () => Step_default,
	default: () => es_default
}, 1);
var es_default;
var init_es = __esmMin((() => {
	init_Steps();
	init_Step();
	es_default = Steps_default;
}));
export { es_exports$1 as a, es_exports$2 as c, es_exports$3 as d, init_es$4 as f, es_default$1 as i, init_es$2 as l, es_exports as n, init_es$1 as o, init_es as r, es_default$2 as s, es_default as t, es_default$4 as u };
