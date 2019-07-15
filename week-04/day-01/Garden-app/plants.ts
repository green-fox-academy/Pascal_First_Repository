"use strict";

import { Flower } from "./flowers";
import { Tree } from "./trees";

class Plant {
  color: string;
  currentWaterLevel: number;
  absorptionLevel: number;
  minWaterLevel: number;

  constructor(
    color: string,
    currentWaterLevel: number,
    absorptionLevel: number = 1,
    minWaterLevel: number
  ) {
    this.color = color;
    this.currentWaterLevel = currentWaterLevel;
    this.absorptionLevel = absorptionLevel;
    this.absorptionLevel = absorptionLevel;
  }

  waterPlants(wateringAmount: number): void {
    this.currentWaterLevel =
      this.currentWaterLevel + wateringAmount * this.absorptionLevel;
  }
}

export { Plant };
