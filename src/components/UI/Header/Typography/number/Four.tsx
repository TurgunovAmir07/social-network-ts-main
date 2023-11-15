import React from "react";

type FourProps = {
  fourNumber: number,
};

export let Four = ({ fourNumber }: FourProps) => {
  return <div>{fourNumber}</div>;
};