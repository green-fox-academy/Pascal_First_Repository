"use strict";

import { Person } from "./person";

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(
    name: string = "Jane Doe",
    age: number = 30,
    gender: string = "female",
    previousOrganization: string = "The School of Life",
    skippedDays: number = 0
  ) {
    super(name, age, gender);
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
