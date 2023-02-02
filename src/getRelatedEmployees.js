const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

const isManager = (id) => {
  // seu código aqui
  if (id === stephanieId || id === olaId || id === burlId) {
    return data.employees.some((manager) => id === manager.id);
  }
  return false;
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (isManager(managerId)) {
    return data.employees.filter((employee) => employee.managers.some((id) => id === managerId))
      .map((names) => `${names.firstName} ${names.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
