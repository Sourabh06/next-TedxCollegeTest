import Head from "next/head";
import Accordion from "./accordion";
import { accordionData } from "../public/members/members";
import Script from "next/script";

export default function team() {
  return (
    <div>
      <Head>
        <title>TEDxIIMRanchi Team</title>
        <meta name="TEDxIIMRanchi" content="TEDxIIMRanchi Official" />
        <link rel="icon" href="/logo-black.ico" />
      </Head>
      <Script src="/extra-custom.js" strategy="lazyOnload" />
      <div className="text-center gap-16 py-3 px-5">
        <h1 className="text-5xl">Our Team</h1>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion key={title} title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}
