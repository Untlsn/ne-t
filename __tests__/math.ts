import Ne from '../index';

describe('math', () => {
  it('should calc numbers', () => {
    expect(Ne.add(10, 10)).toBe(20);
    expect(Ne.sub(10, 5)).toBe(5);
    expect(Ne.multi(10, 2)).toBe(20);
    expect(Ne.div(10, 2)).toBe(5);
  });
  it('should calc many numbers', () => {
    expect(Ne.add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
    expect(Ne.sub(-1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(-45);
    expect(Ne.multi(2, 2, 2, 2, 2, 2, 2)).toBe(128);
    expect(Ne.div(128, 2, 2, 2, 2, 2, 2, 2)).toBe(1);
  });
  it('wait should work with one', () => {
    const add10 = Ne.add.wait(10);
    const removeFrom10 = Ne.sub.wait(10);
    const multi10 = Ne.multi.wait(10);
    const div10 = Ne.div.wait(10);

    expect(add10(10)).toBe(20);
    expect(removeFrom10(5)).toBe(5);
    expect(multi10(2)).toBe(20);
    expect(div10(2)).toBe(5);
  });
  it('functor should work', () => {
    expect(
      Ne.mathFunctor(100).add(50).sub(75).multi(2).div(15).valueOf,
    ).toBe(10);

  });
});