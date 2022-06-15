import matter from "gray-matter";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getFileData, getPaths } from "../../MDX";
import { navAtom, footerAtom } from "../../store";
import ReactAudioPlayer from "react-audio-player";
import { useAtom } from "jotai";

const Slides = ({ mdxSource, frontMatter }) => {
  const audioRef = useRef(null);
  const [nav, setNav] = useAtom(navAtom);
  const [geet, setGeet] = useState(null);
  const [_footer, setFooter] = useAtom(footerAtom);
  const { title, module, section, next, prev, footer, footerContent, audio } =
    frontMatter;
  useEffect(() => {
    setGeet(audio ?? null);
    setNav({ module, section, next, prev });
    setFooter({ enable: footer, className: "", content: footerContent });
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
  ]);
  return (
    <div className="wrapper">
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
