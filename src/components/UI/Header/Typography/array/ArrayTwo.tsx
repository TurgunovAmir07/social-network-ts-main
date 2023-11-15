import React from "react";

type ArrayProps = {
  items: number[];
};

const ArrayPropsTwoData: ArrayProps = {
  items: [6, 7, 8, 9, 10],
};

const ArrayTwo: React.FC<ArrayProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{String(item)}</div>
      ))}
    </div>
  );
};

export default ArrayTwo;
