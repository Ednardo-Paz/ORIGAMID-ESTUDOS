// let usuarios = [`Ed`, `Gina`, `Edu`, `Flavia`];

// function addUsuarios(nome) {
//   let promessa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       usuarios.push(nome);
//       let error = false;
//       if (!error) {
//           resolve ()
//       }else {
//           reject ({ msg: `Algo Errado`})
//       }
//     }, 1000);
//   });
//   return promessa;
// }

// function listarUsauarios() {
//   console.log(usuarios);
// }

// addUsuarios(`Sabrina`).then(listarUsauarios)

// let arrayPessoas = [`Ed`, `João`, `Paulo`, `Felipe`];

// function addPessoasArray(nome) {
//   let promessa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       arrayPessoas.push(nome);
//       let ok = false;
//       if(!ok) {
//           resolve(`Deu certo`);
//       } else {
//           reject ({ msg: `Algo errado.`})
//       }
//     }, 2000);
//   });
//   return promessa;
// }

// function listarArrayPessoas() {
//   console.log(arrayPessoas);
// }

// async function executar() {
//   await addPessoasArray(`Eduardo`);
//   listarArrayPessoas();
// }

// executar();

// const promessa1 = new Promise((resolve, reject) => {
//     let n = Number
//     if(n !== Number) {
//         resolve(3)
//     }else {
//         reject ({msg: `Não é um número.`})
//     }
//     return promessa1
// }).then((r) => {
//      console.log(r)
// })

// console.log(promessa1)
// function rand(min, max) {
//   min *= 1000;
//   max *= 1000;
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof msg !== `string`) {
//         reject(`Algo deu errado.`);
//         return;
//       }
//       resolve(msg.toUpperCase() + ` Passeei na promise.`);
//     }, tempo);
//   });
// }

//   async function executar (){
//    try{
//     const fase1 =  await  esperaAi(`frase 1`, rand(0, 3))
//     console.log(fase1)

//     const fase2 =  await  esperaAi(2, rand(0, 3))
//     console.log(fase2)

//     const fase3 =  await  esperaAi(`frase 3`, rand(0, 3))
//     console.log(fase3)

//    }catch{
//        console.log({ msg: `Algo deu errado.`})

//    }
//   }
//   executar()

const formCep = document.querySelector(`.formCep`);
const inputCep = document.querySelector(`.cep`);
const BtnCep = document.querySelector(`.btn-cep`);
const resultado = document.querySelector(`.resultado`);

BtnCep.addEventListener(`click`, handleClick);

function handleClick(e) {
  e.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep)
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((r) => r.text())
    .then((r) => {
        resultado.innerHTML = r.replace(`{`,``);
        console.log(r)
    });
}


