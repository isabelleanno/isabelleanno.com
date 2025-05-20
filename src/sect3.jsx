import React from "react";
import "./css/styles.scss";

export default function Sect3() {
  return (
    <div className="section hs3">
      <div className="container">
        <div className="row">
          <div className="col overflow-hidden" id="Degrees">
            <span className="title">Education Title</span>
            <h1 id="Education">
              <span className="english">Degrees</span>
              <span className="dutch d-none">Opleiding</span>
            </h1>
            <h1 className="english" id="Education">
              & Certs
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
