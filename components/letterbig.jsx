import classNames from "classnames";
import React from "react";

const LetterBig = (props) => {
  const letters = props.letters.split("");
  return (
    <div
      className={classNames("font-serif text-8.3rem mt-4rem", {
        "text-red": props.red,
        "text-ui-cyan": props.cyan,
      })}
    >
      <div className="flex justify-center ml-4rem">
        {letters.map((letter, index) => (
          <span className="mr-4rem" key={index}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LetterBig;
