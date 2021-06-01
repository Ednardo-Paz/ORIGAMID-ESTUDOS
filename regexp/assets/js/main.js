

// const regexpCEP = /\d{5}[-\s]?\d{3}/g;
// const ceps = [
// '00000-000',
// '00000 000',
// '00000000'
// ];
// for(cep of ceps) {
// console.log(cep, cep.match(regexpCEP));
// }

const regexp = /\w+/gi;

const frase = `JavaScript Linguagem 101`;

console.log(frase.replace(regexp, `x`))