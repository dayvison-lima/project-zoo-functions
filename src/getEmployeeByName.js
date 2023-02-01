const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }

  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
};

module.exports = getEmployeeByName;
