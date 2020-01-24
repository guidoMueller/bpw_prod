"use strict";

sap.ui.define("com/bpw/complaints/controller/dashboard/Dashboard.controller", ["sap/ui/model/json/JSONModel", "com/bpw/complaints/controller/BaseController", "com/bpw/complaints/utils/Formatter"], function (JSONModel, BaseController, Formatter) {
	"use strict";

	return BaseController.extend("com.bpw.complaints.controller.dashboard.Dashboard", {
		formatter: Formatter,
		onInit: function onInit() {
			var oJSONModel = new JSONModel();
			this.getView().setModel(oJSONModel);
			console.log("Test deployment test 5");
		},
		_loadInfoData: function _loadInfoData() {
			var model = this.getView().getModel();
			model.loadData("/apiFinTs/getAccounts");
			model.attachRequestCompleted(function () {
				var accounts = model.getData();
				sap.ui.getCore().getModel("accountModel").setData(accounts[0]);
			});
		},
		onPressAccount: function onPressAccount(oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("accountSalesIban", {
				iban: oItem.getBindingContext().getProperty("iban")
			});
		}
	});
});