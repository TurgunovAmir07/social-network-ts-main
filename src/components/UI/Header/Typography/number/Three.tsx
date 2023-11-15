import React from "react";

type ThreeProps = {
  threeNumber: number,
};

export let Three = ({ threeNumber }: ThreeProps) => {
  return <div>{threeNumber}</div>;
};