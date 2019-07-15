"use strict";

import { Aircraft } from "./aircrafts";

class F16 extends Aircraft {
  type = "F16";
  maxAmmo: number;
  baseDamage: number;

  constructor(
    ammoCount: number = 0,
    maxAmmo: number = 8,
    baseDamage: number = 30
  ) {
    super(ammoCount);
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }
}

export { F16 };
