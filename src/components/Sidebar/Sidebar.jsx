import "./Sidebar.css";
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

const coldturkey888 = require("../../assets/coldturkey888.jpeg");

function Sidebar() {
  const [currentPage, setCurrentPage] = useState("intro");

  const listenScrollEvent = (event) => {
    if (window.scrollY >= window.innerHeight * 6) {
      setCurrentPage("contact");
    } else if (window.scrollY >= window.innerHeight * 5) {
      setCurrentPage("development");
    } else if (window.scrollY >= window.innerHeight * 4) {
      setCurrentPage("iterative");
    } else if (window.scrollY >= window.innerHeight * 3) {
      setCurrentPage("responsive");
    } else if (window.scrollY >= window.innerHeight * 2) {
      setCurrentPage("personas");
    } else if (window.scrollY >= window.innerHeight * 1) {
      setCurrentPage("about");
    } else if (window.scrollY >= 0) {
      setCurrentPage("intro");
    } else {
      setCurrentPage("");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  });

  return (
    <div className="sidebar-container">
      <img className="sidebar-image" src={coldturkey888} alt="website logo" />

      <Link activeClass="active" to="intro" spy={true} smooth={true}>
        <div className={`sidebar-item${currentPage === "intro" ? " onscreen" : ""}`}>
          Introduction
        </div>
      </Link>

      <Link activeClass="active" to="about" spy={true} smooth={true}>
        <div className={`sidebar-item${currentPage === "about" ? " onscreen" : ""}`}>
          About
        </div>
      </Link>

      <Link activeClass="active" to="personas" spy={true} smooth={true}>
        <div className={`sidebar-item${currentPage === "personas" ? " onscreen" : ""}`}>
          Project #1: Building Personas
        </div>
      </Link>

      <Link activeClass="active" to="responsive" spy={true} smooth={true}>
        <div className={`sidebar-item${currentPage === "responsive" ? " onscreen" : ""}`}>
          Project #2: RIRPA, Redesigned
        </div>
      </Link>

      <Link activeClass="active" to="iterative" spy={true} smooth={true}>
        <div className={`sidebar-item${currentPage === "iterative" ? " onscreen" : ""}`}> 
          Project #3: Designing for Radius
        </div>
      </Link>

      <Link activeClass="active" to="development" spy={true} smooth={true}>
        <div className={`sidebar-item${currentPage === "development" ? " onscreen" : ""}`}>
          Project #4: Stopify
        </div>
      </Link>

      <Link activeClass="active" to="contact" spy={true} smooth={true}>
        <div className={`sidebar-item${currentPage === "contact" ? " onscreen" : ""}`}>
          Contact
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
