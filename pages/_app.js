import 'windi.css';
import '../styles/globals.css';
import '../styles/table.css';

import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/layout.jsx';

import Header from '../components/header';
import MdxFooter from '../components/mdxfooter';
import List from '../components/list';
import SingleLayout from '../components/singlelayout';

const components = { Header, MdxFooter, List, SingleLayout };

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
