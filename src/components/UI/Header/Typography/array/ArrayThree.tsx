import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsThreeData: ArrayProps = {
  items: [11, 12, 13, 14, 15],
};


const ArrayThree: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArrayThree

