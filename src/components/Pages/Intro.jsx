import { TbSend } from 'react-icons/tb';
import { Link } from 'react-scroll';
import { useState } from 'react';

function Intro() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div className="App-section" id="intro">
      <div className="imessage prevent-overflow">
        <p className="from-me">Hi there!</p>
        <p className="from-them no-tail emoji margin-b_none">👋🏼👋🏼</p>
        <p className="from-them">Hello!</p>
        <p className="from-me">It's really nice to meet you. Tell me: who are you, and what do you do?</p>
        <p className="from-them no-tail margin-b_none">Well, I'm coldturkey888 (not real name).</p>
        <p className="from-them">I'm a full-stack software engineer, but I've been dabbling in UI/UX design in the past few months.</p>
      </div>
      <div>
        <Link onClick={() => setIsButtonClicked(true)} className="type-message" activeClass="active" to="about" spy={true} smooth={true}>
          <div className="type-message-text">That's cool! Where have you studied or worked at?</div>
          <TbSend className={`send-button${isButtonClicked ? "" : " grow-and-shrink"}`} />
        </Link>
      </div>
    </div>
  );
}

export default Intro;
