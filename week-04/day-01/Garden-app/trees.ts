"use strict";

import { Plant } from "./plants";

class Tree extends Plant {
  treeAbsorptionLevel: number;
  treeMinWaterLevel: number;

  constructor(
    color: string,
    currentWaterLevel: number,
    absorptionLevel: number,
    minWaterLevel: number,
    treeAbsorptionLevel: number = 0.4,
    treeMinWaterLevel: number = 10
  ) {
    super(color, currentWaterLevel, absorptionLevel, minWaterLevel);
    this.absorptionLevel = absorptionLevel * treeAbsorptionLevel;
    this.minWaterLevel = treeMinWaterLevel;
  }

  info() {
    if (this.currentWaterLevel < this.minWaterLevel) {
      return `The ${this.color} Tree needs water`;
    } else {
      return `The ${this.color} Tree doesn't need water`;
    }
  }
}
export { Tree };
