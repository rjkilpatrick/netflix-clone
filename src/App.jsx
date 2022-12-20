import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

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
          <video
            id="background-video"
            autoPlay
            loop
            muted
            poster="//assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="//assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="card">
          <p></p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
