///<reference path="../typings/browser.d.ts" />

export class ZIndexManager {
  highest: number;
  lowest: number;

  constructor() {
    this.highest = 10000;
    this.lowest = -10000;
  }

  public getHighest(): number {
    return ++this.highest;
  }

  public getLowest(): number {
    return --this.lowest;
  }

}

export default new ZIndexManager();