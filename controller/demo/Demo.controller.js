"use strict";

sap.ui.define("com/bpw/complaints/controller/demo/Demo.controller", ["sap/ui/model/odata/v2/ODataModel", "com/bpw/complaints/controller/BaseController", "com/bpw/complaints/utils/Formatter"], function (ODataModel, BaseController, Formatter) {
  "use strict";

  return BaseController.extend("com.bpw.complaints.controller.demo.Demo", {
    formatter: Formatter,
    onInit: function onInit() {
      var sServiceUrl = '/odata/service.svc';
      var oModel = new ODataModel(sServiceUrl, {
        json: false,
        useBatch: false
      });
      this.getView().setModel(oModel);
    }
  });
});