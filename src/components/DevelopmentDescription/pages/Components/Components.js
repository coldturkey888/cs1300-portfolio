import './Components.css';
import { Link } from 'react-scroll';

function Components() {
  return (
    <div className="dd-App-section" id="dd-components">
      <div className="components-top-left-corner">React components & states</div>
      <p className="components-preface">This app is built using the React framework and utilizes two of React's most powerful tools: <b>Components</b> and <b>State Hooks</b>.</p>
        <div className="components">
          <div className="components-left">
            <div>
              <h4 className="components-title">Organization of Components</h4>
              <p className="components-content">I've implemented the following Components:</p>
              <ol className="components-content">
                <li><code>MusicControls</code>: The previous/play/next buttons</li>
                <li><code>Filters</code>: The left panel that contains the filter options</li>
                <li><code>Library</code>: The main panel that contains the library of songs</li>
                <li><code>SongCard</code>: The individual song cards that are displayed in the library</li>
                <li><code>Queue</code>: The right panel that contains the play queue</li>
                <li><code>QueueCard</code>: The individual song cards that are displayed in the queue</li>
              </ol>
            </div>
            <div>
              <h4 className="components-title">How data is passed down through Components</h4>
              <p className="components-content">Data is passed between Components using <code>props</code>.
              In general, the following data is passed from one Component to another:</p>
              <ol className="components-content">
                <li>React Hooks (as described above) to manage state</li>
                <li>Song information (via a JavaScript object) from <code>Library</code> to <code>SongCard</code> as well as
                from <code>Queue</code> to <code>QueueCard</code></li>
              </ol>
            </div>
          </div>

          <div className="components-right">
            <h4 className="components-title">State changes</h4>
            <p className="components-content">There are five states that are managed via React Hooks:</p>
            <ol className="components-content">
              <li>
                <code>[isPlaying, setIsPlaying]</code> controls whether the music is "playing" or not
                <ul>
                  <li>This is used to determine whether to display the Play or Pause button.</li>
                  <li>This also determines whether to spin the vinyl record-inspired logo.</li>
                </ul>
              </li>

              <li>
                <code>[queue, setQueue]</code> controls the list of songs in the queue.
                <ul>
                  <li>This is used to display the queue, as well as to add to and remove songs from the queue.</li>
                </ul>
              </li>

              <li>
                <code>[genreFilter, setGenreFilter]</code> controls the genre filter.
                <ul>
                  <li>This is used to filter the library by genre.</li>
                </ul>
              </li>

              <li>
                <code>[vibeFilter, setVibeFilter]</code> controls the vibe filter.
                <ul>
                  <li>This is used to filter the library by vibe.</li>
                </ul>
              </li>

              <li>
                <code>[sort, setSort]</code> controls the sorting of the library.
                <ul>
                  <li>This is used to sort the library by name, artist or duration.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      <Link className="bottom-right" activeClass="active" to="dd-usability" spy={true} smooth={true}>
        <div className="components-bottom-right-corner">Next: Usability</div>
      </Link>
    </div>
  );
}

export default Components;