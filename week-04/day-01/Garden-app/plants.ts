"use strict";

import { Flower } from "./flowers";
import { Tree } from "./trees";

class Plant {
  color: string;
  currentWaterLevel: number;
  absorptionLevel: number;
  minWaterLevel: number;
  needsWater: boolean;
  type: string = "Plant";

  constructor(
    color: string,
    currentWaterLevel: number = 0,
    absorptionLevel: number = 1,
    minWaterLevel: number = 1
  ) {
    this.color = color;
    this.currentWaterLevel = currentWaterLevel;
    this.absorptionLevel = absorptionLevel;
    this.minWaterLevel = minWaterLevel;
    this.needsWater = true;
  }

  waterPlants(wateringAmount: number): void {
    this.currentWaterLevel =
      this.currentWaterLevel + wateringAmount * this.absorptionLevel;
  }

  info() {
    if (this.currentWaterLevel < this.minWaterLevel) {
      return `The ${this.color} ${this.type}'s water level is ${
        this.currentWaterLevel
      } and it needs water`;
    } else {
      return `The ${this.color} ${this.type}'s water level is ${
        this.currentWaterLevel
      } and it doesn't need water`;
    }
  }

  neediness() {
    if (this.currentWaterLevel < this.minWaterLevel) {
      return (this.needsWater = true);
    } else {
      return (this.needsWater = false);
    }
  }
}

export { Plant };
