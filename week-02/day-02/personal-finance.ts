let expenses: number[] = [500, 1000, 1250, 175, 800, 120];


let total: number = 0;
for (let i: number = 0; i < expenses.length; i++) {
    total += expenses[i];
}

console.log('Total spending: ' + total);

console.log('Greatest expense: ' + Math.max(...expenses));

console.log('Lowest expense: ' + Math.min(...expenses));

console.log('Average expense: ' + Math.round(total / expenses.length));