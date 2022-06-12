// components/layout.js

import Navbar from './navbar';
import Footer from './footer';
import NavButton from './navbtn';
import Container from './container';
import DoubleColumn from './DoubleColumn';

export default function Layout({ children, ...pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 relative">{children}</main>
      <Footer />
    </div>
  );
}
