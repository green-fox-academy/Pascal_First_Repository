let a: number = 123;
let b: number = 526;
let c: number = 0;

/*
c = a;
a = b;
b = c;
*/

/*
a = a + b;
b = a - b;
a = a - b;
*/

/*
a = a ^ b;
b = a ^ b;
a = a ^ b;
*/

a = b + (b = a, 0);

console.log(a);
console.log(b);
