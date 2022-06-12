import React from 'react';

const DoubleLayout = (props) => {
  return (
    <div className="flex justify-center pt-8">
      <div className="flex gap-4 justify-center items-center">
        <div className="w-full">{props.children[0]}</div>
        <div className="w-full">{props.children[1]}</div>
      </div>
    </div>
  );
};

export default DoubleLayout;
