import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer,  Header } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
