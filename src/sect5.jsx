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
  function createProject(
    title,
    titel,
    description,
    beschrijving,
    photoSrc,
    link,
    date,
    datum
  ) {
    return {
      Title: title,
      Titel: titel,
      Description: description,
      Beschrijving: beschrijving,
      PhotoSrc: (
        <img
          src={`/Images/projects/${photoSrc}.png`}
          alt="A display of the current project"
        ></img>
      ),
      link: link,
      Date: date,
      Datum: datum,
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
      "Grappen en gedichten AI Generator",
      "I decided to learn more about AI as a fun side-project. I used the SheCodes AI API to make an interface for an AI joke generator and a poem generator. The user's input is trimmed and run through a profanity filter, then sent to the API using AJAX. I learned about prompt engineering & giving the AI context to generate the best responses.",
      "Ik besloot om als leuk bijproject meer te leren over AI. Ik heb de SheCodes AI API gebruikt om een ​​interface te maken voor een AI-grappengenerator en een gedichtengenerator. De invoer van de gebruiker gaat door een censorfilter voor grove taal en vervolgens met behulp van AJAX naar de API gestuurd. Ik leerde over snelle engineering en het geven van de AI-context om de beste reacties te genereren.",
      "jokes",
      "https://ai-joke-generator.netlify.app/",
      "December 3, 2023",
      "3 December, 2023"
    ),
    createProject(
      "Better Balance Safer You",
      "Better Balance Safer You",
      "My old tae kwon do instructor is starting a self-defense program for seniors, and needs my help making a website for it. Eagerly, I deployed my WordPress skills to make him a site. Although it's not hand-coded, I added custom CSS and JavaScript- something non-developers can't offer. Although it's still a work in progress, I'm proud of it.",
      "Mijn oude taekwon-do-instructeur heeft een zelfverdedigingsprogramma voor senioren gestart en heeft mij om mijn hulp gevraagt om een website voor hem te maken. Gretig zette ik mijn WordPress-vaardigheden in om een ​​site voor hem te maken. Hoewel het niet met de hand is gecodeerd, heb ik aangepaste CSS en JavaScript toegevoegd, iets dat mensen die geen webdeveloper zijn niet kunnen bieden. Hoewel het nog een work in progress is, ben ik er trots op.",
      "BBSU",
      "https://www.balancesaferu.com/",
      "November, 2023 - TODAY",
      "November 2023 - VANDAAG"
    ),
    createProject(
      "React Dictionary App",
      "React woordenboek-app",
      "This was my second React project, using two API's: one for the definition, and the other for the images. I enjoyed this project and am proud of it. It cemented the concepts I learned from my first ever React project.",
      "Dit was mijn tweede React-project, waarbij ik twee API's heb gebruikt: één voor de definitie en de andere voor de afbeeldingen. Ik heb genoten van dit project en ben er trots op. Het versterkte de concepten die ik leerde van mijn allereerste React-project.",
      "dictionary",
      "https://react-dictionary-ia.netlify.app/",
      "July 7, 2023",
      "7 Juli, 2023"
    ),
    createProject(
      "React Weather App",
      "React Weer-app",
      "I finished college and learned React.js from SheCodes, where I built this working weather app in React. It's a significant improvement from the one I made in 2021 and was the first time I used react. I learned about components and the UseState hook. I grew fond of React. It's much more organized and powerful than vanilla JS.",
      "Ik heb de universiteit afgerond en React.js geleerd van SheCodes, waar ik deze werkende weer-app in React heb gebouwd. Het is een aanzienlijke verbetering ten opzichte van degene die ik in 2021 heb gemaakt en het was de eerste keer dat ik React gebruikte. Ik leerde over componenten en de UseState-hook. Ik raakte dol op React. Het is veel georganiseerder en krachtiger dan “vanille JS”.",
      "weather-react",
      "https://react-weather-ia.netlify.app/",
      "July 7, 2023",
      "7 Juli 2023"
    ),
    createProject(
      "Mama Lu's",
      "Mama Lu's",
      "This was my absolute favorite project in college. I made this site for my PHP professor, Kathy Ison. She is retiring soon and loves baking, so I made the logo in inkscape and coded site from scratch using PHP. It was a group project and a special honor. No other students besides my team got this privelage - I felt so lucky. Professor Ison and I are still in touch, and I am very fond of her.",
      "Dit was mijn meest favoriete project op het universiteit. Ik heb deze site gemaakt voor mijn PHP-professor, Kathy Ison. Ze gaat binnenkort met pensioen en houdt van bakken, ik het logo in inkscape gemaakt en de site helemaal opnieuw gecodeerd met behulp van PHP. Het was een groepsproject en een bijzondere eer. Mijn team kreeg dit voorrecht om deze site te maken - ik was zo blij dat wij dit mochten maken. Professor Ison en ik hebben nog steeds contact, en ik ben erg op haar gesteld.",
      "mamalu's",
      "http://mamalus.infinityfreeapp.com/bakery-website/index.php",
      "May 5, 2023",
      "5 Mei 2023"
    ),
    createProject(
      "The Book Nook",
      "The Book Nook",
      "I polished and improved my skills with this project. Each image was edited to fit the color scheme, and I made the background images myself. It was a fun process and really gave me confidence in my abilities.",
      "Met dit project heb ik mijn vaardigheden opgepoetst en verbeterd. Elke afbeelding werd aangepast aan het kleurenschema en de achtergrondafbeeldingen heb ik zelf gemaakt. Het was een leuk proces en het gaf mij echt vertrouwen in mijn kunnen.",
      "booknook",
      "https://the-book-nook-ia.netlify.app/",
      "March 2, 2023",
      "2 Maart 2023"
    ),
    createProject(
      "Web Graphics Design",
      "Grafisch webontwerp",
      "This was one of my favorite classes in college. We learned how to use GIMP and InkScape, and the difference between vector images, JPG and PNG. I benefitted tremendously from these projects and still use image editing skills to this day.",
      "Dit was een van mijn favoriete lessen op het universiteit. We leerden hoe we GIMP en InkScape moesten gebruiken, en het verschil tussen vectorafbeeldingen, JPG en PNG. Ik heb enorm geprofiteerd van deze projecten en maak tot op de dag van vandaag nog steeds gebruik van mijn afbeelding bewerkingsvaardigheden.",
      "graphicdesign",
      "https://webgraphicsdesign.netlify.app/",
      "September-November of 2022",
      "September-November 2022"
    ),
    createProject(
      "A Thousand Words Co.",
      "A Thousand Words Co.",
      "This site taught me more about using images online. We discussed copyright laws, licenses and fair use. I decided to source all the images from unplash.com, which is fair use.",
      "Deze site heeft me meer geleerd over het online gebruiken van afbeeldingen. We bespraken auteursrechtwetten, licenties en redelijk gebruik. Ik heb besloten alle afbeeldingen van unplash.com te halen, wat redelijk gebruik is.",
      "athousandwords",
      "https://a-thousand-words.netlify.app/",
      "October 26, 2022",
      "26 Oktober 2022"
    ),
    createProject(
      "Chairing Is Caring Co.",
      "Chairing Is Caring Co.",
      "I made a fake architecture company using Bootstrap as the final project of my advanced CSS class. It's fully responsive, and I'm proud of the color scheme and fonts used.",
      "Ik heb een nep-architectuurbedrijf gemaakt met Bootstrap als het laatste project van mijn geavanceerde CSS-klas. Het is volledig responsief en ik ben trots op het kleurenschema en de gebruikte lettertypen.",
      "chairing",
      "https://chairing-is-caring.netlify.app/",
      "May 24, 2022",
      "24 Mei 2022"
    ),
    createProject(
      "JavaScript Puzzle Final Project",
      "Eindproject JavaScript-puzzel",
      "Although not responsive on mobile devices, I'm proud of this puzzle game as it goes above and beyond and uses the unsplash API- a skill I learned from SheCodes- to find pictures on the web. You can use the settings to choose the difficulty, and every image is unique.",
      "Hoewel het niet reageert op telefoon’s, ben ik trots op dit puzzelspel, omdat het een stap verder gaat en de unsplash API gebruikt (een vaardigheid die ik van SheCodes heb geleerd) om afbeeldingen op internet te vinden. Je kunt de instellingen gebruiken om de moeilijkheidsgraad te kiezen, en elke afbeelding is uniek.",
      "JSPuzzle",
      "https://javascript-puzzle.netlify.app/",
      "May 4, 2022",
      "4 Mei 2022"
    ),
    createProject(
      "Kirby Club",
      "Kirby Club",
      "This site was coded with Bootstrap. It taught me the grid system and other features of the popular framework.",
      "Deze site is gecodeerd met Bootstrap. Het leerde me over het rastersysteem en andere kenmerken van het populaire framework.",
      "kirby",
      "https://kirby-club.netlify.app/",
      "May 3, 2022",
      "3 Mei 2022"
    ),
    createProject(
      "Early JavaScript Projects",
      "Vroege JavaScript-projecten",
      "Here is a collection of simple javascript projects. They were made in my first semester of college. They taught me a lot about vanilla JavaScript. I expanded these skills with JQuery and React.js. In this collection of projects, I made a tip calculator, a quiz and a list of items that the user can add or delete.",
      "Hier is een verzameling eenvoudige JavaScript-projecten. Ze zijn gemaakt in mijn eerste semester van het universiteit. Ze hebben me veel geleerd over vanilla JavaScript. Deze vaardigheden heb ik uitgebreid met JQuery en React.js. In deze verzameling projecten heb ik een fooiencalculator, een quiz en een lijst met items gemaakt die de gebruiker kan toevoegen of verwijderen.",
      "arcade",
      "https://javascript.isabelleanno.com/",
      "March-May of 2022",
      "Maart-Mei 2022"
    ),
    createProject(
      "Green Thumb Succulent Co.",
      "Green Thumb Succulent Co.",
      "I created this fake plant store company for my advanced CSS class. I doodled the logo myself using Krita. I'm proud of the layout of the shop page. All in all, it's a good site considering the little experience I had with coding at this point.",
      "Ik heb deze website gemaakt voor mijn geavanceerde CSS-klas, en heb het logo zelf getekend met Krita. Ik ben trots op de lay-out van de pagina. Al met al is het een goede site, gezien de weinige ervaring die ik op dit moment had met coderen.",
      "greenthumb",
      "https://green-thumb-succulents.netlify.app/",
      "February 3, 2022",
      "3 Februari 2022"
    ),

    createProject(
      "Seize the Clay Pottery Studio",
      "Seize the Clay Pottery Studio",
      "One of my first ever projects in college. It helped me expand my HTML and CSS knowledge.",
      "Een van mijn allereerste projecten op het universiteit. Het heeft me geholpen mijn HTML- en CSS-kennis uit te breiden.",
      "pottery",
      "https://seize-the-clay.netlify.app/",
      "October 18, 2021",
      "18 Oktober 2021"
    ),
    createProject(
      "Weather Website",
      "Weerwebsite",
      "This weather site was made during my SheCodes Plus course. It uses an API from openweathermap.com to get real-time weather data. I also learned basic JavaScript and the concept of APIs. I am proud of it, but I still haven't yet learned responsive techniques for making it look good on every device.",
      "Deze weersite is gemaakt tijdens mijn SheCodes Plus cursus. Het maakt gebruik van een API van openweathermap.com om realtime weergegevens te verkrijgen. Ik heb ook basis-JavaScript en het concept van API's geleerd. Ik ben er trots op, maar ik heb nog steeds geen responsieve technieken geleerd om het er op elk apparaat goed uit te laten zien.",
      "weather",
      "https://weather-isa.netlify.app/",
      "May 26, 2021",
      "26 Mei 2021"
    ),
    //Oldest project below
    createProject(
      "My dog Henry 🐾",
      "Mijn hond Henry 🐾",
      "Here is my first official website. I made it while learning HTML and CSS through SheCodes Basic. Henry is my best buddy. He passed away peacefully in his bed at age 15 in November of 2022, and had a great life. He'll always have a special place in my heart. Even though this website is not the best, we all have to start somewhere, and I'm glad to have started my career with him by my side.",
      "Hier is mijn eerste officiële website. Ik heb het gemaakt terwijl ik HTML en CSS leerde via SheCodes Basic. Henry is mijn beste vriend. Hij stierf vredig in zijn bed op 15-jarige leeftijd in november 2022 en had een geweldig leven. Hij zal altijd een speciaal plekje in mijn hart hebben. Ook al is deze website niet de beste, we moeten allemaal ergens beginnen, en ik ben blij dat ik mijn carrière met hem aan mijn zijde ben begonnen.",
      "henry",
      "https://www.shecodes.io/cohorts/shecodes-online-workshop-57-0/projects/284319",
      "March 22, 2021",
      "22 Maart, 2021"
    ),
  ];

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
