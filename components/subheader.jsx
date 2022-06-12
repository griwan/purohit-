import React from 'react';

const SubHeader = (props) => {
  return (
    <div className="flex justify-center leading-9 text-[#707070] mt-[4.5rem] text-1.5rem lg:text-[30px] font-sans text-center w-full lg:w-4/5 mx-auto">
      {props.children}
    </div>
  );
};

export default SubHeader;
