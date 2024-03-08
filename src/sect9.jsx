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
                  <span className="english">
                    ✅Email address copied successfully:{" "}
                  </span>
                  <span className="dutch d-none">
                    ✅E-mailadres succesvol gekopieerd:{" "}
                  </span>
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
                  <p className="desktop">
                    <span className="english">
                      <b> I'm currently on a job search!</b> Before you reach
                      out, please read the next slide to{" "}
                    </span>
                    <span className="dutch d-none">
                      <b> Ik ben momenteel op zoek naar een baan!</b> Lees eerst
                      de volgende pagina voordat u contact met mij opneemt{" "}
                    </span>
                    <b>
                      <a
                        href="https://isabelleanno.com/#s9/1"
                        className="clickMe"
                      >
                        <span className="english">
                          see what I'm looking for in a job{" "}
                        </span>
                        <span className="dutch d-none">
                          Kijk wat ik zoek in een baan
                        </span>
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
                    <span className="english">Message me on LinkedIn</span>
                    <span className="dutch d-none">
                      Stuur mij een bericht op LinkedIn
                    </span>
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
                    <span className="english">
                      Email me at isabelleanno.webdev@gmail.com
                    </span>
                    <span className="dutch d-none">
                      E-mail mij op isabelleanno.webdev@gmail.com
                    </span>
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
                    <span className="english">
                      <b>Thank you </b> For viewing my portfolio. It means a lot
                      to me! I will respond within 1-3 business days. :)
                    </span>
                    <span className="dutch d-none">
                      <b> Bedankt</b> voor het bekijken van mijn portfolio. Het
                      betekent veel voor mij! Ik reageer binnen 1-3 werkdagen.
                      :)
                    </span>
                  </p>
                </div>
              </div>
              {/*-------------------------End of LEFT SIDE ^^^ | Start of RIGHT SIDE vvv ----------------*/}
              <div
                className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5"
                id="contact-form"
              >
                <h1>
                  <span className="english">Send me a message</span>
                  <span className="dutch d-none">Stuur mij een bericht</span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </h1>
                <form action="https://formspree.io/f/mnqkoalk" method="POST">
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="fullName">
                        <span className="english">Full Name</span>
                        <span className="dutch d-none">Voor-en achternaam</span>
                      </label>
                      <input
                        type="text"
                        name="Full Name"
                        id="fullName"
                        className="form-control"
                      />
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                      />
                      <label htmlFor="subject">
                        <span className="english">Subject</span>
                        <span className="dutch d-none">Onderwerp</span>
                      </label>
                      <input
                        type="text"
                        name="Subject"
                        id="subject"
                        className="form-control"
                      />
                      <label htmlFor="textarea">
                        <span className="english">Message</span>
                        <span className="dutch d-none">Bericht</span>
                      </label>
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
                        <span className="english">Send</span>
                        <span className="dutch d-none">Versturen</span>
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
                  <span className="english">
                    ✅Email address copied successfully:{" "}
                  </span>
                  <span className="dutch d-none">
                    ✅E-mailadres succesvol gekopieerd:{" "}
                  </span>
                  <strong>isabelleanno.webdev@gmail.com</strong>
                </div>
                {/* Alert Body End*/}
              </div>
            </div>
            {/*Alert End */}
            <div className="col-12 frame contact-frame">
              <h1 className="display-1 chat m-0">
                <span className="english"> What am I looking for</span>
                <span className="dutch d-none">Waar ben ik naar op zoek</span>
              </h1>
              <h2 className="mb-3 avenir">
                <span className="english">
                  in a project, new position, and/or work environment?
                </span>
                <span className="dutch d-none">
                  in een project, nieuwe functie en/of werkomgeving?
                </span>
              </h2>
              <p className="english">
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
              <p className="dutch d-none">
                Ik heb mijn vaardigheden op het gebied van front-end web
                development aangescherpt, waaronder JavaScript, React.js en CSS,
                evenals UX/UI-ontwerp. Ik ben op zoek naar een functie om deze
                vaardigheden te <b>verbeteren</b>. Ik wil ook graag mijn
                <b>creativiteit</b> uiten, zodat ik een persoonlijke flair kan
                toevoegen aan elk project dat mij wordt toegewezen. Ik word
                gemotiveerd door een aantal creatieve vrijheden, maar ook
                doordat ik deel uitmaak van een{" "}
                <b>gezonde, ondersteunende werkomgeving</b> die{" "}
                <b>geduldig met mij</b>
                is naarmate ik meer ervaring op dit gebied opdoe. Ik hou ervan
                om plezier te hebben en ik waardeer ook een gevoel voor{" "}
                <b> humor</b> op mijn werk. <b>Lachen en positiviteit</b> maken
                de dag beter!
              </p>
              <p className="english">
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
              <p className="dutch d-none">
                Uiteindelijk zou ik graag deel uitmaken van een team dat{" "}
                <b>groei en verbetering bevordert</b>, waar ik kan{" "}
                <b>bijdragen aan een betere, levendigere internet</b> dat een
                unieke indruk achterlaat op de gebruiker. Ik ben erg enthousiast
                over wat de toekomst brengt! Delen wij dezelfde waarden?{" "}
                <a href="https://isabelleanno.com/#s9" className="clickMe">
                  <b>Neem contact met mij op </b>
                </a>{" "}
                en laten we samen iets magisch creëren!💚
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------End of slide 2 ^^^-----------------------------------*/}
    </div>
  );
}
