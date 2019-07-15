"use strict";

import { Plant } from "./plants";

class Tree extends Plant {
  protected treeAbsorptionLevel: number;
  protected treeMinWaterLevel: number;
  type: string = "Tree";

  constructor(
    color: string,
    currentWaterLevel: number = 0,
    absorptionLevel: number = 1,
    minWaterLevel: number = 1,
    treeAbsorptionLevel: number = 0.4,
    treeMinWaterLevel: number = 10
  ) {
    super(color, currentWaterLevel, absorptionLevel, minWaterLevel);
    this.absorptionLevel = absorptionLevel * treeAbsorptionLevel;
    this.minWaterLevel = treeMinWaterLevel;
  }
}
export { Tree };
