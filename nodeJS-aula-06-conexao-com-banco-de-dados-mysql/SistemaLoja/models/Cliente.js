import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// criando o model
// o metodo define() do sequelize cria uma tabela no BD

const Cliente = connection.define("clientes", {
    nome : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco : {
        type: Sequelize.STRING,
        allowNull: false,
    },
   
});

// O metodo synsc() sincoroniza os dadods com o banco
// force: false -> nao recria a tabela caso ela ja exista
Cliente.sync({force : false});
export default Cliente;

//depois disso precisa importar o model cliente no controller cliente