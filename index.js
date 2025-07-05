const capitalize = (word) => {
  return !word
    ? null
    : word[0].toUpperCase() + word.split("").slice(1).join("");
};

const reverseString = (word) => {
  return !word ? null : word.split("").reverse().join("");
};

class calculator {
  static add(num1, num2) {
    if (!num1 && !num2) return null;
    if (isNaN(num1) || isNaN(num2)) return NaN;
    return num1 + num2;
  }
  static subtract(num1, num2) {
    if (!num1 && !num2) return null;
    if (isNaN(num1) || isNaN(num2)) return NaN;
    return num1 - num2;
  }

  static multiply(num1, num2) {
    if (!num1 && !num2) return null;
    if (isNaN(num1) || isNaN(num2)) return NaN;
    return num1 * num2;
  }
  static divide(num1, num2) {
    if (!num1 && !num2) return null;
    if (isNaN(num1) || isNaN(num2)) return NaN;
    if (num2 === 0) return "Can't divide with zero";
    return num1 / num2;
  }
}

const caesarCipher = (word, numberOfShift) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const upperCase = letters.map((char) => char.toUpperCase());
  const allLetters = letters.concat(upperCase);

  const string = [];
  word.split("").forEach((char, index) => {
    let code = word.charCodeAt(index);
    for (let i = 0; i < numberOfShift; i++) {
      code++;
      if (code === 123) code = 97;
      if (code === 91) code = 65;
    }
    if (allLetters.includes(char)) {
      string.push(String.fromCharCode(code));
    } else string.push(char);
  });
  return string.join("");
};

const analyzeArray = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  return {
    average: sortedArr[sortedArr.length / 2],
    min: sortedArr[0],
    max: sortedArr[sortedArr.length - 1],
    length: sortedArr.length,
  };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
