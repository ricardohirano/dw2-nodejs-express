function Auth(req, res, next) {
    // verificar se existe uma sessao para o usuario
    if (req.session.usuario != undefined) {
        // poermite o prosseguimento
        next()
        //se nao existir a sessao
    } else {
        //Exibir a pagina do login para o usuario
        res.render("login");
    }
}
export default Auth;