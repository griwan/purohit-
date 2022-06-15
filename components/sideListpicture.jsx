import Image from "next/image";
import React from "react";
import List from "./list";
import SubHeader from "./subheader";

const Container = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-10/12">{props.children}</div>
    </div>
  );
};
const SideListPicture = () => {
  return (
    <>
      <SubHeader />
      <Container>
        <div className="flex mx-auto gap-4 2xl:gap-8 font-sans text-sm 2xl:text-[1.5rem] 2xl:leading-9">
          <div className="w-[60%]">
            <List
              raw
              listArr={[
                '<span class="text-red"><b>Intersectionality</b></span> refers to the connectedness of social categorizations in addition to race or gender. These include, but certainly aren’t limited to: class, religion, sexual organization, age, ability, and ethnicity<sup>1</sup>',
                'Talking about people in a multifaceted way, instead of focusing solely on one aspect, helps produce a much <span class="text-red"><b>safer and more open environment<sup>1,2</sup></b></span>',
                '<span class="text-red"><b>Cultural awareness</b></span> means approaching others as distinct individuals, and accepting that you will need to engage with them before you can understand who they are<sup>2</sup>',
                "Trust is earned, but takes time",
              ]}
            />
            <div className="text-red mt-2 ml-8">
              <i>
                “Even if we didn’t know context, we were instructed to remember
                that context existed. Everyone on earth [is] carrying around an
                unseen history, and that alone deserved some tolerance.”
                <sup>3</sup>
              </i>
              <br />
              <b>- Michelle Obama</b>
            </div>
          </div>

          <div className="w-[auto] mx-auto my-auto">
            <img
              className="h-[266px] w-[240px] 2xl:h-[532px] 2xl:w-[480px]"
              src="/multystuff.png"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SideListPicture;
