//This will render a nav bar and footer on all your pages-
// you just have to make divs with an id's of navbar and footer on each page.

let nav = document.querySelector("#navbar");

nav.innerHTML = `<ul class="nav nav-tabs">
  <li class="nav-item navigation">
    <a href="">Home</a>
  </li>
  <li class="nav-item navigation">
    <a href="">About</a>
  </li>
  <li class="nav-item navigation">
    <a href="">Work</a>
  </li>
  <li class="nav-item navigation">
    <a href="">Contact</a>
  </li>
    <li class="nav-item navigation">
    <a href="">My Favorite Resources</a>
  </li>
</ul>`;

let footer = document.querySelector("#footer");
footer.innerHTML = ``;
