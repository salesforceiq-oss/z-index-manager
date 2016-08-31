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

export default function(isSingleton : boolean = true) {
  if (isSingleton) {
    var windowScope = <any>window;
    windowScope.zIndexManagerNamespace = windowScope.zIndexManagerNamespace || {};
    var manager = windowScope.zIndexManagerNamespace.manager;
    if (!manager) {
      manager = new ZIndexManager();
    }
    return manager;
  } else {
    return new ZIndexManager();
  }
};
