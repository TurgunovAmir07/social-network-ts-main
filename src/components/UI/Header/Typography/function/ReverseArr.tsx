import React from "react";

type ReverseArrayFunction<T> = (arr: T[]) => T[];

export const ReverseArr: ReverseArrayFunction<number> = (arr) => {
  return arr.slice().reverse();
};

export default ReverseArr;
