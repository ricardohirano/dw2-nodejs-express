// importanndo o modulo express
const express = require ("express")

// instaciando o express
const app = express()

// configurando o EJS

app.set('view engine', 'ejs');

// criando a rota princippal do site ("/")

app.get("/", function (req, res){
    res.render("index");
});

// rota perfil do usuario
app.get("/perfil", (req, res)=>{
    //rest.send("<h2>Bem vindo ao seu perfil<\h2>")
    res.render("perfil");
});

// criando a rota de clientes 
app.get("/clientes", (req, res)=>{
    res.render("clientes");
});

//criando a rota de produtos
app.get("/produtos", (req, res)=>{
    res.render("produtos");
});

// criando a rota de serviços do usuario
app.get("/servicos", function (req, res){
    res.render("servicos");
});


// iniciando o servidor na porta 8080

const port = 8080;

app.listen(port, function(error){
    if (error){
        console.log("ocorreu um erro ao iniciar o servidor!")
    } else {
        console.log(`Servidor Iniciado com sucesso no endereço: http://localhost:${port}`);
    }
});