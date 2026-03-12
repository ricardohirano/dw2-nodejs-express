// classe no javascipt
// Nome da classe sempre tem quie comecar com letras maiuscula
class Carro{
    // definindo os atributos
    constructor(marca, modelo, ano) {
        // this é ma referencia as instancials que serao criadas atraves dessa classe
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    //definindo os metodos
    buzinar() {
        return "Beep!, Beep!";
    }
}

// Instanciando objetos

const carroPopular = new Carro("fiat", "uno", "2012");

document.write(`<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`);


// desafio carro esportivo (chevvolet, camaro, 2020) +turbo() return "vrumm"

const carroEsportivo = new Carro("chevvolet", "camaro", 2020);
carroEsportivo.turbo = () =>  "vrum ...  ";
document.write(`<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e acelera fazendo ${carroEsportivo.turbo()}</p>`);