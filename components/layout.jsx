// components/layout.js
import classNames from "classnames";
import { useAtomValue } from "jotai";

import { footerAtom, navBehavior } from "../store.js";

import Navbar from "./navbar";
import Footer from "./footer";
import NavButton from "./navbtn";
import OverLay from "./overlay";

export default function Layout({ children, ...pageProps }) {
  const { enable } = useAtomValue(footerAtom);
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <OverLay />
      <Navbar />
      <main
        className={classNames("flex-1 relative", {
          "min-h-[79vh] max-h-[79vh]": enable,
          "min-h-[94vh] max-h-[94vh]": !enable,
        })}
      >
        <NavButton />
        {children}
      </main>
      <Footer />
    </div>
  );
}
