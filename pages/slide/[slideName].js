import matter from "gray-matter";
import Head from "next/head";
import { useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getFileData, getPaths } from "../../MDX";
import { navAtom, footerAtom } from "../../store";
import { useAtom } from "jotai";

const Slides = ({ mdxSource, frontMatter }) => {
  const [nav, setNav] = useAtom(navAtom);
  const [_footer, setFooter] = useAtom(footerAtom);
  const { title, module, section, next, prev, footer, footerContent } =
    frontMatter;
  useEffect(() => {
    setNav({ module, section, next, prev });
    setFooter({ enable: footer, className: "", content: footerContent });
  }, [module, next, prev, section, setNav, setFooter, footer, footerContent]);
  return (
    <div className="wrapper">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
