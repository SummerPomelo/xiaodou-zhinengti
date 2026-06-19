const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dagre-KLK3FWXG-BwczPPmM.js","./dist-DmUEIdV-.js","./chunk-0ogMdkZ1.js","./chunk-PU5JKC2W-DsgUwUzE.js","./src-DIYOQHiK.js","./dayjs.min-COl7sqdH.js","./src-BWJ0aJ_q.js","./chunk-GEFDOKGD-Bf3s1IlD.js","./math-Da4CnUyp.js","./chunk-7R4GIKGN-CCYAmVmr.js","./preload-helper-BtLsJQyH.js","./purify.es-DRT0hqP1.js","./isArrayLikeObject-DANka-D4.js","./dagre-CIFlS6AS.js","./graphlib-3hukbxmH.js","./isEmpty-BipPjIfm.js","./_baseUniq-CBjkVWPI.js","./_basePickBy-Ct_iu6V2.js","./clone-CO9g6eC7.js","./chunk-KYZI473N-B6RWHSHG.js","./chunk-PQ6SQG4A-BRkagnPs.js","./chunk-YBOYWFTD--aw41N9q.js","./rough.esm-Kr0Ir7JV.js","./chunk-MX3YWQON-DXPeMFxy.js","./chunk-O4XLMI2P-Cdi5klkD.js","./line-BoHYxVdF.js","./path-CkOYPmKg.js","./array-Bkrjyfv_.js","./cose-bilkent-S5V4N54A-KVIdjKC1.js","./cytoscape.esm-CKDM1Ry6.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "./preload-helper-BtLsJQyH.js";
import { d as interpolateToCurve } from "./chunk-GEFDOKGD-Bf3s1IlD.js";
import { n as __name, r as log } from "./src-DIYOQHiK.js";
import { s as common_default, y as getConfig } from "./chunk-7R4GIKGN-CCYAmVmr.js";
import { a as insertNode, i as insertCluster, s as labelHelper } from "./chunk-KYZI473N-B6RWHSHG.js";
import { a as positionEdgeLabel, i as markers_default, n as insertEdge, r as insertEdgeLabel } from "./chunk-O4XLMI2P-Cdi5klkD.js";
var internalHelpers = {
	common: common_default,
	getConfig,
	insertCluster,
	insertEdge,
	insertEdgeLabel,
	insertMarkers: markers_default,
	insertNode,
	interpolateToCurve,
	labelHelper,
	log,
	positionEdgeLabel
};
var layoutAlgorithms = {};
var registerLayoutLoaders = /* @__PURE__ */ __name((loaders) => {
	for (const loader of loaders) layoutAlgorithms[loader.name] = loader;
}, "registerLayoutLoaders");
(/* @__PURE__ */ __name(() => {
	registerLayoutLoaders([{
		name: "dagre",
		loader: /* @__PURE__ */ __name(async () => await __vitePreload(() => import("./dagre-KLK3FWXG-BwczPPmM.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]), import.meta.url), "loader")
	}, ...[{
		name: "cose-bilkent",
		loader: /* @__PURE__ */ __name(async () => await __vitePreload(() => import("./cose-bilkent-S5V4N54A-KVIdjKC1.js"), __vite__mapDeps([28,29,4,5,2,6]), import.meta.url), "loader")
	}]]);
}, "registerDefaultLayoutLoaders"))();
var render = /* @__PURE__ */ __name(async (data4Layout, svg) => {
	if (!(data4Layout.layoutAlgorithm in layoutAlgorithms)) throw new Error(`Unknown layout algorithm: ${data4Layout.layoutAlgorithm}`);
	const layoutDefinition = layoutAlgorithms[data4Layout.layoutAlgorithm];
	return (await layoutDefinition.loader()).render(data4Layout, svg, internalHelpers, { algorithm: layoutDefinition.algorithm });
}, "render");
var getRegisteredLayoutAlgorithm = /* @__PURE__ */ __name((algorithm = "", { fallback = "dagre" } = {}) => {
	if (algorithm in layoutAlgorithms) return algorithm;
	if (fallback in layoutAlgorithms) {
		log.warn(`Layout algorithm ${algorithm} is not registered. Using ${fallback} as fallback.`);
		return fallback;
	}
	throw new Error(`Both layout algorithms ${algorithm} and ${fallback} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export { registerLayoutLoaders as n, render as r, getRegisteredLayoutAlgorithm as t };
