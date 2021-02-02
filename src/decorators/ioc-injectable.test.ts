import Container from "../container";
import IocInjectable from "./ioc-injectable";

describe("Test IocInjectable", () => {
  it("should expect container to be empty before injection", () => {
    expect(Container.providers.size).toEqual(0);
  });
  it("should expect container to have more than one provider after injection", () => {
    @IocInjectable("mockBookStore")
    class MockBookStore {}
    expect(Container.providers.size).toEqual(1);
  });
});
