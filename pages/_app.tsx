import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../src/graphql/client";
import Head from "next/head";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Animu</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
