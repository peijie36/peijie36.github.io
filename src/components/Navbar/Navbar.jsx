import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { resumeLink } from "src/Info";
import "./Navbar.css";

const Navbar = () => {

    const navItems = ["home", "projects", "skills", "contact"]

    /* const [openMobileNav, setOpenMobileNav] = useState(false); */

    return (
        <>
            <nav className="flex sm:justify-around items-center py-3 bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 left-0 right-0 z-10">
                <h3 className="text-5xl font-semibold text-[#646cff] px-3">
                    PJ
                </h3>
                <div className="hidden items-center space-x-7 md:flex px-3">
                    {navItems.map((item) => (
                        <Link key={item} to={item} smooth={true} duration={500} className="nav-item">
                            {item}
                        </Link>
                    ))}
                    <a href={resumeLink} target="_blank" rel="noreferrer">
                        <button className="nav-item bg-transparent font-semibold border rounded-md py-2 px-4">
                            Resume
                        </button>
                    </a>
                </div>

                {/* Mobile Hamburger Nav
                <div onClick={() => setOpenMobileNav(!openMobileNav)} className="cursor-pointer z-10 md:hidden">
                    { openMobileNav ? <FaBars size={30} /> : <FaBars size={30} /> }
                </div>
                <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen">
                    {navItems.map((item) => (
                        <Link key={item} to={item} smooth={true} duration={500} className="nav-item">
                            {item}
                        </Link>
                    ))}
                    <a href= {resumeLink} target="_blank" rel="noreferrer">
                        <button className="nav-item">Resume</button>
                    </a>
                </div>
                */}
            </nav>
        </>
    );
};

export default Navbar;
