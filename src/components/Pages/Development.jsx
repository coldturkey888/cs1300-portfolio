import { TbSend } from 'react-icons/tb';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import development from '../../assets/development.png';

function Iterative() {
  return (
    <div className="App-section" id="development">
      <div data-aos="fade-up">
        <div className="imessage prevent-overflow">
          <p className="from-me">Well then, of all the work you've done, what's your favorite project?</p>
          <p className="from-them no-tail margin-b_none">Ah, that's a tough question. In their own ways they've all helped me grow as a UI/UX designer. Hmm...</p>
          <p className="from-them no-tail margin-b_none">Oh! There's a mini-project that I'd done recently.</p>
          <RouterLink to="/development" target="_blank" rel="noopener noreferrer">
            <div className="attachment margin-b_none">
              <img src={development} alt="Development" />
              <p>Project #4: Stopify</p>
            </div>
          </RouterLink>
          <p className="from-them">It's a cute little imitation of Spotify... called Stopify lol. It was really fun to do because I'm a musician and I'm also a huge fan of music.</p>
          <p className="from-me">This is adorable. I love Norah Jones, thanks for including her in this.</p>
          <p className="from-them">Thank you for checking it out! It's always so fun to blend my passions in web dev, UI/UX design and music altogether 😌</p>
        </div>
        <div>
          <Link className="type-message" activeClass="active" to="contact" spy={true} smooth={true}>
            <div className="type-message-text">Thank you for your time, coldturkey888!</div>
            <TbSend className="send-button" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Iterative;
