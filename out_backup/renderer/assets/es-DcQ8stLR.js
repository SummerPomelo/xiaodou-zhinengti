import { Hi as unstableSetRender } from "./ImageViewer-uT4rjMQ4.js";
import { t as require_client } from "./client-CKxnAq0r.js";
var import_client = require_client();
unstableSetRender(function(node, container) {
	container._reactRoot || (container._reactRoot = (0, import_client.createRoot)(container));
	var root = container._reactRoot;
	root.render(node);
	return function() {
		return new Promise(function(resolve) {
			setTimeout(function() {
				root.unmount();
				resolve();
			}, 0);
		});
	};
});
