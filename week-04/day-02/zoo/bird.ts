"use strict";

import { Animal } from "./animals";

class Bird extends Animal {
  name: string;

  constructor(name: string) {
    super(name);
  }

  multiplyingBy() {
    return "laying eggs.";
  }
}

export { Bird };
