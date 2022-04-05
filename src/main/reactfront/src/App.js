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
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
