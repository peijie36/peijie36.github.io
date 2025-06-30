import Navbar from "@/src/components/Navbar/Navbar";
import Home from "@/src/components/Home/Home";
import Projects from "@/src/components/Projects/Projects";
import Skills from "@/src/components/Skills/Skills";
import Contact from "@/src/components/Contact/Contact";
import { Helmet } from 'react-helmet';
import "./App.css";

const App = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="keywords" content="React, JavaScript, Tailwind, Vite" />
                <meta name="description" content="Peijie Zheng's Portfolio Website" />
                <meta name="author" content="Peijie Zheng" />
            </Helmet>
            <Navbar />
            <Home />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};

export default App;
