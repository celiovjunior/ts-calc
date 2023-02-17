"use strict";
const calculatorElement = document.getElementById("calculator");
const resultElement = document.getElementById("result");
function evaluate(expression) {
    try {
        return new Function(`return (${expression})`)();
    }
    catch (err) {
        return null;
    }
}
function toCalculate() {
    const lines = calculatorElement.value.split(/\r?\n/).forEach((line) => {
        console.log(evaluate(line));
    });
    console.log(lines);
}
calculatorElement.addEventListener("input", toCalculate);
//# sourceMappingURL=script.js.map