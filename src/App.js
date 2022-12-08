import './App.css';
import './imessage.css';
import Sidebar from './components/Sidebar/Sidebar';
import DevelopmentDescription from './components/DevelopmentDescription/DevelopmentDescription';
import Intro from './components/Pages/Intro';
import About from './components/Pages/About';
import Personas from './components/Pages/Personas';
import Responsive from './components/Pages/Responsive';
import Iterative from './components/Pages/Iterative';
import Development from './components/Pages/Development';
import Contact from './components/Pages/Contact';

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const Home = () => { 
    return (
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Intro />
          <About />
          <Personas />
          <Responsive />
          <Iterative />
          <Development />
          <Contact />
        </div>
      </div>
    );
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development" element={<DevelopmentDescription />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);