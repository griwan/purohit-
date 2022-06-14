import React from "react";

const Banner = (props) => {
  return (
    <div className="h-[12rem] w-full font-serif bg-red text-[2.3rem] text-center text-white flex justify-center items-center absolute top-62vh left-0 right-0">
      <div className="w-[80%] mx-auto">{props.children}</div>
    </div>
  );
};

export default Banner;
