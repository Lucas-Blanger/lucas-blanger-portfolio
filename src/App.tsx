import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import TimeLine from "@/components/TimeLine";
import Articles from "@/components/Articles";
import "./App.css";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <TimeLine />
      <Skills />
      <Projects />
      <Achievements />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
