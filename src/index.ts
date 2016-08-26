///<reference path="../typings/browser.d.ts" />
var manager;
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

export default function(isSingleton : boolean = true) {
  if (isSingleton) {
    if (!manager) {
      manager = new ZIndexManager();
    }
    return manager;
  } else {
    return new ZIndexManager();
  }
};
