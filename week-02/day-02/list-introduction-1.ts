
//   Iterate through the list and print out each name


let people = [];

console.log(people.length);

people.push('William');

console.log(people);

people.push('John', 'Amanda');

console.log(people.length);

console.log(people[2]);

people.forEach(function (Iterate) {
    console.log(Iterate)
})

people.forEach(function (Iterate, i) {
    console.log(i + 1 + '.', Iterate)
})

people.splice(people[2], 1);

console.log(people);

people.reverse().forEach(function (item) {
    console.log(item)
})

people = [];

console.log(people)