import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <section
        className="py-12 px-8 bg-gray-50 rounded-xl shadow-lg m-10 md:m-20 scroll-mt-16"
        id="contact"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Contact />
          <Socials />
        </div>
      </section>
      <Footer />
    </main>
  );
}
