import Countdown from './countdown.js';


const tempoParaONatal = new Countdown(`24 december 2021 23:59:59 GMT-0300`);


function criarSegundos(){
    if(tempoParaONatal.secunds % 60 < 10){
 return `0` + tempoParaONatal.secunds % 60
}else {
    return tempoParaONatal.secunds % 60
}
}


function criarMinutos(){
    if(tempoParaONatal.minutes % 60 < 10){
 return `0` + tempoParaONatal.minutes % 60
}else {
    return tempoParaONatal.minutes % 60
}
}

function criarHoras(){
    if(tempoParaONatal.hours % 60 < 10){
 return `0` + tempoParaONatal.hours % 60
}else {
    return tempoParaONatal.hours % 60
}
}

const tela = document.querySelector(`.tempo`);
const tempo = setInterval(() => {
    
 tela.innerText = `Faltam ${tempoParaONatal.days} dias ${criarHoras(tempoParaONatal.secunds)}:${criarMinutos(tempoParaONatal.secunds)}:${criarSegundos(tempoParaONatal.secunds)} para o Natal.` 
  
}, 1000)





 