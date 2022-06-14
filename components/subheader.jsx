import React from "react";

const SubHeader = (props) => {
  return (
    <div className="flex justify-center leading-9 text-[#707070] mt-[1rem] xl:mt-[3rem] text-lg xl:text-3xl font-sans text-center w-full xl:w-4/5 mx-auto">
      {props.children}
    </div>
  );
};

export default SubHeader;
