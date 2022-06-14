import Image from 'next/image';
import React from 'react';
import Banner from './banner';

const Grid = () => {
  return (
    <div className="mt-[4rem]">
      <div className="grid grid-cols-2 gap-y-16 gap-x-4 text-[1.8rem] text-[#707070] font-sans leading-9">
        <div className="flex gap-x-6">
          <div>
            <Image src="/globe.svg" alt="globe" width={70} height={90} />
          </div>
          <div>
            HIV testing is a{' '}
            <span className="text-red">national and global priority</span>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="relative w-[20rem]">
            <Image
              src="/mantomedicine.svg"
              alt="globe"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            Providing{' '}
            <span className="text-red">culturally responsive care</span> can
            help mitigate social and structural barriers towards engagement in
            care
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="relative w-[10rem]">
            <Image
              src="/singlesui.svg"
              alt="globe"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            Testing is the first step towards engaging in{' '}
            <span className="text-red">treatment and preventative</span>
            HIV care
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="relative w-[20rem]">
            <Image
              src="/mantomedicine.svg"
              alt="globe"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            By creating an inclusive, culturally responsive environment, we can{' '}
            <span className="text-red">ease the stress and stigma</span> that
            can be associated with HIV testing
          </div>
        </div>
      </div>
      <div className="h-[12rem] w-full font-serif bg-red text-[2.3rem] text-center text-white flex justify-center items-center absolute top-61vh left-0 right-0">
        <div className="w-[86rem]">
          MAKE A COMMITMENT TODAY TO ENGAGE IN PEOPLE-FIRST PRACTICES AS YOU
          SCREEN PEOPLE FOR HIV
        </div>
      </div>
    </div>
  );
};

export default Grid;
