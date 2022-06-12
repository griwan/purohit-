import React from 'react';

const LetterBig = (props) => {
  const letters = props.letters.split('');
  return (
    <div className={`"text-red font-serif text-red text-8.3rem mt-4rem`}>
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
