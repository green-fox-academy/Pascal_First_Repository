"use strict";

import { Person } from "./person";
import { Student } from "./student";
import { Mentor } from "./mentors";
import { Sponsor } from "./sponsor";

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string, students: Student[] = [], mentors: Mentor[] = []) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }

  addStudent(Student) {
    return this.students.push(Student);
  }

  addMentor(Mentor) {
    return this.mentors.push(Mentor);
  }

  info() {
    return `The ${this.name} cohort has ${this.students.length} students and ${
      this.mentors.length
    } mentors.`;
  }
}

let people = [];

let mark = new Person("Mark", 46, "male");
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student("John Doe", 20, "male", "BME");
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor("Gandhi", 148, "male", "senior");
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor("Elon Musk", 46, "male", "SpaceX");
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort("AWESOME");
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();

console.log(mark.introduce());
console.log(mark.getGoal());

console.log(jane.introduce());
console.log(jane.getGoal());

console.log(john.introduce());
console.log(john.getGoal());

console.log(student.introduce());
console.log(student.getGoal());

console.log(gandhi.introduce());
console.log(gandhi.getGoal());

console.log(mentor.introduce());
console.log(mentor.getGoal());

console.log(elon.introduce());
console.log(elon.getGoal());

console.log(sponsor.introduce());
console.log(sponsor.getGoal());

console.log(awesome.info());
