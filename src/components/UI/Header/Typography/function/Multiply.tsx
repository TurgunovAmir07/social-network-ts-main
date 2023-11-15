import React from "react";

type MultiplyFunction = (a: number, b: number) => number;

export const Multiply: MultiplyFunction = (a, b) => {
  return a * b;
};

export default Multiply;