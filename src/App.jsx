import Navbar from "src/components/Navbar/Navbar";
import Home from "src/components/Home/Home";
import Projects from "src/components/Projects/Projects";
import Skills from "src/components/Skills/Skills";
import Contact from "src/components/Contact/Contact";
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
