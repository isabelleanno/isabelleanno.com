import React from "react";
import Sect5Layout from "./sect5Layout";

export default function Sect5(props) {
  var projects = [
    {
      Title: "This is my project",
      Description: "Test description",
      PhotoSrc: "./Images/placeholder.png",
      Date: "23 September, 2021",
    },
    {
      Title: "This is my other project",
      Description: "Test description 2",
      PhotoSrc: "Test Photo",
      Date: "23 September, 2021",
    },
    {
      Title: "This is my first ever project",
      Description: "Test description 3",
      PhotoSrc: "Test Photo",
      Date: "20 November, 2020",
    },
  ];
  return (
    /*----------------------------------- Start of Section intro vvv ----------------*/
    <div className="section hs5">
      <div className="slide">
        <span className="title">Projects</span>
        <h1 id="Projects">Projects</h1>
      </div>
      <Sect5Layout slides={projects} />
    </div>
  );
}
