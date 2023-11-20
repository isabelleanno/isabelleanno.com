//Simple age function for about us page

import React from "react";
export default function Age() {
  let today = new Date();
  let myBirthday = new Date("2001-04-23");
  let myAge = today.getFullYear() - myBirthday.getFullYear();
  return <span>{myAge}</span>;
}
