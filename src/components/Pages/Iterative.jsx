import { TbSend } from 'react-icons/tb';
import { Link } from 'react-scroll';

import iterative from '../../assets/iterative.jpg';

const iterative_site = "https://coldturkey888.github.io/cs1300-iterative-design/";

function Iterative() {
  return (
    <div className="App-section" id="iterative">
      <div data-aos="fade-up">
        <div className="imessage prevent-overflow">
          <p className="from-me">Have you worked on a design from the ground up?</p>
          <p className="from-them no-tail margin-b_none">For sure. Let me share this project that I did with a team of other designers.</p>
          <div className="attachment margin-b_none" onClick={()=> window.open(iterative_site, "_blank")}>
            <img src={iterative} alt="Iterative Design" />
            <p>Project #3: Designing for Radius</p>
          </div>
          <p className="from-them no-tail margin-b_none">We found an Indonesian software startup on YCombinator, learnt about its vision, and built a prototype for their mobile app.</p>
          <p className="from-them">But we didn't just stop there. We collated feedback from fellow designers, made further updates to it and put it up on user testing platforms to get more feedback. Before wrapping it up, we sent our revised prototype to the company, of course.</p>
          <p className="from-me">That's wonderful! I hope the startup appreciated the work that you'd put in.</p>
          <p className="from-them">I hope so too!</p>
        </div>
        <div>
          <Link className="type-message" activeClass="active" to="development" spy={true} smooth={true}>
            <div className="type-message-text">Well then, of all the work you've done, what's your favorite project?</div>
            <TbSend className="send-button" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Iterative;
