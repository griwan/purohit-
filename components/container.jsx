import React from 'react';

const container = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-[83rem]">{props.children}</div>
    </div>
  );
};

export default container;
