jQuery.sap.registerPreloadedModules({
	"name": "com.bpw.complaints.Component-preload",
	"version": "2.0",
	"modules": {
		"com/bpw/complaints/../../../../build/com/bpw/complaints/Component.js": "\"use strict\";\n\nsap.ui.define(\"com/bpw/complaints/Component\", [\"sap/ui/core/UIComponent\"], function (UIComponent) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"com.bpw.complaints.Component\", {\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\t\tinit: function init() {\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// initialize router\n\t\t\tthis.getRouter().initialize();\n\t\t}\n\t});\n});",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/control/DemoBox.js": "\"use strict\";\n\nsap.ui.define(\"com/bpw/complaints/control/DemoBox\", [\"sap/ui/core/Control\"], function (Control) {\n  \"use strict\";\n\n  return Control.extend(\"com.bpw.complaints.control.Demo\", {\n    metadata: {\n      properties: {\n        width: {\n          type: \"sap.ui.core.CSSSize\", //this is optional, but it helps prevent errors in your code by enforcing a type\n          defaultValue: \"100%\" //this is also optional, but recommended, as it prevents your properties being null\n        },\n        height: {\n          type: \"sap.ui.core.CSSSize\",\n          defaultValue: \"auto\"\n        },\n        background: {\n          type: \"sap.ui.core.CSSColor\",\n          defaultValue: \"#ffffff\"\n        },\n        margin: {\n          type: \"sap.ui.core.CSSSize\",\n          defaultValue: \"5px\"\n        }\n      },\n      aggregations: {\n        content: {\n          type: \"sap.ui.core.Control\"\n        }\n      },\n      defaultAggregation: \"content\"\n    },\n    init: function init() {\n      //initialisation code, in this case, ensure css is imported\n      var libraryPath = jQuery.sap.getModulePath(\"com.bpw.complaints.control\"); //get the server location of the ui library\n      jQuery.sap.includeStyleSheet(libraryPath + \"/DemoBox.css\"); //specify the css path relative from the ui folder\n    },\n    renderer: function renderer(oRm, oControl) {\n      //first up, render a div for the ShadowBox\n      oRm.write(\"<div\");\n      //add this controls style class (plus any additional ones the developer has specified)\n      oRm.addClass(\"demoBox\");\n      oRm.writeClasses(oControl);\n\n      //render width & height & background properties\n      oRm.write(\" style=\\\"width: \" + oControl.getWidth() + \"; height: \" + oControl.getHeight() + \"; background-color: \" + oControl.getBackground() + \"; margin: \" + oControl.getMargin() + \"\\\"\");\n\n      //next, render the control information, this handles your sId (you must do this for your control to be properly tracked by ui5).\n      oRm.writeControlData(oControl);\n      oRm.write(\">\");\n\n      //next, iterate over the content aggregation, and call the renderer for each control\n      $(oControl.getContent()).each(function () {\n        oRm.renderControl(this);\n      });\n\n      //and obviously, close off our div\n      oRm.write(\"</div>\");\n    },\n    onAfterRendering: function onAfterRendering() {\n      //if I need to do any post render actions, it will happen here\n      if (sap.ui.core.Control.prototype.onAfterRendering) {\n        sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments); //run the super class's method first\n      }\n    }\n  });\n});",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/control/Switch.js": "\"use strict\";\n\nsap.ui.define(\"com/bpw/complaints/control/Switch\", [\"sap/m/Switch\"], function (Control) {\n  \"use strict\";\n\n  return Control.extend(\"com.bpw.complaints.control.Switch\", {\n    metadata: {\n      properties: {\n        editable: {\n          type: \"boolean\",\n          defaultValue: true\n        }\n      }\n    },\n    renderer: function renderer(oRm, oControl) {\n      if (oControl.getEditable()) sap.m.SwitchRenderer.render(oRm, oControl); //use supercass renderer routine\n      else {\n          //render control as simple text\n          var txt = oControl.getState() ? oControl._sOn : oControl._sOff; //use the super classes existing variables for on/off text\n          oRm.write(\"<span tabindex=\\\"0\\\"\");\n          oRm.writeControlData(oControl); //ui5 trackings data, outputs sId, absolutely mandatory\n          oRm.writeClasses(oControl); //allows the class=\"\" attribute to work correctly\n          oRm.write(\">\");\n          oRm.write(jQuery.sap.encodeHTML(txt)); //always use encodeHTML when dealing with dynamic strings\n          oRm.write(\"</span>\");\n        }\n    },\n    _setDomState: function _setDomState(p) {\n      this.rerender();\n    },\n    ontouchstart: function ontouchstart(e) {\n      if (this.getEditable()) sap.m.Switch.prototype.ontouchstart.call(this, e);\n    },\n    ontouchmove: function ontouchmove(e) {\n      if (this.getEditable()) sap.m.Switch.prototype.ontouchmove.call(this, e);\n    },\n    ontouchend: function ontouchend(e) {\n      if (this.getEditable()) sap.m.Switch.prototype.ontouchend.call(this, e);\n    },\n    ontouchcancel: function ontouchcancel(e) {\n      if (this.getEditable()) sap.m.Switch.prototype.ontouchcancel.call(this, e);\n    },\n    onsapselect: function onsapselect(e) {\n      if (this.getEditable()) sap.m.Switch.prototype.onsapselect.call(this, e);\n    }\n  });\n});",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/controller/App.controller.js": "\"use strict\";\n\nsap.ui.define(\"com/bpw/complaints/controller/App.controller\", [\"sap/ui/model/json/JSONModel\", \"com/bpw/complaints/controller/BaseController\"], function (JSONModel, BaseController) {\n\t\"use strict\";\n\n\treturn BaseController.extend(\"com.bpw.complaints.controller.App\", {\n\t\tonInit: function onInit() {\n\t\t\tconsole.log(\"------------tes2t 123---------------\");\n\t\t\tvar oJSONModel = new JSONModel();\n\n\t\t\tsap.ui.getCore().setModel(oJSONModel, \"accountModel\");\n\n\t\t\tthis.getView().setModel(sap.ui.getCore().getModel(\"accountModel\"));\n\t\t},\n\t\tonPressSideNavigationToggleButton: function onPressSideNavigationToggleButton(event) {\n\t\t\tconsole.log(this.getView().getModel().getData());\n\t\t\t//var oSideNavigation = this.getView().byId('sideNavigation');\n\t\t\t//oSideNavigation.setExpanded(!oSideNavigation.getExpanded());\n\t\t\tvar toolPage = this.getView().byId(\"toolPage\");\n\t\t\ttoolPage.setSideExpanded(!toolPage.getSideExpanded());\n\t\t},\n\t\tonItemSelect: function onItemSelect(oEvent) {\n\t\t\tvar item = oEvent.getParameter(\"item\");\n\n\t\t\tswitch (item.getKey()) {\n\t\t\t\tcase \"dashboard\":\n\t\t\t\t\tthis.getRouter().navTo(\"dashboard\");\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"demo\":\n\t\t\t\t\tthis.getRouter().navTo(\"demo\");\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t});\n});",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/controller/BaseController.js": "\"use strict\";\n\nsap.ui.define(\"com/bpw/complaints/controller/BaseController\", [\"sap/ui/core/mvc/Controller\"], function (Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"com.bpw.complaints.controller.BaseController\", {\n\t\tgetRouter: function getRouter() {\n\t\t\treturn this.getOwnerComponent().getRouter();\n\t\t},\n\t\tgetResourceBundle: function getResourceBundle() {\n\t\t\treturn this.getOwnerComponent().getModel(\"i18n\").getResourceBundle();\n\t\t}\n\t});\n});",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/fragments/SortPopover.fragment.xml": "<core:FragmentDefinition\n        xmlns:core=\"sap.ui.core\"\n        xmlns=\"sap.m\">\n    <ResponsivePopover title=\"Options\"\n                       placement= \"Bottom\"\n                       afterOpen= \"onOpen\">\n        <content>\n            <List>\n                <items>\n                    <CustomListItem type=\"Active\" press=\"onAscending\">\n                        <HBox alignItems=\"Center\"\n                              justifyContent=\"Center\"\n                              class=\"HBoxStyle\">\n                            <Label text=\"Sort Ascending\" />\n                        </HBox>\n                    </CustomListItem>\n                    <CustomListItem type=\"Active\" press=\"onDescending\">\n                        <HBox alignItems=\"Center\"\n                              justifyContent=\"Center\"\n                              class=\"HBoxStyle\">\n                            <Label text=\"Sort Descending\" />\n                        </HBox>\n                    </CustomListItem>\n                    <CustomListItem>\n                        <HBox alignItems=\"Center\"\n                              justifyContent=\"Center\"\n                              class=\"HBoxStyle\">\n                            <Label text=\"Filter :\" />\n                            <Input width=\"90%\"\n                                   change=\"onChange\" />\n                        </HBox>\n                    </CustomListItem>\n                </items>\n            </List>\n        </content>\n    </ResponsivePopover>\n</core:FragmentDefinition>",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/utils/Formatter.js": "\"use strict\";\n\nfunction dateMapper(date) {\n\treturn moment(new Date(date)).format('L');\n}\nfunction amountMapper(amount, currency) {\n\tswitch (currency) {\n\t\tcase \"EUR\":\n\t\t\tcurrency = \"€\";\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tcurrency = \"€\";\n\n\t}\n\treturn amount + \" \" + currency;\n}\nfunction amountIn(amount, currency, isCredit, isExpense) {\n\tswitch (currency) {\n\t\tcase \"EUR\":\n\t\t\tcurrency = \"€\";\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tcurrency = \"€\";\n\n\t}\n\treturn isCredit && isExpense ? amount + \" \" + currency : \"\";\n}\nfunction amountOut(amount, currency, isCredit, isExpense) {\n\tswitch (currency) {\n\t\tcase \"EUR\":\n\t\t\tcurrency = \"€\";\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tcurrency = \"€\";\n\n\t}\n\treturn !isCredit && isExpense ? amount + \" \" + currency : \"\";\n}\n\nfunction getSaldo(value, isCredit) {\n\tconsole.log(\"getSaldo\", value, isCredit);\n\treturn isCredit ? value : \"-\" + value;\n}\nsap.ui.define(\"com/bpw/complaints/utils/Formatter\", [], function () {\n\t\"use strict\";\n\n\treturn { dateMapper: dateMapper, amountMapper: amountMapper, amountIn: amountIn, amountOut: amountOut, getSaldo: getSaldo };\n});",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/utils/InitPage.js": "\"use strict\";\n\nfunction initPageSettings(oView) {\n\t// Hide Settings Panel for phone\n\tif (sap.ui.Device.system.phone) {\n\t\tvar oSettingsPanel = oView.byId('settingsPanel');\n\t\tif (oSettingsPanel) {\n\t\t\toSettingsPanel.setExpanded(false);\n\t\t}\n\t}\n\n\t// try to load sap.suite.ui.commons for using ChartContainer\n\t// sap.suite.ui.commons is available in sapui5-sdk-dist but not in demokit\n\tvar libraries = sap.ui.getVersionInfo().libraries || [];\n\tvar bSuiteAvailable = libraries.some(function (lib) {\n\t\treturn lib.name.indexOf(\"sap.suite.ui.commons\") > -1;\n\t});\n\tif (bSuiteAvailable) {\n\t\tjQuery.sap.require(\"sap/suite/ui/commons/ChartContainer\");\n\t\tvar vizframe = oView.byId(\"idVizFrame\");\n\t\tvar oChartContainerContent = new sap.suite.ui.commons.ChartContainerContent({\n\t\t\ticon: \"sap-icon://line-chart-time-axis\",\n\t\t\ttitle: \"vizFrame Line Chart Sample\",\n\t\t\tcontent: [vizframe]\n\t\t});\n\t\tvar oChartContainer = new sap.suite.ui.commons.ChartContainer({\n\t\t\tcontent: [oChartContainerContent]\n\t\t});\n\t\toChartContainer.setShowFullScreen(true);\n\t\toChartContainer.setAutoAdjustHeight(true);\n\t\toView.byId('chartFixFlex').setFlexContent(oChartContainer);\n\t}\n}\n\nsap.ui.define(\"com/bpw/complaints/utils/InitPage\", [], function () {\n\t\"use strict\";\n\n\treturn { initPageSettings: initPageSettings };\n});",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/view/App.view.xml": "<mvc:View\n\txmlns:mvc=\"sap.ui.core.mvc\"\n\txmlns=\"sap.m\"\n\txmlns:tnt=\"sap.tnt\"\n\txmlns:core=\"sap.ui.core\"\n\theight=\"100%\"\n\tdisplayBlock=\"true\"\n\tcontrollerName=\"com.bpw.complaints.controller.App\">\n\t<App>\n\t\t<pages>\n\t\t\t<tnt:ToolPage id=\"toolPage\">\n\t\t\t\t<tnt:header>\n\t\t\t\t\t<tnt:ToolHeader>\n\t\t\t\t\t\t<Button icon=\"sap-icon://menu2\" press=\"onPressSideNavigationToggleButton\" type=\"transparent\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<OverflowToolbarLayoutData priority=\"NeverOverflow\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t<ToolbarSpacer width=\"40%\"/>\n\t\t\t\t\t\t<Text text=\"{i18n>appTitle}\"></Text>\n\t\t\t\t\t\t<ToolbarSpacer width=\"40%\"/>\n\t\t\t\t\t\t<Text text=\"{/accountOwnerName}\"></Text>\n\t\t\t\t\t</tnt:ToolHeader>\n\t\t\t\t</tnt:header>\n\n\t\t\t\t<tnt:sideContent>\n\t\t\t\t\t<tnt:SideNavigation id=\"sideNavigation\" itemSelect=\"onItemSelect\">\n\t\t\t\t\t\t<tnt:item>\n\t\t\t\t\t\t\t<tnt:NavigationList>\n\t\t\t\t\t\t\t\t<tnt:NavigationListItem key=\"dashboard\" text=\"{i18n>dashboardTitle}\" icon=\"sap-icon://capital-projects\">\n\t\t\t\t\t\t\t\t</tnt:NavigationListItem>\n\t\t\t\t\t\t\t\t<tnt:NavigationListItem key=\"demo\" text=\"{i18n>demoTitle}\" icon=\"sap-icon://capital-projects\">\n\t\t\t\t\t\t\t\t</tnt:NavigationListItem>\n\t\t\t\t\t\t\t</tnt:NavigationList>\n\t\t\t\t\t\t</tnt:item>\n\t\t\t\t\t</tnt:SideNavigation>\n\t\t\t\t</tnt:sideContent>\n\t\t\t\t<tnt:mainContents>\n\t\t\t\t\t<NavContainer id=\"navContainer\">\n\t\t\t\t\t</NavContainer>\n\t\t\t\t</tnt:mainContents>\n\t\t\t</tnt:ToolPage>\n\t\t</pages>\n\t</App>\n</mvc:View>\n",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/controller/dashboard/Dashboard.controller.js": "\"use strict\";\n\nsap.ui.define(\"com/bpw/complaints/controller/dashboard/Dashboard.controller\", [\"sap/ui/model/json/JSONModel\", \"com/bpw/complaints/controller/BaseController\", \"com/bpw/complaints/utils/Formatter\"], function (JSONModel, BaseController, Formatter) {\n\t\"use strict\";\n\n\treturn BaseController.extend(\"com.bpw.complaints.controller.dashboard.Dashboard\", {\n\t\tformatter: Formatter,\n\t\tonInit: function onInit() {\n\t\t\tvar oJSONModel = new JSONModel();\n\t\t\tthis.getView().setModel(oJSONModel);\n\t\t\tconsole.log(\"Test deployment test 5\");\n\t\t},\n\t\t_loadInfoData: function _loadInfoData() {\n\t\t\tvar model = this.getView().getModel();\n\t\t\tmodel.loadData(\"/apiFinTs/getAccounts\");\n\t\t\tmodel.attachRequestCompleted(function () {\n\t\t\t\tvar accounts = model.getData();\n\t\t\t\tsap.ui.getCore().getModel(\"accountModel\").setData(accounts[0]);\n\t\t\t});\n\t\t},\n\t\tonPressAccount: function onPressAccount(oEvent) {\n\t\t\tvar oItem = oEvent.getSource();\n\t\t\tvar oRouter = sap.ui.core.UIComponent.getRouterFor(this);\n\t\t\toRouter.navTo(\"accountSalesIban\", {\n\t\t\t\tiban: oItem.getBindingContext().getProperty(\"iban\")\n\t\t\t});\n\t\t}\n\t});\n});",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/controller/demo/Demo.controller.js": "\"use strict\";\n\nsap.ui.define(\"com/bpw/complaints/controller/demo/Demo.controller\", [\"sap/ui/model/odata/v2/ODataModel\", \"com/bpw/complaints/controller/BaseController\", \"com/bpw/complaints/utils/Formatter\"], function (ODataModel, BaseController, Formatter) {\n  \"use strict\";\n\n  return BaseController.extend(\"com.bpw.complaints.controller.demo.Demo\", {\n    formatter: Formatter,\n    onInit: function onInit() {\n      var sServiceUrl = '/odata/service.svc';\n      var oModel = new ODataModel(sServiceUrl, {\n        json: false,\n        useBatch: false\n      });\n      this.getView().setModel(oModel);\n    }\n  });\n});",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/view/dashboard/Dashboard.view.xml": "<mvc:View\n\txmlns:mvc=\"sap.ui.core.mvc\"\n\txmlns=\"sap.m\"\n\tcontrollerName=\"com.bpw.complaints.controller.dashboard.Dashboard\"\n\txmlns:bpwControls=\"com.bpw.complaints.control\">\n\n    <Page showHeader=\"false\">\n        <content>\n\t\t\t<bpwControls:DemoBox width=\"200px\">\n\t\t\t\t<Label text=\"Well well well test\" />\n\t\t\t\t<Input value=\"we have a container\" />\n\t\t\t\t<bpwControls:Switch state=\"true\"\n\t\t\t\t\t\t\t\t\tcustomTextOn=\"Yes\"\n\t\t\t\t\t\t\t\t\tcustomTextOff=\"No\"\n\t\t\t\t\t\t\t\t\teditable=\"true\"/>\n\t\t\t</bpwControls:DemoBox>\n        </content>\n    </Page>\n</mvc:View>\n",
		"com/bpw/complaints/../../../../build/com/bpw/complaints/view/demo/Demo.view.xml": "<mvc:View\n        xmlns=\"sap.ui.table\"\n        xmlns:mvc=\"sap.ui.core.mvc\"\n        xmlns:u=\"sap.ui.unified\"\n        xmlns:c=\"sap.ui.core\"\n        xmlns:m=\"sap.m\"\n        height=\"100%\"\n        controllerName=\"com.bpw.complaints.controller.demo.Demo\">\n\n    <m:Page\n            showHeader=\"false\"\n            enableScrolling=\"false\"\n            class=\"sapUiContentPadding\">\n        <m:content>\n            <Table\n                    rows=\"{/Employees}\"\n                    selectionMode=\"MultiToggle\"\n                    visibleRowCount=\"7\"\n                    paste=\"onPaste\">\n                <extension>\n                    <m:OverflowToolbar>\n                        <m:Title id=\"title\" text=\"Products\"/>\n                    </m:OverflowToolbar>\n                </extension>\n                <columns>\n                    <Column width=\"11rem\">\n                        <m:Label text=\"LastName\" />\n                        <template>\n                            <m:Text text=\"{LastName}\" wrapping=\"false\" />\n                        </template>\n                    </Column>\n                    <Column width=\"11rem\">\n                        <m:Label text=\"FirstName\" />\n                        <template>\n                            <m:Input value=\"{FirstName}\"/>\n\n                        </template>\n                    </Column>\n                </columns>\n            </Table>\n        </m:content>\n    </m:Page>\n</mvc:View>\n"
	}
});