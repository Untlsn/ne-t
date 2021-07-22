import { times } from './times';
import { constant } from './constant';
import { createCurry, createWaiter } from '../helpers/createWaiters';

interface Repeat {
  <T>(n: number, val: T): T[]
  wait<T>(n: number): (val: T) => T[]
  curry<T>(val: T): (n: number) => T[]
}

export const repeat: Repeat = (n, val) => times(n, constant(val));
repeat.wait = createWaiter(repeat);
repeat.curry = createCurry(repeat);
