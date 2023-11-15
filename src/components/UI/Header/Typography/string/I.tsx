import React from "react";

type Iprops = {
  iText: string,
};

export let I = ({ iText }: Iprops) => {
  return <span>{iText}</span>;
};