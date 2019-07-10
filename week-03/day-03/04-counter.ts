"use strict";
export {};

//which has an integer property
//when creating it should have a default value 0 or we can specify it when creating
//we can add(number) to increase the counter's value by a whole number
//or we can add() without parameters just increasing the counter's value by one
//and we can get() the current value as string
//also we can reset() the value to the initial value

class Counter {
  money: number;

  constructor(money: number = 0) {
    this.money = money;
  }

  add(): number {
    return this.money++;
  }
  addSpecific(i: number): number {
    return (this.money = this.money + i);
  }
  get(): string {
    return this.money.toString();
  }
  reset(): void {
    this.money = 0;
  }
}

let newStatus: Counter = new Counter();

console.log(newStatus.addSpecific(6000));
console.log(newStatus.addSpecific(4000));
