import React from "react";

const SingleLayout = (props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:max-w-[80%]">{props.children}</div>
    </div>
  );
};

export default SingleLayout;
