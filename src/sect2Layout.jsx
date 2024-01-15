import React from "react";
import Progress from "./progress";
//Import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sect2Layout(props) {
  return (
    <tr>
      <td className="col-6">
        <p className="skill m-0">
          <FontAwesomeIcon icon={props.icon} className="icons mx-1" />
          {props.skill}
        </p>
      </td>
      <td>
        <Progress value={props.value} />
      </td>
    </tr>
  );
}
