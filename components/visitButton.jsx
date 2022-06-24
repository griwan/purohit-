import { useAtom } from 'jotai';
import React from 'react';
import { overlayAtom } from '../store';

const VisitButton = () => {
  const [overlay, setOverlay] = useAtom(overlayAtom);

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() =>
          setOverlay({
            overlayEnable: true,
            overlayLink: 'https://www.google.com',
          })
        }
        className="bg-[#395C7E] font-sans text-white font-bold py-4 px-28 rounded-full"
      >
        Visit AIDSVu
      </button>
    </div>
  );
};

export default VisitButton;
