/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { navBehavior } from "../store.js";
import { useAtom } from "jotai";

export default function Quiz(props) {
  const [behavior, setBehavior] = useAtom(navBehavior);
  const { title, options, answer, response } = props;
  const [correct, setCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);

  const itemsRef = useRef([]);
  var optionsArray = options.split("\n");

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, optionsArray.length);
  }, [optionsArray]);

  useEffect(() => {
    setBehavior({ forward: false });
  }, []);

  const checkAnswer = (e, i) => {
    if (correct) return;
    setAnswered(true);
    if (e === optionsArray[answer]) {
      itemsRef.current.map((item, index) => {
        if (index === i) {
          item.src = "/correct.svg";
        } else {
          item.src = "/blank.svg";
        }
      });
      setBehavior({ forward: true });
      setCorrect(true);
    } else {
      itemsRef.current.map((item, index) => {
        if (index === i) {
          item.src = "/incorrect.svg";
        } else {
          item.src = "/blank.svg";
        }
      });
      setCorrect(false);
    }
  };
  const resetAnswer = () => {
    itemsRef.current.map((i) => (i.src = "/blank.svg"));
    setAnswered(false);
    setCorrect(false);
  };

  const ResponseBanner = () => {
    if (!answered)
      return <div className="h-64px w-580px 2xl:h-128px pt-2"></div>;
    return (
      <div className="h-64px w-580px 2xl:h-128px pt-2">
        {correct ? (
          <div className="grid grid-cols-5 gap-2 px-25px py-1rem bg-[#557996] text-white">
            <h1 className="text-xl font-sans font-bold">Correct!</h1>
            <div
              className="whitespace-normal col-span-4 text-sm 2xl:text-xl"
              dangerouslySetInnerHTML={{
                __html: response,
              }}
            ></div>
          </div>
        ) : (
          <button
            onClick={resetAnswer}
            className="bg-red text-xl text-white px-1rem py-10px font-sans font-bold"
          >
            Try again
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center picture-wrapper">
      <div
        text="ui-text xl"
        font="sans"
        w="max"
        h="max"
        className="relative bg-white"
      >
        <div p="10px 2xl:20px" border="solid t-2 l-2 ui-text">
          <h2 font="bold" m="b-5px 2xl:b-10px">
            {title}
          </h2>
          <div className="options">
            {optionsArray.map((option, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center py-2 h-52px 2xl:h-62px"
                  onClick={() => checkAnswer(option, index)}
                >
                  <input type="radio" name="option" value={option} />
                  <img
                    src="/blank.svg"
                    ref={(el) => (itemsRef.current[index] = el)}
                    height={46}
                    width={46}
                    alt="radio"
                  />
                  <label p="l-1rem" className="text-base 2xl:text-2xl">
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="absolute w-[150px] h-[150px] -top-[65px] -left-[75px] 2xl:w-[203px] 2xl:h-[207px] 2xl:-top-100px 2xl:-left-94px -z-1">
            <Image
              src="/quiz.svg"
              alt="quiz"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <ResponseBanner />
      </div>
    </div>
  );
}
