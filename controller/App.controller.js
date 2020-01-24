"use strict";

sap.ui.define("com/bpw/complaints/controller/App.controller", ["sap/ui/model/json/JSONModel", "com/bpw/complaints/controller/BaseController"], function (JSONModel, BaseController) {
	"use strict";

	return BaseController.extend("com.bpw.complaints.controller.App", {
		onInit: function onInit() {
			console.log("------------tes2t 123---------------");
			var oJSONModel = new JSONModel();

			sap.ui.getCore().setModel(oJSONModel, "accountModel");

			this.getView().setModel(sap.ui.getCore().getModel("accountModel"));
		},
		onPressSideNavigationToggleButton: function onPressSideNavigationToggleButton(event) {
			console.log(this.getView().getModel().getData());
			//var oSideNavigation = this.getView().byId('sideNavigation');
			//oSideNavigation.setExpanded(!oSideNavigation.getExpanded());
			var toolPage = this.getView().byId("toolPage");
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},
		onItemSelect: function onItemSelect(oEvent) {
			var item = oEvent.getParameter("item");

			switch (item.getKey()) {
				case "dashboard":
					this.getRouter().navTo("dashboard");
					break;
				case "demo":
					this.getRouter().navTo("demo");
					break;
			}
		}
	});
});