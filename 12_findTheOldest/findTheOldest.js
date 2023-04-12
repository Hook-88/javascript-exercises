//Reduce Array

//  get the age of oldest
//    get the yearOfbirth of oldest
//    get the yearOfDeath of oldest
//      if person doesn't have yearOfDeath
//        set year of death to this year
//    subtract yearOfbirth from yearOfdeath
  
//  get the age of current
//    get the yearOfbirth of current
//    get the yearOfDeath of current
//      if person doesn't have yearOfDeath
//        set year of death to this year
//    subtract yearOfbirth from yearOfdeath

//  if age of current is higher return current
//  else return oldest

const findTheOldest = function (people) {
  return people.reduce(function (oldestPerson, currentPerson) {
    oldestAge = calcAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    currentAge = calcAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    if (currentAge > oldestAge) {
      return currentPerson;
    } else {
      return oldestPerson;
    };
  });
};


function calcAge(birthYear, deathYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear;
}


module.exports = findTheOldest;





