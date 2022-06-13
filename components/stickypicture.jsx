import classNames from "classnames";
import Image from "next/image";
import React from "react";

const StickyPicture = (props) => {
  return (
    <div
      className={classNames("flex picture-wrapper", {
        "flex-row": !props.direction,
        "flex-row-reverse": props.direction,
      })}
    >
      <div
        className={classNames("basis-4/12 h-full", {
          "ml-1rem lg:ml-[3rem]": props.direction,
          "mr-1rem lg:mr-[3rem]": !props.direction,
        })}
      >
        <div
          className={classNames("h-[2rem]", {
            "bg-[#A9253F]": props.secondary,
            "bg-[#476A8A]": props.primary,
          })}
        ></div>
        <Image
          src={props.image}
          alt="section"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="basis-7/12 px-2 mt-[3.75rem]">{props.children}</div>
    </div>
  );
};

export default StickyPicture;
