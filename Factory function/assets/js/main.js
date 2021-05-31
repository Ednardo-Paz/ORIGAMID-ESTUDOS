// factory function
// const container = document.querySelector(`.container`)

// function createButton(text, background) {
//   function element() {
//     const buttonElement = document.createElement(`button`);
//     buttonElement.innerText = text;
//     buttonElement.style.backgroundColor = background;
//     container.appendChild(buttonElement)
//     return buttonElement;
//   }
//   return {
//     text,
//     element, 
//   };
// }

// const btnComprar = createButton(`Comprar`, `blue`);
// console.log(btnComprar.element());

//constructor function
function Button(text, background){
    this.text = text;
    this.back = background;
    
    this.element = function(){
        const buttonElement = document.createElement(`button`);
        buttonElement.innerText = this.text
        return buttonElement
    }
}


const blueButton = new Button(`Comprar`)
console.log(blueButton.element())


// class Button{
//     constructor(text, background){
//         this.text = text;
//         this.background = background;
//     }

//     element = function(){
//         const buttonElement = document.createElement(`button`);
//         buttonElement.innerText = this.text;
//         buttonElement.style.backgroundColor = this.background;
//         return buttonElement
//     }

// }
// const blueButton = new Button(`Comprar`, `blue`)
// console.log(blueButton.element())