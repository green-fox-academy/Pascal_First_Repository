"use strict";

import { Flower } from "./flowers";
import { Tree } from "./trees";
import { Plant } from "./plants";

class Garden {
  plants: Plant[];

  constructor(plants: Plant[] = []) {
    this.plants = plants;
  }

  waterAll(waterAmount) {
    console.log(`Watering with ${waterAmount}`);
    let dividingArray: Plant[] = [];
    this.plants.forEach(function(plant) {
      if (plant.neediness()) {
        dividingArray.push(plant);
      }
    });
    dividingArray.forEach(function(plant) {
      plant.waterPlants(waterAmount / dividingArray.length);
    });
    this.plants.forEach(function(plant) {
      console.log(plant.info());
    });
  }
}

let myLittleFuckedUpGarden: Garden = new Garden();

let Tree1: Tree = new Tree("green", 5);
myLittleFuckedUpGarden.plants.push(Tree1);
console.log(Tree1.info());

let Tree2: Tree = new Tree("white", 0);
myLittleFuckedUpGarden.plants.push(Tree2);
console.log(Tree2.info());

let Tree3: Tree = new Tree("yellow", 20);
myLittleFuckedUpGarden.plants.push(Tree3);
console.log(Tree3.info());

let Flower1: Flower = new Flower("red", 1);
myLittleFuckedUpGarden.plants.push(Flower1);
console.log(Flower1.info());

let Flower2: Flower = new Flower("blue", 6);
myLittleFuckedUpGarden.plants.push(Flower2);
console.log(Flower2.info());

let Flower3: Flower = new Flower("gold", 200);
myLittleFuckedUpGarden.plants.push(Flower3);
console.log(Flower3.info());

myLittleFuckedUpGarden.waterAll(70);
