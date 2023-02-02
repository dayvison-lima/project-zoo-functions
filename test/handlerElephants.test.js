const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('verifica se a função handlerElephants tem o comportamento esperado', () => {
    // testa se é uma função
    expect(typeof handlerElephants).toBe('function');
    // testa se retorna undefined quando o param é undefined
    expect(handlerElephants()).toBeUndefined();
    // testa se o param é uma string
    const notString = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(123)).toEqual(notString);
    // testa se retorna o número correto de elefantes
    expect(handlerElephants('count')).toEqual(4);
    // testa se retorna os nomes dos elefantes
    const names = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(names);
    // testa se retorna a idade média dos elefantes
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
