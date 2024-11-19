const prompt = require('prompt-sync')();
let nome, idade, dias;

nome = prompt("Informe seu nome: ");
idade = prompt(`${nome}, informe sua idade: `);
dias = 365 * idade;

console.log(`${nome}, você já viveu mais do que ${dias} dias.`);