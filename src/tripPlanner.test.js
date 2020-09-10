import { tripPlanner } from './tripPlanner';

describe('Trips with just corn', () => {
    test.each`
      cargoDescription     | expectedResult
      ${{ bagsOfCorn: 0 }}      | ${["Cross with nothing"]}
      ${{ bagsOfCorn: 1 }}      | ${["Cross with corn"]}
      ${{ bagsOfCorn: 2 }}      | ${["Cross with corn", "Return with nothing", "Cross with corn"]}
      ${{ bagsOfCorn: 3 }}      | ${["Cross with corn", "Return with nothing", "Cross with corn", "Return with nothing", "Cross with corn"]}
      ${{ bagsOfCorn: 10 }}     | ${["Cross with corn", "Return with nothing", "Cross with corn", "Return with nothing", "Cross with corn", "Return with nothing", "Cross with corn", "Return with nothing", "Cross with corn", "Return with nothing", "Cross with corn", "Return with nothing", "Cross with corn", "Return with nothing", "Cross with corn", "Return with nothing", "Cross with corn", "Return with nothing", "Cross with corn"]}

    `('$cargoDescription corn is $expectedResult', ({ cargoDescription, expectedResult }) => {
      expect(arrayIsEqual(tripPlanner(cargoDescription).crossings, expectedResult)).toBe(true);
    })
  })

  describe('Trips with just geese', () => {
    test.each`
      cargoDescription     | expectedResult
      ${{ numberOfGeese: 0 }}      | ${["Cross with nothing"]}
      ${{ numberOfGeese: 1 }}      | ${["Cross with goose"]}
      ${{ numberOfGeese: 2 }}      | ${["Cross with goose", "Return with nothing", "Cross with goose"]}
      ${{ numberOfGeese: 3 }}      | ${["Cross with goose", "Return with nothing", "Cross with goose", "Return with nothing", "Cross with goose"]}
      ${{ numberOfGeese: 10 }}     | ${["Cross with goose", "Return with nothing", "Cross with goose", "Return with nothing", "Cross with goose", "Return with nothing", "Cross with goose", "Return with nothing", "Cross with goose", "Return with nothing", "Cross with goose", "Return with nothing", "Cross with goose", "Return with nothing", "Cross with goose", "Return with nothing", "Cross with goose", "Return with nothing", "Cross with goose"]}


    `('$cargoDescription geese is $expectedResult', ({ cargoDescription, expectedResult }) => {
      expect(arrayIsEqual(tripPlanner(cargoDescription).crossings, expectedResult)).toBe(true);
    })
  })

  describe('Trips with just corn and geese', () => {
    test.each`
      cargoDescription     | expectedResult
      ${{ bagsOfCorn: 1, numberOfGeese: 1 }}      | ${["Cross with corn", "Return with nothing", "Cross with goose"]}
      ${{ bagsOfCorn: 1, numberOfGeese: 2 }}      | ${["Cross with corn", "Return with nothing", "Cross with goose", "Return with corn", "Cross with goose", "Return with nothing", "Cross with corn"]}
      ${{ bagsOfCorn: 2, numberOfGeese: 1 }}      | ${["Cross with goose", "Return with nothing", "Cross with corn", "Return with goose", "Cross with corn", "Return with nothing", "Cross with goose"]}

   
    `('$cargoDescription geese is $expectedResult', ({ cargoDescription, expectedResult }) => {
      expect(arrayIsEqual(tripPlanner(cargoDescription).crossings, expectedResult)).toBe(true);
    })
  })



//   CargoDescription = {
//       quantityOfCorn: 2
//       quantityOfGeese: 9
//   }

//   CrossingsDescription {
//       crossings: ["Cross with nothing", ]
//   }

  function arrayIsEqual(a, b) {
      return JSON.stringify(a) === JSON.stringify(b)
  }