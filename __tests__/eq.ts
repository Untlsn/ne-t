import Ne from '../index';

describe('eq', () => {
  it('should return true if values is same', () => {
    expect(Ne.eq(5, 5)).toBeTruthy();
  });
  it('should return false if values is not same', () => {
    expect(Ne.eq(5, 7)).toBeFalsy();
  });
  it('wait should work', () => {
    const is5 = Ne.eq.wait(5);

    expect(is5(5)).toBeTruthy();
  });
  it('curry should work', () => {
    const checkIs5 = Ne.eq.curry(5);

    expect(checkIs5(5)).toBeTruthy();
  });
});