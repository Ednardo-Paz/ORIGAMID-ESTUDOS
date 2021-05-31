// const cliente = {
//   nome: "Andre",
//   compras: {
//     digitais: {
//       livros: ["Livro 1", "Livro 2"],
//       videos: ["Video JS", "Video HTML"],
//     },
//     fisicas: {
//       cadernos: ["Caderno 1"],
//     },
//   },
// };

// console.log(cliente.compras.digitais.livros)

// const {livros, videos} = cliente.compras.digitais;
// console.log (videos, livros)

// console.log(cliente.compras.digitais.livros)


// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, margin, color} = btnStyles

console.log(backgroundColor, margin, color)

console.log(btnStyles)


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

 [cursoAtivo, cursoInativo ] = [cursoInativo,cursoAtivo ];

console.log(cursoAtivo)
console.log(cursoInativo)
// Corrija o erro abaixo
const cachorro = {
nome: 'Bob',
raca: 'Labrador',
cor: 'Amarelo'
}
const {cor: bobCor} = cachorro;

console.log(bobCor)