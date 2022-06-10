import { navAtom } from "../store.js";
import { useAtomValue } from "jotai";

export default function Header(props) {
  return (
    <header className="flex w-full justify-center font-serif" bg="light-bg">
      {props.children}
    </header>
  );
}
