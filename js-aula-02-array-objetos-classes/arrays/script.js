// Declarand e exibindo itens em um array

let produtos =[];

document.write(typeof produtos); /// mostrar que no javascript é um objeto
let products = ["computador", "notebook", "celular", "tablet"];

document.write(`<p>${products}</p>`);

document.write('<p>Exibindo os elementos do vetor atraves do indice</p>')
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

document.write('<p>Exibindo os elementos do vetor atraves do forEach:</p>');
products.forEach(function (product){
    document.write(`<p>${product}</p>`);
})

document.write('<p>Exibindo os elementos do vetor atraves do forEach com os indices:</p>');
products.forEach((product, i)=>{
    document.write(`<p>${i+1} - ${product}</p>`);
})

// metodos de manipulaçãoes dos vetores
let frutas = ['laranja', 'maca', 'banana'];
document.write(`<p> Nossa lista de frutas é: ${frutas}</p>`);
frutas[3] = 'morango';
document.write(`<p> Lista de frutas atualizada  manuamente é: ${frutas}</p>`);
document.write("<h4>O método PUSH - Insere um novo elemento no FINAL do vetor</h4>");
frutas.push('abacaxi')
document.write(`<p> Lista de frutas atualizada  pelo metodo de push é: ${frutas}</p>`);
document.write("<h4>O método UNSHIFT - Insere um novo elemento no INICIO do vetor</h4>");
frutas.unshift('pera');
document.write(`<p> Lista de frutas atualizada  pelo metodo de unshift é: ${frutas}</p>`);

//como contar os elementos de um vetor - metodo LENGTH
const items = frutas.length;
document.write(`<p> Lista de frutas atualizada  temos: ${items} frutas</p>`); 