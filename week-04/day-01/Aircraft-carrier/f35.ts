"use strict";

import { Aircraft } from "./aircrafts";

class F35 extends Aircraft {
  type = "F35";
  maxAmmo: number;
  baseDamage: number;

  constructor(
    ammoCount: number = 0,
    maxAmmo: number = 12,
    baseDamage: number = 50
  ) {
    super(ammoCount);
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }
}

export { F35 };
