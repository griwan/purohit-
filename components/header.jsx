export default function Header(props) {
  return (
    <header
      className={
        props.className ?? "flex w-full justify-center font-serif bg-ui-light"
      }
    >
      {props.children}
    </header>
  );
}
