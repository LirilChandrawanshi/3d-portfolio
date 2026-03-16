import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:myselliril@gmail.com" data-cursor="disable">
                myselliril@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>8800867706</p>
            <h4>Location</h4>
            <p>Gurugram, Haryana</p>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p>Master of Computer Applications</p>
            <p>Birla Institute of Technology Mesra</p>
            <p style={{marginTop: '12px', fontSize: '0.9em'}}>Bachelor's in Computer Science</p>
            <p style={{fontSize: '0.9em'}}>Government Motilal Vigyan Mahavidyalaya</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/LirilChandrawanshi"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/lirilchandrawanshi"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Liril Chandrawanshi</span>
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
