"use strict";

sap.ui.define("com/bpw/complaints/control/Switch", ["sap/m/Switch"], function (Control) {
  "use strict";

  return Control.extend("com.bpw.complaints.control.Switch", {
    metadata: {
      properties: {
        editable: {
          type: "boolean",
          defaultValue: true
        }
      }
    },
    renderer: function renderer(oRm, oControl) {
      if (oControl.getEditable()) sap.m.SwitchRenderer.render(oRm, oControl); //use supercass renderer routine
      else {
          //render control as simple text
          var txt = oControl.getState() ? oControl._sOn : oControl._sOff; //use the super classes existing variables for on/off text
          oRm.write("<span tabindex=\"0\"");
          oRm.writeControlData(oControl); //ui5 trackings data, outputs sId, absolutely mandatory
          oRm.writeClasses(oControl); //allows the class="" attribute to work correctly
          oRm.write(">");
          oRm.write(jQuery.sap.encodeHTML(txt)); //always use encodeHTML when dealing with dynamic strings
          oRm.write("</span>");
        }
    },
    _setDomState: function _setDomState(p) {
      this.rerender();
    },
    ontouchstart: function ontouchstart(e) {
      if (this.getEditable()) sap.m.Switch.prototype.ontouchstart.call(this, e);
    },
    ontouchmove: function ontouchmove(e) {
      if (this.getEditable()) sap.m.Switch.prototype.ontouchmove.call(this, e);
    },
    ontouchend: function ontouchend(e) {
      if (this.getEditable()) sap.m.Switch.prototype.ontouchend.call(this, e);
    },
    ontouchcancel: function ontouchcancel(e) {
      if (this.getEditable()) sap.m.Switch.prototype.ontouchcancel.call(this, e);
    },
    onsapselect: function onsapselect(e) {
      if (this.getEditable()) sap.m.Switch.prototype.onsapselect.call(this, e);
    }
  });
});