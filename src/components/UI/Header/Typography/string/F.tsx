import React from "react";

type Fprops = {
  fText: string,
};

export let F = ({ fText }: Fprops) => {
  return <span>{fText}</span>;
};