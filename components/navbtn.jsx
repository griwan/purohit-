import { useRouter } from "next/router";
import Image from "next/image";
import classNames from "classnames";
import { navAtom, navBehavior } from "../store.js";
import { useAtomValue, useAtom } from "jotai";
import { useState, useEffect } from "react";

export default function NavButton(props) {
  const { prev, next } = useAtomValue(navAtom);
  const [behavior, setBehavior] = useAtom(navBehavior);
  const router = useRouter();
  const [alt, setAlt] = useState(false);

  const routehandler = (route, i) => {
    if (!behavior.forward && i) return;
    setBehavior({ forward: true });
    if (route === "/") {
      router.push("/");
    } else router.push(`/slide/${encodeURIComponent(route)}`);
  };
  return (
    <>
      {!!prev && (
        <div
          className={classNames(
            "next rounded-full absolute left-50px top-66vh h-50px w-50px lg:h-79px lg:w-79px z-10"
          )}
          onClick={() => routehandler(prev, 0)}
        >
          <svg
            id="Group_12"
            data-name="Group 12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 79 79"
          >
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="39.5"
              cy="39.5"
              r="39.5"
              fill={next != "END" ? "#A9253F" : "#fff"}
            />
            <path
              id="Polygon_3"
              data-name="Polygon 3"
              d="M20,0,40,34H0Z"
              transform="translate(19 60) rotate(-90)"
              fill={next === "END" ? "#A9253F" : "#fff"}
            />
          </svg>
        </div>
      )}
      {!!next && (
        <div
          className={classNames(
            "next rounded-full absolute right-50px top-66vh h-50px w-50px lg:h-79px lg:w-79px z-10",
            {
              "text-red": behavior.forward,
              "text-[#CCCCCC]": !behavior.forward,
            }
          )}
          onClick={() => routehandler(next, 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 79">
            <g
              id="Group_11"
              data-name="Group 11"
              transform="translate(-4507 -712)"
            >
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="39.5"
                cy="39.5"
                r="39.5"
                transform="translate(4507 712)"
                fill={next != "END" ? "#A9253F" : "#fff"}
              />
              <path
                id="Polygon_3"
                data-name="Polygon 3"
                d="M20,0,40,34H0Z"
                transform="translate(4567 732) rotate(90)"
                fill={next === "END" ? "#A9253F" : "#fff"}
              />
            </g>
          </svg>
        </div>
      )}
    </>
  );
}
