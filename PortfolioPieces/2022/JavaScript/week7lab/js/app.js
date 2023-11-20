//Isabelle Anno, 3/5/2022

//I'm commenting a lot so I can walk myself through this code to try and understand it better :)

document.addEventListener("DOMContentLoaded", function () {
  //Unsure why this line is necessary, but it is- it won't do anything w/o it.
  const list = document.getElementById("game-list");

  //delete games
  list.addEventListener("click", (event) => {
    if (event.target.className == "delete") {
      //target refers to the span element with a class of delete
      const li = event.target.parentElement;
      //this refers to the whole li, both with the delete button and the name.
      li.parentNode.removeChild(li);
      //li.parentnode is the ul. so essentially, I'm saying removeChild (event.target.parentElement)
      // which is that specific li element.
    }
  });
  //add games
  const addForm = document.getElementById("add-game");
  addForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //By default, when submitting a form, the page reloads. This line prevents that from happening.
    const value = document.getElementById("suggestion").value;

    /*Now i'm creating the elements needed to create a new entry- the li and the two spans. I will also make their respective
    classes and text content.
    Fun fact: Since these constants are local to this function, I'm able to make a new "li" const w/o affecting
    the one in the function above. */
    const li = document.createElement("li");
    const gameName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    gameName.classList.add("name");
    gameName.textContent = value;
    //remember "value" is the constant we made earlier.

    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete");

    //append these things to the DOM.
    list.append(li);
    li.append(deleteBtn);
    li.append(gameName);
  });
});
