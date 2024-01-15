import { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
//Import individual fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faServer,
  faPaintbrush,
  faArrowRight,
  faFile,
  faUserTie,
  faWheelchair,
  faHandHoldingHeart,
  faRobot,
  faEnvelopeCircleCheck,
  faMugSaucer,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faPhp,
  faWordpress,
  faBootstrap,
  faGoogle,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Age from "./age";
import Career from "./careerLength";
import { gsap } from "gsap";
import Sect2Layout from "./sect2Layout";

export default function Sect2() {
  //Create GSAP animations for this section

  //Create a ref for the parent element
  const aboutSlideOne = useRef(null);

  //Run animations based off the URL
  var url = window.location.href.split("/");
  var lastPart = url.slice(-1);

  //If last part of URL is #s2, AKA the first slide of this section, animate as so:
  if (lastPart[0] === "#s2") {
    useEffect(() => {
      let ctx2 = gsap.context(() => {
        gsap.to(".about", {
          opacity: 1,
          stagger: 0.5,
        });
      });
      return () => ctx2.revert();
    });
    //Else just do nothing, return an empty useEffect (otherwise there will be an error since useEffect wasn't used.)
  } else useEffect(() => {});

  //Add typewriter animation after the whole thing loads.
  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: [
        "Junior Web Developer🤖",
        "Eater of Too Much Chocolate 🍫",
        "UX/UI Design Connoisseur 💻",
        "Likes making logos 🎨",
      ],
      autoStart: true,
      loop: true,
      delay: 35,
      deleteSpeed: 20,
    });
  }, []);

  //Return JSX
  return (
    /*------------------------------------------- Slide 1 START vvv---------------------- */
    <div className="section hs2 fp-noscroll">
      <span className="title">About Me</span>
      <div className="slide" ref={aboutSlideOne}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="about">About</h1>
              <h1 className="about">Me</h1>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------End of slide 1 ^^^ | Start of slide 2 vvv ----------------*/}
      <div className="slide">
        <div className="container">
          <div className="row d-flex flex-column align-items-center mb-4">
            <div className="col-11 frame about-frame p-5">
              <div className="col m-1 d-flex mobile-flex-column">
                <div className="m col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center">
                  <h1 className="mb-2">
                    I am <span className="highlight">Isabelle</span>
                  </h1>
                  <h5 className="mb-4 IBM" id="typewriter"></h5>
                  <div className="img-frame mobile mb-4">
                    <img
                      src="/Images/about/isabelleanno.jpg"
                      className="dim"
                      alt="Isabelle Anno admiring a view from a mountaintop in Cochem, Germany"
                    />
                  </div>
                  <p className="mb-4">
                    I am <Age /> years old, born on April 23 and raised in Ohio.
                    I've been passionate about web development for over{" "}
                    <Career /> years. In February 2022, I moved to the
                    Netherlands to live with my Dutch husband.
                  </p>
                  <p>
                    I like reading, video games, traveling, motorcycling, and
                    drawing - basically anything creative or adventurous. I'm an
                    only child, left-handed, and have an{" "}
                    <a
                      href="https://www.16personalities.com/infj-personality"
                      target="_blank"
                      className="highlight-s2"
                    >
                      INFJ-T
                    </a>{" "}
                    personality type. I like to have fun and will thrive in a
                    healthy work environment filled with humor & good coffee.
                  </p>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                  <div className="img-frame desktop">
                    <img
                      src="/Images/about/isabelleanno.jpg"
                      className="dim"
                      alt="Isabelle Anno admiring a view from a mountaintop in Cochem, Germany"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------End of slide 2 ^^^ | Start of slide 3 vvv ----------------*/}
      <div className="slide">
        <div className="container">
          <div className="row d-flex flex-column align-items-center mb-4">
            <div className="col frame about-frame p-4">
              <div className="col m-2 d-flex flex-column align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-8">
                  <h1 className="mb-2 text-center">
                    My <span className="highlight">Knowledge</span> and Skills
                  </h1>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8">
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <tbody>
                        <Sect2Layout skill="HTML" icon={faHtml5} value="5" />
                        <Sect2Layout skill="CSS" icon={faCss3Alt} value="5" />
                        <Sect2Layout
                          skill="Graphic Design"
                          icon={faPaintbrush}
                          value="4"
                        />
                        <Sect2Layout
                          skill="JavaScript & JQuery"
                          icon={faSquareJs}
                          value="4"
                        />
                        <Sect2Layout
                          skill="React.js"
                          icon={faReact}
                          value="3"
                        />
                        <Sect2Layout skill="PHP" icon={faPhp} value="2" />
                        <Sect2Layout
                          skill="SQL & Database"
                          icon={faDatabase}
                          value="3"
                        />
                        <Sect2Layout
                          skill="WordPress"
                          icon={faWordpress}
                          value="3"
                        />
                        <Sect2Layout
                          skill="Bootstrap"
                          icon={faBootstrap}
                          value="4"
                        />
                        <Sect2Layout
                          skill="APIs/Hosting"
                          icon={faServer}
                          value="3"
                        />
                        <Sect2Layout skill="SEO" icon={faGoogle} value="2" />
                        <Sect2Layout
                          skill="Accessibility"
                          icon={faWheelchair}
                          value="3"
                        />
                        <Sect2Layout skill="AI" icon={faRobot} value="2" />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------- Slide 3 end ^^^ Slide 4 START vvv---------------------- */}
      <div className="slide">
        <div className="container">
          <div className="row d-flex flex-column align-items-center mb-4">
            <div className="col frame about-frame p-5">
              <div className="col m-5 d-flex">
                <div className="col-7 d-flex flex-column justify-content-center">
                  <h1 className="mb-2">
                    Why <span className="highlight">choose</span> me?
                  </h1>
                  <p>
                    My associate's degree provides me with a{" "}
                    <b>solid foundation</b> in web development and graphic
                    design, alongside my <b>diverse portfolio</b> showcasing my
                    skills. While I am a junior developer, my fresh perspective,
                    <b>enthusiasm, and commitment</b> to continuous learning
                    make me an ideal candidate for your website, whether you’re
                    an individual or a company. There are many options out
                    there, and <b>I’m honored</b> that you’re considering me for
                    your project!{" "}
                  </p>
                  <p>
                    To learn more, please take the time to look at these
                    documents <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </p>
                </div>
                <div className="col-5 d-flex flex-column align-items-center">
                  <h2>
                    <span className="highlight">Learn</span> More
                  </h2>
                  <div className="col-10 d-flex flex-column align-items-center ">
                    <a
                      className="btn-link-reverse about-btn first-btn-lr my-3"
                      href="isabelleanno-resume.pdf"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFile} /> View my Resume
                    </a>
                    <a
                      className="btn-link-reverse-left about-btn second-btn-lr my-3"
                      href="IsabelleAnno-Freelancing-FAQ.pdf"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faUserTie} /> Hire me for your
                      project
                    </a>
                    <a
                      className="btn-link-reverse about-btn third-btn-lr my-3"
                      href="Collaboration-FAQ.pdf"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faPaintbrush} /> Collaborate on a
                      project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------------------------------------End ^^ start vvv------------------------------------------*/}
      <div className="slide">
        <div className="container">
          <div className="row mb-4">
            <div className="col p-2 d-flex d-flex justify-content-center frame about-frame">
              <div className="col-5 ps-4 d-flex flex-column">
                {/*Alert start */}
                <div className="col-12 d-flex flex-column m-0 align-items-center">
                  {/*Alert Body */}
                  <div
                    className="alert alert-success text-center m-0"
                    role="alert"
                    id="email-alert"
                  >
                    ✅Email address copied successfully:{" "}
                    <strong>isabelleanno.webdev@gmail.com</strong>
                  </div>
                  {/* Alert Body End*/}
                </div>
                {/*Alert End */}
                <div>
                  <h2 className="mb-3">
                    Where to <span className="highlight">Find</span> Me
                  </h2>
                  <p>
                    Take a look at my little corner of the internet. Or
                    <a
                      href="https://isabelleanno.com/#s9"
                      className="highlight-s2 ms-2"
                    >
                      Contact Me
                    </a>
                    ! Let's be friends :-)
                  </p>
                  <span className="d-flex align-items-center">
                    <h2 className="d-inline">
                      <FontAwesomeIcon icon={faGithub} className="me-3" />
                    </h2>
                    <a
                      href="https://github.com/isabelleanno"
                      target="_blank"
                      className="clickMe"
                    >
                      Check out my GitHub
                    </a>
                  </span>
                  <span className="d-flex align-items-center">
                    <h2 className="d-inline">
                      <FontAwesomeIcon icon={faLinkedin} className="me-3" />
                    </h2>
                    <a
                      href="https://www.linkedin.com/in/isabelle-anno/"
                      target="_blank"
                      className="clickMe"
                    >
                      See my LinkedIn
                    </a>
                  </span>
                  <span className="d-flex align-items-center">
                    <h2 className="d-inline">
                      <FontAwesomeIcon
                        icon={faEnvelopeCircleCheck}
                        className="me-3"
                      />
                    </h2>
                    <button
                      className="hidden-button"
                      id="emailAddress"
                      onClick={() => {
                        //Copy the email address text and show alert for 4 seconds, then hide it again.
                        var copyText = "isabelleanno.webdev@gmail.com";
                        navigator.clipboard.writeText(copyText);
                        let bootstrapAlert =
                          document.getElementById("email-alert");
                        bootstrapAlert.style.opacity = 1;
                        gsap.to(bootstrapAlert, {
                          delay: 4,
                          opacity: 0,
                        });
                      }}
                    >
                      isabelleanno.webdev@gmail.com
                    </button>
                  </span>
                  <span className="d-flex align-items-center">
                    <h2 className="d-inline">
                      <FontAwesomeIcon
                        icon={faHandHoldingHeart}
                        className="me-3"
                      />
                    </h2>
                    <a
                      href="https://www.givewell.org/"
                      target="_blank"
                      className="clickMe"
                    >
                      Givewell.org - My Favorite Charity
                    </a>
                  </span>
                  <span className="d-flex align-items-center">
                    <h2 className="d-inline">
                      <FontAwesomeIcon icon={faMugSaucer} className="me-3" />
                    </h2>
                    <a
                      href="https://www.buymeacoffee.com/isabelleanno"
                      target="_blank"
                      className="clickMe"
                    >
                      Buy me a coffee
                    </a>
                  </span>

                  <span className="d-flex align-items-center mb-5">
                    <h2 className="d-inline">
                      <FontAwesomeIcon icon={faCode} className="me-3" />
                    </h2>
                    <a
                      href="https://www.shecodes.io/graduates/15539-isabelle-anno"
                      target="_blank"
                      className="clickMe"
                    >
                      See my SheCodes Profile
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-6 m-1 p-4 d-flex justify-content-center">
                <div className="img-frame img-frame-2">
                  <img
                    src="/Images/about/patrick.jpg"
                    className="dim"
                    alt="Isabelle and her husband Patrick kissing at a botanical garden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------End of slide 5 ^^^ | Start of slide 6 vvv-----*/}
      <div className="slide">
        <div className="container">
          <div className="row d-flex flex-column align-items-center mb-4">
            <div className="col-12 frame about-frame p-4 px-5">
              <div className="my-2">
                <div className="col-12 d-flex flex-column align-items-center">
                  <h1>
                    My <span className="highlight">favorite</span> tunes
                  </h1>
                  <p className="m-0">
                    Nothing beats coding alongside some good music{" "}
                  </p>
                </div>
                <div className="col py-3 d-flex justify-content-center">
                  <div className="col-6 mx-2">
                    <iframe
                      style={{ borderRadius: 12 + "px" }}
                      src="https://open.spotify.com/embed/playlist/5GIwo59HwP5JfVcSFsPikO?utm_source=generator"
                      width="100%"
                      height="352"
                      allowFullScreen=""
                      allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      alt="A Spotify music playlist titled Calm Down"
                    ></iframe>
                  </div>
                  <div className="col-6 mx-2">
                    <iframe
                      style={{ borderRadius: 12 + "px" }}
                      src="https://open.spotify.com/embed/playlist/4IAV2A84msFhX4Jue4jZFV?utm_source=generator"
                      width="100%"
                      height="352"
                      allowFullScreen=""
                      allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      alt="A Spotify music playlist titled Positive Jams Everyone Loves"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------End of slide 6 ^^^ | END OF COMPONENT vvv ----------------*/}
    </div>
  );
}
