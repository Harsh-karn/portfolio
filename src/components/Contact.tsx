import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Harsh-karn"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-karn-/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.reddit.com/user/heyy_harsh/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Reddit <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/harsh.un.filtered/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:harshkarn12345@gmail.com" data-cursor="disable">
                harshkarn12345@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919523330382" data-cursor="disable">
                +91 95233 30382
              </a>
              <br />
              <a href="tel:+919302862656" data-cursor="disable">
                +91 93028 62656
              </a>
            </p>
          </div>
          <div className="contact-box contact-credit-box">
            <h2>
              Designed and Developed <br /> by <span>Harsh Karn</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
