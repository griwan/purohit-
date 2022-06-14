import Image from "next/image";
import React from "react";

const List = ({
  type = "simple",
  list = "",
  fontSize,
  color,
  listArr = [],
  raw,
}) => {
  let mdxtopics = [];
  if (list) {
    mdxtopics = list.split("\n");
  }
  const topics = [...mdxtopics, ...listArr];
  const simpleList = () => (
    <ul className="list-outside list-disc ml-6">
      {topics.map((topic, index) => (
        <li
          className="text-[#A9253F] mb-1 xl:mb-4 list-disc text-left"
          key={index}
        >
          {raw ? (
            <span
              className={
                "text-gray-500 ml-2 font-sans " +
                (String(fontSize) ? String(fontSize) : "text-base 2xl:text-2xl")
              }
              dangerouslySetInnerHTML={{ __html: topic }}
            />
          ) : (
            <span
              className={
                "text-gray-500 ml-2 font-sans " +
                (String(fontSize) ? String(fontSize) : "text-[1.5rem]")
              }
            >
              {topic}
            </span>
          )}
        </li>
      ))}
    </ul>
  );

  const numberedList = () => (
    <ul>
      {topics.map((topic, index) => (
        <li
          className="text-[#A9253F] flex items-center mb-1 2xl:mb-4"
          key={index}
        >
          <div>
            <span className="h-[1.5rem] md:h-3rem 2xl:h-[57px] w-[1.5rem] md:w-3rem 2xl:w-[57px] bg-[#A9253F] text-white text-base md:text-xl 2xl:text-[2.18rem] font-serif leading-10 inline-block rounded-full my-1 2xl:my-2 text-center flex items-center justify-center">
              {index + 1}
            </span>
          </div>
          <span className="text-gray-500 text-base 2xl:text-[1.875rem] ml-4 2xl:leading-9 font-sans font-medium text-left">
            {topic}
          </span>
        </li>
      ))}
    </ul>
  );

  const tickedList = () => (
    <div>
      {topics.map((topic, index) => (
        <div className="inline-table align-center ml-1 my-1" key={index}>
          <span className="align-middle table-cell w-12 h-12">
            <img
              src={color && color === "red" ? "/redtick.svg" : "/tabletick.svg"}
              alt="tick"
            />
          </span>
          <span
            className={
              "align-middle table-cell pl-5 text-[1.5rem] font-sans leading-9 " +
              (color && color === "red" ? "text-red" : "text-ui-blue")
            }
          >
            {topic}
          </span>
        </div>
      ))}
    </div>
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
