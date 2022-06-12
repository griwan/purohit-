import React from 'react';

const SubHeader = (props) => {
  return (
    <div className="flex justify-center text-[#707070] m-4 text-[20px]">
      {props.children}
    </div>
  );
};

export default SubHeader;
