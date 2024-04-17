// 01 - array
console.log("01 - array \n");

let arr = [1, 2, 3, 4, 5];
let nomes = ["Caio", "Jessica"];
let bool = [true, false, true, true];

console.log(arr, nomes, bool);

// 02 - array
console.log("02 - array \n");

console.log(arr[1], nomes[1], bool[3]);

// 03 - propriedades
console.log("03 - propriedades \n");

console.log(arr.length);
console.log(nomes.length);
console.log(bool[2]);

// 04 - métodos
console.log("04 - métodos \n");

let marca = "nike";
console.log(marca.toUpperCase());

// 05 - objetos
console.log("05 - objetos \n");

let cachorro = {
  patas: 4,
  nome: "Dara",
  laitr: function () {
    console.log("Au, au!");
  },
};

console.log(cachorro.patas, cachorro.nome);
cachorro.laitr();

// 06 - adicionando e deletando propriedades de um objeto
console.log("06 - Adicionando e deletando propriedades de um objeto \n");

let carro = {
  porta: 4,
  rodas: 4,
};

console.log(`O carro tem ${carro.porta} portas` + "\n");
console.log(`O carro tem ${carro.rodas} rodas` + "\n");

carro.tetosolar = 1;
carro.radio = 1;

console.log(`O carro tem ${carro.tetosolar} teto-solar`);
console.log(`O carro tem ${carro.radio} rádio`);

delete carro.radio;

console.log(`O carro tem ${carro.radio} rádio`);

// 07 - copiando propriedades de um objeto
console.log("07 - copiando propriedades de um objeto \n");

let humano = {
  cabeça: 1,
  pe: 2,
  mao: 2,
};

let superhumano = {
  superpoder: "Cagar e sair voando por ai",
};

Object.assign(humano, superhumano);
console.log(humano);

// 08 - verificando as chaves de um objeto
console.log("08 - verificando as chaves de um objeto \n");

let obj = {
  chave1: 1,
  chave2: 2,
  chave3: 3,
};

console.log(Object.keys(obj));

// 09 - mutação
console.log("09 - mutação \n");

let obj1 = {
  pontos: 10,
};

obj2 = obj1;

let obj3 = {
  pontos: 10,
};

console.log(obj1 == obj2);
console.log(obj1 == obj3);

// 10 - loops em arrays
console.log("10 - loops em arrays \n");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i]);
}

// 11 - metodos de arrays: push e pop
console.log("11 - metodos de arrays: push e pop \n");

let playlist = {
  musicas: [
    "A.D.H.D - Kendrick Lamar",
    "My Eyes - Travis Scott",
    "FE!N - Travis Scott",
    "Distance - Tory Lanez",
  ],
};
console.log(playlist.musicas);

playlist.musicas.push("fukumean - Gunna");
playlist.musicas.push("The Race - Tay K");
console.log(playlist.musicas);
playlist.musicas.pop();
console.log(playlist.musicas);

// 12 - metodos de arrays: shif e unshift
console.log("12 - metodos de arrays: shif e unshift \n");
let time = {
  jogadores: ["Ja Morant", "Stephen Curry", "Lebron James", "Kevin Durant"],
};

console.log(time.jogadores);
time.jogadores.unshift("Lamelo Ball");
time.jogadores.unshift("Kawhi Leonard");
console.log(time.jogadores);
time.jogadores.shift();
console.log(time.jogadores);

// 13 - metodos de arrays: indexOf e lastInexOf
console.log("13 - metodos de arrays: indexOf e lastInexOf \n");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(nums.indexOf(2));
console.log(nums.lastIndexOf(5));

// 14 - metodos de arrays: slice
console.log("14 - metodos de arrays: slice \n");

console.log(nums.slice(4, 6));

// 15 - metodos de arrays: foreach
console.log("15 - metodos de arrays: foreach \n");

let celulares = ["iphone 10", "iphone 12", "samsung s10", "samsung s11"];

celulares.forEach((cell) => {
  console.log(cell);
});

// 16 - metodos de arrays: includes
console.log("16 - metodos de arrays: includes \n");

let marcas = ["Gucci", "Nike", "Adidas", "Louis Vitton", "Yves Saint Laurent"];

console.log(marcas.includes("Yves Saint Laurent"));

// 17 - metodos de arrays: reverse
console.log("17 - metodos de arrays: reverse \n");

let coisas = ["mouse", "monitor"];

coisas.reverse();

console.log(coisas);

// 18 - metodos de arrays: trim
console.log("18 - metodos de arrays: trim \n");

let n = "          Caio \n";

let nomeCorrigido = n.trim();

console.log(nomeCorrigido);
console.log(n);

// 19 - metodos de arrays: split e join
console.log("19 - metodos de arrays: split e join \n");

let sku = "34";

console.log(sku.padStart(6, "0"));
console.log(sku.padEnd(6, "0"));

let frase = "O rato roeu a roupa do rei de roma";

let palavras = frase.split(" ");

let novaFrase = palavras.join(" ");

console.log(palavras);
console.log(novaFrase);

// 20 - metodos de arrays: repeat
console.log("20 - metodos de arrays: repeat \n");

let palavra = "repetir ";

console.log(palavra.repeat(5));

// 21 - rest operator
console.log("21 - rest operator \n");

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
imprimirNumeros(num1, num2, num3, num4);
console.log(" \n ");
imprimirNumeros(num1);
console.log(" \n ");
imprimirNumeros(num1, num2, num3);

// 22 - destructuring em objetos
console.log("22 - destructuring em objetos \n");

let caminhao = {
  rodas: 6,
  portas: 2,
};

const { rodas: vRodas, portas: vPortas } = caminhao;

console.log(vRodas);
console.log(vPortas);

// 23 - destructuring em arrays
console.log("23 - destructuring em arrays \n");

let names = ["Caio ", "Jessica"];

let [nameA, nameB] = names;

console.log(nameA, nameB);
