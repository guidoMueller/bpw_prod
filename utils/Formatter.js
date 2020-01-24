"use strict";

function dateMapper(date) {
	return moment(new Date(date)).format('L');
}
function amountMapper(amount, currency) {
	switch (currency) {
		case "EUR":
			currency = "€";
			break;
		default:
			currency = "€";

	}
	return amount + " " + currency;
}
function amountIn(amount, currency, isCredit, isExpense) {
	switch (currency) {
		case "EUR":
			currency = "€";
			break;
		default:
			currency = "€";

	}
	return isCredit && isExpense ? amount + " " + currency : "";
}
function amountOut(amount, currency, isCredit, isExpense) {
	switch (currency) {
		case "EUR":
			currency = "€";
			break;
		default:
			currency = "€";

	}
	return !isCredit && isExpense ? amount + " " + currency : "";
}

function getSaldo(value, isCredit) {
	console.log("getSaldo", value, isCredit);
	return isCredit ? value : "-" + value;
}
sap.ui.define("com/bpw/complaints/utils/Formatter", [], function () {
	"use strict";

	return { dateMapper: dateMapper, amountMapper: amountMapper, amountIn: amountIn, amountOut: amountOut, getSaldo: getSaldo };
});