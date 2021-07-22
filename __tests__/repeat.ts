import Ne from '../index';
import * as faker from 'faker';

describe('repeat', () => {
  it('should return array with same elements', () => {
    const word = faker.random.word();
    const words = Ne.repeat(5, word);

    expect(words).toContain(word);
    expect(words.every(Ne.eq.wait(word))).toBeTruthy();
  });
  it('wait should work', () => {
    const word = faker.random.word();
    const repeat5Times = Ne.repeat.wait(5);

    const words = repeat5Times(word);

    expect(words).toContain(word);
    expect(words.every((it) => it == word)).toBeTruthy();
  });
  it('curry should work', () => {
    const word = faker.random.word();
    const repeatWord = Ne.repeat.curry(word);

    const words = repeatWord(5);

    expect(words).toContain(word);
    expect(words.every((it) => it == word)).toBeTruthy();
  });
});