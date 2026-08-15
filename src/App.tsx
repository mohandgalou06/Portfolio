
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/about";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";


export default function App() {
  return (
    <div>
      <Navbar />

      <Home />

      <About />

      <Experiences />

      <Projects />

      <div className="flex justify-center items-center py-16">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

 
  







































