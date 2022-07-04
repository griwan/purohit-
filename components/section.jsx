import Image from "next/image";
import React from "react";

const Section = ({ section, color }) => {
  const contents = {
    section1: {
      title: "Section 1",
      heading: "UNDERSTANDING HIV and STIs",
      image: "/section1.png",
      actor:false
    },
    section2: {
      title: "Section 2",
      heading: "THE BASICS OF HIV AND STI TESTING",
      image: "/section2.png",
      actor:false
    },
    section3: {
      title: "Section 3",
      heading: "HIGHLIGHTING THE NEED FOR HIV TESTING",
      image: "/section3.png",
      actor:true
    },
    section4: {
      title: "Section 4",
      heading: "BARRIERS TO CARE IN THE HIV COMMUNITY",
      image: "/section4.png",
      actor:true
    },
    section5: {
      title: "Section 5",
      heading:
        "ADDRESSING BARRIERS TO CARE THROUGH CULTURAL HUMILITY AND CULTURAL RESPONSIVENESS",
      image: "/section5.png",
      actor:true
    },
    section6: {
      title: "Section 6",
      heading: "DELIVERING CULTURALLY RESPONSIVE CARE",
      image: "/section6.png",
      actor:false
    },
  };

  let title = contents[section].title;
  let heading = contents[section].heading;
  let image = contents[section].image;
  let actor = contents[section].actor;

  return (
    <div className="flex flex-col items-center h-[94vh]">
      <div
        className={`flex flex-col flex-1 justify-center items-center w-full ${color}`}
      >
        <div className="flex-1 text-white text-4xl 2xl:text-[3.875rem] flex items-center font-sans">
          {title}
        </div>
        <div className="flex-1 text-white text-5xl 2xl:text-[4.563rem] font-medium font-serif text-center max-w-[80%]">
          {heading}
        </div>
      </div>
      <div className="flex-1 h-full w-full relative">
        <Image src={image} alt="section" layout="fill" objectFit="cover" />
        {actor &&
        <h1 style={{position:'absolute',bottom:'0',left:'0',padding:'20px'}}>Actor Portrayal.</h1>
        }
        </div>
    </div>
  );
};

export default Section;
