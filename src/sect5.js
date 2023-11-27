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
      "AI Text generator",
      "Newest Description",
      "placeholder.png",
      "24 November, 2023"
    ),
    createProject(
      "Seize the Clay Pottery Studio",
      "This was my first project in college. It helped me expand on my HTML and CSS knowledge.",
      "Henry.png",
      "October 18, 2021"
    ),
    createProject(
      "Weather Website",
      "This weather site was made during my SheCodes Plus course. It uses an API from openweathermap.com to get real-time weather data. It taught me basic JavaScript and introduced me to the concept of APIs. I am proud of it, but I still haven't yet learned responsive techniques for making it look good on every device.",
      "Henry.png",
      "May 26, 2021"
    ),
    //Oldest project below
    createProject(
      "My dog Henry 🐾",
      "This was my first official website. I made it while learning HTML and CSS through SheCodes Basic. Henry is my best buddy. He passed away peacefully in his bed at age 15 in 2022, and had a great life. He'll always have a special place in my heart. Even though this website is not the best, we all have to start somewhere and I'm glad to have started my career with him by my side.",
      "Henry.png",
      "March 22, 2021"
    ),
  ];

  //Returns the first two slides and then calls sect5Layout component to render the projects in the timeline
  return (
    <div className="section hs5">
      <div className="slide">
        <span className="title">Projects</span>
        <h1 id="Projects">Projects</h1>
      </div>
      <div className="slide">
        <span className="title">Projects</span>
        <div className="container">
          <div className="row">
            <p>Test</p>
          </div>
        </div>
      </div>
      <Sect5Layout slides={projects} />
    </div>
  );
}
