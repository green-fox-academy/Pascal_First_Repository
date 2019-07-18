"use strict";

export class Sum {
  integers: number[];

  constructor(integers: number[] = []) {
    this.integers = integers;
  }
  sumAll() {
    if (this.integers.length > 1) {
      return this.integers.reduce((a: number, b: number) => a + b);
    } else if ((this.integers.length = 1)) {
      return this.integers.reduce((a: number) => a * 1);
    } else {
      return "The list is empty.";
    }
  }
}
