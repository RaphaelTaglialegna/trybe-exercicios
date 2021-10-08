const math = require('./math');
jest.mock('./math');
// Part 1
describe('Lets test these funtions', () => {
  test('Test call Subtrair', () => { 
    math.subtrair = jest.fn(); 

    math.subtrair(); 
    expect(math.subtrair).toHaveBeenCalled(); // This part test the call function.
  });
  // Part 2
  test('Test call and return Multiplicar', () => { 
    math.multiplicar = jest.fn().mockReturnValue(10); 

    math.multiplicar(); 
    expect(math.multiplicar).toHaveBeenCalled(); // This part test the call function.
    expect(math.multiplicar(2, 5)).toBe(10);
  });
  // Part 3
  test('Mocking Somar', () => { 
    math.somar = jest.fn()
    .mockImplementation((a, b) => a + b);

    math.somar(1, 2); 
    expect(math.somar).toHaveBeenCalled(); // This part test the call function.
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
  });
  

});