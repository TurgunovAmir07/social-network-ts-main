import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsFourData: ArrayProps = {
  items: [16, 17, 18, 19, 20],
};

const ArrayFour: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArrayFour;
