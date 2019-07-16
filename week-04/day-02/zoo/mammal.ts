"use strict";

import { Animal } from "./animals";

class Mammal extends Animal {
  name: string;

  constructor(name: string) {
    super(name);
  }

  multiplyingBy() {
    return "making sweet love and squeezing a smaller version of themselfs.";
  }
}

export { Mammal };
