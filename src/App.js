import React from "react";
import "./App.css";
import { Nav } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="site">
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
    </div>
  );
}

export default App;
