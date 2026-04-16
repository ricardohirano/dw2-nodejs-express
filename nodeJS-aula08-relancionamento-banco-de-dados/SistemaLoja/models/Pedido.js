import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// criando o model
// o metodo define() do sequelize cria uma tabela no BD

const Pedido = connection.define("pedido", {
    numero : {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    valor : {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    cliente_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
   
});

// O metodo synsc() sincoroniza os dadods com o banco
// force: false -> nao recria a tabela caso ela ja exista
//Pedido.sync({force : false});
export default Pedido;

//depois disso precisa importar o model cliente no controller cliente