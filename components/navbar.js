import classNames from 'classnames';
import styles from '../styles/navbar.module.css';
import { navAtom } from '../store';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

export default function NavBar() {
  const { prev, next, module, section } = useAtomValue(navAtom);

  useEffect(() => {
    console.log('[ nav ] >', next, prev, module, section);
  }, []);

  // intro class start
  let introClass = classNames(
    'bg-hex-075985 w-1/12 flex justify-center items-center',
    { 'bg-hex-9ca3af': module !== 1, 'bg-hex-075985': module === 1 }
  );

  let introClassArrow = classNames(`${styles.arrow} ${styles.arrowleft}`, {
    'bg-hex-9ca3af': module !== 1,
    'bg-hex-075985': module === 1,
  });

  //   intro class end

  // module A class start
  let moduleClass = classNames(
    'flex-1 bg-gray-500 flex justify-center items-center'
  );

  let moduleBClass = classNames(
    'flex-1 bg-gray-700 flex justify-center items-center'
  );

  let moduleClassArrow = classNames(
    `${styles.arrow} ${styles.arrowright} bg-gray-500`
  );

  let moduleBClassArrow = classNames(
    `${styles.arrow} ${styles.arrowright} bg-gray-700`
  );
  //   module A class end

  const ModuleA = () => (
    <div className={moduleClass}>
      <div className={introClassArrow}></div>
      <section className="flex flex-1 justify-center"></section>
      <section className="flex flex-1 justify-center">Module A</section>
      <section className="flex flex-1 justify-center"></section>
      <div className={moduleClassArrow}></div>
    </div>
  );

  const ModuleASection = () => (
    <div className={classNames('flex-1 flex justify-center')}>
      <div
        className={classNames('flex items-center flex-1 bg-gray-500', {
          'bg-sky-600': section === 1,
        })}
      >
        <div className={introClassArrow}></div>
        <section className="flex flex-1 justify-center">Section 1</section>
      </div>
      <div
        className={classNames('flex items-center flex-1 bg-gray-500', {
          'bg-sky-600': section === 2,
        })}
      >
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowleft]: true,
            'bg-sky-600': section === 1,
            'bg-gray-500': section !== 1,
          })}
        ></div>
        <section className="flex flex-1 justify-center">Section 2</section>
      </div>
      <div
        className={classNames('flex items-center flex-1 bg-gray-500', {
          'bg-sky-600': section === 3,
        })}
      >
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowleft]: true,
            'bg-sky-600': section === 2,
            'bg-gray-500': section !== 2,
          })}
        ></div>
        <section className="flex flex-1 justify-center">Section 3</section>
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowright]: true,
            'bg-sky-600': section === 3,
            'bg-gray-500': section !== 3,
          })}
        ></div>
      </div>
    </div>
  );

  const ModuleB = () => (
    <div className={moduleBClass}>
      {/* <div className={introClassArrowRight}></div> */}
      <section className="flex flex-1 justify-center"></section>
      <section className="flex flex-1 justify-center">Module B</section>
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
      <div className="flex text-white h-10">
        <div className={introClass}>Intro</div>
        {(section >= 4 || module) && <ModuleA />}
        {!module && section < 4 && <ModuleASection />}
        {(section < 4 || module === 3) && <ModuleB />}
        {!module && section >= 4 && <ModuleBSection />}
        <div className="bg-gray-900 w-1/12 flex justify-center items-center">
          End
        </div>
      </div>
    </>
  );
}
