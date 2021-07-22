interface MathFunctor {
  add(...numbers: number[]): MathFunctor
  sub(...numbers: number[]): MathFunctor
  multi(...numbers: number[]): MathFunctor
  div(...numbers: number[]): MathFunctor
  valueOf: number
}

type Operands = 'add'|'sub'|'multi'|'div'

interface Math {
  (...numbers: number[]): number
  wait(...numbers: number[]): (...numbers: number[]) => number
  curry(...numbers: number[]): (...numbers: number[]) => number
  functor(...numbers: number[]): MathFunctor
}

const simp: Record<Operands, (a: number, b: number) => number> = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  multi: (a, b) => a * b,
  div: (a, b) => a / b,
};

const createMathOperand = (operand: 'add'|'sub'|'multi'|'div') => {
  const oper = simp[operand];
  const fn: Math = (...numbers) => numbers.reduce(oper);
  fn.wait = (...nums1) => {
    const num = fn(...nums1);
    return (...nums2) => oper(num, fn(...nums2));
  };
  fn.curry = (...nums1) => {
    const num = fn(...nums1);
    return (...nums2) => oper(fn(...nums2), num);
  };
  fn.functor = (...nums1) => {
    let number = fn(...nums1);
    return mathFunctor(number);
  };

  return fn;
};


export const mathFunctor = (number: number) => ({
  add: (...numbers: number[]) => add.functor(number, ...numbers),
  sub: (...numbers: number[]) => sub.functor(number, ...numbers),
  multi: (...numbers: number[]) => multi.functor(number, ...numbers),
  div: (...numbers: number[]) => div.functor(number, ...numbers),
  valueOf: number,
});
export const add = createMathOperand('add');
export const sub = createMathOperand('sub');
export const multi = createMathOperand('multi');
export const div = createMathOperand('div');