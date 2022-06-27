import Head from "next/head";
import { useEffect, useState } from "react";
import { navAtom, footerAtom, overlayAtom } from "../store.js";
import { useAtom } from "jotai";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";
import Popup from "../components/Popup.jsx";

export default function Home() {
  const [count, setCount] = useAtom(navAtom);
  const [footer, setFooter] = useAtom(footerAtom);
  const [overlay, setOverlay] = useAtom(overlayAtom);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (!overlay.overlayEnable) setAudio("/audio/test.mp3");
    return () => {
      setAudio(null);
    };
  }, [overlay]);

  useEffect(() => {
    setCount({
      module: "Home",
      section: false,
      next: "INTRO-1",
      prev: false,
    });
    setFooter({ enable: true, className: "bg-white", defaults: true });
    setOverlay({
      overlayEnable: true,
      overlayType: "h",
      overlayImage: "/Sound.svg",
      overlayContent:
        "Turn on the audio device to be able to listen to this educational program.",
    });
  }, [setCount, setFooter, setOverlay]);
  return (
    <div className="bg-ui-light h-full">
      <Head>
        <title>Project H</title>
        <meta name="description" content="Project H" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-around md:p-2 2xl:p-10 items-center wrapper">
        <div>
          <Image src="/logo.svg" height={390} width={475} alt="logo" />
        </div>
        <div className="font-serif text-ui-gray h-max px-10">
          <span className="text-2rem lg:text-3rem 2xl:text-4rem">
            PROVIDING
          </span>
          <br />
          <span className="text-3rem md:text-5rem 2xl:text-7rem text-red">
            HIV TESTING <br />
            <span className="text-3rem md:text-5rem 2xl:text-7rem text-red">
              SERVICES
            </span>
          </span>{" "}
          <br />
          <span className="text-1.5rem md:text-2rem 2xl:text-4rem">
            TO YOUR COMMUNITY
          </span>
          <p className="font-sans text-xl md:text-1.5rem 2xl:text-2.5rem pt-9">
            {" "}
            A Preparation Guide{" "}
          </p>
        </div>
      </main>
      {!!audio && (
        <ReactAudioPlayer
          src={audio}
          autoPlay={true}
          className="absolute bottom-0 left-0"
        />
      )}
    </div>
  );
}
