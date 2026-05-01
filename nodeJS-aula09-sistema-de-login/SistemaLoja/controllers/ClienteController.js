// Importando o Express com ES6 Modules (nova)

import express from 'express';



// metodo do Express usado com ES6 Modules (nova)
const router = express.Router();

// Importando o Moldel do cliente
import Cliente from '../models/Cliente.js';

// ROTA CLIENTES  - foi trocado o app pelo router
router.get("/clientes",function(req,res){
/*    const clientes = [
        {nome: "Ana Silva", cpf: "123.456.789-00", endereco: "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678"},
        {nome: "Pedro Almeida", cpf: "987.654.321-00", endereco: "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432"},
        {nome: "Marina Oliveira", cpf: "456.789.123-00", endereco: "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987"},
        {nome: "Rafael Santos", cpf: "321.654.987-00", endereco: "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321"}
    ]
*/
// cahmaremos o model "cliente", invocar o metodo findAll() para buscar todos os registros da tabela de cliente
Cliente.findAll().then(clientes=>{
    res.render("clientes", {
    clientes : clientes
    })
    }).catch(error=>{
        console.log("Ocorreu um erro ao buscar os clientes." + error)
    
    });
}); 

// ROTA DE CADASTRO DE CLIENTES (subrota / cadastrar)
    router.post("/clientes/cadastrar",(req,res) => {
        // criando as variaveis que iram armazenar os dados vindos do form

        const nome = req.body.nome;
        const cpf = req.body.cpf;
        const endereco = req.body.endereco;

        // Enviando os dados para o banco
        // o metodo create cadastra informaçoes no BD
        Cliente.create({
            // coluna : Variavel
            nome : nome,
            cpf : cpf,
            endereco : endereco
        }).then(() => { // se a promessa for bem sucedida o usuario sera redirecionado para a pagina de clientes
            res.redirect("/clientes")
        }).catch(erro=> { // falha na promessa
            console.log("Ocorreu um erro ao cadastrar o cliente. " + error)
        })
    })
    
// ROTA DE EXCLUSAO DE CLIENTE

router.get("/clientes/excluir/:id" , (req,res)=>{
    //capturando o parametro da rota
    const id = req.params.id
    // Enviando o ID do cliente para apagar do banco de dados
    Cliente.destroy({
        where : {
            //Banco // Parametro recebido
            id : id
        }
    // Sucesso
    }).then(() => {
        res.redirect("/clientes");
        //falha
    }).catch(error => {
        console.log("Ocorreu um erro ao excluir o cliente" + error);
    })
})

// Rota de edicao do cliente

router.get("/clientes/editar/:id", (req,res) => {
    const id = req.params.id
    // Busacando o cliente no banco pelo pk(primary key)
    Cliente.findByPk(id).then(cliente =>{
        res.render("clienteEditar", {
            // passando os dados do cliente para a pagina
            cliente : cliente,
        })
    }).catch(error => {
        console.log("Ocorreu um erro ao encontrar o cliente" + error);
    })
})

// Rota de alereacao de clientes

router.post("/clientes/alterar/", (req, res) => {
    // Cletar os dados do formulario de edicao
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    const id = req.body.id;
    // alterarndo o cliente o banco 
    Cliente.update(
        {
            nome : nome,
            cpf : cpf,
            endereco : endereco,
        },
        {where :
            {id : id}
        }
    ).then(() => {

        res.redirect("/clientes");
    })
})

// no final do codigo exportamos o codigo para ser utilizado em outro lugar (ex index.js)

export default router;