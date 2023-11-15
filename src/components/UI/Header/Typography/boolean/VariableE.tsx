import React from "react";

type variableEprops = {
  boolean: true,
};

export let VariableE = ({ boolean }: variableEprops) => {
  return <div>{boolean}</div>;
};