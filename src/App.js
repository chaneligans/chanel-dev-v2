import React from "react";
import "./App.css";
import { Nav } from "./header/Header";
import { Home } from "./home/Home";
import { About } from "./about/About";

function App() {
  return (
    <div className="site">
      <Nav></Nav>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
