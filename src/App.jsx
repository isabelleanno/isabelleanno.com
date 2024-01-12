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
import "./css/styles.css";
import { gsap } from "gsap";
import $ from "jquery";
import ReactFullpage from "@fullpage/react-fullpage";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Popper from "popper.js";

//Components
import Navbar from "./navbar";
import Sect1 from "./sect1";
import Sect2 from "./sect2";
import Sect3 from "./sect3";
import Sect4 from "./sect4";
import Sect5 from "./sect5";
import Sect6 from "./sect6";
import Sect7 from "./sect7";
import Sect8 from "./sect8";
import Sect9 from "./sect9";

//Initializing variables & constants that will be used later

var dragAndMoveBool = false;

/* --------------------------------PART 2- set up fullpage.js and render content. ----------------------------------*/

//Initialize fullpage
const Fullpage = function loadFullPage() {
  //Create a state for the loader that defaults to true.
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    //Simulates a request; makes a "promise" that'll run for 900 milliseconds
    return new Promise((resolve) => setTimeout(() => resolve(), 100));
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
    //Return fullpage
    return (
      <ReactFullpage
        //Add extensions

        //Fullpage options
        licenseKey={"WLJ2I-6P0QK-MK3FI-M2JXJ-JVRNM"}
        keyboardScrolling={true}
        scrollOverflow={true}
        autoScrolling={true}
        anchors={["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"]}
        //menu={"#myMenu"}
        navigation={true}
        navigationPosition={"left"}
        navigationTooltips={[
          "Home",
          "About",
          "Education",
          "Education",
          "Projects",
          "Reviews",
          "Reviews",
          "Contact",
        ]}
        showActiveTooltip={false}
        slidesNavigation={true}
        //fullpage extensions & keys
        scrollHorizontally={true}
        scrollHorizontallyKey={
          "R1FhWE5oWW1Wc2JHVmhibTV2TG1OdmJRPT0zT19mSVdjMk55YjJ4c1NHOXlhWHB2Ym5SaGJHeDU4VWw="
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
          let activeSection = fullpage_api.getActiveSection();
          let activeSlide = fullpage_api.getActiveSlide();

          //Grab the navigation dots (vertical and horizontal)
          const vertNavDots = $("#fp-nav");
          const horizNavDots = $(".fp-slidesNav");
          //Make it so only the necessary arrows & navigation dots show up
          $(".fp-prev").hide();
          $(".fp-next").show();
          vertNavDots.show();
          horizNavDots.hide();

          /*Make it so that on the projects section, the horizontal nav dots are toggled off by default 
          (but the user can still easily toggle them back on.)*/

          let isChecked = $("#horizNav").is(":checked");
          /*"Click counter" ensures that the conditions in the if statement will only be met once per
          session. This basically allows the user to be able to toggle the horizontal nav dots back on if they want to. */
          let clickCounter = 0;
          /*If the active section is s5 (the projects section), the horizontal nav bar is checked, 
          and the "click counter" is less than 1, uncheck the horizontal nav dots by triggering a click event. */
          if (
            activeSection.anchor === "s5" &&
            isChecked === true &&
            clickCounter < 1
          ) {
            //trigger a click to uncheck the box, and set the click counter to 1 so it doesn't happen again.
            $("#horizNav").trigger("click");
            clickCounter = clickCounter + 1;
          }
        }}
        afterSlideLoad={function (origin, destination, direction) {
          let activeSlide = fullpage_api.getActiveSlide();

          const vertNavDots = $("#fp-nav");
          const horizNavDots = $(".fp-slidesNav");
          if (activeSlide.isFirst === true) {
            $(".fp-prev").hide();
            vertNavDots.show();
            horizNavDots.hide();
          } else {
            $(".fp-prev").show();
            vertNavDots.hide();
            horizNavDots.show();
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
              <Navbar />
              <ReactFullpage.Wrapper>
                <Sect1 />
                <Sect2 />
                <Sect3 />
                <Sect4 />
                <Sect5 />
                <Sect6 />
                <Sect7 />
                <Sect8 />
                <Sect9 />
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    );
  }
};

/* -------------------------------------------END OF DOCUMENT---------------------------------------------------*/

export default Fullpage;
