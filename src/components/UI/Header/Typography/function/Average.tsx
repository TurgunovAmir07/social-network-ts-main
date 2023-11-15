import React from "react"

type CalculateAverageFunction = (numbers: number[]) => number;

export const Average: CalculateAverageFunction = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

export default Average;
