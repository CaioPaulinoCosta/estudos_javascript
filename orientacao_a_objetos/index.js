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

let cachorro = {
  patas: 4,
  raca: "SRD",
  latir: function () {
    console.log("Au, au!");
  },
};

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";
console.log(labrador.raca);

// 6 - mais sobre classes | classe com function
console.log("6 - mais sobre classes | classe com function");

function criaCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  return cachorro;
}

let doberman = criaCachorro("Doberman", "4", "Preto");
console.log(doberman);

// 7 - mais sobre classes | new
console.log("7 - mais sobre classes | new");

function Casa(garagem, quarto, banheiro, cozinha) {
  this.garagem = garagem;
  this.quarto = quarto;
  this.banheiro = banheiro;
  this.cozinha = cozinha;
}

let mansao = new Casa(2, 6, 4, 2);

console.log(mansao.garagem);

// 8 - mais sobre classes | metodos com prototype
console.log("8 - mais sobre classes | metodos com prototype");

function Peixe(barbatana, cauda, cor) {
  this.barbatana = barbatana;
  this.cauda = cauda;
  this.cor = cor;

  Peixe.prototype.nadar = function () {
    console.log("O peixe nadou.");
  };
}

let sardinha = new Peixe(2, 1, "cinza");

sardinha.nadar();
