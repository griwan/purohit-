import React from "react";

const container = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] mx-auto">{props.children}</div>
    </div>
  );
};

export default container;
