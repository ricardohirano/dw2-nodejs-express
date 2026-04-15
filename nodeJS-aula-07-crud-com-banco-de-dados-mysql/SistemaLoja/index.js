// Importando o Express
//const express = require("express") - metodo Common js
import express from 'express';

// importando o Controller de cliente (onde estão as rotas)
import ClienteController from "./controllers/ClienteController.js"
import PedidoController from "./controllers/PedidoController.js"
import ProdutoController from "./controllers/ProdutoController.js"

// Importando o arquivo de conexao com o banco
import connection from './config/sequelize-config.js';


// realizando a conexao com o banco de dadosl
connection.authenticate().then(() =>{
    console.log("Conexao do banco de dados realizado com sucesso!")
}).catch((error) =>{
    console.log(`Ocorreu um erro ao se conectar ao banco ${error}`)
})

// criando o banco de dados somente se ainda nao existir

connection.query("CREATE DATABASE IF NOT EXISTS SistemaLoja;").then(() =>{
    console.log("O banco de dados esta criado!");
}).catch((error) =>{
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro ${error}`);
});

//

// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
// Configurando o Express para aceitar daddos findo do formulario
app.use(express.urlencoded({extended: false}))

// ativando o uso das rotas
app.use("/",ClienteController)
app.use("/",PedidoController)
app.use("/",ProdutoController)

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})