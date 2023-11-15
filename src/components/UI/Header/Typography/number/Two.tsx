import React from "react";

type TwoProps = {
  twoNumber: number,
};

export let Two = ({ twoNumber }: TwoProps) => {
  return <div>{twoNumber}</div>;
};