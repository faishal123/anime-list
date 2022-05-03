import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../src/graphql/client";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
