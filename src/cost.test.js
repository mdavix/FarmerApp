import { cost } from './cost';

test('sample test', () => {
  expect(true).toBe(true);
});

test('0 corn is 0.25', () => {
  expect(cost(0)).toBe(0.25);
})

test('1 corn is 0.25', () => {
  expect(cost(1)).toBe(0.25);
})

test('2 corn is 0.75', () => {
  expect(cost(2)).toBe(0.75);
})

test('3 corn is 1.25', () => {
  expect(cost(3)).toBe(1.25);
})

test('MAX corn is 4503599627370495.25', () => {
  expect(cost(Number.MAX_SAFE_INTEGER)).toBe(4503599627370495.25);
})