export default function Header(props) {
  return (
    <header className="flex sticky top-0 w-full h-16vh justify-center items-center font-serif font-medium bg-ui-light v border-b-3 border-ui-cyan font-serif text-ui-gray text-lg sm:text-2xl 2xl:text-2.75rem uppercase text-center">
      <div className="h-max leading-normal">{props.children}</div>
    </header>
  );
}
