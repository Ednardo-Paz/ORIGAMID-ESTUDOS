// const botoes = document.querySelectorAll(`button`);

// for(let btn of botoes){
//     btn.style.color = `blue`
// }

// const btnUnico = document.querySelector (`button`);

// const btnStyles = getComputedStyle(btnUnico);

// for(let style in btnStyles) {
//     console.log(style, btnStyles[style])
// }


const fourLi = document.querySelectorAll(`li`);

for(let li of fourLi){
    console.log(li.classList.add(`ativar`))
}

for(let windowkey in window){
    console.log(windowkey + ': ' + window[windowkey])
}