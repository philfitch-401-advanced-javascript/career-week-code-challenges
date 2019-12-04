
const { Set } = require('./Set');

describe('Set', () => {

  let set = new Set;

  it('add', () => {
    let set = new Set;
    set.add('balloon');
    expect(set.array).toEqual(['balloon']);
    set.add('balloon');
    expect(set.array).toEqual(['balloon']);
  })

  it('remove', () => {
    let set = new Set;
    set.add('balloon');
    set.remove('balloon');
    expect(set.array).toEqual([]);
  })

  it('has', () => {
    let set = new Set;
    set.add('balloon');
    expect(set.has('balloon')).toBe(true);
  })

  it('intersection', () => {

  })

  it('union', () => {

  })

  it('difference', () => {

  })

  it('static intersection', () => {

  })

  it('static union', () => {

  })

  it('static difference', () => {

  })
})