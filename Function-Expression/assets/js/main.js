
const somar = ((a, b) => {
    return a + b;
})

console.log(somar(4, 4 ))

//Exercícios
// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',',
'.');
priceNumber('R$ 99,99');
// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function(){
    var nome = `Ednardo`
})
// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function(){
    console.log(`Teste de active.`)
})