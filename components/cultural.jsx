import React from "react";
import SubHeader from "./subheader";

const Container = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-[100rem]">{props.children}</div>
    </div>
  );
};

const CulturalHumility = () => {
  return (
    <div className="px-64">
      <SubHeader className="lg:w-3/5">
        An ongoing commitment to self-reflection and growing of beneficial
        unbiased relationships may lead to:
      </SubHeader>
      <div>
        <div className="mt-8 flex items-end justify-center">
          <div className="w-2/10 mb-[90px]">
            <div className="relative text-center">
              <img src="/s5-1-1.svg" className="m-auto mb-6" />
            </div>
            <div className="text-left text-ui-blue mt-6 font-sans text-1.5rem leading-0 pr-[2.18rem] font-medium">
              Staff behaviors
            </div>
          </div>
          <div className="w-[40%]">
            <div className="text-left text-ui-blue font-sans text-1.5rem leading-9 pr-[2.18rem]">
              A better understanding of who one is, their biases, and the
              importance of adjusting to the environment or ecosystem their
              clients or other colleagues are in<sup>1</sup>
              <br />
              <img src="/s5-1-2.svg" className="mt-[38px] mb-6" />
            </div>
          </div>
          <div className="w-[27%]">
            <div className="text-left text-ui-blue mt-6 font-sans text-1.5rem leading-9 px-[2.18rem]">
              Delivery of high-quality care in a personalized way that respects
              unique needs and perspectives<sup>2</sup>
              <br />
              <img src="/s5-1-2.svg" className="mt-[38px] mb-6" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="w-[25%]">
            <div className="relative text-center">
              <img src="/s5-1-3.svg" className="m-auto mb-6" />
            </div>
            <div className="text-left text-red mt-6 font-sans text-1.5rem leading-0 pr-[2.18rem] font-medium -m-10px">
              Organizational behaviors
            </div>
          </div>
          <div className="w-[45%]">
            <div className="text-left text-red font-sans text-1.5rem leading-9 px-[2.18rem]">
              Inclusive practices
            </div>
          </div>
          <div className="w-[35%]">
            <div className="text-left text-red mt-6 font-sans text-1.5rem leading-9 px-[2.18rem]">
              Responding to the social, economic, and linguistic needs of
              clients to improve access to care
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalHumility;
