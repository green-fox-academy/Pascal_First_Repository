"use strict";

import { Person } from "./person";

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(
    previousOrganization: string = "The School of Life",
    skippedDays: number = 0
  ) {
    super();
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  getGoal() {
    return "My goal is: Be a junior software developer.";
  }

  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${
      this.previousOrganization
    } who skipped ${this.skippedDays} days from the course already.`;
  }
  skipDays(numberOfDays) {
    return (this.skippedDays += numberOfDays);
  }
}

export { Student };
