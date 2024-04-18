// 1 - metodos
console.log("métodos");

const carro = {
  nome: "Corsa",
  marca: "Chevrolett",
  portas: 4,
  tetoSolar: 0, // 2 - mais sobre metodos
  andarFrente() {
    console.log("O carro andou para frente");
  },
  virarDireita() {
    console.log("O carro virou para a direita");
  },

  setTetoSolar: function (tetoSolar) {
    this.tetoSolar = tetoSolar;
  },

  getTetoSolar: function () {
    console.log(this.tetoSolar);
  },
};

carro.andarFrente();
carro.virarDireita();
carro.andarFrente();

// 2 - mais sobre metodos
console.log("2 - mais sobre metodos");

carro.setTetoSolar(1);
carro.getTetoSolar();

// 3 - prototypes
console.log("3 - prototypes");

const pessoa = {
  maos: 2,
};

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty("maos"));

// 4 - mais sobre prototyes
console.log("4 - mais sobre prototyes");

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

// 5 - classes
console.log("5 - classes");
