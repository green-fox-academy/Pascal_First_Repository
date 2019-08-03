import { Player } from './player';
import { Contestant } from './contestant';
import { Bet } from './bet';

'use strict';

class Race {
  contestants: Contestant[];
  players: Player[];

  constructor(contestants: Contestant[] = [], players: Player[] = []) {
    this.contestants = contestants;
    this.players = players;
  }

  getRandom(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  startRace(): void {
    let tempArr: Contestant[] = [];
    while (this.contestants.length !== 0) {
      let randomIndex = Math.floor(Math.random() * this.contestants.length);
      tempArr.push(this.contestants[randomIndex]);
      this.contestants.splice(randomIndex, 1);
    }
    this.contestants = tempArr;
    for (let i = 0; i < this.contestants.length; i++) {
      this.contestants[i].setPlacement(i + 1);
    }
    this.contestants.forEach(function(value) {
      console.log(value.toString());
    });
    this.players.forEach(function(value) {
      for (let j = 0; j < value.bets.length; j++) {
        if (value.bets[j].contestant.name === tempArr[0].name)
          console.log(
            `${value.name} has won ${2 * value.bets[j].amount}$ with the bet: ${
              value.bets[j].betId
            }`
          );
        value.account += 2 * value.bets[j].amount;
      }
    });
  }
}

let Race1: Race = new Race();

let Billy: Contestant = new Contestant('Billy');
Race1.contestants.push(Billy);
let Joe: Contestant = new Contestant('Joe');
Race1.contestants.push(Joe);
let Bolt: Contestant = new Contestant('Bolt');
Race1.contestants.push(Bolt);
let Jack: Contestant = new Contestant('Jack');
Race1.contestants.push(Jack);
let Alex: Contestant = new Contestant('Alex');
Race1.contestants.push(Alex);

let Pascal: Player = new Player('Pascal', 100);
Race1.players.push(Pascal);
let Jani: Player = new Player('Jani', 30);
Race1.players.push(Jani);
let Jenn: Player = new Player('Jenn', 430);
Race1.players.push(Jenn);

Pascal.makeBet(Bolt, 50);
Pascal.makeBet(Billy, 30);
Jani.makeBet(Jack, 60);
Jenn.makeBet(Bolt, 30);

Race1.startRace();
