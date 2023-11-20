//Isabelle Anno 4/28/2022

let addList = document.getElementById("add-list");
let listContainer = document.getElementById("items-list");

addList.addEventListener("click", addEvent);
listContainer.addEventListener("click", removeEvent);
listContainer.addEventListener("click", crossOff);

function addEvent(e) {
  e.preventDefault();
  let displayList = document.createElement("li");
  let inputValue = document.getElementById("new-item").value;

  displayList.textContent = inputValue;
  displayList.className = "list-group-item mb-2 w-75";

  let completeTask = document.createElement("img");
  completeTask.setAttribute("src", "images/checkMark.png");
  completeTask.className = "mr-2 img-margin btn btn-sm btn-info float-right";
  completeTask.style.height = "30px";

  let deleteTask = document.createElement("button");
  deleteTask.innerHTML = "x";
  deleteTask.className = " btn btn-sm btn-danger float-right mr-2";

  if (inputValue) {
    displayList.appendChild(completeTask);
    displayList.appendChild(deleteTask);
    listContainer.appendChild(displayList);
    addList.reset();
  }
}
function removeEvent(e) {
  if (e.target.classList.contains("btn-danger")) {
    if (confirm("Are you sure?")) {
      let list = e.target.parentElement;
      listContainer.removeChild(list);
    }
  }
}
function crossOff(e) {
  if (e.target.classList.contains("img-margin")) {
    let list = e.target.parentElement;
    list.classList.toggle("cross");
  }
}
