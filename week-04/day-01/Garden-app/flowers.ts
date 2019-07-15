"use strict";

import { Plant } from "./plants";

class Flower extends Plant {
  protected flowerAbsorptionLevel: number;
  protected flowerMinWaterLevel: number;
  type: string = "Flower";

  constructor(
    color: string,
    currentWaterLevel: number = 0,
    absorptionLevel: number = 1,
    minWaterLevel: number = 1,
    flowerAbsorptionLevel: number = 0.75,
    flowerMinWaterLevel: number = 5
  ) {
    super(color, currentWaterLevel, absorptionLevel, minWaterLevel);
    this.absorptionLevel = absorptionLevel * flowerAbsorptionLevel;
    this.minWaterLevel = flowerMinWaterLevel;
  }
}
export { Flower };
