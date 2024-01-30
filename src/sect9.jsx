import React from "react";
import { gsap } from "gsap";
import ContactModal from "./contactModal";
//Import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function Sect9() {
  return (
    <div className="section hs9 d-flex align-items-center">
      <span className="title">Contact Body</span>
      {/*------------------------------------------- Slide 1 START vvv---------------------- */}
      <div className="slide">
        <div className="container">
          <div className="row mb-4">
            {/*Alert start */}
            <div className="col-12 d-flex flex-column align-items-center">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                {/*Alert Body */}
                <div
                  className="alert alert-success text-center"
                  role="alert"
                  id="email-alert2"
                >
                  ✅Email address copied successfully:{" "}
                  <strong>isabelleanno.webdev@gmail.com</strong>
                </div>
                {/* Alert Body End*/}
              </div>
            </div>
            {/*Alert End */}
            <div className="col d-flex frame contact-frame mobile-flex-column ">
              {/*-----------------------------------------Start of LEFT SIDE vvv --------------------------*/}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                <h1 className="display-1 avenir chat">Let's Chat</h1>
                <div className="col-10">
                  <p>
                    <b> I'm currently on a job search!</b> Before you reach out,
                    please read the next slide to{" "}
                    <b>
                      <a
                        href="https://isabelleanno.com/#s9/1"
                        className="clickMe"
                      >
                        see what I'm looking for in a job{" "}
                        <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </b>
                  </p>
                </div>
                <span className="d-flex align-items-center">
                  <h2 className="d-inline">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="sm"
                      className="me-3"
                    />
                  </h2>
                  <a
                    href="https://www.linkedin.com/in/isabelle-anno/"
                    target="_blank"
                    className="clickMe"
                  >
                    Message me on LinkedIn
                  </a>
                </span>
                <span className="d-flex align-items-center">
                  <h2 className="d-inline">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="sm"
                      className="me-3"
                    />
                  </h2>
                  <button
                    className="hidden-button"
                    id="emailAddress2"
                    onClick={() => {
                      //Copy the email address text and show alert for 4 seconds, then hide it again.
                      var copyText = "isabelleanno.webdev@gmail.com";
                      navigator.clipboard.writeText(copyText);
                      let bootstrapAlert2 =
                        document.getElementById("email-alert2");
                      bootstrapAlert2.style.opacity = 1;
                      gsap.to(bootstrapAlert2, {
                        delay: 4,
                        opacity: 0,
                      });
                    }}
                  >
                    Email me at isabelleanno.webdev@gmail.com
                  </button>
                </span>
                <span className="d-flex align-items-center">
                  <h2 className="d-inline">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      size="sm"
                      className="me-3"
                    />
                  </h2>
                  <ContactModal />
                </span>

                <div className="col-10 mt-3">
                  <p>
                    <b>Thank you </b> For viewing my portfolio. It means a lot
                    to me! I will respond within 1-3 business days. :){" "}
                  </p>
                </div>
              </div>
              {/*-------------------------End of LEFT SIDE ^^^ | Start of RIGHT SIDE vvv ----------------*/}
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                <h1>
                  Send me a message
                  <FontAwesomeIcon icon={faPaperPlane} />
                </h1>
                <form action="https://formspree.io/f/mnqkoalk" method="POST">
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="fullName">Full name</label>
                      <input
                        type="text"
                        name="Full Name"
                        id="fullName"
                        className="form-control"
                        autoComplete={true}
                      />
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        name="Subject"
                        id="subject"
                        className="form-control"
                      />
                      <label htmlFor="textarea">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        id="textarea"
                        rows="3"
                      ></textarea>
                      <button
                        type="submit"
                        className="btn btn-outline-secondary submit-btn mb-2 px-5"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/*-------------------------End of RIGHT SIDE ^^^ | END OF SLIDE vvv ----------------*/}
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------End of slide 1 ^^^ | Start of slide 2 vvv ----------------*/}
      <div className="slide">
        <div className="container">
          <div className="row d-flex flex-column align-items-center mb-4">
            {/*Alert start */}
            <div className="col-12 d-flex flex-column align-items-center">
              <div className="col-6">
                {/*Alert Body */}
                <div className="alert" role="alert">
                  ✅Email address copied successfully:{" "}
                  <strong>isabelleanno.webdev@gmail.com</strong>
                </div>
                {/* Alert Body End*/}
              </div>
            </div>
            {/*Alert End */}
            <div className="col-11 frame contact-frame">
              <h1 className="display-1 chat m-0">What am I looking for</h1>
              <h2 className="mb-3 avenir ">
                in a project, new position, and/or work environment?
              </h2>
              <p>
                I've been honing my skills in front-end web development
                including JavaScript, React.js and CSS, as well as UX/UI design.
                I'm looking for a position to exercise and <b>improve</b> these
                skills. I'd also like to express my <b>creativity</b> so I can
                add a personal flair to each project I'm assigned. I'm motivated
                by having some creative liberties, as well as being a part of a
                <b> healthy, supportive work environment</b> that is{" "}
                <b>patient</b> with me as I gain more experience in this field.
                I like to have fun and appreciate a sense of <b>humor</b> at my
                job, too.
                <b> Laughter and positivity</b> make the day so much better!
              </p>
              <p>
                Ultimately, I'd love to be a part of a team that fosters{" "}
                <b>growth and improvement,</b> where I can{" "}
                <b>contribute to a better, more vibrant web</b> that leaves a
                unique impression on the user. I'm really excited about what the
                future holds! Do we share similar values?{" "}
                <a href="https://isabelleanno.com/#s9" className="clickMe">
                  <b>Get in touch with me</b>
                </a>{" "}
                and let's create something magical together!💚
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------End of slide 2 ^^^-----------------------------------*/}
    </div>
  );
}
