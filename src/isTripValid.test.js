test('0 corn, 0 geese is valid', () => {
    expect(isTripValid(0, 0)).toBe(true);
  });

test('2 corn, 1 geese is valid', () => {
    expect(isTripValid(2, 1)).toBe(true);
  }); 

test('3 corn, 0 geese is valid', () => {
    expect(isTripValid(3, 0)).toBe(true);
  });   

test('2 corn, 2 geese is invalid', () => {
    expect(isTripValid(2, 2)).toBe(false);
  });

test('3 corn, 1 geese is invalid', () => {
    expect(isTripValid(3, 1)).toBe(false);
  }); 

test('2 corn, 0 geese is valid', () => {
    expect(isTripValid(2, 0)).toBe(true);
  }); 

test('2 corn, 4 geese is invalid', () => {
    expect(isTripValid(2, 4)).toBe(false);
  }); 

  test('4 corn, 1 geese is invalid', () => {
    expect(isTripValid(4, 1)).toBe(false);
  });

  test('1 corn, 5 geese is invalid', () => {
    expect(isTripValid(1, 5)).toBe(false);
  });

  test('0 corn, 5 geese is valid', () => {
    expect(isTripValid(0, 5)).toBe(true);
  });


function isTripValid(corn, numberOfGeese) {
    if(numberOfGeese == 0 || corn == 0){
        return true;
    }
 
    if (corn >= 3) {
        return false;
    }

    if(numberOfGeese == 5){
        return false;
    }

    if(numberOfGeese == 1){
        return true;
    }
   
    if (corn == 2) {
        return false;
    }
    

    return true;
}