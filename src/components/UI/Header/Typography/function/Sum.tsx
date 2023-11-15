import React from "react";

type SumFunction = (a: number, b: number) => number;

export const Sum: SumFunction = (a, b) => {
  return a + b;
};

export default Sum;