import classNames from "classnames";
export default function PotatoLayout(props) {
  return (
    <div className={classNames("flex", props.classes)}>{props.children}</div>
  );
}
