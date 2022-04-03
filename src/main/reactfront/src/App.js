import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Home from "./pages/Home";

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
    </div>
  );
}

export default App;
