import Ne from '../index';

describe('range', () => {
  it('should create simple range from-to', () => {
    const range = Ne.range(0).to(10);
    expect(range).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('should create simple range from-until', () => {
    const range = Ne.range(0).until(10);
    expect(range).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('should create range with steps', () => {
    const range = Ne.range(0).to(10, 2);
    expect(range).toEqual([0, 2, 4, 6, 8, 10]);
  });
  it('should create range with float step', () => {
    const range = Ne.range(0).to(10, .5);
    expect(range).toEqual([
      0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10,
    ]);
  });
});