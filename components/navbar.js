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

  let moduleClassArrow = classNames(
    `${styles.arrow} ${styles.arrowright} bg-gray-500`
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
    <div className="flex-1 bg-hex-059669 flex justify-center items-center">
      <div className={introClassArrow}></div>
      <section className="flex flex-1 justify-center">Section 1</section>
      <div
        className={classNames({
          [styles.arrow]: true,
          [styles.arrowleft]: true,
        })}
      ></div>
      <section className="flex flex-1 justify-center">Section 2</section>
      <div
        className={classNames({
          [styles.arrow]: true,
          [styles.arrowleft]: true,
        })}
      ></div>
      <section className="flex flex-1 justify-center">Section 3</section>
      <div
        className={classNames({
          [styles.arrow]: true,
          [styles.arrowright]: true,
          'bg-hex-059669': true,
        })}
      ></div>
    </div>
  );

  return (
    <>
      <div className="flex text-white h-10">
        <div className={introClass}>Intro</div>
        <ModuleA />
        <div className="flex-1 bg-hex-155e75 flex justify-center items-center">
          <section className="flex flex-1 justify-center"></section>
          <section className="flex flex-1 justify-center">Module B</section>
          <section className="flex flex-1 justify-center"></section>
          <div
            className={classNames({
              [styles.arrow]: true,
              [styles.arrowright]: true,
              'bg-hex-155e75': true,
            })}
          ></div>
        </div>
        <div className="bg-hex-b2a8bb w-1/12 flex justify-center items-center">
          End
        </div>
      </div>
    </>
  );
}
