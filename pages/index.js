import Head from "next/head";
import { useEffect } from "react";
import { navAtom, footerAtom } from "../store.js";
import { useAtom } from "jotai";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useAtom(navAtom);
  const [footer, setFooter] = useAtom(footerAtom);
  useEffect(() => {
    setCount({
      module: "Home",
      section: false,
      next: "first-blog",
      prev: false,
    });
    setFooter({ enable: true, className: "bg-white" });
  }, [setCount, setFooter]);
  return (
    <div className="bg-ui-light h-full">
      <Head>
        <title>Project H</title>
        <meta name="description" content="Project H" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center h-full">
        <div>
          <Image src="/logo.svg" height={390} width={475} alt="logo" />
        </div>
        <div className="font-serif text-ui-gray h-max px-10">
          <span className="text-6xl">PROVIDING</span>
          <br />
          <span className="text-8xl text-red">
            HIV TESTING <br />
            <span className="text-8xl text-red">SERVICES</span>
          </span>{" "}
          <br />
          <span className="text-6xl">TO YOUR COMMUNITY</span>
          <p className="font-sans text-4xl pt-9"> A Preparation Guide </p>
        </div>
      </main>
    </div>
  );
}
