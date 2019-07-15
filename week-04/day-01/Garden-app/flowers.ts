"use strict";

import { Plant } from "./plants";

class Flower extends Plant {
  flowerAbsorptionLevel: number;
  flowerMinWaterLevel: number;

  constructor(
    color: string,
    currentWaterLevel: number,
    absorptionLevel: number,
    minWaterLevel: number,
    flowerAbsorptionLevel: number = 0.75,
    flowerMinWaterLevel: number = 5
  ) {
    super(color, currentWaterLevel, absorptionLevel, minWaterLevel);
    this.absorptionLevel = absorptionLevel * flowerAbsorptionLevel;
    this.minWaterLevel = flowerMinWaterLevel;
  }

  info() {
    if (this.currentWaterLevel < this.minWaterLevel) {
      return `The ${this.color} Flower needs water`;
    } else {
      return `The ${this.color} Flower doesn't need water`;
    }
  }
}
export { Flower };
