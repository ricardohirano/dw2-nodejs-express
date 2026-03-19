// importanndo o modulo express
const express = require ("express");

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

// criando a rota de clientes sem parametros 
app.get("/clientes", (req, res)=>{
    const cliente= ""
    const listaClientes=[ 'Ricardo','Monica','Maria','Vitoria','Enzo']
    res.render("clientes",{
        cliente :cliente,
        listaClientes : listaClientes
    });
});

//Rota de Clientes com paramentors
app.get("/clientes/:cli",(req,res)=>{
    const cliente = req.params.cli

    res.render("detalhesClientes",{
        pessoa : cliente
    })
})

//criando a rota de produtos sem paramentros
app.get("/produtos", (req,res)=>{
    const mercadoria = "", produto=""
    const listaProdutos =['Computador', 'Celular', 'Tablet', 'Notebook'];
    res.render("produtos",{
        mercadoria : produto,
        listaMercadorias :listaProdutos
    })
});


// rota de produtos com parametro
app.get("/produtos/:prod", (req, res)=>{
    const produto = req.params.prod

    res.render("detalhesProdutos",{
        mercadoria : produto // mercadoria e o nome da variavel a ser chamada no HTML
    });
});

// criando a rota de serviços do usuario
app.get("/servicos", function (req, res){
    ////////Arays de objetos

const servicos = [
    {
    servico: "Desenvolvimento de Websites",
    descricao : "Criação de sites com NodeJs e intregação de banco de dados",
    preco: 3500 
    },
    {
    servico: "Auditoria de UX/UI",
    descricao : "Avaliaçãop de usabilidade de sistema com sugestoes de melhorias",
    preco: 1800 
    },
    {
    servico: "Infraestrutura em Nuvem ",
    descricao : "Configurações de servidores e hospedagem de aplicaçoes",
    preco: 2900 
    },
    {
    servico: "Chatbot com IA",
    descricao : "Desenvolvimento de chatbot para atendimento",
    preco: 2900 
    }
]

    res.render("servicos", {
        //ligando o array de objeto na pagina
        servicos : servicos
    });
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