import  Sequelize  from "sequelize";

//definindo od dados de conexao com o banco de dados 
const connection = new Sequelize({
    // tipo de banco
    dialect : "mysql",
    // endereço do banco
    host : "localhost",
    // Nome do usuario 
    username: "root",
    // senha
    password : "",
    // fuso horario
    timezone : "-03:00", 
    // depois de criar o banco colocamos o database 
    database: 'sistemaloja'
});

// exportando o modulo
export default connection;
