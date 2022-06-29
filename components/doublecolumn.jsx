import Image from "next/image";
import React from "react";

const DoubleColumn = () => {
  return (
    <div className="flex flex-row justify-evenly mt-[1rem] 2xl:mt-[6rem] font-sans">
      <div className="flex flex-col w-6/12 2xl:w-[28rem] gap-1 2xl:gap-4">
        <div>
          <Image src="/threenext.svg" alt="next" width={120} height={120} />
        </div>
        <div className="text-red text-lg 2xl:text-3xl">What next?</div>
        <div className="text-base 2xl:text-2xl text-[#707070] 2xl:leading-7">
          If someone’s test result comes back positive, it is important to
          remind them the following about STIs:
        </div>
        <div className="text-base 2xl:text-2xl text-[#476A8A] 2xl:leading-7">
          Some are curable. Most are treatable. All are manageable.<sup>1</sup> A
          healthcare provider can help figure out what treatment is right.
        </div>
      </div>
      <div className="flex flex-col w-6/12 2xl:w-[44rem] gap-1 2xl:gap-4">
        <div>
          <Image src="/sui.png" alt="next" width={320} height={120} />
        </div>
        <div className="text-red text-2xl 2xl:text-3xl">
          What’s the deal with retesting?
        </div>
        <div className="text-base 2xl:text-2xl text-[#707070] 2xl:leading-7">
          Even if all test results come back negative, testing isn’t a
          one-and-done process. If someone is sexually active, they should get
          tested regularly.
        </div>
        <div className="text-base 2xl:text-2xl text-[#707070] 2xl:leading-7">
          Each STI has a different growth period. So it may take different
          amounts of time for STIs to show up in someone’s body.<sup>2</sup>
        </div>
        <div className="text-base 2xl:text-2xl text-[#476A8A] 2xl:leading-7">
          It is important to encourage others to discuss with their healthcare
          provider how often they should get tested.
        </div>
      </div>
    </div>
  );
};

export default DoubleColumn;
