"use strict";

import { Animal } from "./animals";

class Reptile extends Animal {
  name: string;

  constructor(name: string) {
    super(name);
  }

  multiplyingBy() {
    return "laying eggs.";
  }
}

export { Reptile };
