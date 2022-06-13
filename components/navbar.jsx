import classNames from 'classnames';
import styles from '../styles/navbar.module.css';
import { navAtom } from '../store';
import { useAtom, useAtomValue } from 'jotai';

export default function NavBar() {
  const { prev, next, module, section } = useAtomValue(navAtom);

  // intro class start
  let introClass = classNames(
    'bg-hex-075985 w-1/12 flex justify-center items-center',
    { 'bg-[#999999]': module !== 1, 'bg-[#6E95AD]': module === 1 }
  );

  let introClassArrow = classNames(`${styles.arrow} ${styles.arrowleft}`, {
    'bg-[#999999]': module !== 1,
    'bg-[#6E95AD]': module === 1,
  });

  //   intro class end

  // module A class start
  let moduleClass = classNames(
    'flex-1 bg-[#707070] flex justify-center items-center'
  );

  let moduleBClass = classNames(
    'flex-1 bg-[#454545] flex justify-center items-center'
  );

  let moduleClassArrow = classNames(
    `${styles.arrow} ${styles.arrowright} bg-[#707070]`
  );

  let moduleBClassArrow = classNames(
    `${styles.arrow} ${styles.arrowright} bg-[#454545]`
  );
  //   module A class end

  const ModuleA = () => (
    <div className={moduleClass}>
      <div className={introClassArrow}></div>
      <section className="flex flex-1 justify-center"></section>
      <section className="flex flex-1 justify-center">MODULE A</section>
      <section className="flex flex-1 justify-center"></section>
      <div className={moduleClassArrow}></div>
    </div>
  );

  const ModuleASection = () => (
    <div className={classNames('flex-1 flex justify-center')}>
      <div
        className={classNames('flex items-center flex-1 bg-[#557997]', {
          'bg-[#838383]': section !== 1,
        })}
      >
        <div className={introClassArrow}></div>
        <section className="flex flex-1 justify-center">Section 1</section>
      </div>
      <div
        className={classNames('flex items-center flex-1 bg-[#476A8A]', {
          'bg-[#767676]': section !== 2,
        })}
      >
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowleft]: true,
            'bg-[#557997]': module === 2,
            'bg-[#557997]': section === 1,
            'bg-[#838383]': section !== 1,
          })}
        ></div>
        <section className="flex flex-1 justify-center">Section 2</section>
      </div>
      <div
        className={classNames('flex items-center flex-1 bg-[#395C7E]', {
          'bg-[#6A6A6A]': section !== 3,
        })}
      >
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowleft]: true,
            'bg-[#476A8A]': module === 2,
            'bg-[#476A8A]': section === 2,
            'bg-[#767676]': section !== 2,
          })}
        ></div>
        <section className="flex flex-1 justify-center">Section 3</section>
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowright]: true,
            'bg-[#395C7E]': module === 2,
            'bg-[#395C7E]': section === 3,
            'bg-[#6A6A6A]': section !== 3,
          })}
        ></div>
      </div>
    </div>
  );

  const ModuleB = () => (
    <div className={moduleBClass}>
      {/* <div className={introClassArrowRight}></div> */}
      <section className="flex flex-1 justify-center"></section>
      <section className="flex flex-1 justify-center">MODULE B</section>
      <section className="flex flex-1 justify-center"></section>
      <div className={moduleBClassArrow}></div>
    </div>
  );

  const ModuleBSection = () => (
    <div className={classNames('flex-1 flex justify-center')}>
      <div
        className={classNames('flex items-center flex-1 bg-gray-600', {
          'bg-pink-500': section === 4,
        })}
      >
        {/* <div className={introClassArrow}></div> */}
        <section className="flex flex-1 justify-center">Section 4</section>
      </div>
      <div
        className={classNames('flex items-center flex-1 bg-gray-600', {
          'bg-pink-600': section === 5,
        })}
      >
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowleft]: true,
            'bg-pink-500': section === 4,
            'bg-gray-600': section !== 1,
          })}
        ></div>
        <section className="flex flex-1 justify-center">Section 5</section>
      </div>
      <div
        className={classNames('flex items-center flex-1 bg-gray-600', {
          'bg-pink-600': section === 6,
        })}
      >
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowleft]: true,
            'bg-pink-600': section === 5,
            'bg-gray-600': section !== 2,
          })}
        ></div>
        <section className="flex flex-1 justify-center">Section 6</section>
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowright]: true,
            'bg-pink-600': section === 6,
            'bg-gray-600': section !== 3,
          })}
        ></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex text-white h-[4.5rem] text-1.25rem leading-6 font-sans">
        <div className={introClass}>Intro</div>
        {/* {(!section || section >= 4) && module !== 2 && <ModuleA />} */}
        {(module === 2 || section < 4) && <ModuleASection />}
        {(section < 4 || module === 3) && <ModuleB />}
        {!module && section >= 4 && <ModuleBSection />}
        <div className="bg-[#333333] w-1/12 flex justify-center items-center">
          End
        </div>
      </div>
    </>
  );
}
