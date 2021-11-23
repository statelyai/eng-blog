import "../styles/globals.css";
import "../styles/nprogress.css";
import "../styles/highlight.css";
import "../styles/post.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import NProgress from "nprogress";
import Router from "next/router";
import { MetadataProvider } from "../src/MetadataContext";
import { makeMetadata } from "../content/metadata";

/* NProgress */
NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
/* /NProgress */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetadataProvider
      value={{
        default: makeMetadata({}),
        makeMetadata,
      }}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </MetadataProvider>
  );
}
export default MyApp;
