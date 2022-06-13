import classNames from "classnames";
export default function PotatoLayout(props) {
  return (
    <div
      className={classNames("flex", String(props.class), {
        "mx-auto": props.mxAuto,
        "mx-[2rem] lg:mx-[5rem]": props.space,
        "mx-[2rem] lg:my-[5rem]": props.Cspace,
        "gap-[1rem] lg:gap-[2rem]": props.gap,
        "w-4/5": props.w80,
        "bg-[#F5F7F9] p-[1.5rem]": props.bg,
      })}
    >
      {props.children}
    </div>
  );
}
