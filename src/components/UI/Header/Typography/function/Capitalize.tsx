import React from "react";

type CapitalizeFunction = (str: string) => string;

export const Capitalize: CapitalizeFunction = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export default Capitalize;