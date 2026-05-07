// Controler do Usuario
import express from "express"
const router = express.Router();
// importando o model 
import Usuario from "../models/Usuario.js"
//Importando o bcrypt
import bcrypt from "bcrypt";

//Rota login
router.get("/login",function(req,res){
    res.render("login")
})

//Rota do formulario de cadastro do usuario
router.get("/cadastro", (req,res) => {
    res.render("cadastro");
});

// Rota de criação de usuario no banco
router.post("/caduser", (req,res) =>{
    //coletando as informaçoes do formulario
    const email = req.body.email;
    const senha = req.body.senha;

    
    

    //verificando se o usuario ja existe
    
    Usuario.findOne({where: {email:email}}).then(usuario =>{
        // se nao houver um usuario igual
        if (usuario == undefined){
            // hash de senha
            // criando o "sal" do hash 
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(senha, salt);
            //Enviando para o Banco
            Usuario.create({
                email: email,
                senha: hash,
            }).then (()=>{
                res.redirect("/login");
            }).catch(error =>{
                console.log("Não fo possivel cadastrar o usuario." + error)
            })//se ouver um usuario
        }else{
            res.send(`Usuario ja cadastrado <br><a href="/login">Faca o login.</a>`
            )
        }
        })
    })
    
    // ROTA DE AUTENTIFICAÇÃO (LOGIN)
    router.post("/autentificacao",(req,res) =>{
        //capturar os dados do formulario
        const email = req.body.email;
        const senha = req.body.senha;

        // Buscando o usuario no banco
        Usuario.findOne({where: {email: email}}).then(usuario =>{
            //se o usuario existe
            if (usuario != undefined){
                // valida a senha
                const correct = bcrypt.compareSync(senha, usuario.senha)
                // se a senha for valida
                if (correct){
                    //cria a sessao para o usuario
                    req.session.usuario ={
                        // Inserindo as informaçoes do usuario na sessao
                        id: usuario.id,
                        email: usuario.email
                    }
                    /*res.send(`Sessao do usuario criado com sucesso"<br>
                        ID do usuario logado: ${req.session.usuario['id']}<br>
                        Email do usuario logado ${req.session.usuario['email']}
                        `)*/
                    // autoriza o login
                    res.redirect("/");
                    // se a senha estiver incorreta
               }else {
                    res.send(`Senha Invalida! <br> <a href="/login"> Tente Novamente.</a>`)
               } // usuario nao existir
            } else {
                res.send(`Usuario nao cadastrado! <br> <a href="/login"> Tente Novamente.</a>`)
            }
        })
    })

// exportando o modulo 
export default router;