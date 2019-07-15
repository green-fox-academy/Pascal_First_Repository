"use strict";

import { Flower } from "./flowers";
import { Tree } from "./trees";
import { Plant } from "./plants";

class Garden {
  plants: Plant[];

  constructor(plants: Plant[] = []) {
    this.plants = plants;
  }

  waterPlants(wateringAmount: number): void {
    for (let i = 0; i < this.plants.length; i++) {
      let item = this.plants[i];
      if (item instanceof Flower) {
        item.currentWaterLevel =
          item.currentWaterLevel +
          (wateringAmount / this.plants.length) * item.absorptionLevel;
      } else if (item instanceof Tree) {
        item.currentWaterLevel =
          item.currentWaterLevel +
          (wateringAmount / this.plants.length) * item.absorptionLevel;
      }
    }
  }
}
