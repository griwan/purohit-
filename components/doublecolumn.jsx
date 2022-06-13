import Image from "next/image";
import React from "react";

const DoubleColumn = () => {
  return (
    <div className="flex flex-row justify-evenly mt-[6rem] font-sans">
      <div className="flex flex-col w-[28rem] gap-4">
        <div>
          <Image src="/threenext.svg" alt="next" width={120} height={120} />
        </div>
        <div className="text-red text-[1.8rem]">What next?</div>
        <div className="text-[1.5rem] text-[#707070] leading-7">
          If someone’s test result comes back positive, it is important to
          remind them the following about STIs:
        </div>
        <div className="text-[1.5rem] text-[#476A8A] leading-7">
          Some are curable. Most are treatable. All are manageable.1 A
          healthcare provider can help figure out what treatment is right.
        </div>
      </div>
      <div className="flex flex-col w-[44rem] gap-4">
        <div>
          <Image src="/sui.png" alt="next" width={320} height={120} />
        </div>
        <div className="text-red text-[1.8rem]">
          What’s the deal with retesting?
        </div>
        <div className="text-[1.5rem] text-[#707070] leading-7">
          Even if all test results come back negative, testing isn’t a
          one-and-done process. If someone is sexually active, they should get
          tested regularly.
        </div>
        <div className="text-[1.5rem] text-[#707070] leading-7">
          Each STI has a different growth period. So it may take different
          amounts of time for STIs to show up in someone’s body.<sup>2</sup>
        </div>
        <div className="text-[1.5rem] text-[#476A8A] leading-7">
          It is important to encourage others to discuss with their healthcare
          provider how often they should get tested.
        </div>
      </div>
    </div>
  );
};

export default DoubleColumn;
