"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __importDefault(require("./store"));
var container_1 = __importDefault(require("./../container"));
describe("Test Main Store", function () {
    var books = ["book1", "book2"];
    var games = ["game1", "game2", "game3"];
    var mainStore;
    var bookStoreMock;
    var gameStoreMock;
    beforeEach(function () {
        container_1.default.reset();
        bookStoreMock = { store: jest.fn() };
        bookStoreMock.store.mockReturnValue(books);
        gameStoreMock = { store: jest.fn() };
        gameStoreMock.store.mockReturnValue(games);
        container_1.default.register("game-store", gameStoreMock);
        container_1.default.register("book-store", bookStoreMock);
        // console.log("Test --> ", Container.providers);
        mainStore = new store_1.default();
    });
    it("should have called book store and game store functions", function () {
        // expect(Container.providers.size).toEqual(0);
    });
    it("should have content from book store and game store", function () {
        // expect(Container.providers.size).toEqual(0);
    });
});
