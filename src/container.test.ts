import Container from "./container";

class MockClass {}
class MockClass2 {}

describe("Test IOC Container", () => {
  beforeEach(() => {
    Container.reset();
  });
  it("should expect container to have no register provide", () => {
    expect(Container.providers.size).toEqual(0);
  });
  it("should get class instance of register from name provided", () => {
    Container.register("mock-class", MockClass);
    expect(Container.providers.size).toEqual(1);
    expect(Container.get("mock-class")).toBe(MockClass);
  });
  it("should return error if class name is not on the list", () => {
    Container.register("mock-class", MockClass);
    expect(() => {
      Container.get("fake-mock-class");
    }).toThrow();
    expect(Container.get("mock-class")).toBe(MockClass);
  });

  it("should prevent duplicate class names", () => {
    Container.register("mock-class", MockClass);
    expect(() => {
      Container.register("mock-class", MockClass);
    }).toThrow();
  });

  it("should return list of registered providers", () => {
    Container.register("mock-class", MockClass);
    Container.register("mock-class2", MockClass2);
    expect(Container.providers.size).toEqual(2);
  });
});
