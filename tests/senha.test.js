const {test, expect}= require('@jest/globals')
const validarSenha = require('./senha')

test("Se a senha não conter numeros, retorna Erro", () => {
	expect(validarSenha("@Bcdefgh")).toBe("Erro");
})

test("Se a senha não conter letra maiúscula, retorna Erro", () => {
	expect(validarSenha("@bcdefg8")).toBe("Erro");
})

test("Se a senha não conter letra minúscula, retorna Erro", () => {
	expect(validarSenha("@BCDEFG8")).toBe("Erro");
})

test("Se a senha não conter ao menos oito caracteres, retorna Erro", () => {
	expect(validarSenha("@BCDEFG")).toBe("Erro");
})

test("Se a senha conter números, letra maiúscula, minúscula e ao menos oito caracteres, retorna Logado", () => {
	expect(validarSenha("@bCDEFG8")).toBe("Logado");
})