import { reverseString } from "../index.js";

describe("Reverse String", () => {
  it("Should return something", () => {
    expect(reverseString("Danilo")).toBeDefined();
  });

  it("Should return truthy values", () => {
    expect(reverseString("Danilo")).toBeTruthy();
  });

  it("Should return reverse string", () => {
    expect(reverseString("Danilo")).toBe("olinaD");
  });

  it("Should return null in empty values", () => {
    expect(reverseString()).toBeNull();
  });
});
