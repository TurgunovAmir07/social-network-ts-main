import React from "react";

type Cprops = {
  cText: string,
};

export let C = ({ cText }: Cprops) => {
  return <span>{cText}</span>;
};