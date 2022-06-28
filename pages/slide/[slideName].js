import matter from "gray-matter";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getFileData, getPaths } from "../../MDX";
import { navAtom, footerAtom, overlayAtom } from "../../store";
import ReactAudioPlayer from "react-audio-player";
import { useAtom } from "jotai";
import classNames from "classnames";

const Slides = ({ mdxSource, frontMatter }) => {
  const audioRef = useRef(null);
  const [_nav, setNav] = useAtom(navAtom);
  const [geet, setGeet] = useState(null);
  const [_footer, setFooter] = useAtom(footerAtom);
  const [_overlay, setOverlay] = useAtom(overlayAtom);
  const {
    title,
    module,
    section,
    next,
    prev,
    footer,
    footerContent,
    audio,
    overlayEnable,
    overlayLink,
    overlayContent,
    overlayImage,
    overlayType,
  } = frontMatter;
  useEffect(() => {
    setGeet(audio ?? null);
    setNav({ module, section, next, prev });
    setFooter({ enable: footer, className: "", content: footerContent });
    setOverlay({
      overlayEnable,
      overlayLink,
      overlayImage,
      overlayContent,
      overlayType,
    });
  }, [
    module,
    next,
    prev,
    section,
    setNav,
    setFooter,
    footer,
    footerContent,
    audio,
    overlayEnable,
    overlayLink,
    overlayContent,
    overlayImage,
    overlayType,
    setOverlay,
  ]);
  return (
    <div
      className={classNames("overflow-y-auto overscroll-contain", {
        "min-h-[79vh] max-h-[79vh]": footer,
        "min-h-[94vh] max-h-[94vh]": !footer,
      })}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!!geet && (
        <ReactAudioPlayer
          ref={audioRef}
          src={geet}
          autoPlay={true}
          className="absolute bottom-0 left-0"
        />
      )}
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default Slides;

export const getStaticProps = async (context) => {
  const { slideName } = context.params;

  const source = getFileData(slideName);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getPaths();

  return {
    paths,
    fallback: false,
  };
};
