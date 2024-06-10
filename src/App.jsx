import "./App.css";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import OurServices from "./pages/OurServices";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { useRef } from 'react';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='bg-[url("./bg1.png")] h-auto object-center object-cover'>
      <div className="fixed z-[99] top-0 w-[100vw] h-[5vh] p-4">
        <Header 
          homeRef={homeRef} 
          aboutRef={aboutRef} 
          projectsRef={projectsRef} 
          servicesRef={servicesRef} 
          contactRef={contactRef} 
        />
      </div>
      <section ref={homeRef}>
        <HomePage />
      </section>
      <section ref={aboutRef}>
        <AboutUs />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={servicesRef}>
        <OurServices />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
