import { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
//Import individual fontawesome icons
import {
  faDatabase,
  faServer,
  faPaintbrush,
  faWheelchair,
  faRobot,
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

  //If last part of URL is #s2, AKA the first slide of this section, animare as so:
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

  new Typewriter("#typewriter", {
    strings: [
      "Junior Web Developer",
      "Eater of Too Much Chocolate",
      "UX/UI Design Connoisseur",
    ],
    autoStart: true,
    loop: true,
  });
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
          <div className="row">
            <div className="col-6">
              <h1 className="mb-2">
                I am <span className="highlight-s2">Isabelle</span>
              </h1>
              <h5 className="mb-4 IBM" id="typewriter"></h5>
              <p className="mb-4">
                I am <Age /> years old, born April 23, 2001 and raised in Ohio.
                I've been passionate about web development for over <Career />{" "}
                years. In 2019, I met and fell in love with my Dutch husband
                Patrick, and in February of 2022, I moved to the Netherlands
                where I currently live. :)
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
            <div className="col-6">
              <div className="img-frame">
                <img src={require("./Images/about/isabelleanno.jpg")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------------End of slide 2 ^^^ | Start of slide 3 vvv-----*/}
      <div className="slide">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-2">
              <h1>
                My <span className="highlight-s2">favorite</span> tunes
              </h1>
              <p>Nothing beats coding alongside some good music </p>
            </div>
            <div className="col-6">
              <iframe
                style={{ borderRadius: 12 + "px" }}
                src="https://open.spotify.com/embed/playlist/5GIwo59HwP5JfVcSFsPikO?utm_source=generator"
                width="100%"
                height="352"
                allowFullScreen=""
                allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-6">
              <iframe
                style={{ borderRadius: 12 + "px" }}
                src="https://open.spotify.com/embed/playlist/4IAV2A84msFhX4Jue4jZFV?utm_source=generator"
                width="100%"
                height="352"
                allowFullScreen=""
                allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------End of slide 3 ^^^ | Start of slide 4 vvv ----------------*/}
      <div className="slide">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <div className="col-8">
                <h1 className="mb-2 text-center">
                  My <span className="highlight-s2">Knowledge</span> and Skills
                </h1>
              </div>
              <div className="col-8">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      <Sect2Layout skill="HTML" icon={faHtml5} value="5" />
                      <Sect2Layout
                        skill="CSS & Animations"
                        icon={faCss3Alt}
                        value="5"
                      />
                      <Sect2Layout
                        skill="Web Graphics Design"
                        icon={faPaintbrush}
                        value="4"
                      />
                      <Sect2Layout
                        skill="JavaScript & JQuery"
                        icon={faSquareJs}
                        value="4"
                      />
                      <Sect2Layout skill="React.js" icon={faReact} value="3" />
                      <Sect2Layout skill="PHP" icon={faPhp} value="2" />
                      <Sect2Layout
                        skill="SQL & Database Management"
                        icon={faDatabase}
                        value="3"
                      />
                      <Sect2Layout
                        skill="WordPress"
                        icon={faWordpress}
                        value="3"
                      />
                      <Sect2Layout
                        skill="Bootstrap & Responsive Design"
                        icon={faBootstrap}
                        value="4"
                      />
                      <Sect2Layout
                        skill="APIs and Hosting"
                        icon={faServer}
                        value="3"
                      />
                      <Sect2Layout skill="SEO" icon={faGoogle} value="2" />
                      <Sect2Layout
                        skill="Accessible Design"
                        icon={faWheelchair}
                        value="3"
                      />
                      <Sect2Layout skill="AI" icon={faRobot} value="1" />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------End of slide 4 ^^^ | Start of slide 5 vvv ----------------*/}
      <div className="slide">
        <div className="container">
          <div className="row">
            <div className="col-7 d-flex flex-column">
              {/*Alert Body */}
              <div
                className="alert alert-success text-center"
                role="alert"
                id="email-alert"
              >
                ✅Email address copied successfully:{" "}
                <strong>isabelleanno.webdev@gmail.com</strong>
              </div>
              {/* Alert Body End*/}
              <h2 className="mb-3">
                Where to <span className="highlight-s2">Find</span> Me
              </h2>
              <p>
                Take a look at my little corner of the internet. Or
                <a
                  href="https://isabelleanno.com/#s7"
                  className="highlight-s2 ms-2"
                >
                  Contact Me
                </a>
                ! Let's be friends :-)
              </p>
              <span className="d-flex align-items-center">
                <h2 className="d-inline">
                  <i className="fa-brands fa-github me-3"></i>
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
                  <i className="fa-brands fa-linkedin me-3"></i>
                </h2>
                <a
                  href="https://www.linkedin.com/in/isabelle-anno-06aa36275/"
                  target="_blank"
                  className="clickMe"
                >
                  See my LinkedIn
                </a>
              </span>
              <span className="d-flex align-items-center">
                <h2 className="d-inline">
                  <i className="fa-solid fa-envelope-circle-check me-3"></i>
                </h2>
                <button
                  className="hidden-button"
                  id="emailAddress"
                  onClick={() => {
                    //Copy the email address text and show alert for 4 seconds, then hide it again.
                    var copyText = "isabelleanno.webdev@gmail.com";
                    navigator.clipboard.writeText(copyText);
                    let bootstrapAlert = document.getElementById("email-alert");
                    bootstrapAlert.style.opacity = 1;
                    gsap.to(bootstrapAlert, {
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
                  <i className="fa-solid fa-mug-saucer me-3"></i>
                </h2>
                <a
                  href="https://www.buymeacoffee.com/isabelleanno"
                  target="_blank"
                  className="clickMe"
                >
                  Buy me a coffee (if you so desire)
                </a>
              </span>
              <span className="d-flex align-items-center">
                <h2 className="d-inline">
                  <i className="fa-solid fa-code me-3"></i>
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
            <div className="col-5">
              <div className="img-frame">
                <img src={require("./Images/about/patrick.jpg")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------End of slide 5 ^^^ | END OF COMPONENT vvv ----------------*/}
    </div>
  );
}
