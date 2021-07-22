import { range } from './range';
import { createWaiter, createCurry } from '../helpers/createWaiters';

interface Times {
  <R>(n: number, callback: (val: number) => R): R[]
  wait<R>(n: number): (callback: (val: number) => R) => R[]
  curry<R>(callback: (val: number) => R): (n: number) => R[]
}

export const times: Times = (n, callback) => range().until(n).map(callback);
times.wait = createWaiter(times);
times.curry = createCurry(times);

