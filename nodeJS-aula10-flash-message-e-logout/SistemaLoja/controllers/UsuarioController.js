// Controler do Usuario
import express from "express"
const router = express.Router();
// importando o model 
import Usuario from "../models/Usuario.js"
//Importando o bcrypt
import bcrypt from "bcrypt";

//Rota login
router.get("/login",function(req,res){
    res.render("login", {
        messages: req.flash(),
        loggedOut: true,
    })
})

// rota de logout

router.get("/logout" , (req, res) => {
    //limpando a sessao
    req.session.usuario = undefined;
    res.redirect("/");
})
//Rota do formulario de cadastro do usuario
router.get("/cadastro", (req, res) => {
    res.render("cadastro", {
        //recebendo as messagens
        messages: req.flash(),        
        loggedOut: true,
    });
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
            req.flash('danger', 'O usuario ja esta cadastrado" Faça o login.')
            res.redirect("/cadastro")
            //res.send(`Usuario ja cadastrado <br><a href="/login">Faca o login.</a>`)
            
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
                    // enviando alerta de sucesso
                    /*
                    success
                    warning
                    danger
                    */
                    req.flash('success', 'Login efetuado com sucesso')
                    res.redirect("/");
                    // se a senha estiver incorreta
               }else {
                    //Enviando o alart em vez do res
                    req.flash('danger', 'A senha informada esta incorreta! Tente novamente.')
                    res.redirect("/login")
                   // res.send(`Senha Invalida! <br> <a href="/login"> Tente Novamente.</a>`)
               } // usuario nao existir
            } else {
                req.flash('danger', 'o usuario informado nao existe! Verifique os dados e tente novamente.')
                    res.redirect("/login")
                
                //res.send(`Usuario nao cadastrado! <br> <a href="/login"> Tente Novamente.</a>`)
            }
        })
    })

// exportando o modulo 
export default router;