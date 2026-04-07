import {soma} from "../src/soma.js"

test('Soma 1 + 2 o resultado deve ser 3', () => {
  const resultado = soma(1, 2)
  expect(resultado).toBe(3)
})