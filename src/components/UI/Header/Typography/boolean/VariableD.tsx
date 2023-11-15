import React from "react";

type variableDprops = {
  boolean: true,
};

export let VariableD = ({ boolean }: variableDprops) => {
  return <div>{boolean}</div>;
};