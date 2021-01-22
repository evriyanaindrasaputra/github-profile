import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";
import client from "../utils/api-client";

const swrConfig = {
  fetcher: (...args) => client(...args),
  suspense: true,
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={swrConfig}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
