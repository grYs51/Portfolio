import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Porfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Porfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
