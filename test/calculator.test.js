import { calculator } from "../index.js";

describe("Calculator", () => {
  describe("Add", () => {
    it("Should return anything", () => {
      expect(calculator.add(1, 2)).toBeDefined();
    });

    it("Should return NaN if one of the args is NaN", () => {
      expect(calculator.add(1, "F")).toBeNaN();
    });

    it("Should return null if there's no arg", () => {
      expect(calculator.add()).toBeNull();
    });

    it("Should return the sum of the numbers", () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
  });

  describe("Subtraction", () => {
    it("Should return anything", () => {
      expect(calculator.subtract(1, 2)).toBeDefined();
    });

    it("Should return NaN if one of the args is NaN", () => {
      expect(calculator.subtract(1, "F")).toBeNaN();
    });

    it("Should return null if there's no arg", () => {
      expect(calculator.subtract()).toBeNull();
    });

    it("Should return the sum of the numbers", () => {
      expect(calculator.subtract(2, 1)).toBe(1);
    });

    it("Should return negative", () => {
      expect(calculator.subtract(1, 4)).toBe(-3);
    });
  });

  describe("Multiply", () => {
    it("Should return anything", () => {
      expect(calculator.multiply(1, 2)).toBeDefined();
    });

    it("Should return NaN if one of the args is NaN", () => {
      expect(calculator.multiply(1, "F")).toBeNaN();
    });

    it("Should return null if there's no arg", () => {
      expect(calculator.multiply()).toBeNull();
    });

    it("Should return the product of the numbers", () => {
      expect(calculator.multiply(5, 5)).toBe(25);
    });
  });
  describe("Division", () => {
    it("Should return anything", () => {
      expect(calculator.divide(1, 2)).toBeDefined();
    });

    it("Should return NaN if one of the args is NaN", () => {
      expect(calculator.divide(1, "F")).toBeNaN();
    });

    it("Should return null if there's no arg", () => {
      expect(calculator.divide()).toBeNull();
    });

    it("Should return a message when dividing with 0", () => {
      expect(calculator.divide(10, 0)).toBe("Can't divide with zero");
    });

    it("Should return the quotient of the numbers", () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });
  });
});
