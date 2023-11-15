import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsSevenData: ArrayProps = {
  items: [31, 32, 33, 34, 35],
};

const ArraySeven: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArraySeven;
