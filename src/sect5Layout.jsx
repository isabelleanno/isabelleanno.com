import React, { Component } from "react";
import ProjTimeline from "./projTimeline";
/*This file maps and displays the image, title, and description of each project. 

It will display this differently depending on if the index is an even or odd number.  (I just flip the col-6's around
every other slide to keep things interesting.)

Passes the date, the index, and the lastSlide var to ProjTimeline.js to determine how to display the red timeline
visual with date.
*/
class Sect5Layout extends Component {
  //After mounting, add flex-row-reverse class to odd numbered projects, so they appear differently.
  componentDidMount() {
    let rowArray = Array.from(document.getElementsByClassName("layoutCol"));
    //LayoutCol is a div on each project that encompasses the project image and description.
    rowArray.map(function (row, index) {
      if (index % 2 !== 0) {
        row.classList.add("flex-row-reverse");
      }
    });
  }
  render() {
    var slides = this.props.slides;
    var lastSlide = this.props.slides.length - 1;

    return (
      <div>
        {/* Map the props passed from sect5.js */}
        {slides.map(function (slide, index) {
          // check if the index is even
          function isEven(index) {
            return index % 2 === 0;
          }
          {
            /* Return generic outer wrapping of each slide with a unique key */
          }
          return (
            <div key={index}>
              <div className="slide">
                <div className="container mb-4">
                  <div className="row">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-12 col-xl-12 d-flex mobile-small-flex-column">
                      <div className="col d-flex flex-column align-items-center justify-content-center">
                        <a
                          href={slide.link}
                          target="_blank"
                          className="proj-link highlight IBM mobile-small"
                        >
                          {slide.Title}
                        </a>
                        <a href={slide.link} target="_blank">
                          <div className="project-photo-frame d-flex flex-column ExtraDim">
                            {slide.PhotoSrc}
                          </div>
                        </a>
                      </div>
                      <div className="col-6 d-flex flex-column justify-content-center mx-3 px-3">
                        <a
                          href={slide.link}
                          target="_blank"
                          className="proj-link highlight IBM"
                        >
                          {slide.Title}
                        </a>
                        <p>{slide.Description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Passing the index, the date, and the lastSlide variable to the projTimeline component to display the timeline */}
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
}
export default Sect5Layout;
