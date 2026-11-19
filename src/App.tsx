import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import TimeLine from "@/components/TimeLine";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import AnimatedBackground from "@/components/AnimatedBackground";

function App() {
  return (
    <div className="relative font-sans text-fg">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TimeLine />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
