import "./dayjs.min-COl7sqdH.js";
import "./purify.es-DRT0hqP1.js";
import "./src-BWJ0aJ_q.js";
import "./chunk-XZSTWKYB-DzxoZ3VK.js";
import "./chunk-R5LLSJPH-gheJzJzg.js";
import "./chunk-7E7YKBS2-DoMoeuQ4.js";
import "./chunk-EGIJ26TM-BIjBEme0.js";
import "./chunk-C72U2L5F-dBJOt_Mj.js";
import "./chunk-XIRO2GV7-BGU9IdHS.js";
import "./chunk-L3YUKLVL-RVCy7BMY.js";
import "./chunk-OZEHJAEY-C8pjJ-QL.js";
import { n as __name, r as log } from "./src-DIYOQHiK.js";
import { c as configureSvgSize } from "./chunk-7R4GIKGN-CCYAmVmr.js";
import { t as selectSvgElement } from "./chunk-HHEYEP7N-DyspKPPO.js";
import { t as parse } from "./mermaid-parser.core-OZ7f0jIo.js";
var parser = { parse: /* @__PURE__ */ __name(async (input) => {
	const ast = await parse("info", input);
	log.debug(ast);
}, "parse") };
var DEFAULT_INFO_DB = { version: "11.13.0" };
var diagram = {
	parser,
	db: { getVersion: /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ __name((text, id, version) => {
		log.debug("rendering info diagram\n" + text);
		const svg = selectSvgElement(id);
		configureSvgSize(svg, 100, 400, true);
		svg.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
	}, "draw") }
};
export { diagram };
