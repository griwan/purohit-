import Head from "next/head";
import { useEffect } from "react";
import { navAtom } from "../store.js";
import { useAtom } from "jotai";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useAtom(navAtom);
  useEffect(() => {
    setCount({
      module: "Home",
      section: false,
      next: "first-blog",
      prev: false,
    });
  }, []);
  return (
    <div className="bg-light-bg">
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
