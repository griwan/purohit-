import matter from "gray-matter";
import { useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getFileData, getPaths } from "../../MDX";
import { navAtom } from "../../store";
import { useAtom } from "jotai";

const Slides = ({ mdxSource, frontMatter }) => {
  const [nav, setNav] = useAtom(navAtom);
  const { module, section, next, prev } = frontMatter;
  useEffect(() => {
    setNav({ module, section, next, prev });
  }, []);
  return (
    <div className="wrapper">
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
