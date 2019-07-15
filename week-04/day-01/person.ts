"use strict";

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(
    name: string = "Jane Doe",
    age: number = 30,
    gender: string = "female"
  ) {
    this.age = age;
    this.name = name;
    this.gender = gender;
  }

  introduce() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`;
  }

  getGoal() {
    return "My goal is: Live for the moment!";
  }
}

//const firstPerson: Person = new Person("Jane Doe", 30, "female");

export { Person };

//console.log(firstPerson.introduce());
//console.log(firstPerson.getGoal());
