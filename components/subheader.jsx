import React from "react";

const SubHeader = (props) => {
  return (
    <div className="flex justify-center leading-9 text-[#707070] mt-[1rem] 2xl:mt-[3rem] text-lg 2xl:text-3xl font-sans text-center w-11/12 2xl:w-4/5 mx-auto">
      {props.children}
    </div>
  );
};

export default SubHeader;
