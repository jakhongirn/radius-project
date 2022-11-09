import Head from "next/head";
import Layout from "../components/layout.jsx";
import Checkout from "./productList";

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
