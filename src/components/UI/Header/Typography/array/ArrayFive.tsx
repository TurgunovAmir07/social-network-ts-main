import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsFiveData: ArrayProps = {
  items: [21, 22, 23, 24, 25],
};

const ArrayFive: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArrayFive;
