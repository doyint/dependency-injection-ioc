import IocInjectable from "../decorators/ioc-injectable";
import IStore from "./istore";

@IocInjectable("book-store")
export default class BookStore implements IStore {
  private _store: Array<string>;

  constructor() {
    this._store = ["book-01", "book-02", "book-03"];
  }

  public get store(): Array<string> {
    return this._store;
  }
}
