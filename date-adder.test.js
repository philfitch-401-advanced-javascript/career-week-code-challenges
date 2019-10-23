const add = require('./date-adder');



describe('add', () => {
  it('adds given time to a given date', () => {
    let date = new Date(2019, 9, 21, 18, 0, 0, 0);
    const diff = '10d';

    expect(add(date, diff)).toEqual(new Date(2019, 9, 31, 18, 0, 0, 0));
  });

  it('adds weeks accurately', () => {
    let date = new Date(2019, 9, 21, 18, 0, 0, 0);
    const diff = '1w';

    expect(add(date, diff)).toEqual(new Date(2019, 9, 28, 18, 0, 0, 0));
  })
});