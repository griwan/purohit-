import Image from "next/image";
import React from "react";

const List = ({ type = "simple", list }) => {
  const topics = list.split("\n");
  const simpleList = () => (
    <ul className="list-outside list-disc ml-6">
      {topics.map((topic, index) => (
        <li className="text-[#A9253F]" key={index}>
          <span className="text-gray-500 text-[20px]">{topic}</span>
        </li>
      ))}
    </ul>
  );

  const numberedList = () => (
    <ul>
      {topics.map((topic, index) => (
        <li className="text-[#A9253F] flex items-center py-1" key={index}>
          <div>
            <span className="h-[35px] w-[35px] bg-[#A9253F] text-white inline-block rounded-full my-2 text-center flex items-center justify-center">
              {index + 1}
            </span>
          </div>
          <span className="text-gray-500 text-1rem lg:text-1.5rem ml-2">
            {topic}
          </span>
        </li>
      ))}
    </ul>
  );

  const tickedList = () => (
    <ul>
      {topics.map((topic, index) => (
        <li className="flex align-center ml-1 my-1" key={index}>
          <Image
            src={`${color === "red" ? "/redtick.svg" : "/tabletick.svg"}`}
            width={25}
            height={25}
            alt="tick"
          />
          <span className="text-gray-500 ml-1 text-[20px]">{topic}</span>
        </li>
      ))}
    </ul>
  );

  switch (type) {
    case "simple":
      return simpleList();
    case "numbered":
      return numberedList();
    case "ticked":
      return tickedList();
    default:
      return simpleList();
  }
};

export default List;
