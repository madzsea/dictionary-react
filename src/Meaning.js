import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>
              {definition.definition}
              <br />
              <div className="example">{definition.example} </div>
            </p>
          </div>
        );
      })}
    </div>
  );
}
