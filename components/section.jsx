import Image from 'next/image';
import React from 'react';

const Section = ({ section }) => {
  const contents = {
    section1: {
      title: 'Section 1',
      heading: 'UNDERSTANDING HIV and STIs',
      image: '/section1.png',
      color: '#557996',
    },
    section2: {
      title: 'Section 2',
      heading: 'THE BASICS OF HIV AND STI TESTING',
      image: '/section2.png',
      color: '#557996',
    },
    section3: {
      title: 'Section 3',
      heading: 'HIGHLIGHTING THE NEED FOR HIV TESTING',
      image: '/section3.png',
      color: '#557996',
    },
  };

  let title = contents[section].title;
  let heading = contents[section].heading;
  let image = contents[section].image;
  let color = `bg-[${contents[section].color}]`;

  return (
    <div className="flex flex-col items-center h-full">
      <div
        className={`flex flex-col flex-1 justify-center items-center w-full ${color}`}
      >
        <div className="flex-1 text-white text-[3.875rem] flex items-end font-sans mb-16">
          {title}
        </div>
        <div className="flex-1 text-white text-[4.563rem] font-medium font-serif text-center">
          {heading}
        </div>
      </div>
      <div className="flex-1 h-full w-full relative">
        <Image
          src={image}
          alt="section"
          width="100%"
          height="100%"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Section;
