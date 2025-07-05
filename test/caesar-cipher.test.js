import { caesarCipher } from "../index.js";

describe("Caesar Cipher", () => {
  it("Should return abc", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  it("Should wrap back to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it("Should also shift even the Upper Case letter", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  it("Should ignore the non letter case only shift the letter one", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
