import { TbSend } from 'react-icons/tb';
import { useState, useRef, useEffect } from 'react';

function Contact() {
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const AlwaysScrollToBottom = () => {
    const ref = useRef();
    useEffect(() => {
      if (window.scrollY >= window.innerHeight * 6) {
        ref.current.scrollIntoView();
      }
    });
    return <div ref={ref} />;
  };

  const handleSubmit = () => {
    // Pretend to send message
    setSentMessages([...sentMessages, message])
    setMessage("");
  };

  return (
    <div className="App-section" id="contact">
      <div data-aos="fade-up">
        <div className="imessage prevent-overflow">
          <p className="from-me">Thank you for your time, coldturkey888!</p>
          <p className="from-them no-tail margin-b_none">Thank you for yours! 🙌</p>
          <p className="from-them">I really appreciate you taking the time to learn about me and my work.</p>
          <p className="from-me no-tail margin-b_none">It's been a real pleasure to do so!</p>
          <p className="from-me">Is there any way that we can keep in contact?</p>
          <p className="from-them">Definitely. Just leave a message in this chat whenever you want to reach out to me. I'll be sure to respond to you as soon as I possibly can 😉</p>
          <p className="from-me">Sounds good! Have a good one, coldturkey888!</p>
          <p className="from-them">You too 😃</p>
          {sentMessages.map((message, index) => (
            <p key={index} className={`from-me${index === sentMessages.length - 1 ? "" : " no-tail margin-b_none"}`}>{message}</p>
          ))}
          <AlwaysScrollToBottom />
        </div>
        <div className="type-message">
          <div className="type-message-form">
            <input
              type="text"
              placeholder="Write a message to coldturkey888..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") handleSubmit(); } } />
          </div>
          <TbSend className="send-button" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
