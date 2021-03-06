import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { overlayAtom } from '../store';

const Popup = (props) => {
  const [_overlay, setOverlay] = useAtom(overlayAtom);

  const hideOverlay = () => {
    setOverlay({ overlayEnable: false });
  };

  return (
    <div className="overlay font-sans">
      <div className="flex justify-center items-center h-full w-full">
        <div className="relative bg-white w-[55%] h-[35%] text-black rounded-3xl p-3 2xl:p-6">
          <a className="closebtn cursor-pointer" onClick={hideOverlay}>
            <img
              className="w-[20px] h-[20px] 2xl:w-[2rem] 2xl:h-[2rem]"
              src="/cross.svg"
              alt="cross"
            />
          </a>
          <div className="flex h-full items-center gap-6">
            <div className="w-[40%] flex justify-center">
              <img src={props.image} alt="soundimage" />
            </div>
            <p className="text-[#707070] text-2xl 2xl:text-[2.5rem] w-[60%] pr-5">
              {props.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
