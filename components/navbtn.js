import Link from "next/link";
import { navAtom } from "../store.js";
import { useAtomValue } from "jotai";

export default function NavButton(props) {
  const { prev, next } = useAtomValue(navAtom);
  return (
    <>
      {!!prev && (
        <Link href={`/slide/${encodeURIComponent(prev)}`}>
          <div className="next bg-red rounded-full absolute left-50px bottom-40px h-80px w-80px">
            <svg
              id="Group_12"
              data-name="Group 12"
              xmlns="http://www.w3.org/2000/svg"
              width="79"
              height="79"
              viewBox="0 0 79 79"
            >
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="39.5"
                cy="39.5"
                r="39.5"
                fill="#a9253f"
              />
              <path
                id="Polygon_3"
                data-name="Polygon 3"
                d="M20,0,40,34H0Z"
                transform="translate(19 60) rotate(-90)"
                fill="#fff"
              />
            </svg>
          </div>
        </Link>
      )}
      {!!next && (
        <Link href={`/slide/${encodeURIComponent(next)}`}>
          <div className="prev bg-red rounded-full absolute right-50px bottom-40px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="79"
              height="79"
              viewBox="0 0 79 79"
            >
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
                  fill="#a9253f"
                />
                <path
                  id="Polygon_3"
                  data-name="Polygon 3"
                  d="M20,0,40,34H0Z"
                  transform="translate(4567 732) rotate(90)"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </Link>
      )}
    </>
  );
}
