//Isabelle Anno, 3/24/2022
var noIsChecked = true;

//Displays and hides elements according to users' answers
document.getElementById("yes").onclick = function () {
  noIsChecked = false;
  document.getElementById("more-than-one-dude").style.display = "block";
};

if (noIsChecked === false) {
  document.getElementById("more-than-one-dude").style.display = "none";
}
//calculate tip
function calculateTip() {
  const BILLAMT = document.getElementById("billamt").value;
  const SERVICEQUAL = document.getElementById("serviceQual").value;
  const numOfPeople = document.getElementById("peopleamt").value;
  console.log(numOfPeople);
  //validate input

  if (!BILLAMT.length || SERVICEQUAL == 0) {
    alert("Please fill in all the required fields.");
  } else {
    //calculate total
    let total = (BILLAMT * SERVICEQUAL) / numOfPeople;

    //Round to two decimal places
    Math.round(total * 100) / 100;
    //next line allows us to always have two digits after the decimal place
    total = total.toFixed(2);
    //display the tip
    document.getElementById("totalTip").style.display = "block";
    if (noIsChecked === true) {
      document.getElementById("tip").innerHTML =
        "You should tip the server $" + total + " ";
    } else {
      document.getElementById("tip").innerHTML =
        "Each person should tip the server $ " + total + " ";
    }
  }
}

//hide the tip amount on load
document.getElementById("totalTip").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
