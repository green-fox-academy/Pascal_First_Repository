"use strict";

import { Flyable } from "./flyable";
import { Vehicle } from "./vehicles";
import { Bird } from "./../zoo/bird";

class Helicopter extends Vehicle implements Flyable {
  constructor(name: string, type: string, color: string = "olive") {
    super(name, type, color);
  }

  land() {
    return `can land anywhere if there's just enough space for the whole vehicle.`;
  }

  fly() {
    return `can fly anywhere except very high, very the air is too thin.`;
  }

  takeOff() {
    return `can take off vertically.`;
  }
}

let helicopterOne: Helicopter = new Helicopter(
  "Drone Anti -Submarine Helicopter",
  "military"
);
