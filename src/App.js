import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import Experience2 from "./components/Experience2";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      {/* <Experience2 /> */}
    </div>
  );
}

export default App;
