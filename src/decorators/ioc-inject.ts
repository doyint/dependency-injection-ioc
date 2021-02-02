import container from "../container";

export default (name: string) => {
  console.log("Inject call ", name, container.providers);
  return (target: any, key: string) => {
    Object.defineProperty(target, key, {
      get: () => container.get(name.trim()),
      enumerable: true,
      configurable: true,
    });
  };
};
