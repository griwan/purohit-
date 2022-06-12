import React from 'react';

const DoubleLayout = (props) => {
  return (
    <div className="m-5">
      <div className="flex gap-4 justify-center items-center">
        <div className="flex-1">{props.children[0]}</div>
        <div className="flex-1">{props.children[1]}</div>
      </div>
    </div>
  );
};

export default DoubleLayout;
