import React from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <img id="logo" src="/assets/logo.png" alt="Netflix" width="300px" height="150px" />
      <nav className="navbar">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <div className="card" id="sign-up">
          <h1 id="hero-text">
            Watch TV shows and movies anytime, anywhere — personalized for you.
          </h1>
          <a href="#sign-up">
            <button>Sign Up Free</button>
          </a>
          <video id="background-video" autoPlay loop muted>
            <source src="C:\Users\rjk217\OneDrive - University of Exeter\Videos\2022-12-02 15-13-37.mkv"/>
          </video>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
