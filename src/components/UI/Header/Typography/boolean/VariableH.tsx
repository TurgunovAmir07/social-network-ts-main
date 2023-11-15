import React from "react";

type variableHprops = {
  boolean: true,
};

export let VariableH = ({ boolean }: variableHprops) => {
  return <div>{boolean}</div>;
};