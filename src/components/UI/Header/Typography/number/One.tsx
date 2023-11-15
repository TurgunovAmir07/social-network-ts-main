import React from "react";

type OneProps = {
  oneNumber: number,
};

export let One = ({ oneNumber }: OneProps) => {
  return <div>{oneNumber}</div>;
};