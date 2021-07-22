export const range = (from = 0) => {
  return {
    to: (num: number, step = 1) => {
      const arr: number[] = [];
      if (from < num) for (let i = from; i <= num; i += step) arr.push(i);
      else for (let i = from; i >= num; i -= step) arr.push(i);
      return arr;
    },
    until: (num: number, step = 1) => {
      const arr: number[] = [];
      if (from < num) for (let i = from; i < num; i += step) arr.push(i);
      else for (let i = from; i > num; i -= step) arr.push(i);
      return arr;
    },
  };
};