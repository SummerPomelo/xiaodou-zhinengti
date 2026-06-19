import { _ as setSelectionEnabled, c as setActionItems, d as setFilterMode, f as setIsAutoClose, g as setIsRemeberWinSize, h as setIsFollowToolbar, i as useAppSelector, l as setActionWindowOpacity, m as setIsCompact, p as setIsAutoPin, r as useAppDispatch, u as setFilterList, v as setTriggerMode } from "./store-Dxt9V8vr.js";
function useSelectionAssistant() {
	const dispatch = useAppDispatch();
	return {
		...useAppSelector((state) => state.selectionStore),
		setSelectionEnabled: (enabled) => {
			dispatch(setSelectionEnabled(enabled));
			window.api.selection.setEnabled(enabled);
		},
		setTriggerMode: (mode) => {
			dispatch(setTriggerMode(mode));
			window.api.selection.setTriggerMode(mode);
		},
		setIsCompact: (isCompact) => {
			dispatch(setIsCompact(isCompact));
		},
		setIsAutoClose: (isAutoClose) => {
			dispatch(setIsAutoClose(isAutoClose));
		},
		setIsAutoPin: (isAutoPin) => {
			dispatch(setIsAutoPin(isAutoPin));
		},
		setIsFollowToolbar: (isFollowToolbar) => {
			dispatch(setIsFollowToolbar(isFollowToolbar));
			window.api.selection.setFollowToolbar(isFollowToolbar);
		},
		setIsRemeberWinSize: (isRemeberWinSize) => {
			dispatch(setIsRemeberWinSize(isRemeberWinSize));
			window.api.selection.setRemeberWinSize(isRemeberWinSize);
		},
		setFilterMode: (mode) => {
			dispatch(setFilterMode(mode));
			window.api.selection.setFilterMode(mode);
		},
		setFilterList: (list) => {
			dispatch(setFilterList(list));
			window.api.selection.setFilterList(list);
		},
		setActionWindowOpacity: (opacity) => {
			dispatch(setActionWindowOpacity(opacity));
		},
		setActionItems: (items) => {
			dispatch(setActionItems(items));
		}
	};
}
export { useSelectionAssistant as t };
