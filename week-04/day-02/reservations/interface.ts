"use strict";

import { characterArray, daysArray } from "./array";

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomArrayObject(arrayName: string[]): string {
    return arrayName[this.getRandomInt(arrayName.length)];
  }

  getRandomizedCode(arrayName) {
    return `${this.getRandomArrayObject(arrayName)}${this.getRandomArrayObject(
      arrayName
    )}${this.getRandomArrayObject(arrayName)}${this.getRandomArrayObject(
      arrayName
    )}${this.getRandomArrayObject(arrayName)}${this.getRandomArrayObject(
      arrayName
    )}${this.getRandomArrayObject(arrayName)}${this.getRandomArrayObject(
      arrayName
    )}`;
  }
  getDowBooking(): string {
    return this.getRandomArrayObject(daysArray);
  }
  getCodeBooking(): string {
    return this.getRandomizedCode(characterArray);
  }

  getList(): string {
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }
}

let randomObject1: Reservation = new Reservation();
let randomObject2: Reservation = new Reservation();
let randomObject3: Reservation = new Reservation();
let randomObject4: Reservation = new Reservation();
let randomObject5: Reservation = new Reservation();
let randomObject6: Reservation = new Reservation();
let randomObject7: Reservation = new Reservation();

console.log(randomObject1.getList());
console.log(randomObject2.getList());
console.log(randomObject3.getList());
console.log(randomObject4.getList());
console.log(randomObject5.getList());
console.log(randomObject6.getList());
console.log(randomObject7.getList());
