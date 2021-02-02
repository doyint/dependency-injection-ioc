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
var ioc_injectable_1 = __importDefault(require("./decorators/ioc-injectable"));
var GameStore = /** @class */ (function () {
    function GameStore() {
        this._store = ["mario-01", "mario-02", "mario-03", "mario-04", "mario-05"];
    }
    Object.defineProperty(GameStore.prototype, "store", {
        get: function () {
            return this._store;
        },
        enumerable: false,
        configurable: true
    });
    GameStore = __decorate([
        ioc_injectable_1.default("game-store"),
        __metadata("design:paramtypes", [])
    ], GameStore);
    return GameStore;
}());
exports.default = GameStore;
