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
    
    // Realizando as consultas em paralelos

    Promise.all([
        Pedido.findAll({
            include:[
                {
                    model: Cliente, // inclui o modelon Cliente realionamento
                    required: true, // garante que somente pedidos com clientes relacionados sejam retornados
                }
            ]
    
        }),
        // Busca todos os Clientes
        Cliente.findAll(),
    ])
        .then(([pedidos, clientes ])=> {
        res.render("pedidos",{
            //Passando a lista de pedidos para a pagina
            pedidos : pedidos,
            clientes : clientes
        })
    }).catch(error =>{
        console.log(`Ococreu um erro ao listar os pedidos. ${error}`)
    })
})

//Rota de cadastro de pedidos

router.post("/pedidos/cadastrar", (req,res)=>{
    // CAPTURA OS DADODS DO FORMULARIO
const numero = req.body.numero;
const valor = req.body.valor;
const clienteId = req.body.clienteId;

Pedido.create({
    numero: numero,
    valor: valor,
    cliente_id: clienteId,
    }).then(()=>{
        res.redirect("/pedidos");
    }).catch(error => {
        console.log(error);
    })

})

// Rota de Exclusao de pedidos

router.get("/pedidos/excluir/:id", (req,res) => {
    const id = req.params.id;
    Pedido.destroy({
        where: {
            id:id,
        },
    }).then(() =>{
        res.redirect("/pedidos");
    }).catch(error =>{
        console.log(error);
    })

})

export default router; 