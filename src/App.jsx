import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const Card = (props) => {
  return (
    <div className={"card" + (props.className || "")}>{props.children}</div>
  );
};

const HeroBackground = () => {
  return (
    <div className="card-background">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="//assets.codepen.io/6093409/river.jpg"
      >
        <source src="//assets.codepen.io/6093409/river.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

const HeroCard = () => {
  return (
    <div className="card hero-card" id="sign-up">
      <HeroBackground />
      <div className="card-content">
        <h1 className="card-title">Unlimited films, TV programmes and more.</h1>
        <h2 className="card-subtitle">Watch anywhere. Cancel at any time.</h2>
        <h3 className="card-subsubtitle">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="email-wrapper">
          <input
            type="email"
            name="email"
            id="hero-email-text"
            defaultValue=""
            tabIndex="0"
            autoComplete="email"
            maxLength="50"
            minLength="5"
            dir=""
          />
          <label htmlFor="email" id="hero-email-label">
            Email address
          </label>
          <button id="hero-email-submit">Get Started &gt;</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <HeroCard />
        <Card>
          <p>Test</p>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default App;
