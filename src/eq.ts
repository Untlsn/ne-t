interface Eq {
  <T>(a: T, b: any): b is T
  wait<T>(a: T): (b: any) => b is T
  // @ts-ignore b is not found
  curry(b: any): <T>(a: T) => b is T
}

export const eq: Eq = <T>(a: T, b: any): b is T => a === b;
eq.wait = <T>(a: T) => (b): b is T => a === b;
// @ts-ignore
eq.curry = (b: any) => <T>(a: T): b is T => a === b;


