import React from "react";

type variableAprops = {
  boolean: true,
};

export let VariableA = ({ boolean }: variableAprops) => {
  return <div>{boolean}</div>;
};