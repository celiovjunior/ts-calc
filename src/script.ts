const calculatorElement = document.getElementById("calculator") as HTMLInputElement;
const resultElement = document.getElementById("result") as HTMLElement;

function round(value: number) {
  return Math.round(value * 1000) / 1000;
}

function isNumber(value: unknown): value is number {
  if(typeof value === "number") {
    return !isNaN(value) && isFinite(value);
  } else {
    return false;
  }
}

function evaluate(expression: string) {
  try {
    if (expression.match(/[a-zA-Z&#$<>{}]/g)) throw new Error();
    // Function constructor
    return new Function(`return (${expression})`)();
  } catch (err) {
    return null;
  }
}

function toCalculate() {
  const lines = calculatorElement.value.split(/\r?\n/).map(evaluate);

  resultElement.innerHTML = `<div> ${lines.map(l => `<div>${isNumber(l) ? round(l) : '---'}</div>`).join('')} </div>`;

  
}

calculatorElement.addEventListener("input", toCalculate);