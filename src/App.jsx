import "./App.css";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import OurServices from "./pages/OurServices";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className='bg-[url("./bg1.png")] h-auto object-center object-cover'>
      <div className="fixed z-10 top-0 w-full h-[5vh] p-4">
        <Header />
      </div>
      <HomePage />
      <AboutUs/>
      <Projects/>
      <OurServices/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
