// //  Constructor Class
//  function Button(text, backgroung){
//      this.text = text;
//      this.background = backgroung;


//  }
//  Button.prototype.element = function (){
//      const buttonElement = document.createElement(`button`);
//      buttonElement.innerText = this.text;
//      buttonElement.style.background = this.background;
//      return buttonElement
//  }
//  const blueButton = new Button(`Comprar`, `blue`);
//  console.log(blueButton)
//  console.log(blueButton.element())

// classes
class Button {
    constructor(text, background, color){
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element(){
        const buttonElement = document.createElement(`button`);
        buttonElement.innerText = this.text
        buttonElement.style.background = this.background   
        buttonElement.style.color = this.color
        return buttonElement;
    }
    appendTo(alvo){
        const targetElement = document.querySelector(alvo);
        targetElement.appendChild(this.element())
        return targetElement;
    }

    static blueButton (text){
        return new Button(text, `blue`, `white`)
    }

}

const botaoAzul = Button.blueButton(`Comprar`)
console.log(botaoAzul)


const blueButton = new Button(`Compar`, `blue`, `white`)
console.log(blueButton.element())
console.log(blueButton.appendTo(`.container`))

// class Button{
//     constructor(options){
//         this.options = options
//     }
//     static createButton (text, background){
//         const butoonElement = document.createElement(`button`);

//         butoonElement.innerText = text
//         butoonElement.style.background = background

//         return butoonElement;
//     }
// }



// const optionsBlue = {
//     backgroundColor: `blue`,
//     text: `Comprar`,
//     color: `white`
// }

// const blueButton = new Button(optionsBlue);
// console.log(Button.createButton(`Clique`, `blue`))