import Image from "next/image";
import React from "react";
import List from "./list";

const Container = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-10/12">{props.children}</div>
    </div>
  );
};

const ThreeColumnList = () => {
  return (
    <Container>
      <div className="flex gap-4 2xl:gap-8 font-sans mt-4 2xl:mt-8 2xl:leading-9">
        <div className="flex flex-col justify-center w-[70%] mt-4 2xl:mt-16">
          <div>
            <List
              raw
              listArr={[
                '<span class="text-red"><b>People-first language puts the individual before the diagnosis,</b></span> describing what the individual “has” rather than asserting what the individual “is”<sup>1</sup>',
                'Using inappropriate or inaccurate language to describe people living with HIV increases the amount of <span class="text-red"><b>stigma and stress</b></span> they can experience<sup>1</sup>',
                'Putting the label before the person, as in the phrases <span class="text-red"><b>“HIV-infected man”</b></span> or <span class="text-red"><b>“HIV-infected mother”<sup>1</sup></b></span>',
              ]}
            />
          </div>
          <div>
            <List
              fontSize="text-base 2xl:text-2xl"
              listArr={[
                "Dehumanizes the individual",
                "Turns the person into a disease or illness",
                "Reinforces stigma",
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 2xl:gap-8 w-full">
          <div className="text-center text-[#707070] text-2xl 2xl:text-3xl">
            Examples of Using People-First Language<sup>2</sup>
          </div>
          <div className="flex justify-between">
            <div className="text-red text-2xl 2xl:text-3xl">
              <b>Not Appropriate</b>
            </div>
            <div className="text-ui-blue text-2xl 2xl:text-3xl">
              <b>Appropriate</b>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="text-red text-base 2xl:text-2xl">
              HIV infected, HIV or AIDS patient, AIDS or HIV carrier, Positives
              or HIVers
            </div>
            <div className="relative h-[1rem]">
              <Image
                src="/rightarrow.svg"
                width="100%"
                height="100%"
                alt="arrow"
              />
            </div>
            <div className="text-ui-blue text-base 2xl:text-2xl text-right">
              Person living with HIV: PLHIV, PLWH; never use “infected” when
              referring to a person
            </div>
          </div>

          <div className="flex justify-between">
            <div className="text-red text-base 2xl:text-2xl">HIV Infection</div>
            <div>
              <img src="/rightarrow.svg" alt="arrow" />
            </div>
            <div className="text-ui-blue text-base 2xl:text-2xl text-right">
              HIV transmission; diagnosed with HIV
            </div>
          </div>

          <div className="flex justify-between">
            <div className="text-red text-base 2xl:text-2xl">
              To catch AIDS, to contract AIDS, to transmit AIDS, to catch HIV
            </div>
            <div className="relative">
              <Image
                src="/rightarrow.svg"
                width="100%"
                height="100%"
                alt="arrow"
              />
            </div>
            <div className="text-ui-blue text-base 2xl:text-2xl text-right">
              Living with AIDS; now living with HIV (AIDS is a condition that
              results from HIV progression)
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ThreeColumnList;
