import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Certifications, Profiles, RecruiterCta } from "./components/Links";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Profiles />
        <RecruiterCta />
        <Contact />
      </main>
      <footer className="text-center text-secondary small py-4">© 2026 Gaurav Kharate · MERN Stack Developer, Surat</footer>
    </>
  );
}
