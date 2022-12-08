import './Usability.css';
import { Link } from 'react-scroll';

function Usability() {
  return (
    <div className="dd-App-section" id="dd-usability">
      <div className="usability-top-left-corner">Usability</div>
      <p className="usability-title">I considered some <b>usability principles</b> to guide my interface design:</p>

      <div className="usability-content-container">
        <div className="usability-content-item">
          <h4>General layout</h4>
          <p>The library is front and center, so that users can appreciate the soon-to-be-extensive library of songs.
          Flanked on its left are the filter options, while the play queue is on the right.</p>
        </div>

        <div className="usability-content-item">
          <h4>Dark mode</h4>
          <p>The default dark mode aims to direct the user's focus to the music selection.</p>
        </div>

        <div className="usability-content-item">
          <h4>Font sizes and weights</h4>
          <p>Font sizes are varied but consistent throughout the application. Larger font sizes and heavier font weights are used for headers.</p>
        </div>

        <div className="usability-content-item">
          <h4>Tags</h4>
          <p>Genres and vibes are represented as "tags", which makes them more identifiable at a glance.</p>
        </div>

        <div className="usability-content-item">
          <h4>Material Design</h4>
          <p>The application adheres to Material Design (and utilizes Material UI) to ensure a consistent and modern user experience.</p>
        </div>

        <div className="usability-content-item easter-egg">
          <div className="easter-egg-overlap"><p>Hover over me for a little surprise!</p></div>
          <h4>Easter egg!</h4>
          <p><i>Not really a usability principle, but rather a fun little Easter egg:</i> Press the play button on the top-right corner, and watch the vinyl record-inspired logo spin!</p>
        </div>
      </div>

      <Link className="bottom-right" activeClass="active" to="dd-intro" spy={true} smooth={true}>
        <div className="usability-bottom-right-corner">Back to the top</div>
      </Link>
    </div>
  );
}

export default Usability;
  