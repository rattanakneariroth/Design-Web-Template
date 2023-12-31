import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      // once: true,
      offset: 200,
      duration: 600,
      delay:50,
      
    });
  }, []);
  return <Component {...pageProps} />
}
