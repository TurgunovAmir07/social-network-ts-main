import React from "react";

type VariableProps = {
  customKey: boolean;
};

const VariableProps: VariableProps = {
  customKey: true,
};

const ObjFive: React.FC<VariableProps> = ({ customKey }) => {
  return <div>{String(customKey)}</div>;
};

export default ObjFive;
