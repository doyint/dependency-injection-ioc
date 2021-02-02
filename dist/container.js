"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class Container implements IContainer {
var Container = /** @class */ (function () {
    function Container() {
        this._providers = new Map();
    }
    /**
     * register name,
     * instance associated to that name
     */
    Container.prototype.register = function (name, instance) {
        if (this._providers.has(name)) {
            throw new Error("Attempt to duplicate existing instance of " + name + " ");
        }
        this._providers.set(name, instance);
        // console.log("====> ", this._providers);
    };
    /**
     *
     * @param name return an intance of a created class
     */
    Container.prototype.get = function (name) {
        if (!this._providers.has(name)) {
            throw new Error("No instances of " + name + " exist");
        }
        return this._providers.get(name);
    };
    Object.defineProperty(Container.prototype, "providers", {
        get: function () {
            return this._providers;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * should removed all pre instantiated classes in the provider
     */
    Container.prototype.reset = function () {
        this._providers = new Map();
    };
    return Container;
}());
var container = new Container();
exports.default = container;
