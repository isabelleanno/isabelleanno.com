import React from "react";
export default function Sect5() {
  return (
    /*----------------------------------- Start of Section intro vvv ----------------*/
    <div className="section hs5">
      <div className="slide">
        <span className="title">Projects</span>
        <h1 id="Projects">Projects</h1>
      </div>
      {/*-------------------------End of intro ^^^ | Start of slide 1 vvv ----------------*/}
      <div className="slide">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                <img src={require("./Images/placeholder.png")} alt="" />
              </div>
              <div className="col-6 d-flex flex-column align-items-center justify-content-center mx-3">
                <h1 className="text-center IBM">This is my project</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet dicta, consequatur minima dolore debitis blanditiis
                  magni laborum. Ullam, quam molestiae voluptates laboriosam
                  iusto, perspiciatis saepe quisquam atque quidem natus
                  veritatis.
                </p>
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
                <p className="date m-0">September 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------End of slide 1 ^^^ | Start of slide 2 vvv ----------------*/}
      <div className="slide">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-6 d-flex flex-column align-items-center justify-content-center mx-3">
                <h1 className="text-center IBM">This is my project</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet dicta, consequatur minima dolore debitis blanditiis
                  magni laborum. Ullam, quam molestiae voluptates laboriosam
                  iusto, perspiciatis saepe quisquam atque quidem natus
                  veritatis.
                </p>
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
                <p className="date m-0">September 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------End of slide 2 ^^^ | Start of slide 3 vvv ----------------*/}
      <div className="slide">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex">
              <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                <img src={require("./Images/placeholder.png")} alt="" />
              </div>
              <div className="col-6 d-flex flex-column align-items-center justify-content-center mx-3">
                <h1 className="text-center IBM">This is my project</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet dicta, consequatur minima dolore debitis blanditiis
                  magni laborum. Ullam, quam molestiae voluptates laboriosam
                  iusto, perspiciatis saepe quisquam atque quidem natus
                  veritatis.
                </p>
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
                <p className="date m-0">September 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------End of slide 3 ^^^ | END OF COMPONENT vvv ----------------*/}
    </div>
  );
}
