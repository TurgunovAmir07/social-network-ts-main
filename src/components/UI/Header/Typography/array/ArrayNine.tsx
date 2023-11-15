import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsNineData: ArrayProps = {
  items: [41, 42, 43, 44, 45],
};

const ArrayNine: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArrayNine;
