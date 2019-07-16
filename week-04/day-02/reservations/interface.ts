"use strict";

import { characterArray, daysArray } from "./array";

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  reservationCodeLength: number;

  constructor(length: number) {
    this.reservationCodeLength = length;
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomArrayObject(arrayName: string[]): string {
    return arrayName[this.getRandomInt(arrayName.length)];
  }

  cleanerRandomizedCode(arrayName: string[]) {
    let tempArray: string[] = [];
    let tempString: string;
    for (let i = 0; i < this.reservationCodeLength; i++) {
      tempArray.push(this.getRandomArrayObject(arrayName));
    }
    tempString = tempArray.join("");
    return tempString;
  }

  getDowBooking(): string {
    return this.getRandomArrayObject(daysArray);
  }

  getCodeBooking(): string {
    return this.cleanerRandomizedCode(characterArray);
  }

  getList(): string {
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }
}

let randomObject1: Reservation = new Reservation(8);
let randomObject2: Reservation = new Reservation(8);
let randomObject3: Reservation = new Reservation(8);
let randomObject4: Reservation = new Reservation(8);
let randomObject5: Reservation = new Reservation(8);
let randomObject6: Reservation = new Reservation(8);
let randomObject7: Reservation = new Reservation(8);

console.log(randomObject1.getList());
console.log(randomObject2.getList());
console.log(randomObject3.getList());
console.log(randomObject4.getList());
console.log(randomObject5.getList());
console.log(randomObject6.getList());
console.log(randomObject7.getList());

//Before:
//
//getRandomizedCode(arrayName) {
//    return `${this.getRandomArrayObject(arrayName)}${this.getRandomArrayObject(
//      arrayName
//    )}${this.getRandomArrayObject(arrayName)}${this.getRandomArrayObject(
//      arrayName
//    )}${this.getRandomArrayObject(arrayName)}${this.getRandomArrayObject(
//      arrayName
//    )}${this.getRandomArrayObject(arrayName)}${this.getRandomArrayObject(
//      arrayName
//    )}`;
//  }
//
//  getCodeBooking(): string {
//    return this.getRandomizedCode(characterArray);
//  }
