import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from '../../components/alert';
import { useRef } from 'react';

export default function FirstPost(){
  const alert = (e) => {
    console.log(e);
  }
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>firstPost!</h1>
      <h2>
        <Link href="/" >
          <a>Back to home</a>
        </Link>
      </h2>
      <Alert onClick={alert}>안녕</Alert>
    </Layout>
  )
  
}