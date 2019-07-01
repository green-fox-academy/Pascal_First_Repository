let numberToMultiply: number = 12;

let twice: number = numberToMultiply * 2;
console.log(twice);

let anothernumberToMultiply: number = 11;

let twiceAnotherOne: number = anothernumberToMultiply * 2;
console.log(twiceAnotherOne);



function numberToChangeAndPrint(inputNumber: number) {
    let doubledValue: number = inputNumber * 2;
    console.log(doubledValue)
}

let newArray: number [] = [12, 23, 45];

numberToChangeAndPrint(12);

newArray.forEach(numberToChangeAndPrint);
    