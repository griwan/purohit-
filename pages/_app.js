import "windi.css";
import "../styles/globals.css";
import "../styles/table.css";

import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/layout.jsx";

import Header from "../components/header";
import MdxFooter from "../components/mdxfooter";
import List from "../components/list";
import SingleLayout from "../components/singlelayout";
import Quiz from "../components/quiz";
import Section from "../components/section";

const components = { Header, MdxFooter, Quiz, List, SingleLayout, Section };

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;
