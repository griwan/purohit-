import React from "react";
import SubHeader from "./subheader";

const Container = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-10/12">{props.children}</div>
    </div>
  );
};

const CulturalHumility = () => {
  return (
    <Container>
      <SubHeader className="lg:w-3/5">
        An ongoing commitment to self-reflection and growing of beneficial
        unbiased relationships may lead to:
      </SubHeader>
      <div>
        <div className="mt-1 2xl:mt-8 flex items-end justify-center">
          <div className="w-2/10 mb-45px 2xl:mb-[90px]">
            <div className="relative text-center">
              <img src="/s5-1-1.svg" className="m-auto mb-2 2xl:mb-6" />
            </div>
            <div className="text-left text-ui-blue mt-2 2xl:mt-6 font-sans text-base 2xl:text-2xl leading-0 pr-[2.18rem] font-medium">
              Staff behaviors
            </div>
          </div>
          <div className="w-[40%]">
            <div className="text-left text-ui-blue font-sans text-base 2xl:text-2xl 2xl:leading-9 pr-[2.18rem]">
              A better understanding of who one is, their biases, and the
              importance of adjusting to the environment or ecosystem their
              clients or other colleagues are in<sup>1</sup>
              <br />
              <img
                src="/s5-1-2.svg"
                className="mt-2 2xl:mt-[38px] mb-2 2xl:mb-6"
              />
            </div>
          </div>
          <div className="w-[35%] 2xl:w-[27%]">
            <div className="text-left text-ui-blue mt-2 2xl:mt-6 font-sans text-base 2xl:text-2xl 2xl:leading-9 px-[2.18rem]">
              Delivery of high-quality care in a personalized way that respects
              unique needs and perspectives<sup>2</sup>
              <br />
              <img
                src="/s5-1-2.svg"
                className="mt-2 2xl:mt-[38px] mb-2 2xl:mb-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-1 2xl:mt-8 flex items-center justify-center">
          <div className="w-[25%]">
            <div className="relative text-center">
              <img src="/s5-1-3.svg" className="m-auto mb-2 2xl:mb-6" />
            </div>
            <div className="text-left text-red mt-2 2xl:mt-6 font-sans text-base 2xl:text-2xl leading-0 pr-[2.18rem] font-medium -m-10px">
              Organizational behaviors
            </div>
          </div>
          <div className="w-[45%]">
            <div className="text-left text-red font-sans text-base 2xl:text-2xl 2xl:leading-9 px-[2.18rem]">
              Inclusive practices
            </div>
          </div>
          <div className="w-[35%]">
            <div className="text-left text-red mt-2 2xl:mt-6 font-sans text-base 2xl:text-2xl 2xl:leading-9 2xl:px-[2.18rem]">
              Responding to the social, economic, and linguistic needs of
              clients to improve access to care
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CulturalHumility;
