import React from "react";
import ProjTimeline from "./projTimeline";
/*This file maps and displays the image, title, and description of each project. 

It will display this differently depending on if the index is an even or odd number.  (I just flip the col-6's around
every other slide to keep things interesting.)

Passes the date, the index, and the lastSlide var to ProjTimeline.js to determine how to display the red timeline
visual with date.
*/

export default function Sect5Layout(props) {
  var slides = props.slides;
  var lastSlide = props.slides.length - 1;

  return (
    <div>
      {/*Map the props passed from sect5.js */}
      {slides.map(function (slide, index) {
        //check if the index is even
        function isEven(index) {
          return index % 2 === 0;
        }
        {
          /*Return generic outer wrapping of each slide with unique key */
        }
        return (
          <div key={index}>
            <div className="slide">
              <div className="container mb-4">
                <div className="row">
                  {(() => {
                    //If the index is even, render it so the image is on the left side
                    if (isEven(index) === true) {
                      return (
                        <div className="col-12 d-flex">
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="project-photo-frame d-flex flex-column">
                              <img
                                src={require("./Images/projects/" +
                                  slide.PhotoSrc +
                                  ".png")}
                                alt=""
                              />{" "}
                            </div>
                          </div>
                          <div className="col-6 d-flex flex-column justify-content-center mx-3 px-3">
                            <h1 className="IBM">{slide.Title}</h1>
                            <p>{slide.Description}</p>
                          </div>
                        </div>
                      );
                    } else {
                      //If the index is odd, render it so the image is on the right side
                      return (
                        <div className="col-12 d-flex">
                          <div className="col-6 d-flex flex-column  justify-content-center mx-3 px-3">
                            <h1 className="IBM">{slide.Title}</h1>
                            <p>{slide.Description}</p>
                          </div>
                          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="project-photo-frame d-flex flex-column">
                              <img
                                src={require("./Images/projects/placeholder.png")}
                                alt=""
                              />{" "}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })()}
                </div>
              </div>
              {/* Passing the index, the date and the lastSlide variable to the projTimeline component to display timeline */}
              <ProjTimeline
                index={index}
                Date={slide.Date}
                lastSlide={lastSlide}
                isEven={isEven(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
