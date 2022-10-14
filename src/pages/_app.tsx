import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createFirebaseApp } from "@/libs/firebase/clientApp";

createFirebaseApp();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
