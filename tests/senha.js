const validarSenha = (senha) => {

    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    if (regex.test(senha)) {
        return("Logado");
    } else {
        return("Erro");
    }
}

module.exports = validarSenha

