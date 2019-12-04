
const { Set } = require('./Set');

describe('Set', () => {

  let set = new Set;

  it('add', () => {
    let set = new Set;
    set.add('balloons');
    expect(set.array).toEqual(['balloons']);
    set.add('balloons');
    expect(set.array).toEqual(['balloons']);
  })

  it('remove', () => {
    let set = new Set;
    set.add('balloons');
    set.remove('balloons');
    expect(set.array).toEqual([]);
  })

  it('has', () => {
    let set = new Set;
    set.add('balloons');
    expect(set.has('balloons')).toBe(true);
  })

  it('intersection', () => {
    let set = new Set;
    set.add('balloons');
    set.add('clowns');
    expect(set.intersection(['balloons', 'cake'])).toEqual(['balloons']);
  })

  it('union', () => {
    let set = new Set;
    set.add('balloons');
    set.add('clowns');
    expect(set.union(['balloons', 'cake'])).toEqual(['balloons', 'clowns', 'cake']);
  })

  it('difference', () => {
    let set = new Set;
    set.add('balloons');
    set.add('clowns');
    expect(set.difference(['balloons', 'cake'])).toEqual(['clowns', 'cake']);
  })

  it('static intersection', () => {

  })

  it('static union', () => {

  })

  it('static difference', () => {

  })
})