const add = require('./date-adder');



describe('add', () => {
  it('adds given time to a given date', () => {
    const date = new Date(2019, 10, 21, 18, 0, 0, 0);
    console.log(date);
    const diff = '10d';

    expect(add(date, diff)).toEqual(new Date(2019, 10, 31, 18, 0, 0, 0));
  });
});