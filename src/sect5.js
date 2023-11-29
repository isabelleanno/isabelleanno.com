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
      PhotoSrc: <img src={require(`./Images/projects/${photoSrc}.png`)}></img>,
      Date: date,
    };
  }
  /*An array of values for all my projects, sent to createProject function to reformat into an object.
Add a new project here, as the first call to createProject().*/
  var projects = [
    /*
    Copy the template below and add it right above this code to add the most recent project.
    ATTENTION: for photoSrc, it has to be a .png. Only put the actual title (ex. henry.png just becomes henry)

     createProject("title", "Description", "placeholder", "Date Completed"),

    */
    createProject(
      "JavaScript Quiz",
      "Test your JavaScript knowledge with a short quiz, that will even grade you.",
      "quiz",
      "April 5, 2022"
    ),
    createProject(
      "JavaScript Tip Calculator",
      "This handy app can calculate the tip for your bill when you're out at a restaurant. Whether you're alone or with friends, and no matter how good or bad the service was, you can rest assured you're tipping the exact right amount.",
      "tips",
      "March 22, 2022"
    ),
    createProject(
      "JavaScript Arcade",
      "This simple but adorable interactive JavaScript list taught me a lot about adding functionality to a website in a practical way. Having a changing user interface is a common need for many sites on the internet.",
      "arcade",
      "March 22, 2022"
    ),
    createProject(
      "Green Thumb Succulent Co.",
      "This was a fake plant store that I made up for my advanced CSS class.",
      "greenthumb",
      "February 3, 2022"
    ),

    createProject(
      "Seize the Clay Pottery Studio",
      "This was my first project in college. It helped me expand on my HTML and CSS knowledge.",
      "pottery",
      "October 18, 2021"
    ),
    createProject(
      "Weather Website",
      "This weather site was made during my SheCodes Plus course. It uses an API from openweathermap.com to get real-time weather data. It taught me basic JavaScript and introduced me to the concept of APIs. I am proud of it, but I still haven't yet learned responsive techniques for making it look good on every device.",
      "placeholder",
      "May 26, 2021"
    ),
    //Oldest project below
    createProject(
      "My dog Henry 🐾",
      "This was my first official website. I made it while learning HTML and CSS through SheCodes Basic. Henry is my best buddy. He passed away peacefully in his bed at age 15 in 2022, and had a great life. He'll always have a special place in my heart. Even though this website is not the best, we all have to start somewhere and I'm glad to have started my career with him by my side.",
      "henry",
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
