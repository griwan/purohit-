import classNames from "classnames";
export default function PotatoLayout(props) {
  return (
    <div
      className={classNames("flex", String(props.class), {
        "mx-auto": props.mxAuto,
        "mx-[1rem] lg:mx-[3rem]": props.space,
        "my-[1rem] lg:my-[3rem]": props.Cspace,
        "gap-[1rem] lg:gap-[2rem]": props.gap,
        "w-4/5": props.w80,
        "bg-[#F5F7F9] p-[1.5rem]": props.bg,
      })}
    >
      {props.children}
    </div>
  );
}
