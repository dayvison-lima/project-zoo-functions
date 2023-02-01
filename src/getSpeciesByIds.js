const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui

  const result = data.species.filter((specie) => ids.some((id) => specie.id === id));
  if (ids === undefined) {
    return [];
  }
  return result;
};

module.exports = getSpeciesByIds;
