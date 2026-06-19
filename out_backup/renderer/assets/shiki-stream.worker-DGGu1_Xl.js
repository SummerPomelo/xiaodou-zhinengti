function WorkerWrapper(options) {
	return new Worker("" + new URL("shiki-stream.worker-D62BmsLw.js", import.meta.url).href, {
		type: "module",
		name: options?.name
	});
}
export { WorkerWrapper as default };
