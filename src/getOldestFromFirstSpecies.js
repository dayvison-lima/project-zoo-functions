const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const funcionarioResp = data.employees.find((funcionario) => funcionario.id === id);
  const primeiroAnimal = funcionarioResp.responsibleFor[0];
  const listaAnimais = data.species.find((animal) => animal.id === primeiroAnimal).residents;
  const maisVelho = listaAnimais.sort((a, b) => b.age - a.age);
  const nome = maisVelho[0].name;
  const sexo = maisVelho[0].sex;
  const idade = maisVelho[0].age;
  return [nome, sexo, idade];
  // const animais = data.species.find((animal) => animal.id === primeiroAnimalId);
};
console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = getOldestFromFirstSpecies;
