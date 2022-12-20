import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const Card = (props) => {
  return (
    <div className={"card" + (props.className || "")} {...props}>
      {props.children}
    </div>
  );
};

const HalfPane = (props) => {
  return (
    <div className={"half-plane-left" + (props.className || "")} {...props}>
      {props.children}
    </div>
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
    <Card className="hero-card" id="sign-up">
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
    </Card>
  );
};

const Card1 = () => {
  return (
    <Card>
      <div className="card-content half-plane">
        <HalfPane>
          <h1 className="card-title">Enjoy on your TV.</h1>
          <h2 className="card-subtitle">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h2>
        </HalfPane>
        <HalfPane>
          <img src="//assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        </HalfPane>
      </div>
    </Card>
  );
};

const Card2 = () => {
  return (
    <Card>
      <div className="card-content half-plane half-plane-swap">
        <HalfPane>
          <h1 className="card-title">Watch everywhere.</h1>
          <h2 className="card-subtitle">
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV without paying more.
          </h2>
        </HalfPane>
        <HalfPane>
          <img src="//assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
        </HalfPane>
      </div>
    </Card>
  );
};

const Card3 = () => {
  return (
    <Card>
      <div className="card-content half-plane">
        <HalfPane>
          <h1 className="card-title">Create profiles for children.</h1>
          <h2 className="card-subtitle">
            Send children on adventures with their favourite characters in a
            space made just for them – free with your membership.
          </h2>
        </HalfPane>
        <HalfPane>
          <img src="//occ-0-5136-299.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" />
        </HalfPane>
      </div>
    </Card>
  );
};

const Card4 = () => {
  return (
    <Card>
      <div className="card-content half-plane half-plane-swap">
        <HalfPane>
          <h1 className="card-title">
            Download your programmes to watch offline.
          </h1>
          <h2 className="card-subtitle">
            Available on all plans except Basic with adverts.
          </h2>
        </HalfPane>
        <HalfPane>
          <img src="//assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
        </HalfPane>
      </div>
    </Card>
  );
};

const FAQs = () => {
  return (
    <Card>
      <div className="card-content">
        <h1 className="card-title">Frequently Asked Questions</h1>
        <div className="question-list">
          <details>
            <summary>What is Netflix?</summary>Netflix is a streaming service
            that offers a wide variety of award-winning TV programmes, films,
            anime, documentaries and more on thousands of internet-connected
            devices. You can watch as much as you want, whenever you want – all
            for one low monthly price. There's always something new to discover,
            and new TV programmes and films are added every week!
          </details>
          <details>
            <summary>How much does Netflix cost?</summary>Watch Netflix on your
            smartphone, tablet, smart TV, laptop or streaming device, all for
            one fixed monthly fee. Plans range from £4.99 to £15.99 a month. No
            extra costs, no contracts.
          </details>
          <details>
            <summary>What's different on Basic with adverts?</summary>Basic with
            adverts is a great way to enjoy films and TV programmes at a lower
            price. You can stream your favourites on any device with limited
            advert breaks. This plan does not allow downloads and a limited
            number of films and TV programmes are not available due to licensing
            restrictions. Some location and device restrictions also apply.
            Learn more.
          </details>
          <details>
            <summary>Where can I watch?</summary>Watch anywhere, anytime. Sign
            in with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any internet-connected
            device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles. You
            can also download your favourite programmes with the iOS, Android,
            or Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere.
          </details>
          <details>
            <summary>How do I cancel?</summary>Netflix is flexible. There are no
            annoying contracts and no commitments. You can easily cancel your
            account online in two clicks. There are no cancellation fees – start
            or stop your account at any time.
          </details>
          <details>
            <summary>What can I watch on Netflix?</summary>Netflix has an
            extensive library of feature films, documentaries, TV programmes,
            anime, award-winning Netflix originals, and more. Watch as much as
            you want, any time you want.
          </details>
          <details>
            <summary>Is Netflix good for children?</summary>The Netflix
            Children's experience is included in your membership to give parents
            control while children enjoy family-friendly TV programmes and films
            in their own space.
            <br />
            Children's profiles come with PIN-protected parental controls that
            let you restrict the maturity rating of content children can watch
            and block specific titles you don’t want children to see.
          </details>
        </div>
      </div>
    </Card>
  );
};

const App = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <HeroCard />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
