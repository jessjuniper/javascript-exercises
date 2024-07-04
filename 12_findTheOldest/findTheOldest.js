const findTheOldest = function(people) {
    let oldest = people[0];
    let currentYear = new Date().getFullYear();
    people.forEach(person => {
        if (person.yearOfDeath !== undefined) {
            if (person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
                oldest = person;
            }
        }
        else {
            person.yearOfDeath = currentYear;
            if (person.yearOfDeath - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
                oldest = person;
            }
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
