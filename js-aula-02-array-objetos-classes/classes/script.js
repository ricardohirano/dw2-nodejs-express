document.write(`<h4>Objetos literais possuem Atributos (propriedades) e Métodos (funçoes)</h4>`);
const pessoa = {};
document.write(typeof pessoa);

//Criando um objeto

const carro = {
    //propriedades
    modelo: "gol",
    cor: "vermelho",
    //metodos
    acelerar(){
        return "Vrummm..."
    },
    frear(){
        return "freando..."
    },
};
document.write(`<p>O modelo do caro é ${carro.modelo}</p>`);
document.write(`<p>A cor do caro é ${carro.cor}</p>`);
document.write(`<p>Quando o carro acelera ele faz: ${carro.acelerar()}</p>`);
document.write(`<p>Ativando os freios: ${carro.frear()}</p>`);

// Manipulando arrays de objetos

const productList = [
    {
        nome: "computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno com bom desempenho"
    },
    {
        nome: "tablet",
        marca: "Samsung",
        preco: 2000,
        descricao: "Otima velocidade de processamento"
    },
    {
        nome: "celular",
        marca: "Apple",
        preco: 1200,
        descricao: "Ultra resistente"
    },
];

// exibindo o array objeto atraves do forEach

document.write('<h4>Exibindo o array do objetos atravesdo forEach:</h4>');
productList.forEach((prod) =>{
    document.write(`
        Produto: ${prod.nome} <br>
        Marca: ${prod.marca} <br>
        Preco: ${prod.preco} <br>
        Descricao: ${prod.descricao}<br><br>
    
        `);
});
