// components/layout.js

import Navbar from "./navbar";
import Footer from "./footer";
import NavButton from "./navbtn";

export default function Layout({ children, ...pageProps }) {
  console.log("--", pageProps, "--");
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 p-1 relative">
        <NavButton />
        {children}
      </main>
      <Footer />
    </div>
  );
}
