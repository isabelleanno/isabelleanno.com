//Simple age function for about us page

import React from "react";
export default function Age() {
  //Define the current date, day, and month.
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;

  //Define my birthday and current age variable
  const myBirthday = new Date("2001-04-23");
  let myCurrentAge = date.getFullYear() - myBirthday.getFullYear();

  //This statement is necessary because I noticed it adds a year every January 1- before my birthday.
  //So I said, if it's before my birthday, subtract a year from the age. You can test it by adding any date above in the
  //"date" variable. ^^^ ;)
  if (day < 23 && month < 4) {
    myCurrentAge -= 1;
  }

  return <span>{myCurrentAge}</span>;
}
