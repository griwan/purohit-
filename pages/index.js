import Head from "next/head";
import styles from "../styles/Home.module.css";
import { navAtom } from "../store.js";
import { useAtom } from "jotai";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useAtom(navAtom);
  return (
    <div className={styles.container}>
      <Head>
        <title>Project H</title>
        <meta name="description" content="Project H" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-2">
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
