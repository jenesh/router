const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

it("Sum numbers", () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(-5, 5)).toEqual(0);
});

it("Subtracts numbers", () => {
  expect(sub(10, 5)).toEqual(5);
  expect(sub(0, -5)).toEqual(5);
});

it("Multiplies numbers", () => {
  expect(mul(10, 5)).toEqual(50);
  expect(mul(0, -5)).toEqual(-0);
});

it("Divides numbers", () => {
  expect(div(10, 5)).toEqual(2);
  expect(div(0, -5)).toEqual(-0);
});
