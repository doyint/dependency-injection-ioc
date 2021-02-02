import container from "../container";

export default (name: string) => {
  return (target: { new (): any }): void => {
    const instance = new target();
    container.register(name.trim(), instance);
  };
};
