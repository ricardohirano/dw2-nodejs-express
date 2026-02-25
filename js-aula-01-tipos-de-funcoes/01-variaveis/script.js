/*
atalho para comentario  apertar crtl+;
*/
// variaveis podem ser declaradas de tres formas
// var, let e const
// Var: evite seu uso pode nao ser muito seguro
// Let: utilize quando for necessario reatribuir o valor da variavel
// const: Utilize quando NÂO precisar reatribuir o valor da variavel
/*
let:

Eu posso mudar a variavewl somente com o nome da variavel ex:
(errado):
let nome = "Ricardo";
let nome = "Monica"
(certo):
let nome = "Ricardo";
nome = "Monica"
*/

var cidade = "Registro";
var cidade = "Sete Barras"

document.write(cidade);

let nome = "Ricardo";
nome = "Monica";
document.write("<br>");
document.write(nome);

const pais = "Brasil";
//pais = "Argentina";
document.write("<br>")
document.write(pais);
