import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
        {/* <a href="#home">HOME</a>
        <a href="#about-me">ABOUT ME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#services">SERVICES</a>
        <a href="#contact-me">CONTACT ME</a> */}
      </nav>
    </header>
  );
}

export default Header;
