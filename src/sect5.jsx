import React, { useEffect } from "react";
import Sect5Layout from "./sect5Layout";
import $ from "jquery";
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
  function createProject(title, description, photoSrc, link, date) {
    return {
      Title: title,
      Description: description,
      PhotoSrc: (
        <img
          src={`/Images/projects/${photoSrc}.png`}
          alt="A display of the current project"
        ></img>
      ),
      link: link,
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
      "Jokes & Poems AI Generator",
      "I decided to learn more about AI as a fun side-project. I used the SheCodes AI API to make an interface for an AI joke generator and a poem generator. The user's input is trimmed and run through a profanity filter, then sent to the API using AJAX. I learned about prompt engineering & giving the AI context to generate the best responses.",
      "jokes",
      "https://ai-joke-generator.netlify.app/",
      "December 3, 2023"
    ),
    createProject(
      "Better Balance Safer You",
      "My old tae kwon do instructor is starting a self-defense program for seniors, and needs my help making a website for it. Eagerly, I deployed my WordPress skills to make him a site. Although it's not hand-coded, I added custom CSS and JavaScript- something non-developers can't offer. Although it's still a work in progress, I'm proud of it.",
      "BBSU",
      "https://www.balancesaferu.com/",
      "November, 2023 - TODAY"
    ),
    createProject(
      "React Dictionary App",
      "This was my second React project, using two API's: one for the definition, and the other for the images. I enjoyed this project and am proud of it. It cemented the concepts I learned from my first ever React project.",
      "dictionary",
      "https://react-dictionary-ia.netlify.app/",
      "July 7, 2023"
    ),
    createProject(
      "React Weather App",
      "I finished college and learned React.js from SheCodes, where I built this working weather app in React. It's a significant improvement from the one I made in 2021 and was the first time I used react. I learned about components and the UseState hook. I grew fond of React. It's much more organized and powerful than vanilla JS.",
      "weather-react",
      "https://react-weather-ia.netlify.app/",
      "July 7, 2023"
    ),
    createProject(
      "Mama Lu's",
      "This was my absolute favorite project in college. I made this site for my PHP professor, Kathy Ison. She is retiring soon and loves baking, so I made the logo in inkscape and coded site from scratch using PHP. It was a group project and a special honor. No other students besides my team got this privelage - I felt so lucky. Professor Ison and I are still in touch, and I am very fond of her.",
      "mamalu's",
      "http://mamalus.infinityfreeapp.com/bakery-website/index.php",
      "May 5, 2023"
    ),
    createProject(
      "The Book Nook",
      "I polished and improved my skills with this project. Each image was edited to fit the color scheme, and I made the background images myself. It was a fun process and really gave me confidence in my abilities.",
      "booknook",
      "https://the-book-nook-ia.netlify.app/",
      "March 2, 2023"
    ),
    createProject(
      "Web Graphics Design",
      "This was one of my favorite classes in college. We learned how to use GIMP and InkScape, and the difference between vector images, JPG and PNG. I benefitted tremendously from these projects and still use image editing skills to this day.",
      "graphicdesign",
      "#",
      "September-November of 2022"
    ),
    createProject(
      "A Thousand Words Co.",
      "This site taught me more about using images online. We discussed copyright laws, licenses and fair use. I decided to source all the images from unplash.com, which is fair use.",
      "athousandwords",
      "https://a-thousand-words.netlify.app/",
      "October 26, 2022"
    ),
    createProject(
      "Chairing Is Caring Co.",
      "I made a fake architecture company using Bootstrap as the final project of my advanced CSS class. It's fully responsive, and I'm proud of the color scheme and fonts used.",
      "chairing",
      "https://chairing-is-caring.netlify.app/",
      "May 24, 2022"
    ),
    createProject(
      "JavaScript Puzzle Final Project",
      "Although not responsive on mobile devices, I'm proud of this puzzle game as it goes above and beyond and uses the unsplash API- a skill I learned from SheCodes- to find pictures on the web. You can use the settings to choose the difficulty, and every image is unique.",
      "JSPuzzle",
      "https://javascript-puzzle.netlify.app/",
      "May 4, 2022"
    ),
    createProject(
      "Kirby Club",
      "This site was coded with Bootstrap. It taught me the grid system and other features of the popular framework.",
      "kirby",
      "https://kirby-club.netlify.app/",
      "May 3, 2022"
    ),
    createProject(
      "Early JavaScript Projects",
      "Here is a collection of simple javascript projects. They were made in my first semester of college. They taught me a lot about vanilla JavaScript. I expanded these skills with JQuery and React.js. In this collection of projects, I made a tip calculator, a quiz and a list of items that the user can add or delete.",
      "arcade",
      "https://javascript.isabelleanno.com/",
      "March-May of 2022"
    ),
    createProject(
      "Green Thumb Succulent Co.",
      "I created this fake plant store company for my advanced CSS class. I doodled the logo myself using Krita. I'm proud of the layout of the shop page. All in all, it's a good site considering the little experience I had with coding at this point.",
      "greenthumb",
      "https://green-thumb-succulents.netlify.app/",
      "February 3, 2022"
    ),

    createProject(
      "Seize the Clay Pottery Studio",
      "One of my first ever projects in college. It helped me expand my HTML and CSS knowledge.",
      "pottery",
      "https://seize-the-clay.netlify.app/",
      "October 18, 2021"
    ),
    createProject(
      "Weather Website",
      "This weather site was made during my SheCodes Plus course. It uses an API from openweathermap.com to get real-time weather data. I also learned basic JavaScript and the concept of APIs. I am proud of it, but I still haven't yet learned responsive techniques for making it look good on every device.",
      "weather",
      "https://weather-isa.netlify.app/",
      "May 26, 2021"
    ),
    //Oldest project below
    createProject(
      "My dog Henry 🐾",
      "Here is my first official website. I made it while learning HTML and CSS through SheCodes Basic. Henry is my best buddy. He passed away peacefully in his bed at age 15 in November of 2022, and had a great life. He'll always have a special place in my heart. Even though this website is not the best, we all have to start somewhere, and I'm glad to have started my career with him by my side.",
      "henry",
      "https://www.shecodes.io/cohorts/shecodes-online-workshop-57-0/projects/284319",
      "March 22, 2021"
    ),
  ];
  useEffect(() => {
    $(".fp-arrow.fp-next").addClass("sect5FPNext");
    $(".fp-arrow.fp-prev").addClass("sect5FPPrev");
  });
  //Returns the first two slides and then calls sect5Layout component to render the projects in the timeline
  return (
    <div className="section hs5">
      <div className="slide">
        <span className="title">Projects</span>
        <h1 id="Projects">Projects</h1>
      </div>
      <span className="title">Projects</span>
      <Sect5Layout slides={projects} />
    </div>
  );
}
