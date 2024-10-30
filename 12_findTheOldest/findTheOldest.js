const findTheOldest = function (arr) {
  let ageAdded = arr.map((person) => {
    let age = person.yearOfDeath - person.yearOfBirth;
    if (isNaN(age)) {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      age = currentYear - person.yearOfBirth;
      // if (age > 100) {
      //   age = -1;
      // }
    }
    person.age = age;
    return person;
  });
  ageAdded.sort((a, b) => b.age - a.age);
  if (ageAdded[0].age) {
  }
  return ageAdded[0];
};

// Do not edit below this line
module.exports = findTheOldest;
