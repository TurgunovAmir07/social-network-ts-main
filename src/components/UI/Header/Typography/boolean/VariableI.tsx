import React from "react";

type variableBprops = {
  boolean: true,
};

export let VariableI = ({ boolean }: variableBprops) => {
  return <div>{boolean}</div>;
};