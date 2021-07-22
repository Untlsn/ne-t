export const createWaiter = (fn: Function) => {
  return (a: any) => (b: any) => fn(a, b);
};
export const createCurry = (fn: Function) => {
  return (b: any) => (a: any) => fn(a, b);
};