import classNames from 'classnames';
import Image from 'next/image';

const MdxFooter = (props) => {
  return (
    <footer
      className={classNames(
        'bg-ui-light',
        'container max-w-screen pin-b px-1 py-1 mx-auto',
        'fixed bottom-0'
      )}
    >
      <div className="sm:justify-between sm:items-center sm:flex">
        <div className="text-center sm:text-left">{props.children}</div>
        <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">
          <Image
            src="/Gilead_HIV_2020_RedGrey.png"
            alt="me"
            width={385}
            height={130}
          />
        </div>
      </div>
    </footer>
  );
};
export default MdxFooter;
