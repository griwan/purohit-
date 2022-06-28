// components/layout.js

import Navbar from './navbar';
import Footer from './footer';
import NavButton from './navbtn';
import OverLay from './overlay';

export default function Layout({ children, ...pageProps }) {
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <OverLay />
      <Navbar />
      <main className="flex-1 relative min-h-[79vh] max-h-[79]">
        <NavButton />
        {children}
      </main>
      <Footer />
    </div>
  );
}
