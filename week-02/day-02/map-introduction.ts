let maps = {};

console.log(maps);

maps[97] = 'a';
maps[98] = 'b';
maps[99] = 'c';
maps[65] = 'A';
maps[66] = 'B';
maps[67] = 'C';

console.log(maps);

console.log(Object.keys(maps));

maps[68] = 'D';

console.log(Object.keys(maps).length);

console.log(Object(maps[99]))

delete maps[97];

console.log(maps);

maps = {}

console.log(maps);