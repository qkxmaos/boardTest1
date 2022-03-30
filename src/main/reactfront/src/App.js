import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello", null)
      .then((response) => response.data)
      .then((message) => {
        setMessage(message);
        console.log(message);
      })
      .catch((error) => console.log(error));
    // fetch('/api/hello')
    //     .then(response => response.text())
    //     .then(message => {
    //       setMessage(message);
    //     })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>{message}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
