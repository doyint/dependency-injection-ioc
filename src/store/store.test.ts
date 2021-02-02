import Container from "./../container";
import Store from "./store";
import BookStore from "./book-store";
import GameStore from "./game-store";

describe("Test Main Store", () => {
  const books = ["book1", "book2"];
  const games = ["game1", "game2", "game3"];

  let mainStore: Store;
  let bookStoreMock: BookStore;
  let gameStoreMock: GameStore;

  beforeEach(() => {
    bookStoreMock = { store: jest.fn() };
    gameStoreMock = { store: jest.fn() };

    (bookStoreMock.store as jest.Mock).mockReturnValue(books);
    (gameStoreMock.store as jest.Mock).mockReturnValue(games);

    Container.reset();
    Container.register("book-store", bookStoreMock);
    Container.register("game-store", gameStoreMock);
  });

  it("should have content from book store and game store", () => {
    // expect(gameStoreMock.store).toHaveBeenCalled();
  });
});
