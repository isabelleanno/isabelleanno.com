/* 
----------------------------
10/04/2023 Isabelle Anno
----------------------------
This is the main JavaScript document and the website's entry point. :) There are THREE main parts to the document,
listed in the table of contents found below. If you are unfamiliar with fullpage.js, please read their documentation
to become more familiar with what I'm doing here. https://alvarotrigo.com/fullPage/docs/
I also use GSAP for animations (they're found in each section component) so make sure to check that out too: https://gsap.com/
----------------------------
Table of contents:
PART 1: Import dependencies & components and initialize variables
PART 2: Set up fullpage.js and render each section. (Header/nav bar is found in index.html)
PART 3: Miscellaneous JavaScript functions/event listeners with plenty of comments to clarify
---------------------------
*/

/* ----------------------------PART 1- Import stuff & initialize variables. ----------------------------------*/
import { useState, useEffect } from "react";
import "./css/styles.scss";
import $ from "jquery";
import { useResizeDetector } from "react-resize-detector";
import ReactFullpage from "@fullpage/react-fullpage";
//Components
import Navbar from "./navbar";
import Sect1 from "./sect1";
import Sect2 from "./sect2";
import Sect3 from "./sect3";
import Sect4 from "./sect4";
import Sect5 from "./sect5";
import Sect8 from "./sect8";
import Sect9 from "./sect9";

//Extensions
import "./fullpage/fullpage.resetSliders.min";
import "./fullpage/fullpage.scrollHorizontally.min";
import "./fullpage/fullpage.continuousHorizontal.min";
import "./fullpage/fullpage.dragAndMove.min";
import "./fullpage/fullpage.scrollOverflowReset.min";
import "./fullpage/fullpage.responsiveSlides.min";

//Initializing variables & constants that will be used later
var dragAndMoveBool = false;
var hasBecomeMobile = false;
/* --------------------------------PART 2- set up fullpage.js and render content. ----------------------------------*/

//Initialize fullpage
const Fullpage = function loadFullPage() {
  //Define responsive
  const Mobile = 600;

  const { width, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: "debounce",
    refreshRate: 800,
  });

  //Create a state for the loader that defaults to true.
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    //Simulates a request; makes a "promise" that'll run for 200 milliseconds
    return new Promise((resolve) => setTimeout(() => resolve(), 250));
  }
  //After render, remove spinner element and set change setLoading to false.
  useEffect(() => {
    fakeRequest().then(() => {
      const loaderElement = document.getElementById("loader");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  } else {
    //Handle Responsive Slides
    if (width <= Mobile) {
      fullpage_api.responsiveSlides.toSections();
      hasBecomeMobile = true;
    }
    if (width >= Mobile && hasBecomeMobile === true) {
      hasBecomeMobile = false;
      fullpage_api.responsiveSlides.toSlides();
    }
    //Return fullpage

    return (
      <div ref={ref}>
        <Navbar />
        <ReactFullpage
          //Add extensions

          //Fullpage options
          licenseKey={"WLJ2I-6P0QK-MK3FI-M2JXJ-JVRNM"}
          keyboardScrolling={true}
          scrollOverflow={true}
          autoScrolling={true}
          anchors={["s1", "s2", "s3", "s4", "s5", "s8", "s9"]}
          navigation={true}
          navigationPosition={"left"}
          navigationTooltips={[
            "Home",
            "About",
            "Career",
            "Career",
            "Projects",
            "Contact",
          ]}
          showActiveTooltip={false}
          slidesNavigation={false}
          //fullpage extensions & keys
          scrollHorizontally={true}
          scrollHorizontallyKey={
            "R1FhWE5oWW1Wc2JHVmhibTV2TG1OdmJRPT0zT19mSVdjMk55YjJ4c1NHOXlhWHB2Ym5SaGJHeDU4VWw="
          }
          responsiveSlides={true}
          responsiveSlidesKey={
            "ZlFhWE5oWW1Wc2JHVmhibTV2TG1OdmJRPT1JdF9PNkdjbVZ6Y0c5dWMybDJaVk5zYVdSbGN3PT04ajc="
          }
          dragAndMove={dragAndMoveBool}
          dragAndMoveKey={
            "MjJhWE5oWW1Wc2JHVmhibTV2TG1OdmJRPT1PSV8yZGRaSEpoWjBGdVpFMXZkbVU9enJX"
          }
          resetSliders={true}
          resetSlidersKey={
            "T3JhWE5oWW1Wc2JHVmhibTV2TG1OdmJRPT0wSV9kaEVjbVZ6WlhSVGJHbGtaWEp6SWpF"
          }
          scrollOverflowReset={true}
          scrollOverflowResetKey={
            "ejJhWE5oWW1Wc2JHVmhibTV2TG1OdmJRPT0zM19mRzFjMk55YjJ4c1QzWmxjbVpzYjNkU1pYTmxkQT09WUls"
          }
          //Use the afterload and afterSlideLoad fullpage.js methods
          afterLoad={() => {
            //Grab the navigation dots (vertical and horizontal)
            const vertNavDots = $("#fp-nav");
            const horizNavDots = $(".fp-slidesNav");
            //Make it so only the necessary arrows & navigation dots show up
            $(".fp-prev").hide();
            $(".fp-next").show();
            vertNavDots.show();
            horizNavDots.hide();
          }}
          afterSlideLoad={function (origin, destination, direction) {
            //Get active section and slide
            let activeSection = fullpage_api.getActiveSection();
            let activeSlide = fullpage_api.getActiveSlide();

            const vertNavDots = $("#fp-nav");
            if (activeSlide.isFirst === true) {
              $(".fp-prev").hide();
              vertNavDots.show();
            } else {
              $(".fp-prev").show();
              vertNavDots.hide();
            }
            if (activeSlide.isLast === true) {
              $(".fp-next").hide();
            } else {
              $(".fp-next").show();
            }
          }}
          //Render stuff

          render={({ state, fullpageApi }) => {
            return (
              <>
                <ReactFullpage.Wrapper>
                  <Sect1 />
                  <Sect2 />
                  <Sect3 />
                  <Sect4 />
                  <Sect5 />
                  <Sect8 />
                  <Sect9 />
                </ReactFullpage.Wrapper>
              </>
            );
          }}
        />
      </div>
    );
  }
};

/* -------------------------------------------END OF DOCUMENT---------------------------------------------------*/

export default Fullpage;
