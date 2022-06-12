import React from "react";
import classNames from "classnames";
const DoubleLayout = (props) => {
  return (
    <div
      className={classNames("flex pt-8", {
        "justify-center": props.center,
        "justify-start": props.left,
        "justify-end": props.right,
      })}
    >
      <div className="flex gap-4 justify-center items-center">
        <div className="w-full">{props.children[0]}</div>
        <div className="w-full">{props.children[1]}</div>
      </div>
    </div>
  );
};

export default DoubleLayout;
