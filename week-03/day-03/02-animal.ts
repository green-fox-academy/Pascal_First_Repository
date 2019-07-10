"use strict";
export {};

//
//    Every animal has a hunger value, which is a whole number
//    Every animal has a thirst value, which is a whole number
//    when creating a new animal object these values are created with the default 50 value
//    Every animal can eat() which decreases their hunger by one
//    Every animal can drink() which decreases their thirst by one
//    Every animal can play() which increases both by one
//

class Animal {
  hunger: number;
  thirst: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  drink(): number {
    return this.thirst--;
  }

  eat(j): number {
    return (this.hunger = this.hunger - j);
  }

  play(): void {
    this.thirst++;
    this.hunger++;
  }
}

let Tiger: Animal = new Animal();
Tiger.eat(5);

let Giraffe: Animal = new Animal();
Giraffe.play();

let Elephant: Animal = new Animal();
Elephant.drink();
