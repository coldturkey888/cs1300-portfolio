import './Intro.css';
import { Link } from 'react-scroll';

import development from '../../../../assets/development.png';

var site_address = "https://coldturkey888.github.io/cs1300-development/";

function Intro() {
  return (
    <div className="dd-App-section" id="dd-intro">
      <div className="intro-top-left-corner">Development</div>
      <a href={site_address} target="_blank" rel="noreferrer noopener">
        <div className="intro-title-container">
          <p className="intro-subtitle">A mini development project:</p>
          <p className="intro-title">Stopify</p>
          <p className="intro-smallprint"><i>(Click me!)</i></p>
        </div>
        <img className="intro-image" src={development} alt="Stopify" />
      </a>
      <p className="intro-subtitle">The goal of the Stopify web app is similar to that of its inspiration: <b>Spotify</b> — to
        spread love and appreciation towards music, regardless of genre and boundaries. The application allows users to choose
        from a small (but growing) selection of music to "listen" to. The application also gives users the ability to <b>filter by
        genre and vibe</b>, as well as to <b>sort the library by name, artist or duration</b>. Users should also appreciate the ability
        to queue songs to "listen" to next.
      </p>
      <Link className="bottom-right" activeClass="active" to="dd-components" spy={true} smooth={true}>
        <div className="intro-bottom-right-corner">Next: React components & states</div>
      </Link>
    </div>
  );
}

export default Intro;
  