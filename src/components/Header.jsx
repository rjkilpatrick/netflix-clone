import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        id="logo"
        src="/assets/logo.png"
        alt="Netflix"
        width="300px"
        height="150px"
      />
      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export { Header };
