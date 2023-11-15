import React from "react";

type EightProps = {
  eightNumber: number,
};

export let Eight = ({ eightNumber }: EightProps) => {
  return <span>{eightNumber}</span>;
};