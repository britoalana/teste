const { somaNumeros, subtraiNumeros } = require('../index');

test('A função deve somar dois números', () => {
  const esperado = 1000;
  const retornado = somaNumeros(900, 100);
  expect(retornado).toBe(esperado);
});

test('A função deve subtrair dois números', () => {
  const esperada = 300;
  const retornada = subtraiNumeros(600, 300);
  expect(retornada).toBe(esperada);
});
