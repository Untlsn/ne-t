interface Map {
  <T, R>(arr: T[], callback: (val: T, index: number, arr: T[]) => R): R[]
  wait<T>(arr: T[]): <R>(callback: (val: T, index: number, arr: T[]) => R) => R[]
  curry<T, R>(callback: (val: T, index: number, arr: T[]) => R): (arr: T[]) => R[]
}

export const map: Map = (arr, callback) => arr.map(callback);
map.wait = arr => callback => map(arr, callback);
map.curry = callback => arr => map(arr, callback);