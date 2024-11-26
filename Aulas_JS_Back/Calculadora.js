const prompt = require('prompt-sync')();
let num1, op, num2, repetir;

do {
    console.clear();
    console.log(".:: Programa para Simular uma Calculadora ::.");
    num1 = Number(prompt("Informe o primeiro número a ser calculado: "));
    op = prompt('Informe o operador do "cálculo" (+ - x /): ');
    num2 = Number(prompt("Informe o segundo número a ser calculado: "));

    switch (op) {
        case "+":
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "-":
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "x":
            console.log(`${num1} x ${num2} = ${num1 * num2}`);
            break;
        case "/":
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        default:
            console.log(`Operador ${op} invalido, tente novamente!`);
            break;
    }
    repetir = prompt("Deseja repetir o programa (sim ou não): ").toLowerCase();
} while (repetir == "sim");