import IocInjectable from "../decorators/ioc-injectable";
import IStore from "./istore";

@IocInjectable("game-store")
class GameStore implements IStore {
  private _store: Array<string>;

  constructor() {
    this._store = ["mario-01", "mario-02", "mario-03", "mario-04", "mario-05"];
  }

  public get store(): Array<string> {
    return this._store;
  }
}

export default GameStore;
