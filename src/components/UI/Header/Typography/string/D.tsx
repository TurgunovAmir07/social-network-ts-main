import React from "react";

type Dprops = {
  dText: string,
};

export let D = ({ dText }: Dprops) => {
  return <span>{dText}</span>;
};