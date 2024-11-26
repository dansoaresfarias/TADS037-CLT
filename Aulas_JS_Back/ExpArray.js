// define array
const listaPresença = ["Linda", "Daniel", "Rhuan", "Sabrina", "Dorama"];

// using for...in loop
console.log("Usando for...in");
for (let x in listaPresença) {
    console.log(listaPresença[x]);
};
// using for...of loop
console.log("Usando for...of");
for (let aluno of listaPresença) {
    console.log(aluno);
};
// using for...each loop
console.log("Usando for...each");
listaPresença.forEach(aluno => {
    console.log(aluno);
});