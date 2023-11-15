import React from "react";

type FiveProps = {
  fiveNumber: number,
};

export let Five = ({ fiveNumber }: FiveProps) => {
  return <div>{fiveNumber}</div>;
};