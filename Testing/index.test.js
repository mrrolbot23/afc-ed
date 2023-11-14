const { isPalindrome } = require("./index");

describe("should test if word is palindrome", () => {
  test("isPalindrome function should exist", () => {
    expect(isPalindrome()).toBeDefined();
  });
  test("It should take one argument", () => {
    expect(isPalindrome.length).toBe(1);
  });
});

describe("should test data type in isPalindrome", () => {
  test("expect string argument", () => {
    expect(isPalindrome("word")).toBe(true);
  });
    test("expects number argument to fail", () => {
      expect(isPalindrome(1111)).toBe(false);
    });
});

describe("should test for basic palindrome", () => {
  test("racecar should pass", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });
  test("bob should pass", () => {
    expect(isPalindrome("bob")).toBe(true);
  });
  test("apple should fail", () => {
    expect(isPalindrome("apple")).toBe(false);
  });
});
