const prompt = require('prompt-sync')();
let aluno, nota, media = 0, conceito;

aluno = prompt("Informe seu nome: ");

for(let i = 1 ; i <= 3 ; i++){
    nota = Number(prompt(`${aluno} informe sua ${i}ª nota: `));
    media += nota; // media = media + nota
}

media /= 3;

// if(media >= 9.5) {
//     conceito = "Excelente";
// } else if(media < 9.5 && media >= 8.5) {
//     conceito = "Ótimo";
// } else if(media < 8.5 && media >= 7) {
//     conceito = "Bom";
// } else if(media < 7 && media >= 5) {
//     conceito = "ANS";
// }else {
//     conceito = "Insuficiente";
// }

(media >= 9.5) ? conceito = "Excelente" :
    (media < 9.5 && media >= 8.5) ? conceito = "Ótimo" :
        (media < 8.5 && media >= 7) ? conceito = "Bom" :
            (media < 7 && media >= 5) ? conceito = "ANS": conceito = "Insuficiente";

console.log(`${aluno}, sua média foi ${media.toFixed(2)}, e seu conceito foi ${conceito}`);