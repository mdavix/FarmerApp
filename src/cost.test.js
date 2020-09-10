import { cost } from './cost';

describe('cost', () => {
  test.each`
    input     | expectedResult
    ${0}      | ${0.25}
    ${1}      | ${0.25}
    ${2}      | ${0.75}
    ${3}      | ${1.25}
    ${Number.MAX_SAFE_INTEGER}      | ${4503599627370495.25}
  `('converts $input to $expectedResult', ({ input, expectedResult }) => {
    expect(cost(input)).toBe(expectedResult)
  })
})