import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsOneData: ArrayProps = {
  items: [1, 2, 3, 4, 5],
};

const ArrayOne: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArrayOne;
