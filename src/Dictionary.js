import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="What word do you want to find?"
          onChange={handleChange}
          className="search-text"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
