import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { overlayAtom } from '../store';

const VPopup = (props) => {
  const [_overlay, setOverlay] = useAtom(overlayAtom);

  const hideOverlay = () => {
    setOverlay({ overlayEnable: false });
  };

  useEffect(() => {
    if (props.link) {
      setTimeout(() => {
        window.open(props.link, '_blank', 'noopener,noreferrer');
      }, 1000);
    }
  }, [props.link]);

  return (
    <div className="overlay font-sans">
      <div className="flex justify-center items-center h-full w-full">
        <div className="relative bg-white w-[55%] text-black rounded-3xl p-8 2xl:p-16">
          <a className="closebtn cursor-pointer" onClick={hideOverlay}>
            <img
              className="w-[20px] h-[20px] 2xl:w-[2rem] 2xl:h-[2rem]"
              src="/cross.svg"
              alt="cross"
            />
          </a>
          <div className="flex flex-col h-full items-center gap-10">
            <div className="w-[40%] flex justify-center">
              <img src="/Image_20.png" alt="soundimage" />
            </div>
            <p className="text-[#707070] text-2xl 2xl:text-[2.5rem] text-center leading-9">
              By following this link, you are leaving our site. AIDSVu is
              presented by the Rollins School of Public Health at Emory
              University in partnership with Gilead. Gilead provides this link
              as a convenience. For medical advice, please contact your
              healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPopup;
