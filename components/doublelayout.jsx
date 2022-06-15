import React from "react";
import Image from "next/image";
import classNames from "classnames";
const DoubleLayout = (props) => {
  return (
    <div
      className={classNames("flex pt-4 2xl:pt-8 relative", {
        "justify-center": props.center,
        "justify-start": props.left,
        "justify-end": props.right,
      })}
    >
      <div
        className={classNames("flex gap-4 justify-center", {
          "items-center": !props.up,
          "items-start": props.up,
          "width-[90%]": props.w9,
          "width-[80%]": !props.w9,
        })}
      >
        <div className="2xl:w-full w-[50%]">{props.children[0]}</div>
        <div className="2xl:w-full w-[50%]">{props.children[1]}</div>
        <div
          className={classNames("absolute h-full w-full -z-2", {
            visible: props.bg,
            hidden: !props.bg,
          })}
        >
          <Image
            alt="Mountains"
            src="/Group_469.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DoubleLayout;
