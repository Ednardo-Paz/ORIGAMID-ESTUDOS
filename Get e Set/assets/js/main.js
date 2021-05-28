const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(numero) {
    this._numero = numero * 200;
  },
};

console.log((button.tamanho = 5));
console.log(button.tamanho);

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};

frutas.nova = `Banana`;
frutas.nova = `Pera`;
console.log(frutas);

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  get element() {
    const type = this._elementType || `button`;
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const BlueButton = new Button(`Comprar`, `blue`);
BlueButton.element = `href`;
console.log(BlueButton.element);

class Veiculos{
    constructor(rodas){
        this.rodas = rodas
    }
    acelerar(){
        console.log(`Acelerou...`)
    }
}

class Moto extends Veiculos{
    empinar(){
        console.log(`Moto empinou com` + this.rodas `rodas`);
    }
}

const honda = new Moto (2); 