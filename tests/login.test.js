const {test, expect}= require('@jest/globals')
const validarUsuarioESenha = require('./login')

test('Se o login for Debora a senha for 1234@abc, retorna true', () => {
    expect(validarUsuarioESenha("Debora","1234@abc")).toBe(true);
})

test('Se o login não for Debora a senha não for 1234@abc, retorna false', () => {
    expect(validarUsuarioESenha("Debora","1234abc")).toBe(false);
})
