import ValidarCPF from './validarCPF.js'

const cpf = document.querySelector(`#cpf`)
const validarCPF = new ValidarCPF(cpf).init();

const validadorCPF = new ValidarCPF();


console.log(validadorCPF.formatar(`01869318595`))