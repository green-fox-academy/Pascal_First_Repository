import { Contestant } from './contestant';
import { Player } from './player';
'use strict';

export class Bet {
  betId: number;
  amount: number;
  player: Player;
  contestant: Contestant;

  constructor(amount: number, player: Player, contestant: Contestant) {
    this.amount = amount;
    this.player = player;
    this.contestant = contestant;
    this.betId = this.getRandom(1000, 9999);
  }

  getRandom(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
