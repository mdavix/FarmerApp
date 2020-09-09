export function isTripValid(corn, numberOfGeese) {
  if (numberOfGeese === 0 || corn === 0) {
    return true;
  }

  if (corn >= 3 || numberOfGeese >= 3) {
    return false;
  }

  if (numberOfGeese === 1 || corn === 1) {
    return true;
  }

  return false;
}
