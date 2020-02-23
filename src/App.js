import React from "react";
import "./App.css";
import { Nav } from "./header/Header";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Experience } from "./experience/Experience";
import { Projects } from "./projects/Projects";

function App() {
  return (
    <div className="site">
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}

export default App;
