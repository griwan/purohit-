import React from "react";
import classNames from "classnames";

const SubHeader = (props) => {
  return (
    <div
      className={classNames(
        "flex justify-center leading-9 text-[#707070] mt-[1rem] 2xl:mt-[3rem] fluid-subheader font-sans text-center w-11/12 2xl:w-4/5 mx-auto"
      )}
    >
      {props.children}
    </div>
  );
};

export default SubHeader;
