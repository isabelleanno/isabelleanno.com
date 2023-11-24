import React from "react";
import Sect5Layout from "./sect5Layout";
/*
This section is unique from all the other sections. It is responsible for displaying the projects section and slides.
My goal is to easily be able to add a project to the code, without having to reformat everything in the timeline,
and without having to just copy and paste JSX over and over like a noob. I still have a lot to learn, 
but I decided this would be a good start- so bear with me. 

In this document, I'm creating a simulated database of projects under the variable name "projects."
I'm passing them over to the function createProject, which formats the data into a uniform object, like a template.
These all get passed as props to sect5Layout.js to be formatted into the timeline. (go there if you're confused.)
*/
export default function Sect5() {
  //This function creates a new project using this object as a template.
  function createProject(title, description, photoSrc, date) {
    return {
      Title: title,
      Description: description,
      PhotoSrc: photoSrc,
      Date: date,
    };
  }
  /*An array of values for all my projects, sent to createProject function to reformat into an object.
Add a new project here, as the first call to createProject().*/
  var projects = [
    //Newest project below vv Add a new project right below this line to keep it in order.
    createProject(
      "Newest Project",
      "Newest Description",
      "./Images/placeholder.png",
      "24 November, 2023"
    ),
    createProject(
      "This is my project",
      "Test description",
      "./Images/placeholder.png",
      "23 September, 2021"
    ),
    createProject(
      "This is my other project",
      "Test description 2",
      "Test Photo",
      "23 September, 2021"
    ),
    //Oldest project below
    createProject(
      "This is my first-ever project",
      "Test description 3",
      "Test Photo",
      "20 November, 2020"
    ),
  ];

  //Returns the first two slides and then calls sect5Layout component to render the projects in the timeline
  return (
    <div className="section hs5">
      <div className="slide">
        <span className="title">Projects</span>
        <h1 id="Projects">Projects</h1>
      </div>
      <Sect5Layout slides={projects} />
    </div>
  );
}
