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
