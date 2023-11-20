"use strict";

//Isabelle Anno, 4/22/2022
$(document).ready(function () {
  $("#countdown").click(function () {
    //define variables
    let event = $("#event").val();
    let dt = $("#date").val();
    let message = $("#message");
    //validate whether or not a name and date were entered
    if (event.length == 0 || dt.length == 0) {
      message.text("please enter both a name and a date");
      return;
    }
    if (dt.indexOf("/") == -1) {
      message.text("Please enter the date in MM/DD/YYYY Format");
      return;
    }
    let year = dt.substring(dt.length - 4);
    if (isNaN(year)) {
      message.text("Please enter the date in MM/DD/YYYY Format");
      return;
    }
    let date = new Date(dt);
    if (date == "Invalid Date") {
      message.text("Please enter the date in MM/DD/YYYY Format");
      return;
    }
    let today = new Date();
    let oneDay = 24 * 60 * 60 * 1000; //   hours * minutes * seconds * milliseconds
    let days = (date.getTime() - today.getTime()) / oneDay;
    days = Math.ceil(days);
    if (days == 0) {
      message.text(
        "Horray! Today is ".concat(
          event.toLowerCase(),
          "!\n (",
          date.toDateString(),
          ")"
        )
      );
    }
    if (days < 0) {
      event = event.substring(0, 1).toUpperCase() + event.substring(1);
      message.text(
        event.concat(
          "happened",
          Math.abs(days),
          "day(s) ago. \n (",
          date.toDateString(),
          ")"
        )
      );
    }
    if (days > 0) {
      message.text(
        days
          .toString()
          .concat(
            "day(s) until",
            event.toLowerCase(),
            "!\n(",
            date.toDateString(),
            ")"
          )
      );
    }
  });
  $("#event").focus();
});
