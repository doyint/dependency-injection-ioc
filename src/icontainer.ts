interface IContainer {
  register(name: string, instance: object): void;
  get(name: string): any;
  reset(): void;
  providers: Map<string, object>;
}

export default IContainer;
