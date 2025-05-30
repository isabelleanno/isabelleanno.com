import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
export default function Sect1() {
  //Create GSAP animations for this section
  const intro = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .to("#Hello", { delay: 0.4, duration: 1.25, opacity: 0.8 })
        .to("#Hello", { opacity: 0.35 })
        .to("#myName", { duration: 0.75, delay: 0.4, text: "My name is" })
        .to("#mijnNaam", { duration: 0.75, text: "Mijn naam is" })
        .from("#Isabelle", { duration: 1.5, xPercent: -200, opacity: 0 })
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
      <h1 id="Hello" className="overflow-hidden">
        <span className="english">Hello!</span>
        <span className="dutch d-none">Hallo!</span>
      </h1>
      <div id="hs1Overlay">
        <div id="hs1Info">
          <p className="english my-4 ms-1" id="myName"></p>
          <p className="dutch d-none my-4 ms-1" id="mijnNaam"></p>
          <h1 className="IBM" id="Isabelle">
            Isabelle Anno
          </h1>
          <h1 className="IBM" id="Isabelle2">
            Isabelle Anno
          </h1>
          <p className="my-4 learnMore">
            <span className="dutch d-none">
              Ik ben een Amerikaanse web developer die in Nederland woont{" "}
            </span>
            <span className="english">
              I'm an American web developer living in the Netherlands{" "}
            </span>
            <img
              src="/Images/UsaAndNL.png"
              className="dim"
              alt=" theUsa and Dutch flag combined to form a single flag "
            ></img>
          </p>
          <a
            className="btn-link learnMore"
            href="https://isabelleanno.com/#s2/1"
          >
            <span className="dutch d-none">Meer Weten</span>
            <span className="english">Learn More</span>
          </a>
        </div>
      </div>
    </div>
  );
}
