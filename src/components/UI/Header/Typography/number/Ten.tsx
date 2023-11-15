import React from "react";

type TenProps = {
  tenNumber: number,
};

export let Ten = ({ tenNumber }: TenProps) => {
  return <div>{tenNumber}</div>;
};