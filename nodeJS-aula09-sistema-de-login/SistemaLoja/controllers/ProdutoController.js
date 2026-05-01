import express from 'express';

const router = express.Router();


import Produto from '../models/Produto.js';

// ROTA PRODUTOS
router.get("/produtos",function(req,res){
/*    const produtos = [
        {nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
        {nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos"},
        {nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
        {nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos"}
    ]
*/
Produto.findAll().then(produtos=>{
    res.render("produtos", {
        produtos: produtos
    })
    }).catch(error=>{
        console.log("Ocorreu um erro ao buscar os produtos." + error)
    });        

});

//Rota de Cadastro de Produtos (subrota / cadastrar)
    router.post("/produtos/cadastrar", (req,res) => {
        // criando as variaveis que iriam armazenar os dados vindos do  form
        
        const nome = req.body.nome;
        const preco = req.body.preco;
        const categoria = req.body.categoria;

        // Enciando os dados para op banco 
        // o metodo create cadastra informacoes no BD
        Produto.create({
            nome : nome,
            preco : preco,
            categoria : categoria
        }).then(() => {// se a promessa for bem sucedida o usuario sera redirecionado para a pagina de produtos
            res.redirect("/produtos")

        })

    })

export default router;