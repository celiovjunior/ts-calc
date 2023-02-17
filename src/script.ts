const calculatorElement = document.getElementById("calculator") as HTMLInputElement;
const resultElement = document.getElementById("result") as HTMLElement;

function evaluate(expression: string) {
  try {
    return new Function(`return (${expression})`)();
  } catch (err) {
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