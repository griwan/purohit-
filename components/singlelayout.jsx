import React from 'react';

const SingleLayout = (props) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl">{props.children}</div>
    </div>
  );
};

export default SingleLayout;
