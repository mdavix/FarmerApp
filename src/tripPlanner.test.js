import { tripPlanner } from './tripPlanner';

describe('tripPlanner', () => {
    test.each`
      cargoDescription     | expectedResult
      ${{ bagsOfCorn: 0 }}      | ${["Cross with nothing"]}

    `('$cargoDescription corn is $expectedResult', ({ cargoDescription, expectedResult }) => {
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