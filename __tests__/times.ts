import * as faker from 'faker';
import Ne from '../index';

describe('times', () => {
  it('should create use function n times', () => {
    const max = faker.datatype.number(10);
    let count = 0;
    Ne.times(max, () => count++);
    
    expect(count).toEqual(max);
  });
  it('should return array', () => {
    const arr = Ne.times(10, (i) => i);
    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('wait should work', () => {
    const max = faker.datatype.number(10);
    let count = 0;
    const xTimes = Ne.times.wait(max);
    xTimes(() => count++);

    expect(count).toEqual(max);
  });
  it('curry should work', () => {
    const max = faker.datatype.number(10);
    let count = 0;
    const incrementCountTimes = Ne.times.curry(() => count++);
    incrementCountTimes(max);

    expect(count).toEqual(max);
  });
});