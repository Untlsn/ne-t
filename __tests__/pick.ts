import Ne from '../index';
import faker from 'faker';
import _ from 'lodash';

const createData = (id: number, name: string, used: boolean) => ({ id, name, used });

const fakeData = () => createData(
  faker.datatype.number(100),
  faker.random.word(),
  faker.datatype.boolean(),
);

let data = fakeData();

describe('pick', () => {
  afterEach(() => {
    data = fakeData();
  });
  it('should return picked data from object', () => {
    const id = Ne.pick(data, 'id');
    const name = Ne.pick(data, 'name');
    const used = Ne.pick(data, 'used');

    expect(id).toBe(data.id);
    expect(name).toBe(data.name);
    expect(used).toBe(data.used);
  });
  it('wait should work', () => {
    const pickFromData = Ne.pick.wait(data);
    const id = pickFromData('id');
    const name = pickFromData('name');
    const used = pickFromData('used');

    expect(id).toBe(data.id);
    expect(name).toBe(data.name);
    expect(used).toBe(data.used);
  });
  it('curry should work', () => {
    const pickId = Ne.pick.curry('id');
    const pickName = Ne.pick.curry('name');
    const pickUsed = Ne.pick.curry('used');

    const id = pickId(data);
    const name = pickName(data);
    const used = pickUsed(data);

    expect(id).toBe(data.id);
    expect(name).toBe(data.name);
    expect(used).toBe(data.used);
  });
  it('should work with array', () => {
    const getRandNumbers = (n: number) => _.times(n, () => faker.datatype.number());

    const array = getRandNumbers(10);

    const indexToPick = getRandNumbers(3);

    const pickFromArray = Ne.pick.wait(array);

    indexToPick.forEach((index) => {
      const picked = pickFromArray(index);
      expect(picked).toBe(array[index]);
    });
  });
  it('should work with map', () => {
    const lotOfData = _.times(5, fakeData);

    const ids = lotOfData.map(Ne.pick.curry('id'));
    const names = lotOfData.map(Ne.pick.curry('name'));
    const usedArr = lotOfData.map(Ne.pick.curry('used'));

    lotOfData.forEach(({ id, name, used }, index) => {
      expect(id).toBe(ids[index]);
      expect(name).toBe(names[index]);
      expect(used).toBe(usedArr[index]);
    });
  });
});