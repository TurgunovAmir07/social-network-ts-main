import React from "react";

type VariableProps = {
  customKey: boolean;
};

const VariableProps: VariableProps = {
  customKey: true,
};

const ObjThree: React.FC<VariableProps> = ({ customKey }) => {
  return <div>{String(customKey)}</div>;
};

export default ObjThree;
