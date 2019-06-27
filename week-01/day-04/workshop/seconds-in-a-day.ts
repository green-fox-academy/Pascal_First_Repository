let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let remainingTime: number = (24 * 60 * 60) - (currentHours * 60 * 60) - (currentMinutes * 60) - currentSeconds;

console.log(remainingTime);