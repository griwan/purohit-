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
      <main className="flex justify-center item-center">
        <div>
          <Image src="/logo.svg" height={390} width={475} alt="logo" />
        </div>
        <div>
          Providing HIV Testing services to your community A Preparation Guide
        </div>
      </main>
    </div>
  );
}
