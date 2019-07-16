"use strict";

import { Animal } from "./animals";
import { Bird } from "./bird";
import { Mammal } from "./mammal";
import { Reptile } from "./reptile";

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.makeLove());
console.log("A " + mammal.getName() + " is breeding by " + mammal.makeLove());
console.log("A " + bird.getName() + " is breeding by " + bird.makeLove());
