import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsEightData: ArrayProps = {
  items: [36, 37, 38, 39, 40],
};

const ArrayEight: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArrayEight;
