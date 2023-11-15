import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsTenData: ArrayProps = {
  items: [46, 47, 48, 49, 50],
};

const ArrayTen: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArrayTen;
