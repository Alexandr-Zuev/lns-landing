import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Products />
      <WhyChoose />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
