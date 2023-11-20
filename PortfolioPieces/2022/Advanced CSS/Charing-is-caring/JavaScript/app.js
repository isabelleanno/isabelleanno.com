//Isabelle Anno, 3/25/2022

/*This is an intersection observer- I got my information from this youtube video.
 https://www.youtube.com/watch?v=T8EYosX4NOo
Using intersection observers will allow me to use JS to automatically fill in the dots on the side nav on the
contact us page.

The goal is: When the dot gets in sight, it will turn orange to let the user know they're on the next 'step.' 
I loved learning about these because you can create some really cool animations with it!

I know my code is messy and repettive- it probably could be done much better. Sorry for that. 
I'm new to this and still have a lot to learn- this is the first time i've worked with intersection observers and I
want to do more with them! They're very powerful.
*/

const scroll1 = document.getElementById("scroll1");
const scroll2 = document.getElementById("scroll2");
const scroll3 = document.getElementById("scroll3");
let sn1 = document.getElementById("sn-1");
let sn2 = document.getElementById("sn-2");
let sn3 = document.getElementById("sn-3");
let sn4 = document.getElementById("sn-4");
//If you scrolled to the top of the document, first bubble gets the current-step class.
if (document.body.scrollTop === 0) {
  sn1.classList.add("current-step");
}
//If you scroll past span scroll1, the second bubble gets the current-step class.
observer = new IntersectionObserver((entry, observer) => {
  if (entry[0].isIntersecting === false) {
    sn2.classList.add("current-step");
  } else {
    sn2.classList.remove("current-step");
  }
});

observer.observe(scroll1);

//If you scroll past span scroll2, the third bubble gets the current-step class.
observer = new IntersectionObserver((entry, observer) => {
  if (entry[0].isIntersecting === false) {
    sn3.classList.add("current-step");
  } else {
    sn3.classList.remove("current-step");
  }
});

observer.observe(scroll2);

//If you scroll past span scroll3, the third bubble gets the current-step class.
observer = new IntersectionObserver((entry, observer) => {
  if (entry[0].isIntersecting === false) {
    sn4.classList.add("current-step");
  } else {
    sn4.classList.remove("current-step");
  }
});

observer.observe(scroll3);
