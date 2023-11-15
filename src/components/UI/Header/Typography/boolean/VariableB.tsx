import React from "react";

type variableBprops = {
  boolean: true,
};

export let VariableB = ({ boolean }: variableBprops) => {
  return <div>{boolean}</div>;
};