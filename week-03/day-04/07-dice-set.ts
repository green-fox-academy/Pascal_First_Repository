"use strict";

class DiceSet {
  dice: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dice = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }

  reroll(index?: number): void {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number): number[] | number {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        return this.dice;
      }
    } else {
      return this.dice[index];
    }
  }

  getAllSix() {
    let diceSet = new DiceSet();

    diceSet.roll();
    diceSet.getCurrent();

    for (let i = 0; i < diceSet.numOfDices; i++) {
      while (diceSet.getCurrent(i) != 6) {
        diceSet.reroll(i);
      }
    }
    console.log(diceSet.getCurrent());
  }

  getAllSixWithFor() {
    let diceSet = new DiceSet();

    diceSet.roll();
    diceSet.getCurrent();

    if (
      diceSet.getCurrent()[0] != 6 ||
      diceSet.getCurrent()[1] != 6 ||
      diceSet.getCurrent()[2] != 6 ||
      diceSet.getCurrent()[3] != 6 ||
      diceSet.getCurrent()[4] != 6 ||
      diceSet.getCurrent()[5] != 6
    ) {
      diceSet.reroll();
    } else {
      console.log(diceSet.getCurrent());
    }
  }
}

let getSixs: DiceSet = new DiceSet();
getSixs.getAllSix();
getSixs.getAllSixWithFor();
