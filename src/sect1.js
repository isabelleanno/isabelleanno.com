import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

gsap.registerPlugin(TextPlugin);
export default function Sect1() {
  //Create GSAP animations for this section
  const intro = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .to("#Hello", { delay: 0.12, duration: 2, opacity: 0.8 })
        .to("#Hello", { opacity: 0.35 })
        .to("#myName", { duration: 0.75, delay: 0.4, text: "My name is" })
        .from("#Isabelle", { duration: 2, xPercent: -200, opacity: 0 })
        .to("#Isabelle2", { opacity: 1 })
        .to(
          ".learnMore",
          { duration: 2, opacity: 1, ease: "none", stagger: 0.8 },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);
  //Return JSX
  return (
    <div className="section hs1 d-flex align-items-center" ref={intro}>
      <span className="title">Hello</span>
      <h1 id="Hello">Hello!</h1>
      <div id="hs1Overlay">
        <div id="hs1Info">
          <p className="my-4 pl-1" id="myName"></p>
          <h1 className="IBM" id="Isabelle">
            Isabelle Anno
          </h1>
          <h1 className="IBM" id="Isabelle2">
            Isabelle Anno
          </h1>
          <p className="my-4 learnMore">
            I'm a web developer living in the Netherlands 🇳🇱
          </p>
          <a
            className="btn-link learnMore"
            href="https://isabelleanno.com/#s2/1"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
polyfillCountryFlagEmojis();
