import React from "react";

type Eprops = {
  eText: string,
};

export let E = ({ eText }: Eprops) => {
  return <span>{eText}</span>;
};