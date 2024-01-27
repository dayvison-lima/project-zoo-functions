const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const funcionarioResp = employees.find((funcionario) => funcionario.id === id);
  const primeiroAnimal = funcionarioResp.responsibleFor[0];
  const listaAnimais = species.find((animal) => animal.id === primeiroAnimal).residents;
  const maisVelho = listaAnimais.sort((a, b) => b.age - a.age);
  const nome = maisVelho[0].name;
  const sexo = maisVelho[0].sex;
  const idade = maisVelho[0].age;
  return [nome, sexo, idade];
};
module.exports = getOldestFromFirstSpecies;
