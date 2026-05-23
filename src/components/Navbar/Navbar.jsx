import { Link } from "react-scroll";
import { resumeLink } from "@/src/Info";
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
            <nav className="fixed left-0 right-0 top-0 z-10 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md">
                <div className="section-shell flex items-center justify-between py-3">
                    <h3 className="px-0 text-4xl font-bold text-[#646cff] sm:text-5xl">
                        PJ
                    </h3>
                    <div className="hidden items-center space-x-7 sm:flex">
                        {navItems.map((item) => (
                            <Link key={item} to={item} smooth={true} duration={500} offset={-76} className="nav-item">
                                {item}
                            </Link>
                        ))}
                        <a href={resumeLink} target="_blank" rel="noreferrer" className="resume-btn">
                            Resume
                        </a>
                    </div>


                    <button
                        type="button"
                        onClick={() => setOpenMobileNav(!openMobileNav)}
                        className="z-10 cursor-pointer rounded-md border-0 bg-transparent p-2 text-slate-900 sm:hidden"
                        aria-label={openMobileNav ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={openMobileNav}
                        aria-controls="mobile-navigation"
                    >
                        { openMobileNav ? <FaTimes size={30} /> : <FaBars size={30} /> }
                    </button>
                </div>

                { openMobileNav && (<div id="mobile-navigation" className="w-full h-screen flex flex-col absolute top-0 left-0 justify-center
                items-center bg-gradient-to-b from-gray-100 to-white">
                    {navItems.map((item) => (
                        <Link key={item} to={item} smooth={true} duration={700} offset={-76}
                        onClick={() => setOpenMobileNav(!openMobileNav)} className="mobile-nav-item">
                            {item}
                        </Link>
                    ))}
                    <a href={resumeLink} target="_blank" rel="noreferrer" className="resume-btn mt-5">
                        Resume
                    </a>
                </div>)}
            </nav>
        </>
    );
};

export default Navbar;
