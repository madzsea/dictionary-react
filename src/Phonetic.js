import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="listen"
      >
        Listen
      </a>{" "}
      :<span className="phonetic-text"> {props.phonetic.text} </span>
    </div>
  );
}
