import React from "react";

type Gprops = {
  gText: string,
};

export let G = ({ gText }: Gprops) => {
  return <span>{gText}</span>;
};