"use strict";

import { F16 } from "./f16";
import { F35 } from "./f35";

class Aircraft {
  ammoCount: number;

  constructor(ammoCount: number = 0) {
    this.ammoCount = ammoCount;
  }

  fight() {}
}

export { Aircraft };
