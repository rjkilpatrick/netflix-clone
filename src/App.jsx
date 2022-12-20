import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="home">
      <header>
        <img src="/assets/logo.png" alt="Netflix" />
        {/* <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
          </ul>
        </nav> */}
        <div class="navbar">
          <a href="#home" class="active">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
      </header>
      <main>
        <h1>
          Watch TV shows and movies anytime, anywhere — personalized for you.
        </h1>
        <button>Sign Up Free</button>
      </main>
    </div>
  );
};

export default App;
