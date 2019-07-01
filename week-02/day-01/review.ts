'use strict';

//let myName: string = 'Pascal';
//let yourName: string = 'Jani';
//let hisName: string = 'Mark';
//
//console.log(myName);
//console.log(yourName);
//console.log(hisName);

let myPuppy: string[] = ['Lisa', 'Morzsi', 'Furkesz'];

console.log(myPuppy[0]);

console.log(myPuppy);

myPuppy.forEach(function (item) {
    console.log(item);
});


let hisPuppy: string[] = ['Tappancs', 'Lusta', 'Csibesz'];

for(let i : number =0; i < myPuppy.length; i++) {
    console.log(myPuppy[0]);
}

let diffArray: [string, boolean] = ['Mark', true];

//tople ^

let diffArray2: any[] = ['Pascal', 'Eszti'];

let diffArray3: Array<string | number> = [];

