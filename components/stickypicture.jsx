import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

const StickyPicture = (props) => {
  return (
    <div>
      <div
        className={classNames('flex h-full flex-row', {
          'flex-row': !props.direction,
          'flex-row-reverse': props.direction,
        })}
      >
        <div
          className={classNames(
            'w-[31.25rem] bg-black h-full relative mr-[5rem]',
            {
              'mr-[0rem]': props.direction,
              'ml-[5rem]': props.direction,
            }
          )}
        >
          <div
            className={classNames('h-[1rem]', {
              'bg-[#A9253F]': props.secondary,
              'bg-[#476A8A]': props.primary,
            })}
          ></div>
          <Image
            src={props.image}
            alt="section"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className="grow max-w-[62rem] mt-[3.75rem]">{props.children}</div>
      </div>
    </div>
  );
};

export default StickyPicture;
