import React, { FC, Fragment } from "react";

interface LineInfo {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
}

const lineList: LineInfo[] = [
  {
    startX: 0,
    startY: 10,
    endX: 400,
    endY: 10,
    color: "#000000",
  },
  {
    startX: 0,
    startY: 20,
    endX: 400,
    endY: 20,
    color: "#000000",
  },
  {
    startX: 0,
    startY: 30,
    endX: 400,
    endY: 30,
    color: "#000000",
  },
  {
    startX: 0,
    startY: 40,
    endX: 400,
    endY: 40,
    color: "#000000",
  },
  {
    startX: 0,
    startY: 50,
    endX: 400,
    endY: 50,
    color: "#000000",
  },
];

const Line: FC = () => {
  const handleMouseOver = (index: number) => {
    console.log("over", index);
  };

  const handleMouseLeave = (index: number) => {
    console.log("leave", index);
  };

  return (
    <Fragment>
      {lineList.map((line, index) => (
        <line
          key={index}
          x1={line.startX}
          y1={line.startY}
          x2={line.endX}
          y2={line.endY}
          stroke={line.color}
          strokeWidth={1}
          // onMouseEnter={() => handleMouseOver(index + 1)}
          // onMouseLeave={() => handleMouseLeave(index + 1)}
        />
      ))}
    </Fragment>
  );
};

export default Line;
