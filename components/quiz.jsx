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
  var optionsArray = options.split(",");

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, optionsArray.length);
  }, [optionsArray]);

  useEffect(() => {
    setBehavior({ forward: false });
  }, []);

  const checkAnswer = (e, i) => {
    if (answered) return;
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
    if (!answered) return <div className="w-580px h-128px pt-2"></div>;
    return (
      <div className="w-580px h-128px pt-2">
        {correct ? (
          <div className="grid grid-cols-5 gap-2 px-25px py-1rem bg-[#557996] text-white">
            <h1 className="text-xl font-sans font-bold">Correct!</h1>
            <div
              className="whitespace-normal col-span-4 text-xl"
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
    <div className="flex flex-col justify-center items-center h-full">
      <div
        text="ui-text xl"
        font="sans"
        w="max"
        h="max"
        className="relative bg-white"
      >
        <div p="20px" border="solid t-2 l-2 ui-text">
          <h3 font="bold" m="b-10px">
            {title}
          </h3>
          <div className="options">
            {optionsArray.map((option, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center py-2 h-62px"
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
                  <label p="l-1rem" font="2xl">
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="absolute -top-100px -left-94px -z-1">
            <Image
              src="/quiz.svg"
              alt="quiz"
              width={203}
              height={207}
              className="absolute top-1rem left-1rem"
            />
          </div>
        </div>
        <ResponseBanner />
      </div>
    </div>
  );
}
