import Head from "next/head";
import Script from "next/script";
import Content from "./content";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>TEDxIIMRanchi</title>
        <meta name="TEDxIIMRanchi" content="TEDxIIMRanchi Official" />
        <link rel="icon" href="/logo-black.ico" />
      </Head>
      <Script src="/custom.js" strategy="lazyOnload" />

      <main className="relative bg-white px-10 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <div className="text-center p-10 shadow-lg">
            <h2 className="text-5xl py-2 text-tedxred font-extrabold">
              TED<sup className="text-md -top-3.5">x</sup>{" "}
              <span className="text-black font-normal">IIMRanchi</span>
            </h2>
            <h3 className="text-2xl py-2">
              <span className="text-tedxred">x</span> = independently organized
              TED event
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800">Lipsum thing</p>

            <Content />
          </div>
        </section>
      </main>
    </div>
  );
}
