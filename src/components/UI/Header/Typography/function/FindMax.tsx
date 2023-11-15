import React from "react";

type FindMaxFunction = (numbers: number[]) => number;

export const FindMax: FindMaxFunction = (numbers) => {
  return Math.max(...numbers);
};

export default FindMax;