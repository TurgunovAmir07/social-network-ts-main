import React from "react";

type variableGprops = {
  boolean: true,
};

export let VariableG = ({ boolean }: variableGprops) => {
  return <div>{boolean}</div>;
};