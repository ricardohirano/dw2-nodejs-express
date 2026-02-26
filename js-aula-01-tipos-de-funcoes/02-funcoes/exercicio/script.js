document.write(
  "Função simples.<br>1 – Crie uma função simples que exiba no console seu nome, sua idade e sua cidade.<br>(Não esqueça de invocar a função no final).",
);

function exibir() {
  const apresentacao =
    "<p>Ola meu nome é Ricardo Hirano tenho 36 anos e moro em Registro SP .</p><br><hr>";
  document.write(apresentacao);
}
exibir();


/////////////////////////////////////////////////////////////////////////////////////////////

document.write(
  "Função com parâmetros: <br>2 – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A função deve ser chamada ao final passando dois números como argumento.",
);

let x, y, res;
function divisao(x, y) {
  res = x / y;
  return `<p>O resultado da divisão foi ${res}.</p><br><hr>`;
};
document.writeln(divisao(10,2));

///////////////////////////////////////////////////////////////////////////////////////////////

document.write("Função com retorno <br>3 – Crie uma função que receba três números e retorne a multiplicação entre esses números. O resultado deve ser exibido no console.")

