import { Link } from "react-scroll";
import { resumeLink } from "src/Info";
import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

/**
 * Functional component representing the navigation bar.
 * Renders navigation links and a mobile menu toggle.
 * Uses internal organization modules for styling and functionality.
 *
 * @returns {JSX.Element} JSX element representing the Navigation bar
 */
const Navbar = () => {

    const navItems = ["home", "projects", "skills", "contact"]

    const [openMobileNav, setOpenMobileNav] = useState(false);

    return (
        <>
            <nav className="flex max-sm:justify-between justify-around items-center py-3 bg-white/80 backdrop-blur-md
            shadow-md fixed w-full top-0 left-0 right-0 z-10">
                <h3 className="text-5xl font-semibold text-[#646cff] px-3">
                    PJ
                </h3>
                <div className="hidden items-center space-x-7 sm:flex px-3">
                    {navItems.map((item) => (
                        <Link key={item} to={item} smooth={true} duration={500} className="nav-item">
                            {item}
                        </Link>
                    ))}
                    <a href={resumeLink} target="_blank" rel="noreferrer">
                        <button className="resume-btn">
                            <span>Resume</span>
                        </button>
                    </a>
                </div>


                <div onClick={() => setOpenMobileNav(!openMobileNav)} className="cursor-pointer z-10 sm:hidden px-3">
                    { openMobileNav ? <FaTimes size={30} /> : <FaBars size={30} /> }
                </div>

                { openMobileNav && (<div className="w-full h-screen flex flex-col absolute top-0 left-0 justify-center
                items-center bg-gradient-to-b from-gray-100 to-white">
                    {navItems.map((item) => (
                        <Link key={item} to={item} smooth={true} duration={700}
                        onClick={() => setOpenMobileNav(!openMobileNav)} className="mobile-nav-item">
                            {item}
                        </Link>
                    ))}
                    <a href= {resumeLink} target="_blank" rel="noreferrer">
                        <button className="resume-btn mt-5"><span>Resume</span></button>
                    </a>
                </div>)}
            </nav>
        </>
    );
};

export default Navbar;
