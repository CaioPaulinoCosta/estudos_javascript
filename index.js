// ex-01
a = "Caio";
b = "Jessica";
c = `Costa`;

console.log(a);
console.log(b);
console.log(c);
console.log(`${b} ${c}`);

// ex-02
n1 = 69;
n2 = 14;
n3 = 100;

console.log(`A soma de ${n1} + ${n2} é: `, n1 + n2);
console.log(n1);
console.log(n2);
console.log(n3);

// ex-03
const nome = "Caio";

if (nome === "Caio") {
  console.log(`Olá, ${nome}`);
}

// ex-04
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 18));
console.log(Math.pow(2, 0));

// ex-05
const carSpeed = 100;
const maxSpeed = 80;

if (carSpeed > maxSpeed) {
  console.log("O carro está acima da velocidade permitida.");
} else {
  console.log("O carro está dentro da velocidade");
}

// ex-06
const userAge = 18;
const userCnhStatus = true;

if (userAge >= 18 && userCnhStatus === true) {
  console.log("Você tem permissão para dirigir");
} else if (userAge >= 18) {
  console.log("Você já pode tirar sua CNH.");
} else {
  console.log("Você ainda não tem 18 anos, então não pode tirar sua cnh");
}

// ex-07
i = 0;

while (i <= 10 - 1) {
  i++;
  console.log(i);
}

// ex-08
for (y = 100; y >= 50; y--) {
  console.log(y);
}

console.log("----------------------");

// ex-09
for (z = 0; z <= 50; z++) {
  if (z % 2) {
    console.log(`${z} é impar.`);
  } else {
    console.log(`${z} é par.`);
  }
}

console.log("----------------------");

// ex-10
let p = 3;
let divisoes = 0;

for (let j = 1; j <= p; j++) {
  if (p % j == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log(`O número ${p} é primo`);
} else {
  consotle.log(`O número ${p} não é primo`);
}

// ex-11
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let semPares = [];

for (let k = 0; k < arr.length; k++) {
  if (arr[k] % 2 == 1) {
    semPares.push(arr[k]);
  }
}

console.log(semPares);

// ex-12
// let n1 = 10;
// let n2 = 9;
// let n3 = -10;
// let n4 = 0;

// function classificarNumero(n) {
//   if (n === 0) {
//     console.log("Neutro");
//   } else if (n % 2 == 0 && n > 0) {
//     console.log("Positivo e par");
//   } else if (n % 2 == 1 && n > 0) {
//     console.log("Positivo e impar");
//   } else {
//     console.log("Negativo");
//   }
// }

// console.log(classificarNumero(n3));

// ex-13
function classificarNumero(n) {
  if (n === 0) {
    return "Neutro";
  } else if (n % 2 === 0 && n > 0) {
    return "Positivo e Par";
  } else if (n % 2 !== 0 && n > 0) {
    return "Positivo e Ímpar";
  } else {
    return "Negativo";
  }
}

console.log(classificarNumero(1));
console.log(classificarNumero(2));
console.log(classificarNumero(-10));
console.log(classificarNumero(0));

// ex-14

function olaMundo() {
  console.log("Hello World!");
}

olaMundo();

// ex-15

function showAge(age) {
  console.log(`Você tem ${age} anos`);
}

showAge(19);

// ex-16
const sumNumber = (a, b) => a + b;
console.log(sumNumber(2, 2));

// ex-17
function showRandomNumber(num) {
  randomNum = Math.floor(Math.random() * num) + 1;
  console.log(randomNum.toFixed(2));
}

showRandomNumber(50);

// ex-18
function driveSchool(age) {
  if (age > 18) {
    console.log("Cê pode entrar na auto escola");
  } else {
    console.log("Cê num ta podendo entrar em auto escola não");
  }
}

driveSchool(21);
driveSchool(15);

// ex-19

function checkValue(v) {
  if (typeof v === "string") {
    console.log("O dado inserido é do tipo boolean");
  } else if (typeof v === "number") {
    console.log("O dado inserido é do tipo Number");
  } else if (typeof v === "boolean") {
    console.log("O dado inserido é do tipo String");
  }
}

checkValue(true);
checkValue(1);
checkValue("Jessica");

// ex-20
function transformaPositivo(num) {
  console.log(Math.abs(num));
}

transformaPositivo(-50);

// ex-21
function limitaCaractere(text) {
  if (text.length > 10) {
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }
}

limitaCaractere(
  "SAHJKSAHKSHAKLSHKLAHSKLAHSKLHAKLSHAKLSHKALHSKLAHSKHKALSHKASHAHSKAKSHKASHKSA"
);

limitaCaractere("Caio");

// ex-22
function elevaNum(num1, num2) {
  console.log(Math.pow(num1, num2));
}

elevaNum(3, 2);

// ex-23
function decrementaNum(num) {
  for (let f = num; f > 0; f--) {
    if (f % 2 == 0) {
      console.log(f);
    }
  }
}

decrementaNum(20);

// ex-24
function soma(a, b, c) {
  return a + b + c;
}

let resultado = soma(5, 10, 15);

// ex-25
function faixaEtaria(age) {
  if (age < 12) {
    return "Criança";
  } else if (age < 25) {
    return "Jovem";
  } else {
    return "Adulto";
  }
}
let crianca = faixaEtaria(5);
let adulto = faixaEtaria(26);

console.log("Faixa etária de 5 anos: ", crianca);
console.log("Faixa etária de 26 anos: ", adulto);

// ex-26
function isPalindrome(text) {
  let palavraFormatada = text.toLowerCase().replace(/[\W_]/g, " ");
  let invertida = palavraFormatada.split("").reverse().join("");
  if (palavraFormatada == invertida) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));

// ex-27
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const average = sum / numbers.length;

  return average;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
console.log(calculateAverage([]));

// ex-28
function reverseString(text) {
  let palavraFormatada = text.toLowerCase().replace(/[\W_]/g, " ");
  let invertida = palavraFormatada.split("").reverse().join("");
  return invertida;
}

console.log(reverseString("Caio"));

// ex-29
function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] == "a" ||
      text[i] == "e" ||
      text[i] == "i" ||
      text[i] == "o" ||
      text[i] == "u"
    ) {
      count++;
    } else if (
      text[i] == "A" ||
      text[i] == "E" ||
      text[i] == "I" ||
      text[i] == "O" ||
      text[i] == "U"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("AEIOU"));

console.log("------------");

// ex-30
function sumEvenNumbers(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      soma += array[i];
    }
  }

  return soma;
}

const numeros = [1, 2, 3, 4, 5, 6, -8, 10];
const somaPares = sumEvenNumbers(numeros);
console.log("Soma de números pares:", somaPares);
