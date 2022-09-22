const validarUsuarioESenha = (usuario, senha) => {
    if((usuario === "Debora") && (senha === "1234@abc")){
        return true;
    }
    else{
        return false;
    }
}

module.exports = validarUsuarioESenha
