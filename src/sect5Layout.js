import React, { Component } from "react";

export default function Sect5Layout(props) {
  var slides = props.slides;
  var lastSlide = props.slides.length - 1;
  return (
    <div>
      {slides.map(function (slide, index) {
        if (index == 0) {
          return (
            <div key={index}>
              <div className="slide">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-flex">
                      <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <img src={require("./Images/placeholder.png")} alt="" />
                      </div>
                      <div className="col-6 d-flex flex-column align-items-center justify-content-center mx-3">
                        <h1 className="text-center IBM">{slide.Title}</h1>
                        <p>{slide.Description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-5 d-flex flex-column align-items-end">
                  <hr className="timelineHR" id="firstHR" />
                  <div className="container">
                    <div className="row">
                      <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <a className="sidenav-btn btn-horizontal"></a>
                        <p className="date m-0">{slide.Date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (index == lastSlide) {
          return (
            <div key={index}>
              <div className="slide">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-flex">
                      <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <img src={require("./Images/placeholder.png")} alt="" />
                      </div>
                      <div className="col-6 d-flex flex-column align-items-center justify-content-center mx-3">
                        <h1 className="text-center IBM">{slide.Title}</h1>
                        <p>{slide.Description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-5 d-flex flex-column align-items-start">
                  <hr className="timelineHR" id="timelineHREnd" />
                  <div className="container">
                    <div className="row">
                      <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <a className="sidenav-btn btn-horizontal"></a>
                        <p className="date m-0">{slide.Date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div className="slide">
                <div className="container">
                  <div className="row">
                    <div className="col-12 d-flex">
                      <div className="col-6 d-flex flex-column align-items-center justify-content-center mx-3">
                        <h1 className="text-center IBM">{slide.Title}</h1>
                        <p>{slide.Description}</p>
                      </div>
                      <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <img src={require("./Images/placeholder.png")} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-5 d-flex flex-column align-items-end">
                  <hr className="timelineHR" />
                  <div className="container">
                    <div className="row">
                      <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                        <a className="sidenav-btn btn-horizontal"></a>
                        <p className="date m-0">{slide.Date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
