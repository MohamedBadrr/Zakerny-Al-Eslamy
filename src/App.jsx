import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
