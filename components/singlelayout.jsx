import classNames from "classnames";
export default function SingleLayout(props) {
  return (
    <div className="flex justify-center items-center gap-2">
      <div
        className={classNames("w-full lg:max-w-[80%] p-1rem lg:p-2rem", {
          "text-center": props.center,
          "text-left": props.left,
          "text-right": props.right,
        })}
      >
        {props.children}
      </div>
    </div>
  );
}
