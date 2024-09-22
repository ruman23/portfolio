import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

function MainPage() {
  return (
    <div>
      <Header />        {/* Navigation bar */}
      <Home />          {/* Home section */}
      <About />         {/* About section */}
      <Skills />        {/* Skills section */}
      <Experience />    {/* Experience section */}
      <Portfolio />     {/* Portfolio section */}
      <Contact />       {/* Contact section */}
    </div>
  );
}

export default MainPage;
