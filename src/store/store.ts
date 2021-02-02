import IocInjectable from "../decorators/ioc-injectable";
import IocInject from "../decorators/ioc-inject";
import BookStore from "./book-store";
import GameStore from "./game-store";

@IocInjectable("store")
class Store {
  @IocInject("book-store") private _bookStore: BookStore;
  @IocInject("game-store") private _gameStore: GameStore;

  public _store: {};
  public _books: any;
  public _games: any;

  constructor() {
    this._books = this._gameStore.store;
    this._games = this._bookStore.store;
    this._store = { games: this._games, books: this._books };
    // console.log("Main store ---> ", this._store, this._gameStore);
    // console.log("Main store ---> ", this.gameStore);
  }

  public get content(): object {
    return this._store;
  }
}

export default Store;
