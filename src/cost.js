export function cost(bagsOfCorn) {
  if (bagsOfCorn === 0) {
    return 0.25;
  }

  const trips = (bagsOfCorn * 2) - 1;

  return trips * 0.25;
}