import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function Sect7() {
  return (
    <div className="section hs7">
      <span className="title">Review 1</span>
      {/*---------------------------------------Start of slide 1 vvv -------------------------------------------*/}

      <div className="container">
        <div className="row d-flex flex-column align-items-center mb-4">
          <div className="col frame review-frame mt-5 p-5">
            <h1 className="IBM ">
              <FontAwesomeIcon icon={faQuoteLeft} className="mx-3" />
              Title
            </h1>
            <p>Review Description</p>

            <p className="mt-5 bold">
              -
              <a
                href="https://www.linkedin.com/in/bt3/"
                target="_blank"
                className="clickMe"
              >
                Ben Trout III
              </a>
              , Western Regional Manager of EPM Inc.
            </p>
          </div>
        </div>
      </div>

      {/*---------------------------------------End of slide 1 ^^^-----------------------------------*/}
    </div>
  );
}
