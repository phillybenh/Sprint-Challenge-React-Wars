import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CardGrid from "./components/CardGrid";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        // console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("the characters were not returned form the SWAPI", error);
      });
  }, []);

    if (!characters) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardGrid characters={characters} />
    </div>
  );
};

export default App;
