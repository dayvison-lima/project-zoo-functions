/* eslint-disable sonarjs/cognitive-complexity */
const { species } = require('../data/zoo_data');

const arrayLocal = ['NE', 'NW', 'SE', 'SW'];

const objetoGeral = (options) => {
  const { includeNames, sorted, sex } = options || {};
  return arrayLocal.reduce((acc, element) => {
    const animalsInLocation = species.filter((animal) => animal.location === element);
    if (includeNames) {
      acc[element] = animalsInLocation.map((animal) => {
        const animalNames = animal.residents.map((resident) => resident.name);
        const filteredNames = sex
          ? animalNames.filter((name) => animal.residents
            .find((resident) => resident.sex === sex && resident.name === name))
          : animalNames;
        return { [animal.name]: sorted ? filteredNames.sort() : filteredNames };
      });
    } else {
      acc[element] = animalsInLocation.map((animal) => animal.name);
    }
    return acc;
  }, {});
};

function getAnimalMap(options) {
  return objetoGeral(options);
}

module.exports = getAnimalMap;
