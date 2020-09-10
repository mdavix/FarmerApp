import { cost } from './cost';

describe('cost', () => {
  test.each`
    input     | expectedResult
    ${{ bagsOfCorn: 0 }}      | ${0.25}
    ${{ bagsOfCorn: 1 }}      | ${0.25}
    ${{ bagsOfCorn: 2 }}      | ${0.75}
    ${{ bagsOfCorn: 3 }}      | ${1.25}
    ${{ bagsOfCorn: Number.MAX_SAFE_INTEGER}}      | ${4503599627370495.25}
  `('$input corn is $expectedResult', ({ input, expectedResult }) => {
    expect(cost(input).cost).toBe(expectedResult)
  })
})

describe('cost', () => {
  test.each`
    input     | expectedResult
    ${{ numberOfGeese: 0 }}      | ${0.25}
    ${{ numberOfGeese: 1 }}      | ${0.25}
    ${{ numberOfGeese: 2 }}      | ${0.75}
    ${{ numberOfGeese: 3 }}      | ${1.25}
  `('$input geese is $expectedResult', ({ input, expectedResult }) => {
    expect(cost(input).cost).toBe(expectedResult)
  })
})

// g c c -> cross g, return, cross corn, return goose, cross corn, return, cross goose

describe('cost', () => {
  test.each`
    geese                   |  corn                  |  expectedResult
    ${{ numberOfGeese: 0 }} |  ${{ bagsOfCorn: 0 }}  |  ${0.25}
    ${{ numberOfGeese: 0 }} |  ${{ bagsOfCorn: 2 }}  |  ${0.75}
    ${{ numberOfGeese: 1 }} |  ${{ bagsOfCorn: 2 }}  |  ${1.75}
    ${{ numberOfGeese: 2 }} |  ${{ bagsOfCorn: 1 }}  |  ${1.75}
    ${{ numberOfGeese: 2 }} |  ${{ bagsOfCorn: 0 }}  |  ${0.75}
    ${{ numberOfGeese: 50 }} |  ${{ bagsOfCorn: 0 }}  |  ${24.75}

  `('$geese geese and $corn corn is $expectedResult', ({ geese, corn, expectedResult }) => {
    expect(cost({...geese, ...corn}).cost).toBe(expectedResult)
  })
})