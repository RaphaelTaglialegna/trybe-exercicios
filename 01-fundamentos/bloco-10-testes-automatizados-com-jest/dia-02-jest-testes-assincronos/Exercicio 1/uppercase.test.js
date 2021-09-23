const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Verify the function uppercase', () => {
  it('the callback is correct',() => {
    uppercase('abobora', (result) => {
      try {
        expect(result).toMatch('ABOBORA');
        done();
      } catch (error) {
        done(error);
      }
    });  
  });  
});