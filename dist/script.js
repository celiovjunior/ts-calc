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
// to not use Function, you can use libs like mathjs or string-math
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
    // saving in localstorage
    localStorage.setItem('values', calculatorElement.value);
    const lines = calculatorElement.value.split(/\r?\n/).map(evaluate);
    resultElement.innerHTML = `<div> ${lines.map(l => `<div>${isNumber(l) ? round(l) : '---'}</div>`).join('')} </div>`;
    // using isNumber as a type '''middleware'''
    const total = round(lines.filter(isNumber).reduce((a, b) => a + b, 0));
    resultElement.innerHTML += `<div id="total">${total}</div>`;
    // clipboard
    document.getElementById('total')?.addEventListener('click', () => {
        navigator.clipboard.writeText(total.toString());
    });
}
calculatorElement.value = localStorage.getItem('values') || '';
calculatorElement.addEventListener("input", toCalculate);
toCalculate();
//# sourceMappingURL=script.js.map