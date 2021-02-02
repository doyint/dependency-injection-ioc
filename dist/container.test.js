"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __importDefault(require("./container"));
var MockClass = /** @class */ (function () {
    function MockClass() {
    }
    return MockClass;
}());
var MockClass2 = /** @class */ (function () {
    function MockClass2() {
    }
    return MockClass2;
}());
describe("Test IOC Container", function () {
    beforeEach(function () {
        container_1.default.reset();
    });
    it("should expect container to have no register provide", function () {
        expect(container_1.default.providers.size).toEqual(0);
    });
    it("should get class instance of register from name provided", function () {
        container_1.default.register("mock-class", MockClass);
        expect(container_1.default.providers.size).toEqual(1);
        expect(container_1.default.get("mock-class")).toBe(MockClass);
    });
    it("should return error if class name is not on the list", function () {
        container_1.default.register("mock-class", MockClass);
        expect(function () {
            container_1.default.get("fake-mock-class");
        }).toThrow();
        expect(container_1.default.get("mock-class")).toBe(MockClass);
    });
    it("should prevent duplicate class names", function () {
        container_1.default.register("mock-class", MockClass);
        expect(function () {
            container_1.default.register("mock-class", MockClass);
        }).toThrow();
    });
    it("should return list of registered providers", function () {
        container_1.default.register("mock-class", MockClass);
        container_1.default.register("mock-class2", MockClass2);
        expect(container_1.default.providers.size).toEqual(2);
    });
});
