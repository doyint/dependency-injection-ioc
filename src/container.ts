import IContainer from "./icontainer";

// class Container implements IContainer {
class Container {
  private _providers: Map<string, object>;
  constructor() {
    this._providers = new Map<string, object>();
  }

  /**
   * register name,
   * instance associated to that name
   */
  public register(name: string, instance: object): void {
    if (this._providers.has(name)) {
      throw new Error(`Attempt to duplicate existing instance of ${name} `);
    }
    this._providers.set(name, instance);
    // console.log("====> ", this._providers);
  }

  /**
   *
   * @param name return an intance of a created class
   */
  public get(name: string): any {
    if (!this._providers.has(name)) {
      throw new Error(`No instances of ${name} exist`);
    }
    return this._providers.get(name);
  }

  public get providers(): Map<string, object> {
    return this._providers;
  }

  /**
   * should removed all pre instantiated classes in the provider
   */
  public reset(): void {
    this._providers = new Map();
  }
}
const container = new Container();
export default container;
