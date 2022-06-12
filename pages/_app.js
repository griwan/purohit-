import 'windi.css';
import '../styles/globals.css';
import '../styles/table.css';
import '@vime/core/themes/default.css';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout.jsx';
import Image from 'next/image';

import Header from '../components/header';
import MdxFooter from '../components/mdxfooter';
import List from '../components/list';
import Quiz from '../components/quiz';
import Section from '../components/section';
import Table from '../components/table';
import SubHeader from '../components/subheader';
import StickyPicture from '../components/stickypicture';
import LetterBig from '../components/letterbig';
import LetterSmall from '../components/lettersmall';
import HIV from '../components/hiv';

const VPlayer = dynamic(import('../components/player'), {
  ssr: false,
  loading: () => <p>Loading player...</p>,
});

const SingleLayout = dynamic(() => import('../components/singlelayout'), {
  ssr: false,
});
const DoubleLayout = dynamic(() => import('../components/doublelayout'), {
  ssr: false,
});

const PotatoLayout = dynamic(() => import('../components/potatolayout'), {
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
  SubHeader,
  StickyPicture,
  VPlayer,
  Image,
  PotatoLayout,
  LetterBig,
  LetterSmall,
  HIV,
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
