"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __importDefault(require("../container"));
exports.default = (function (name) {
    console.log("Inject call ", name, container_1.default.providers);
    return function (target, key) {
        Object.defineProperty(target, key, {
            get: function () { return container_1.default.get(name.trim()); },
            enumerable: true,
            configurable: true,
        });
    };
});
