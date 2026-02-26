// tipos de funçoes

// funcoes simples
function showMessage() {
  const message = "<h2>Olá, bem vindo</h2>";
  document.write(message);
}

// Invocando a funçao
showMessage();

// Função com parametro / argumento

const user = "Diego Max";

function showUserMessage(user) {
  //funcao com parametro
  document.write(`<h3>O que deseja fazer hoje ${user} </h3>`);
}
//template strings é a utilizacao da concatenacao ` ... ${variavel}` o nome somete de ${} é placeholder
showUserMessage(user);

// Função com mais de um parametro
const n1 = 10,
  n2 = 5;

function sum(n1, n2) {
  // essa função recebe dois parametros
  let result = n1 + n2;
  document.write(`<p>A doma de ${n1} + ${n2} é igual a ${result}.</p>`);
}
sum(n1, n2);

/// funcao com retorno
//é indicado que as funcoes possiem o minimo de responsabilidade possiveis
const num1 = 50,
  num2 = 3;

function mult(num1, num2) {
  return num1 * num2;
}

document.write(
  `A multiplicação entre ${num1} e ${num2} sera: ${mult(num1, num2)}.`,
);

// Função com retorno condicional

const number = 1000;
function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(`<p>O numero ${number} é ${parImpar(number)}.</p>`);

// função anonima
// e usado quando esta dentro de uma variavel ou dentro de outra funcao
const divisao = function (n) {
  return n / 2;
};
let numero = 200;
document.write(`<p>A metade de ${numero} é ${divisao(numero)}</p>`);

// função seta (arrow fuction) é um tiipo de função anonima

const dobro = (x) => {
  return x * 2;
};
const x = 300;
document.write(`<p>O dobro de ${x} é ${dobro(x)}.</p>`);

// Arrow function com mais de um parametro
const calculadora = (a, operador, b) => {
  // eval é uma função nativa do javascript
  return eval(`${a} ${operador} ${b}`);
};
document.write(
  `<p>O resultado da operação matematica é ${calculadora(1100, "+", 2)}.</p>`
);
