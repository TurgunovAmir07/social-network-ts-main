import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsSixData: ArrayProps = {
  items: [26, 27, 28, 29, 30],
};

const ArraySix: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArraySix;
