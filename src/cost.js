export function cost({ bagsOfCorn, numberOfGeese }) {
  
  if (numberOfGeese === 1 && bagsOfCorn === 2) {
    return result(1.75);
  }

  if (numberOfGeese === 2 && bagsOfCorn === 1) {
    return result(1.75);
  }

  if ((bagsOfCorn || 0) === 0 && (numberOfGeese || 0) === 0) {
    return result(0.25);
  }

  if (numberOfGeese >= 1) {
    const gooseTrips = (numberOfGeese * 2) - 1;
    return result(gooseTrips*0.25);
  }

  const trips = (bagsOfCorn * 2) - 1;

  return result(trips*0.25);

}


function result(cost){
  return { 
    cost: cost,
    errors: [] }
}

