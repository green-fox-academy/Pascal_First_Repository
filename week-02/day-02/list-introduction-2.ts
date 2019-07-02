let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//let temp = ListA;
let ListB = [...ListA];
//ListA = temp;

console.log(ListA);

ListB.splice(3, 1)

console.log(ListB);
console.log(ListA);

ListA.splice(3, 0, 'Kiwifruit');

console.log(ListA);

console.log('ListA length: ' + ListA.length + ', ' + 'ListB length: ' + ListB.length);

console.log(ListA.indexOf('Avocado'));

console.log(ListB.indexOf('Durian'));

ListB.push('Passion Fruit', 'Pomelo');

console.log(ListB);

console.log(ListA[2]);
