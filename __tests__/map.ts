import Ne from '../index';
import * as faker from 'faker';
import _ from 'lodash';

const createData = () => _.times(5, () => faker.datatype.number(100));

let data = createData();

describe('map', () => {
  afterEach(() => {
    data = createData();
  });
  it('should do the same as Array.map', () => {
    const byNeMap = Ne.map(data, (num) => num + 2);
    const byArrayMap = data.map((num) => num + 2);

    expect(byNeMap).toEqual(byArrayMap);
  });
  it('wait should work', () => {
    const mapData = Ne.map.wait(data);
    const byNeMap = mapData((num) => num + 2);
    const byArrayMap = data.map((num) => num + 2);

    expect(byNeMap).toEqual(byArrayMap);
  });
  it('curry should work', () => {
    const add2 = Ne.map.curry((num: number) => num + 2);
    const byNeMap = add2(data);
    const byArrayMap = data.map((num) => num + 2);

    expect(byNeMap).toEqual(byArrayMap);
  });
});