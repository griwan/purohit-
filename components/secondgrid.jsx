import Image from 'next/image';
import React from 'react';
import Banner from './banner';
import List from './list';

const Container = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-[110rem]">{props.children}</div>
    </div>
  );
};

const SecondGrid = () => {
  return (
    <Container>
      <div className="mt-[1rem]">
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[1.8rem] text-[#707070] font-sans leading-9 mt-[3.5rem]">
          <div className="flex gap-x-6">
            <div>
              <Image src="/baby.svg" alt="globe" width={100} height={100} />
            </div>
            <div>
              <div className="text-red">
                Sex Assigned at Birth<sup>1</sup>
              </div>
              <div>
                <List
                  type="simple"
                  fontSize="xl:text-xl"
                  listArr={[
                    '“Sex” and “gender” are often used interchangeably',
                    'The terms are not equivalent',
                    'Sex is assigned based on a baby’s genitals',
                    'Once a sex is assigned, we presume the child’s gender',
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="relative w-[10rem]">
              <Image src="/heart.svg" alt="globe" width="100%" height="100%" />
            </div>
            <div>
              <div className="text-red">
                Sexuality<sup>1,3</sup>
              </div>
              <div>
                <List
                  type="simple"
                  fontSize="xl:text-xl"
                  listArr={[
                    'A person’s physical, romantic, and/or emotional attraction to other people of the same gender/different genders',
                    'Some examples of sexual orientation may be asexual, bisexual, gay, lesbian, queer, and/or straight (heterosexual)',
                    'There are many ways to identify sexuality',
                    'Language around sexual orientation is always changing',
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-6 pr-[10%]">
            <div className="relative w-[20rem]">
              <Image src="/gender.svg" alt="globe" width="100%" height="100%" />
            </div>
            <div>
              <div className="text-red">
                Gender Identity<sup>1,2</sup>
              </div>
              <div>
                <List
                  type="simple"
                  fontSize="xl:text-xl"
                  listArr={[
                    'Roles, behaviors, activities, and attributes that society considers appropriate for boys/men and girls/women',
                    'While traditionally regarded as either male or female, gender identity is a fluid concept. It can change for someone at any given time. Gender exists along a continuum of traits that are neither entirely male nor female',
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-6 mt-[3.4rem]">
            <div className="relative w-[6.5rem]">
              <Image
                src="/threepeople.svg"
                alt="globe"
                width="100%"
                height="100%"
              />
            </div>
            <div>
              <div className="text-red">
                Sexual Behavior<sup>4,5</sup>
              </div>
              <div>
                <List
                  type="simple"
                  fontSize="xl:text-xl"
                  listArr={[
                    'Encompasses all activities which gratify an individual’s sexual needs',
                    'May or may not be aligned with sexuality',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SecondGrid;
