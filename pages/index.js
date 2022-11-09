import Head from "next/head";
import Layout from "../components/Layout";
import Checkout from "./Checkout";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../images/favicon.ico" />
        <title>Radius.uz</title>
      </Head>
      <Layout>
        <Checkout />
      </Layout>
    </>
  );
}
