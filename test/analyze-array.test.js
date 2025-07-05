import { analyzeArray } from "../index.js";

describe("Analyze Array", () => {
  it("Should return an object", () => {
    expect(analyzeArray).toBeInstanceOf(Object);
  });

  it("Should return the min, max, average, length in object", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
