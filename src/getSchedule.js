const { species, hours } = require('../data/zoo_data');

const daysOfWeek = Object.keys(hours);

const zooSchedule = daysOfWeek.reduce((schedule, day) => {
  const horario = schedule;
  horario[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter((animal) => animal.availability.includes(day)).map((a) => a.name),
  };
  return horario;
}, {});

zooSchedule.Monday = {
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return zooSchedule;
  }

  const isAnimal = species.some((cond) => scheduleTarget === cond.name);

  if (!isAnimal && daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: zooSchedule[scheduleTarget] };
  }

  if (isAnimal) {
    const animalAvailability = species
      .find((animal) => animal.name === scheduleTarget).availability;
    const availableDays = daysOfWeek.filter((day) => animalAvailability.includes(day));
    return availableDays;
  }

  return zooSchedule;
}

module.exports = getSchedule;
