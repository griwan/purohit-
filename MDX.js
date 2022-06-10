const fs = require("fs");
const path = require("path");
import matter from "gray-matter";

let root = process.cwd();

export const getSlides = () => {
  let slides = [];
  const files = fs.readdirSync(path.join(root, "slides"));

  if (files) {
    files.forEach((file) => {
      if (path.extname(file) == ".mdx") {
        const source = fs.readFileSync(path.join(root, "slides", `${file}`), {
          encoding: "utf-8",
        });
        const { content, data } = matter(source);
        slides.push({ ...data, link: file.replace(".mdx", "") });
      }
    });
    return slides;
  } else {
    return null;
  }
};

export const getStaticProps = () => {
  const slides = getSlides();

  return {
    props: {
      slides,
    },
  };
};
export const getPaths = () => {
  let paths = [];

  const files = fs.readdirSync(path.join(root, "slides"));
  if (files) {
    files.forEach((file) => {
      if (path.extname(file) == ".mdx") {
        paths.push({ params: { slideName: file.replace(".mdx", "") } });
      }
    });
    return paths;
  } else {
    return null;
  }
};

export const getFileData = (fileName) => {
  const data = fs.readFileSync(path.join(root, "slides", `${fileName}.mdx`), {
    encoding: "utf-8",
  });
  if (data) {
    return data;
  } else {
    return null;
  }
};
