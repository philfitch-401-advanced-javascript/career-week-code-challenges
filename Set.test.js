
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
    expect((set.intersection(['balloons', 'cake'])).array).toEqual(['balloons']);
  })

  it('union', () => {
    let set = new Set;
    set.add('balloons');
    set.add('clowns');
    expect((set.union(['balloons', 'cake'])).array).toEqual(['balloons', 'clowns', 'cake']);
  })

  it('difference', () => {
    let set = new Set;
    set.add('balloons');
    set.add('clowns');
    expect((set.difference(['balloons', 'cake'])).array).toEqual(['clowns', 'cake']);
  })

  it('static intersection', () => {
    let set1 = new Set;
    set1.add('balloons');
    set1.add('clowns');
    let set2 = new Set;
    set2.add('balloons');
    set2.add('cake');
    expect((Set.intersection(set1, set2).array)).toEqual(['balloons']);
  })

  it('static union', () => {

  })

  it('static difference', () => {

  })
})