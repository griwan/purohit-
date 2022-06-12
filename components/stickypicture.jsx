import classNames from "classnames";
import Image from "next/image";
import React from "react";

const StickyPicture = (props) => {
  return (
    <div
      className={classNames("flex", {
        "flex-row": !props.direction,
        "flex-row-reverse": props.direction,
      })}
    >
      <div
        className={classNames("basis-4/12 h-full mr-3rem lg:mr-[5rem]", {
          "mr-[0rem]": props.direction,
          "ml-[5rem]": props.direction,
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
          className="object-cover h-full"
        />
      </div>
      <div className="basis-7/12 mt-[3.75rem]">{props.children}</div>
    </div>
  );
};

export default StickyPicture;
