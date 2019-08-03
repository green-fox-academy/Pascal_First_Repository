import { Contestant } from './contestant';
import { Bet } from './bet';
'use strict';

export class Player {
  name: string;
  account: number;
  bets: Bet[];

  constructor(name: string, account: number, bets: Bet[] = []) {
    this.name = name;
    this.account = account;
    this.bets = bets;
  }

  makeBet(contestant: Contestant, amount: number): void {
    if (this.account >= amount) {
      this.bets.push(new Bet(amount, this, contestant));
      this.account -= amount;
    }
  }
}
