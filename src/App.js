import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        <NavBar />
        {/* <Route path="/" component={NavBar} /> */}
        <Route exact path="/" component={Home} />
        {/*
          <Route path="/home" component={Home} />
          <Route path="/home" component={Home} />
        */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
