"use client";

import useBlobity from "@/blobity/useBlobity";

import NavBar from "@/components/layout/NavBar";
import PreLoader from "@/components/layout/PreLoader";
import Blur from "@/components/overlay/blur";
import Color from "@/components/overlay/color";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Tools from "@/components/sections/Tools";
import Work from "@/components/sections/Work";

export default function Home() {
  useBlobity({
    licenseKey: "opensource",
    focusableElementsOffsetX: 4,
    focusableElementsOffsetY: 4,
    color: "#ffffff",
    dotColor: "#ffffff",
    invert: true,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    font: "'Inter', sans-serif",
    fontSize: 16,
    fontWeight: 900,
    opacity: 1.0,
    fontColor: "#ffffff",
    zIndex: 35,
    size: 50,
    radius: 5,
    magnetic: false,
  });

  return (
    <>
      <PreLoader />
      <Blur />
      <Color />
      <NavBar />
      <main className="flex flex-col justify-center items-center bg-black">
        <Hero />
        <About />
        <Work />
        <Tools />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
