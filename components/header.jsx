export default function Header(props) {
  return (
    <header className="flex w-full h-16vh justify-center items-center font-serif bg-ui-light v border-b-3 border-ui-cyan font-serif text-ui-gray text-4xl uppercase text-center">
      <div className="h-max">{props.children}</div>
    </header>
  );
}
