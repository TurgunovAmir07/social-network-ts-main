import React from "react";

type Jprops = {
  jText: string,
};

export let J = ({ jText }: Jprops) => {
  return <span>{jText}</span>;
};