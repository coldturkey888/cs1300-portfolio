import { TbSend } from 'react-icons/tb';
import { Link } from 'react-scroll';

function About() {
  return (
    <div className="App-section" id="about">
      <div data-aos="fade-up">
        <div className="imessage prevent-overflow">
          <p className="from-me">That's cool! Where have you studied or worked at?</p>
          <p className="from-them">I'm currently pursuing a master's degree in Computer Science at Brown University. Before this, I was working as cross-platform app developer at a startup.</p>
          <p className="from-me">That's cool! Where was this startup?</p>
          <p className="from-them">🇸🇬 In Singapore! That's where I've been for most of my life. It's also where I got my CS bachelor's degree (from the National University of Singapore).</p>
          <p className="from-me">I've always wanted to visit Singapore! So, then, what have you working on recently?</p>
          <p className="from-them no-tail margin-b_none">I've been working with NASA scientists to build a sound-and-haptic-enabled, cross-platform space visualization app for visually impaired individuals.</p>
          <p className="from-them">I've also been working on some UI/UX design projects!</p>
        </div>
        <div>
          <Link className="type-message" activeClass="active" to="personas" spy={true} smooth={true}>
            <div className="type-message-text">Tell me about these projects, coldturkey888!</div>
            <TbSend className="send-button" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
