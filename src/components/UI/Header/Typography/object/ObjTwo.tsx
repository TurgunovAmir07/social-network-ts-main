import React from "react";

type VariableProps = {
  customKey: boolean;
};

const VariableProps: VariableProps = {
  customKey: false,
};

const ObjTwo: React.FC<VariableProps> = ({ customKey }) => {
  return <div>{String(customKey)}</div>;
};

export default ObjTwo;
