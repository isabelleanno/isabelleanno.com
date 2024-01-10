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
              Working with Isabelle was easy, productive and enjoyable.
            </h1>
            <p>
              When a company is run entirely by engineers, you get a web page
              that's only usable to engineers. Our customers however, aren't
              engineers. Isabelle turned the site into something usable by our
              customers. “Usable” is an obvious understatement, but at the time,
              usability was our end goal. We have a lot of information to
              provide to our prospects and customers. Isabelle took our concepts
              and requirements and created, from scratch, a product that is
              attractive and simple, yet meaningful and comprehensive, all while
              maintaining the subtle message that our customers problems require
              deep engineered solutions. Working with her was easy, productive
              and enjoyable. She interpreted the nature of our business and
              created a theme that conveyed it. The turn-around time from
              concept to production was low; The nature of her layout and code
              is sustainable; and most importantly, our customers state that the
              “usability” is high. I am appreciative of, and remain impressed
              by, what she has done for us, and would recommend her for any
              project of this type.
            </p>

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
