"use strict";

export class Sum {
  integers: number[];

  constructor(integers: number[] = []) {
    this.integers = integers;
  }
  sumAll() {
    return this.integers.reduce((a: number, b: number) => a + b);
  }
}
