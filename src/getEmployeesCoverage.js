const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const arrayGeral = data.employees.map((empregado) => {
  const array = {
    id: empregado.id,
    fullName: `${empregado.firstName} ${empregado.lastName}`,
    species: empregado.responsibleFor
      .map((id) => species.find((specie) => specie.id === id).name),
    locations: empregado.responsibleFor
      .map((id) => species.find((specie) => specie.id === id).location),
  };
  return array;
});

const getEmployeesCoverage = (obj) => {
  // seu código aqui
  if (obj === undefined) {
    return arrayGeral;
  }
  const paramsEntrada = arrayGeral
    .find((param) => param.fullName.includes(Object.values(obj))
      || param.id.includes(Object.values(obj)));
  if (paramsEntrada === undefined) {
    throw new Error('Informações inválidas');
  }
  return paramsEntrada;
};

module.exports = getEmployeesCoverage;
