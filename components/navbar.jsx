import { useEffect } from 'react';
import classNames from 'classnames';
import styles from '../styles/navbar.module.css';
import { navAtom } from '../store';
import { useAtom, useAtomValue } from 'jotai';

export default function NavBar() {
  const { prev, next, module, section } = useAtomValue(navAtom);

  useEffect(() => {
    console.log(module, section);
  }, [module, section]);

  // intro class start
  let introClass = classNames(
    'sm:text-xs lg:text-lg bg-hex-075985 w-1/12 flex justify-center items-center z-10',
    { 'bg-[#999999]': module !== 1, 'bg-[#6E95AD]': module === 1 }
  );

  let introClassArrow = classNames(`${styles.arrow} ${styles.arrowleft}`, {
    'bg-[#999999]': module !== 1,
    'bg-[#6E95AD]': module === 1,
  });

  let introClassArrowMB = classNames(`${styles.arrow} ${styles.arrowleft}`, {
    'bg-[#707070]': module !== 1,
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
      <section className="sm:text-xs lg:text-lg flex flex-1 justify-center">
        MODULE A
      </section>
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
        <section className="sm:text-xs lg:text-lg flex flex-1 justify-center z-10">
          Section 1
        </section>
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
        <section className="sm:text-xs lg:text-lg flex flex-1 justify-center z-10">
          Section 2
        </section>
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
        <section className="sm:text-xs lg:text-lg flex flex-1 justify-center z-10">
          Section 3
        </section>
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
      <section className="sm:text-xs lg:text-lg lg:text-lg flex flex-1 justify-center z-10">
        MODULE B
      </section>
      <section className="flex flex-1 justify-center"></section>
      <div className={moduleBClassArrow}></div>
    </div>
  );

  const ModuleBSection = () => (
    <div className={classNames('flex-1 flex justify-center')}>
      <div
        className={classNames('flex items-center flex-1 bg-[#C26578]', {
          'bg-[#5A5A5A]': section !== 4,
        })}
      >
        <div className={introClassArrowMB}></div>
        <section className="sm:text-xs lg:text-lg flex flex-1 justify-center z-10">
          Section 4
        </section>
      </div>
      <div
        className={classNames('flex items-center flex-1 bg-[#B5445B]', {
          'bg-[#4C4C4C]': section !== 5,
        })}
      >
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowleft]: true,
            'bg-[#C26578]': module === 3,
            'bg-[#C26578]': section === 4,
            'bg-[#5A5A5A]': section !== 4,
          })}
        ></div>
        <section className="sm:text-xs lg:text-lg flex flex-1 justify-center z-10">
          Section 5
        </section>
      </div>
      <div
        className={classNames('flex items-center flex-1 bg-[#A9253F]', {
          'bg-[#3E3E3E]': section !== 6,
        })}
      >
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowleft]: true,
            'bg-[#B5445B]': module === 3,
            'bg-[#B5445B]': section === 5,
            'bg-[#4C4C4C]': section !== 5,
          })}
        ></div>
        <section className="sm:text-xs lg:text-lg flex flex-1 justify-center z-10">
          Section 6
        </section>
        <div
          className={classNames({
            [styles.arrow]: true,
            [styles.arrowright]: true,
            'bg-[#A9253F]': module === 3,
            'bg-[#A9253F]': section === 6,
            'bg-[#3E3E3E]': section !== 6,
          })}
        ></div>
      </div>
    </div>
  );

  if (module === 2 || (section >= 1 && section < 4)) {
    return (
      <>
        <div className="flex text-white max-h-[6vh] min-h-[6vh] text-1.25rem leading-6 font-sans">
          <div className={introClass}>Intro</div>
          <ModuleASection />
          <ModuleB />
          <div className="sm:text-xs lg:text-lg bg-[#333333] w-1/12 flex justify-center items-center">
            <span className="z-10 -mr-5">End</span>
          </div>
        </div>
      </>
    );
  }

  if (module === 3 || section > 3) {
    return (
      <>
        <div className="flex text-white max-h-[6vh] min-h-[6vh] text-1.25rem leading-6 font-sans">
          <div className={introClass}>Intro</div>
          <ModuleA />
          <ModuleBSection />
          {/* hehe */}
          <div className="text-xs lg:text-lg bg-[#333333] w-1/12 flex justify-center items-center">
            <span className="z-10 -mr-5">End</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex text-white max-h-[6vh] min-h-[6vh] text-1.25rem leading-6 font-sans">
        <div className={introClass}>Intro</div>
        <ModuleA />
        <ModuleB />
        <div
          className={classNames(
            'sm:text-xs lg:text-lg bg-[#333333] w-1/12 flex justify-center items-center',
            {
              'bg-[#001D4A]': module === 4,
            }
          )}
        >
          <span className="z-10 -mr-5">End</span>
        </div>
      </div>
    </>
  );
}
