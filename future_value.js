'use strict';
var $ = function (id) {
    return document.getElementById(id);
};
var futureValue;

function calculateFV(investment, rate, years) {
    futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    return parseFloat(futureValue).toFixed(2);
};

var processEntries = function () {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("annual_rate").value);
    var years = parseFloat($("years").value);

    if (isNaN(investment) || investment < 0 || investment > 100000) {
        document.getElementById("investment_error").firstChild.nodeValue = "Investment must be numeric and between 0 and 100000";
    } else if (isNaN(rate) || rate < 0 || rate > 15) {
        document.getElementById("rate_error").firstChild.nodeValue = "rate must be numeric between 0 and 15";

    } else if (isNaN(years) || years < 0 || years > 50) {
        document.getElementById("years_error").firstChild.nodeValue = "years must be numeric and between 0 and 50";
    } else {
        $("investment_error").firstChild.nodeValue = "";
        $("rate_error").firstChild.nodeValue = "";
        $("years_error").firstChild.nodeValue = "";
        $("future_value").value = calculateFV(investment, rate, years);
    }

};
window.onload = function () {
    $("calculate").onclick = processEntries;
    $("investment").focus();

};
