import React from "react";

type Bprops = {
  bText: string,
};

export let B = ({ bText }: Bprops) => {
  return <span>{bText}</span>;
};