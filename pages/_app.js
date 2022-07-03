import "windi.css";
import "../styles/globals.css";
import "../styles/table.css";
import "../styles/overlay.css";
import "../styles/responsive.css";
import "@vime/core/themes/default.css";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/layout.jsx";
import Image from "next/image";

import Header from "../components/header";
import MdxFooter from "../components/mdxfooter";
import List from "../components/list";
import Quiz from "../components/quiz";
import Section from "../components/section";
import Table from "../components/table";
import BigTable from "../components/bigtable";
import LetterBig from "../components/letterbig";
import LetterSmall from "../components/lettersmall";
import HIV from "../components/hiv";
import DoubleColumn from "../components/doublecolumn";
import FourWay from "../components/fourway";
import EndScreen from "../components/endscreen";
import { TextBlock, PP, Pic, Division } from "../components/textblocks";
import Grid from "../components/grid";
import SecondGrid from "../components/secondgrid";
import TriplePrep from "../components/tripleprep";
import TreatmentTools from "../components/treatmenttools";
import MAS31 from "../components/mas31";
import MAS33 from "../components/mas33";
import MAS38 from "../components/mas38";
import ThreeColumnList from "../components/threecolumnlist";
import ThreeText from "../components/threetext";
import HivChart from "../components/hivchart";
import SideListPicture from "../components/sideListPicture";
import CulturalHumility from "../components/cultural";
import HIVReturns from "../components/SecondHIV";
import Popup from "../components/Popup";
import VPopup from "../components/VPopup";
import VisitButton from "../components/visitButton";

const VPlayer = dynamic(import("../components/player"), {
  ssr: false,
  loading: () => <p>Loading player...</p>,
});
const SubHeader = dynamic(import("../components/subheader"), {
  ssr: false,
});

const SingleLayout = dynamic(() => import("../components/singlelayout"), {
  ssr: false,
});
const DoubleLayout = dynamic(() => import("../components/doublelayout"), {
  ssr: false,
});

const PotatoLayout = dynamic(() => import("../components/potatolayout"), {
  ssr: false,
});

const StickyPicture = dynamic(() => import("../components/stickypicture"), {
  ssr: false,
});

const Container = dynamic(() => import("../components/container"), {
  ssr: false,
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
  BigTable,
  SubHeader,
  StickyPicture,
  VPlayer,
  Image,
  PotatoLayout,
  LetterBig,
  LetterSmall,
  HIV,
  Container,
  DoubleColumn,
  TextBlock,
  FourWay,
  EndScreen,
  Grid,
  SecondGrid,
  TriplePrep,
  TreatmentTools,
  MAS38,
  ThreeColumnList,
  ThreeText,
  HivChart,
  SideListPicture,
  CulturalHumility,
  HIVReturns,
  PP,
  Pic,
  MAS31,
  MAS33,
  Popup,
  VPopup,
  VisitButton,
  Division,
};

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </Suspense>
  );
}

export default MyApp;
