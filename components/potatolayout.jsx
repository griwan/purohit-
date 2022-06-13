import classNames from "classnames";
export default function PotatoLayout(props) {
  return (
    <div className={classNames("flex", String(props.class))}>
      {props.children}
    </div>
  );
}
