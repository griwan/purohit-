import "windi.css";
import "../styles/globals.css";
import "../styles/table.css";
import "@vime/core/themes/default.css";

import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/layout.jsx";

import Header from "../components/header";
import MdxFooter from "../components/mdxfooter";
import List from "../components/list";
import SingleLayout from "../components/singlelayout";
import Quiz from "../components/quiz";
import Section from "../components/section";
import DoubleLayout from "../components/doublelayout";
import Table from "../components/table";
import SubHeader from "../components/subheader";

const VPlayer = dynamic(import("../components/player"), {
  ssr: false,
  loading: () => <p>Loading player...</p>,
});

const components = {
  Header,
  MdxFooter,
  Quiz,
  List,
  SingleLayout,
  Section,
  DoubleLayout,
  Table,
  SubHeader,
  VPlayer,
};

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
