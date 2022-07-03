import classNames from "classnames";
export default function Header(props) {
  return (
    <header
      className={classNames(
        "flex sticky z-1 top-0 w-full h-16vh justify-center items-center font-serif font-medium bg-ui-light v border-b-3 border-ui-cyan font-serif text-ui-gray fluid-header uppercase text-center"
      )}
    >
      <div className="h-max w-[95%] leading-normal">{props.children}</div>
    </header>
  );
}
