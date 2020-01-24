"use strict";

sap.ui.define("com/bpw/complaints/controller/BaseController", ["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("com.bpw.complaints.controller.BaseController", {
		getRouter: function getRouter() {
			return this.getOwnerComponent().getRouter();
		},
		getResourceBundle: function getResourceBundle() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		}
	});
});