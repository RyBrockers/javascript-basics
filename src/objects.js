const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  }
  return person;
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};
const hasProperty = (property, object) => {
  return object.hasOwnProperty([property]);
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = (people) => {
  const ages = people.map((person) => {
    return getProperty('age', person);
  })
  return ages;

};

const findByName = (name, people) => {
  return people.find((person) => person.name === name);


};


const findHondas = (cars) => {
  return cars.filter(cars => cars.manufacturer === "Honda")
};

const averageAge = (people) => {

  const total = getAges(people).reduce((acc, age) => {
    return acc + age;
  }, 0)
  return total / people.length;

};

const createTalkingPerson = (name, age) => {
  const person = createPerson(name, age);

  person.introduce = () => {
    return `Hi Fred, my name is ${name} and I am ${age}!`;
  };

  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
