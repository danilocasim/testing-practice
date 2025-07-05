import { capitalize } from "../index.js";

describe("Capitalize", () => {
  it("Should return something", () => {
    expect(capitalize("danilo")).toBeDefined();
  });

  it("Should return truthy values", () => {
    expect(capitalize("casim")).toBeTruthy();
  });

  it("Should return capitalized string value", () => {
    expect(capitalize("danilo")).toBe("Danilo");
  });

  it("Should return null if there's no value", () => {
    expect(capitalize()).toBeNull();
  });
});
