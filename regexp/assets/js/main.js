

// const regexpCEP = /\d{5}[-\s]?\d{3}/g;
// const ceps = [
// '00000-000',
// '00000 000',
// '00000000'
// ];
// for(cep of ceps) {
// console.log(cep, cep.match(regexpCEP));
// }

// const regexp = /\w+/gi;

// const frase = `JavaScript Linguagem 101`;

// console.log(frase.replace(regexp, `x`))

const cpfs = document.querySelectorAll(`.cpf li`);

const elementsInnerText = ([...elements]) => {

 return elements.map((element) => element.innerText)  
}

const limparCpf = (cpf) => {
    return cpf.replace(/\D/g, ``);
}

const construirCpf = (cpf) =>{
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, `$1.$2.$3-$4`)
}

const formatarCpfs = (cpfs) => {
    return cpfs.map(limparCpf).map(construirCpf)
}

const substituirCPFS = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements)
    const cpfsFormatados = formatarCpfs(cpfs);

    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatados[index]
    })
    console.log(cpfsFormatados)
}
substituirCPFS(cpfs)

 