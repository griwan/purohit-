import React from 'react';

const SubHeader = (props) => {
  return (
    <div className="flex justify-centero text-center leading-9 text-[#707070] mt-[4.5rem] text-[30px] font-sans">
      {props.children}
    </div>
  );
};

export default SubHeader;
