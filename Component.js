"use strict";

sap.ui.define("com/bpw/complaints/Component", ["sap/ui/core/UIComponent"], function (UIComponent) {
	"use strict";

	return UIComponent.extend("com.bpw.complaints.Component", {
		metadata: {
			manifest: "json"
		},
		init: function init() {
			UIComponent.prototype.init.apply(this, arguments);

			// initialize router
			this.getRouter().initialize();
		}
	});
});