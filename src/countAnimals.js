const data = require('../data/zoo_data');

const animalsBySex = (animal) => {
  const animals = data.species.find((spec) => spec.name === animal.species).residents;
  const animalSex = animals
    .reduce((acc, curr) => ((curr.sex === animal.sex) ? (acc + 1) : (acc)), 0);
  return animalSex;
};

const animalsWithoutSex = (animal) => (data.species
  .find((spec) => spec.name === animal.species).residents.length);

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).length === 1) {
    return animalsWithoutSex(animal);
  }
  return animalsBySex(animal);
};

module.exports = countAnimals;
