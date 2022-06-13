import React from 'react';

const Container = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-[100rem]">{props.children}</div>
    </div>
  );
};

const ThreeText = () => {
  return (
    <div className="flex justify-center items-center h-[40rem]">
      <Container>
        <div className="grid grid-cols-3 gap-4 text-center font-sans gap-16">
          <div>
            <div className="text-red text-[1.8rem] mb-4 tracking-widest h-[3.5rem] flex items-center justify-center">
              <b>
                Cultural Awareness<sup>1</sup>
              </b>
            </div>
            <div className="text-[#707070] text-[1.8rem] leading-9">
              An understanding of yourself and how you need to adjust to the
              environment and ecosystem you are in
            </div>
          </div>

          <div>
            <div className="text-red text-[1.8rem] mb-4 tracking-widest h-[3.5rem] flex items-center justify-center">
              <b>
                Cultural Responsiveness<sup>2</sup>
              </b>
            </div>
            <div className="text-[#707070] text-[1.8rem] leading-9">
              The delivery of high-quality care in a personalized way that takes
              into account and respects each individual’s unique cultural and
              linguistic needs and perspectives
            </div>
          </div>

          <div>
            <div className="text-red text-[1.8rem] mb-4 tracking-widest h-[3.5rem] flex items-center justify-center">
              <b>
                Cultural Humility<sup>3</sup>
              </b>
            </div>
            <div className="text-[#707070] text-[1.8rem] leading-9">
              Ongoing commitment to self-reflection and growing of beneficial,
              unbiased relationships. Cultural humility is a lifelong commitment
              to self-evaluation and self-critique
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThreeText;
