import React from "react";

type IsEvenFunction = (a: number) => boolean;

export const IsEven: IsEvenFunction = (a) => {
  return a % 2 === 0;
};

export default IsEven;