const {test, expect } = require('@jest/globals')
const valor = require('./validarvalor');

test('Valor igual 5000', () => {
    expect(valor(5000)).toBe(1)
})

test('Valor igual 5000', () => {
    expect(valor(1000)).toBe(0)
})