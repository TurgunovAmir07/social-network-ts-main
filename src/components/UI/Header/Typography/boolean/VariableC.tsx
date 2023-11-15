import React from "react";

type variableCprops = {
  boolean: true,
};

export let VariableC = ({ boolean }: variableCprops) => {
  return <div>{boolean}</div>;
};