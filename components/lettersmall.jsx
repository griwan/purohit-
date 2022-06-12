import React from 'react';

const LetterSmall = (props) => {
  const letters = props.letters.split(',');
  return (
    <div className={`"text-red font-serif text-gray-500 text-1.5rem mt-4rem`}>
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

export default LetterSmall;
