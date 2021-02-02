"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __importDefault(require("../container"));
var ioc_injectable_1 = __importDefault(require("./ioc-injectable"));
describe("Test IocInjectable", function () {
    it("should expect container to be empty before injection", function () {
        expect(container_1.default.providers.size).toEqual(0);
    });
    it("should expect container to have more than one provider after injection", function () {
        var MockBookStore = /** @class */ (function () {
            function MockBookStore() {
            }
            MockBookStore = __decorate([
                ioc_injectable_1.default("mockBookStore")
            ], MockBookStore);
            return MockBookStore;
        }());
        expect(container_1.default.providers.size).toEqual(1);
    });
});
