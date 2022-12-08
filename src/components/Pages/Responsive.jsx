import { TbSend } from 'react-icons/tb';
import { Link } from 'react-scroll';

import responsive from '../../assets/responsive.png';

const responsive_site = "https://coldturkey888.github.io/cs1300-responsive-redesign/";

function Responsive() {
  return (
    <div className="App-section" id="responsive">
      <div data-aos="fade-up">
        <div className="imessage prevent-overflow">
          <p className="from-me">Interesting! Any web design projects?</p>
          <p className="from-them no-tail margin-b_none">Definitely. One of the ones I most enjoyed involved redesigning an existing web page to be responsive across mobile, tablet and desktop interfaces.</p>
          <div className="attachment margin-b_none" onClick={()=> window.open(responsive_site, "_blank")}>
            <img src={responsive} alt="Responsive Redesign" />
            <p>Project #2: RIRPA, Redesigned</p>
          </div>
          <p className="from-them">The design process included wireframing and prototyping, which I've found to be a meaningful exerience when approaching any sort of design project.</p>
          <p className="from-me">Splendid work! Responsiveness of web designs is so important, especially as people start using devices of all shapes and dimensions. Even foldables!</p>
          <p className="from-them">Exactly. Couldn't have said it better myself!</p>
        </div>
        <div>
          <Link className="type-message" activeClass="active" to="iterative" spy={true} smooth={true}>
            <div className="type-message-text">Have you worked on a design from the ground up?</div>
            <TbSend className="send-button" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Responsive;
