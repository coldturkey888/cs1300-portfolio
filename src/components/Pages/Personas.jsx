import { TbSend } from 'react-icons/tb';
import { Link } from 'react-scroll';

import personas from '../../assets/personas.png';

const personas_site = "https://coldturkey888.github.io/cs1300-personas/";

function Personas() {
  return (
    <div className="App-section" id="personas">
      <div data-aos="fade-up">
        <div className="imessage prevent-overflow">
          <p className="from-me">Tell me about these projects, coldturkey888!</p>
          <p className="from-them no-tail margin-b_none">Sure! Let's see, which shall I start with...</p>
          <p className="from-them no-tail margin-b_none">Ah, here's one. This project's all about discovering how and why people interact with a chosen interface. Go ahead and click on it!</p>
          <div className="attachment margin-b_none" onClick={()=> window.open(personas_site, "_blank")}>
            <img src={personas} alt="Personas" />
            <p>Project #1: Building Personas</p>
          </div>
          <p className="from-them">The TL;DR is: I observed users of a public coffee machine, interviewed them, and built personas and a storyboard based on their behaviour.</p>
          <p className="from-me">That's a cool project! How did you feel about your work?</p>
          <p className="from-them">I really enjoyed it. I'd never really thought of approaching user experience research like that, but the process of it has made me realize the importance of interface design.</p>
        </div>
        <div>
          <Link className="type-message" activeClass="active" to="responsive" spy={true} smooth={true}>
            <div className="type-message-text">Interesting! Any web design projects?</div>
            <TbSend className="send-button" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Personas;
