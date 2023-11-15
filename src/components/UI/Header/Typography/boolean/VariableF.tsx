import React from "react";

type variableFprops = {
  boolean: true,
};

export let VariableF = ({ boolean }: variableFprops) => {
  return <div>{boolean}</div>;
};