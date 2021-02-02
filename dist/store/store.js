"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_injectable_1 = __importDefault(require("../decorators/ioc-injectable"));
var ioc_inject_1 = __importDefault(require("../decorators/ioc-inject"));
var book_store_1 = __importDefault(require("./book-store"));
var game_store_1 = __importDefault(require("./game-store"));
var Store = /** @class */ (function () {
    function Store() {
        this._books = this._gameStore.store;
        this._games = this._bookStore.store;
        this._store = { games: this._games, books: this._books };
        // console.log("Main store ---> ", this._store, this._gameStore);
        // console.log("Main store ---> ", this.gameStore);
    }
    Object.defineProperty(Store.prototype, "content", {
        get: function () {
            return this._store;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        ioc_inject_1.default("book-store"),
        __metadata("design:type", book_store_1.default)
    ], Store.prototype, "_bookStore", void 0);
    __decorate([
        ioc_inject_1.default("game-store"),
        __metadata("design:type", game_store_1.default)
    ], Store.prototype, "_gameStore", void 0);
    Store = __decorate([
        ioc_injectable_1.default("store"),
        __metadata("design:paramtypes", [])
    ], Store);
    return Store;
}());
exports.default = Store;
