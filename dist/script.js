"use strict";
const calculatorElement = document.getElementById("calculator");
const resultElement = document.getElementById("result");
function round(value) {
    return Math.round(value * 1000) / 1000;
}
function isNumber(value) {
    if (typeof value === "number") {
        return !isNaN(value) && isFinite(value);
    }
    else {
        return false;
    }
}
function evaluate(expression) {
    try {
        if (expression.match(/[a-zA-Z&#$<>{}]/g))
            throw new Error();
        // Function constructor
        return new Function(`return (${expression})`)();
    }
    catch (err) {
        return null;
    }
}
function toCalculate() {
    const lines = calculatorElement.value.split(/\r?\n/).map(evaluate);
    resultElement.innerHTML = `<div> ${lines.map(l => `<div>${isNumber(l) ? round(l) : '---'}</div>`).join('')} </div>`;
}
calculatorElement.addEventListener("input", toCalculate);
//# sourceMappingURL=script.js.map