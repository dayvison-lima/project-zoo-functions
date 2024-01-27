const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const quantityChild = entrants.filter((person) => person.age < 18).length;
  const quantityAdult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const quantitySenior = entrants.filter((person) => person.age >= 50).length;
  return {
    child: quantityChild,
    adult: quantityAdult,
    senior: quantitySenior,
  };
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const visitantes = countEntrants(entrants);
  const valorChild = visitantes.child * data.prices.child;
  const valorAdult = visitantes.adult * data.prices.adult;
  const valorSenior = visitantes.senior * data.prices.senior;
  return valorChild + valorAdult + valorSenior;
};

module.exports = { calculateEntry, countEntrants };
