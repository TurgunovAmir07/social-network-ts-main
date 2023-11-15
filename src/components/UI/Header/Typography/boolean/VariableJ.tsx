import React from "react";

type variableJprops = {
  boolean: true,
};

export let VariableJ= ({ boolean }: variableJprops) => {
  return <div>{boolean}</div>;
};