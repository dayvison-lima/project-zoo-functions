const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica a função getOpeningHours tem o comportamento esperado', () => {
    // verifica se a função é do tipo função;
    expect(typeof getOpeningHours).toBe('function');
    // verifica se mostra que está fechado
    const result1 = 'The zoo is closed';
    expect(getOpeningHours('Monday', '07:20-AM')).toEqual(result1);
    // verifica outro horário
    const result2 = 'The zoo is open';
    expect(getOpeningHours('Sunday', '03:20-PM')).toEqual(result2);
    // verifica se retorna os horários passando a função sem parâmetros
    const result3 = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(result3);
    // veririca se mostra erro ao passar um valor inválido no lugar de AM/PM
    expect(() => getOpeningHours('sunday', '09:50-VM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    // verifica se mostra erro se a hora não representa um número
    expect(() => getOpeningHours('sunday', '09:s0-PM')).toThrow(Error);
    // verifica se a hora é entre 0 e 12
    expect(() => getOpeningHours('sunday', '13:00-PM')).toThrow(Error);
  });
});
