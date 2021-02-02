import container from "../container";

export default (name: string) => {
  return (target: any, key: string) => {
    Object.defineProperty(target, key, {
      get: () => container.get(name.trim()),
      enumerable: true,
      configurable: true,
    });
  };
};
