import React from "react";

type Aprops = {
  aText: string,
};

export let A = ({ aText }: Aprops) => {
  return <span>{aText}</span>;
};