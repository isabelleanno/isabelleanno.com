//  This function is enclosed in parenthesis. This type of function is invoked immediately, AKA Immediately-Invoked Function Expression

//Isabelle Anno 4/1/2022

/*within this IIFE, we have two functions. The first immediately displays the quiz itself, the second does some magic
when you press the submit button- details below. Don't worry about the two functions yet- first, familiarize yourself
with the constants defined at the bottom.*/

(function () {
  //buildQuiz is a function that displays the quiz in the html immediately when the page displays.
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // observe the => syntax, which is basically the same as using return

    /*Use forEach because you're using an array called MyQuestions. The ForEach method is speficially for arrays.
    first parameter- currentQuestion- is the array itself. Second parameter- questionNumber- is the ??
    */
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of all answer choices.
      const answers = [];

      /*"for in" loops are specifically for objects. You used a for-in loop
      instead of just a for loop because objects don't have a .length property.

      We never got taught about what this type of loop is before... I don't think we were ever even
      properly taught about objects, either- how to define them, what they are, when to use them. Had to go on
      w3schools and youtube to teach myself. Wish this course started with more basic concepts before diving into this... 

      This guy has a great youtube video about these types of loops:
      https://www.youtube.com/watch?v=prl73KRkB34
      
      general format of a for-in loop: for (property in object)
      */

      //'letter' is defined right here in the parenthesis. Letter is each property of the answers object above.

      //This is going to basically loop through each answer in the array and populate the answers array that we defined above
      //with all the answer selections, so we can display it.
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button, use the push method to add an array item
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      console.log(answers);
      // add this question and its answers to the output array.
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    //The submit button has an addEventListener that calls this function- so this is only called after you're done with
    //your quiz and you press submit.
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  /* 
    The purpose of this assignment is for you to create at least five (5) 
      JavaScript quiz questions.
	  
	It's also a good lesson in observing functional code to clarify the concepts

*/
  //Define constants for both of the functions above to work with

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  const myQuestions = [
    //Defining an array of objects.
    {
      /*each section of the array within the curly braces is as an "object." (hence the {}'s).
       Each object has 3 properties:
        question, answers and correctAnswer. */
      question: "How do you declare an object in JavaScript?",
      //the answers attribute is actuallly an object within this object. It has three properties: a, b, and c.
      answers: {
        a: "With curly braces {}",
        b: "with brackets []",
        c: "Inside the parenthesis of a function",
      },
      correctAnswer: "a",
    },
    {
      question: "What is an IIFE function?",
      answers: {
        a: "It stands for Immediately Iterating Functional Elements and it's a special type of array in JavaScript.",
        b: "It stands for Immediate Icecream For Everyone and it's a special day of the year where we all get free icecream.",
        c: "It stands for Immediately Invoked Function Expression- its a special type of function within parenthesis that gets called immediately.",
      },
      correctAnswer: "c",
    },
    {
      question:
        "True or false: In JavaScript, you can use a variable declared inside a function just like a global variable.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b",
    },
    {
      question: "What is a parameter in JavaScript?",
      answers: {
        a: "A parameter is a variable that's being passed by one function to a different function.",
        b: "A parameter is a variable that's being passed into a function or is declared inside a function's parenthesis",
        c: "Both of these are true",
      },
      correctAnswer: "b",
    },
    {
      question:
        "True or false: JavaScript is a client-side scripting language, meaning it's read by the client's browser and not a server.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a",
    },
  ];

  // display quiz right away
  //calling buildQuiz function
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
