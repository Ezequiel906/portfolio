import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/home/About";
import Experience from "../components/home/Experience";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Stack from "../components/home/Stack";
import WhatIbuild from "../components/home/WhatIbuild";

function HomePage() {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <WhatIbuild />
      <Stack />
      <Experience />
      <Projects />
    </main>
  );
}

export default HomePage;
