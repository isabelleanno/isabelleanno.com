import React from "react";
/*This file displays the red timeline and date. It will do so in one of three ways: 

1.)If it's the first (most recent) project, it will display the information with the line beginning on the left side
 of the horizontal screen. 
2.) If it's somewhere in the middle of the timeline (Second project- Second to last) it will display it in the
 "normal" way. BUT take into consideration if it's even or not and move the dot accordingly so it will always be under the photo.
3.)If it's the last project, the timeline ends on the left side. */
export default function ProjTimeline(props) {
  //For most recent project
  if (props.index === 0) {
    return (
      <div className="col-12 mt-3 d-flex flex-column align-items-end">
        <div className="position-absolute">
          <hr className="timelineHR" id="firstHR" />
          <div className="container p-0">
            <div className="row">
              <div className="col-6 p-0 d-flex flex-column align-items-start justify-content-start ">
                <a className="sidenav-btn btn-horizontal"></a>
                <p className="date" id="date-start">
                  {props.Date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    //For the last (oldest) project
  } else if (props.index == props.lastSlide) {
    return (
      <div className="col-12 mt-2 d-flex flex-column align-items-start">
        <div className="position-absolute">
          <hr className="timelineHR" id="timelineHREnd" />
          <div className="container">
            <div className="row">
              <div className="col-6 offset-9 d-flex flex-column align-items-center justify-content-center">
                <a className="sidenav-btn btn-horizontal"></a>
                <p className="date">{props.Date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    //Middle projects
  } else {
    if (props.isEven === false) {
      return (
        <div className="col-12 mt-2 d-flex flex-column align-items-end">
          <div className="position-absolute">
            <hr className="timelineHR" />
            <div className="container">
              <div className="row">
                <div
                  className="col-6 offset-6 d-flex flex-column align-items-center justify-content-center"
                  id="timeline-col"
                >
                  <a className="sidenav-btn btn-horizontal"></a>
                  <p className="date">{props.Date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-12 mt-2 d-flex flex-column align-items-end">
          <div className="position-absolute">
            <hr className="timelineHR" />
            <div className="container">
              <div className="row">
                <div
                  className="col-6 d-flex flex-column align-items-center justify-content-center"
                  id="timeline-col"
                >
                  <a className="sidenav-btn btn-horizontal"></a>
                  <p className="date">{props.Date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
