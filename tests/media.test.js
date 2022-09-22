const {test, expect}= require('@jest/globals')
const media = require('./media')

test('Média (2,2) retornar 2', () => {
    expect(media(2,2)).toBe(2)
})