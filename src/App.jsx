import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loading from "./components/Loading";

const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Learning = lazy(() => import("./components/Learning"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Suspense fallback={<Loading />}>
        <Projects />
        <Skills />
        <Learning />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;