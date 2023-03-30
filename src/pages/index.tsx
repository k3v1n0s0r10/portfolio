import Head from "next/head";

import Header from "@/components/header";
import Works from "@/components/work";
import Script from "next/script";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="App">
      <Script
        src="https://kit.fontawesome.com/f37da43382.js"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/photo.png" />
      </Head>
      <Header />
      <Works />
      <Projects />
      <Contact />
    </div>
  );
}
