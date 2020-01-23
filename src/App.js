import React from "react";
import "./App.css";
import { Nav } from "./header/Header";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { Experience } from "./experience/Experience"

function App() {
  return (
    <div className="site">
      <Nav></Nav>
      <Home></Home>
      <About></About>
      <Experience></Experience>
    </div>
  );
}

export default App;
