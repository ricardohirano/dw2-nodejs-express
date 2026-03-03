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


function divisao(x, y) {
  res = x / y;
  return `<p>O resultado da divisão foi ${res}.</p><br><hr>`;
};
const a=10, b=2;
document.write(divisao(a,b));

///////////////////////////////////////////////////////////////////////////////////////////////

document.write("Função com retorno <br>3 – Crie uma função que receba três números e retorne a multiplicação entre esses números. O resultado deve ser exibido no console.")

function multi (x,y,z){
  return x*y*z;
}
const d=2,e=3,f=4;
document.write(`<p>A multiplicacao de ${d}, ${e} e ${f}  sera: ${multi(d,e,f)}<br><hr></p>`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.write("Função com mais de um retorno <br>4 – Crie uma função que receba uma idade como parâmetro.<br> Se a idade for >= 18, a função deve retornar o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console.");

function maioridade(x){
  return (x>=18)? "Maior de idade" : "Menor de idade";
}
const idade1=17, idade2=20;
document.write(`<p>Se a idade da pessoa for ${idade1} anos entao ela sera ${maioridade(idade1)}. <br>E se a idade da pessoa for ${idade2} anos entao ela sera ${maioridade(idade2)}.</p><br><hr>`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("Função anônima<br>5 – Crie uma função anônima que receba duas notas como parâmetro. <br>Se a média dessas notas for <=5, a função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”.<br>O resultado deve ser exibido no console.<br>Considere média = (nota1 + nota2) / 2.");

const aprovacao = function (x, y){
  return ((x+y)/2 <= 5) ? "Reprovado" : "Aprovado";
};
const nota1=10, nota2=2, nota3=7, nota4=3;
document.write(`<p>O aluno que apresenta as nota ${nota1} e a nota ${nota2} esta ${aprovacao(nota1,nota2)}.<br>E o aluno que apresenta as nota ${nota3} e a nota ${nota4} esta ${aprovacao(nota3,nota4)}. </p><br><hr>`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("Arrow function com parâmetro único <br>6 – Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O triplo do número é...”)");

const triplo = (x)=>{return x*3;};
let valor=10;
document.write(`<p>O resultado do triplo de ${valor} é ${triplo(valor)}.</p><br><hr>`);

///////////////////////////////////////////////////////////////////////////////////////
document.write("Arrow function com mais de um parâmetro<br>7 – Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses números. <br>O resultado deve ser impresso no console.")
const somar = (x,y,z,r) =>{return x+y+z+r;}
let n1=1,n2=2,n3=3,n4=4;
document.write(`<p>${n1}+${n2}+${n3}+${n4}=${somar(n1,n2,n3,n4)}</p>`);
