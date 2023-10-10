const addNum = (a, b) => {
  return a + b;
};

test("add two numbers and returns the sum", () => {
  const result = addNum(1, 2);

  expect(result).toBe(7);
});
