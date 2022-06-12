import Image from 'next/image';
import React from 'react';

const StickyPicture = (props) => {
  return (
    <div>
      <div className="flex h-full">
        <div className="w-[31.25rem] bg-black h-full relative mr-[5rem]">
          <div className="h-[1rem] bg-[#476A8A]"></div>
          <Image
            src={props.image}
            alt="section"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className="grow max-w-[62rem] mt-[3.75rem]">{props.children}</div>
      </div>
    </div>
  );
};

export default StickyPicture;
