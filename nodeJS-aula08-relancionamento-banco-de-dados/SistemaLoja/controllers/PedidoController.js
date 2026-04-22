// iportando o express com es6
import express from 'express'; 
// Importando os Models
import Cliente from "../models/Cliente.js"
import Pedido from "../models/Pedido.js"

// metodo do expresss usado com es6

const router = express.Router(); 
// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
   /* const pedidos = [
        {numero: "983721931", valor: 1200},
        {numero: "983721932", valor: 900},
        {numero: "983721933", valor: 3200},
        {numero: "983721934", valor: 150}
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })*/
    // faaerndo o INNER JOIN para trazer as informaçoes do Cliente junto com as informaçoes do Pedido
    Pedido.findAll({
        include:[
            {
                model: Cliente, // inclui o modelon Cliente realionamento
                required: true, // garante que somente pedidos com clientes relacionados sejam retornados
            }
        ]

    }).then(pedidos => {
        res.render("pedidos",{
            //Passando a lista de pedidos para a pagina
            pedidos : pedidos
        })
    }).catch(error =>{
        console.log(`Ococreu um erro ao listar os pedidos. ${error}`)
    })
})

export default router; 