"use strict";

import { Bird } from "./bird";
import { Mammal } from "./mammal";
import { Reptile } from "./reptile";

abstract class Animal {
  name: string;
  age: number;
  gender: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  multiplyingBy() {}

  makeLove() {
    return this.multiplyingBy();
  }
}

export { Animal };
