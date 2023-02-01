const data = require('../data/zoo_data');

const objAnimais = data.species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});

console.log(objAnimais);

const countAnimals = (animal) => {
  // seu código aqui
  if (animal === undefined) return objAnimais;
};

module.exports = countAnimals;
