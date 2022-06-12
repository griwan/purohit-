import React from 'react';

const HIV = () => {
  return (
    <div className="flex flex-col items-center text-center h-[30rem]">
      <div className="w-[72rem] h-full text-white flex justify-between text-8.5rem text-[#557996] gap-4">
        <div className="flex flex-col justify-center items-center m-0 p-0">
          <div className="h-[10rem] flex items-center font-serif">H</div>
          <div className="text-1.5rem text-red mb-[1rem]">
            Human<sup>1</sup>
          </div>
          <div className="text-1.5rem text-gray-500 w-[19rem]">
            HIV is something that only humans can get.<sup>2</sup>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[10rem] flex items-center font-serif">I</div>
          <div className="text-1.5rem text-red mb-[1rem]">
            Immunodeficiency<sup>1</sup>
          </div>
          <div className="text-1.5rem text-gray-500 w-[33rem]">
            Immunodeficiency means that the immune system, which helps the body
            fight disease, is not working the way it should.<sup>2,3</sup>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="h-[10rem] flex items-center font-serif">V</div>
          <div className="text-1.5rem text-red mb-[1rem]">
            Virus <sup>1</sup>
          </div>
          <div className="text-1.5rem text-gray-500 w-[25rem]">
            A virus is a tiny particle that causes infections by entering a cell
            and making copies of itself.<sup>4</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HIV;
