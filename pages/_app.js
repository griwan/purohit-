import "windi.css";
import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/layout.jsx";

import Header from "../components/header";
import Quiz from "../components/quiz";

const components = { Header, Quiz };

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
