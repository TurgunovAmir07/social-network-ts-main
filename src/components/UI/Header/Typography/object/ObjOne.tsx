import React from "react";

type VariableProps = {
  customKey: boolean;
};

const VariableProps: VariableProps = {
  customKey: true,
};

const ObjOne: React.FC<VariableProps> = ({ customKey }) => {
  return <div>{String(customKey)}</div>;
};

export default ObjOne;
