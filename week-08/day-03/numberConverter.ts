'use strict';

let stringArray: string[] = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten'
];

let tens: string[] = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];

let decimalArray: string[] = [
  'twenty',
  'thirty',
  'fourty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
];

export class numberConverter {
  inputNum: number;
  reverseArray: number[];
  numLength: number;
  errorMessage: string;

  constructor(inputNum: any) {
    if (typeof inputNum === 'number') {
      this.inputNum = inputNum;
      this.reverseArray = this.splitNum().reverse();
      this.numLength = this.reverseArray.length;
    } else {
      this.errorMessage = "Given arguement can't be proccesed.";
    }
  }

  splitNum(): number[] {
    return this.inputNum
      .toString(10)
      .split('')
      .map(Number);
  }

  ifZero(): string {
    return 'zero dollar';
  }

  ifOrderZero(): string {
    return stringArray[this.reverseArray[0]] + ' dollar/s';
  }

  ifOrderOneLessThanTwenty(): string {
    return tens[this.reverseArray[0]] + ' dollar/s';
  }

  ifOrderOne(): string {
    if (this.reverseArray[1] === 1) {
      return this.ifOrderOneLessThanTwenty();
    } else {
      return decimalArray[this.reverseArray[1] - 2] + ' ' + this.ifOrderZero();
    }
  }

  ifOrderTwo() {
    return (
      stringArray[this.reverseArray[2]] + ' hundred and ' + this.ifOrderOne()
    );
  }

  ifOrderThree() {
    return stringArray[this.reverseArray[3]] + ' thousand ' + this.ifOrderTwo();
  }

  controller() {
    if (this.numLength === 1 && this.inputNum === 0) {
      return this.ifZero();
    } else if (this.numLength === 1) {
      return this.ifOrderZero();
    } else if (this.numLength === 2) {
      return this.ifOrderOne();
    } else if (this.numLength === 3) {
      return this.ifOrderTwo();
    } else if (this.numLength === 4) {
      return this.ifOrderThree();
    } else return this.errorMessage;
  }
}
