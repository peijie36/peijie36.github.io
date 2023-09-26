import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-around m-auto py-3 bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 left-0 right-0 z-10">
                <h3 className="text-4xl font-semibold text-blue-500 px-3">
                    PJ
                </h3>
                <div className="items-center hidden space-x-7 lg:flex px-3">
                    <Link to="home" smooth={true} duration={500} className="nav-item">
                        Home
                    </Link>
                    <Link to="projects" smooth={true} duration={500} className="nav-item">
                        Projects
                    </Link>
                    <Link to="skills" smooth={true} duration={500} className="nav-item">
                        Skills
                    </Link>
                    <Link to="contact" smooth={true} duration={500} className="nav-item">
                        Contact
                    </Link>
                    <button className="nav-item">Resume</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
