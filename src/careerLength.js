import React from "react";
export default function Career() {
  let today = new Date();
  let myCareerDate = new Date("2021-03-22");
  let myCareer = today.getFullYear() - myCareerDate.getFullYear();
  return <span>{myCareer}</span>;
}
