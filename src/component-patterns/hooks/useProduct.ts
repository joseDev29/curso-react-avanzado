import { useState } from "react";

export const useProduct = (initalState: number = 0) => {
  const [count, setCount] = useState<number>(initalState);

  const addCount = () => setCount((st) => st + 1);
  const reduceCount = () => setCount((st) => (st ? st - 1 : st));

  return {
    count,
    addCount,
    reduceCount,
  };
};
