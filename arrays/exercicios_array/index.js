// 1
console.log("ex01");
let itens = [0, 1, 2, 3, 4];

console.log(itens[1]);
console.log(itens[3]);
console.log(itens[4]);

// 2
console.log("ex02");
let elemento1 = [0, 1];
let elemento2 = [0, 1, 2, 3];

console.log(elemento1.length);
console.log(elemento2.length);

// 3
console.log("ex03");
let onibus = {
  rodas: 8,
  limiteDePassageiro: 40,
  portas: 2,
};

const {
  rodas: vRodas,
  limiteDePassageiro: vLimiteDePassageiros,
  portas: vPortas,
} = onibus;

console.log(vRodas + " " + vLimiteDePassageiros + " " + vPortas);

// 4
console.log("ex04");
onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus.janelas);

// 5
console.log("ex05");
let nomes = ["Caio", "Jessica", "Patricia", "Jefferson", "Dara"];

if (nomes.includes("Caio")) {
  console.log("O array possui o nome Caio nele.");
}

// 6
console.log("ex06");
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [1, 2];

function checaArray(arr) {
  if (arr.length < 5) {
    console.log("Poucos elementos");
  } else if (arr.length > 5) {
    console.log("Muitos elementos");
  }
}

checaArray(array1);
checaArray(array2);

// 7
console.log("ex07");

let produtos = ["Shampoo", "Coca-Cola", "Sprite", "Suco de Fruta"];

produtos.forEach((produto) => {
  console.log(produto);
});

// 8
console.log("ex08");
let json = {
  nome: "Caio",
  idade: 18,
  curso: "Análise e Desenvolvimento de Sistemas",
};

console.log(json.nome);
console.log(json.idade);
console.log(json.curso);

// 9
console.log("ex09");
frase = "Eu amo a Jessica";
arrayFrase = frase.split(" ");

console.log(arrayFrase);

for (let i = 0; i <= arrayFrase.length; i++) {
  console.log(arrayFrase[i]);
}

// 10 - Desafio calculadora
console.log("ex010 - Desafio calculadora");

let calculadora = {
  somar(a, b) {
    return a + b;
  },
  subtrair(a, b) {
    return a - b;
  },
  multiplicar(a, b) {
    return a * b;
  },
  dividir(a, b) {
    return a / b;
  },
};

console.log(calculadora.somar(5, 5));
console.log(calculadora.subtrair(10, 5));
console.log(calculadora.multiplicar(2, 2));
console.log(calculadora.dividir(4, 2));

// 11
console.log("ex011");

let arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(i + 5);
}

console.log(arr);

// 12
console.log("ex012");

function findMaxNumber(arr) {
  return Math.max(...arr);
}

console.log(findMaxNumber([1, 2, 10, 3, 4]));

// 13

function sumUniqueNumbers(numbers) {
  const count = {};

  for (let num of numbers) {
    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num]++;
    }
  }

  let sum = 0;

  for (let num in count) {
    if (count[num] === 1) {
      sum += Number(num);
    }
  }

  return sum;
}

console.log(sumUniqueNumbers([1, 2, 2, 3, 4, 4, 5])); // 1 + 3 + 5 = 9
console.log(sumUniqueNumbers([10, 20, -10, 0, 10, 20])); // -10 + 0 = -10
