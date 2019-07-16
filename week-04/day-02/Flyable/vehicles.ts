"use strict";

import { Flyable } from "./flyable";

abstract class Vehicle {
  name: string;
  type: string;
  color: string;

  constructor(name: string, type: string, color: string = "olive") {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

export { Vehicle };
