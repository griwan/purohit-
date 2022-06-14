import React from "react";
import classNames from "classnames";
const DoubleLayout = (props) => {
  return (
    <div
      className={classNames("flex pt-8 ", {
        "justify-center": props.center,
        "justify-start": props.left,
        "justify-end": props.right,
      })}
    >
      <div
        className={classNames("flex gap-4 justify-center w-[80%]", {
          "items-center": !props.up,
          "items-start": props.up,
        })}
      >
        <div className="xl:w-full w-[50%]">{props.children[0]}</div>
        <div className="xl:w-full w-[50%]">{props.children[1]}</div>
      </div>
    </div>
  );
};

export default DoubleLayout;
