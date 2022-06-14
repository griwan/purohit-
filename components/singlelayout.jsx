import classNames from "classnames";
export default function SingleLayout(props) {
  return (
    <div className="flex justify-center items-center gap-1 2xl:gap-2">
      <div
        className={classNames(
          "w-full lg:max-w-[80%] 2xl:max-w-[60%] p-1rem 2xl:p-2rem",
          {
            "text-center": props.center,
            "text-left": props.left,
            "text-right": props.right,
            "2xl:max-w-[80%]": props.w80,
          }
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
