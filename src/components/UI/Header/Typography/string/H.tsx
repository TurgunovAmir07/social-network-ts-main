import React from "react";

type Hprops = {
  hText: string,
};

export let H = ({ hText }: Hprops) => {
  return <span>{hText}</span>;
};