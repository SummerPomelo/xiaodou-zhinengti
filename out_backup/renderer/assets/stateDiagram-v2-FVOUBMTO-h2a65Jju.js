import "./dayjs.min-COl7sqdH.js";
import "./purify.es-DRT0hqP1.js";
import "./src-BWJ0aJ_q.js";
import "./chunk-GEFDOKGD-Bf3s1IlD.js";
import { n as __name } from "./src-DIYOQHiK.js";
import "./chunk-7R4GIKGN-CCYAmVmr.js";
import "./dist-DmUEIdV-.js";
import "./chunk-PU5JKC2W-DsgUwUzE.js";
import "./chunk-MX3YWQON-DXPeMFxy.js";
import "./chunk-YBOYWFTD--aw41N9q.js";
import "./chunk-55IACEB6-D5XoR323.js";
import "./chunk-KX2RTZJC-xuizihiS.js";
import "./chunk-PQ6SQG4A-BRkagnPs.js";
import "./chunk-KYZI473N-B6RWHSHG.js";
import "./chunk-O4XLMI2P-Cdi5klkD.js";
import "./chunk-GLR3WWYH-DmZfZBbj.js";
import { i as styles_default, n as stateDiagram_default, r as stateRenderer_v3_unified_default, t as StateDB } from "./chunk-NQ4KR5QH-CDaRo9DX.js";
var diagram = {
	parser: stateDiagram_default,
	get db() {
		return new StateDB(2);
	},
	renderer: stateRenderer_v3_unified_default,
	styles: styles_default,
	init: /* @__PURE__ */ __name((cnf) => {
		if (!cnf.state) cnf.state = {};
		cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
	}, "init")
};
export { diagram };
