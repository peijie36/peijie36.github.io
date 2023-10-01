import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import "./App.css";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default App;
