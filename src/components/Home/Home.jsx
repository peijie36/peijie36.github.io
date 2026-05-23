import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { resumeLink } from "@/src/Info";

/**
 * Functional component for the Home section.
 * Renders a section with the name, job title, and links to the developer's
 * GitHub and LinkedIn profiles.
 *
 * @returns {JSX.Element} JSX element representing the Home section.
 */
const Home = () => {
    return (
        <section name="home" className="bg-white">
            <div className="section-shell flex min-h-screen flex-col items-center justify-center pt-20 text-center">
                <p className="text-lg font-medium text-slate-600 sm:text-[1.35rem]">Hi, my name is</p>
                <h1 className="max-w-4xl pt-2 text-6xl font-bold leading-none text-[#646cff] sm:text-7xl md:text-[6.5rem]">
                    Peijie Zheng
                </h1>
                <h2 className="pt-4 text-3xl font-bold text-slate-950 sm:text-5xl">
                    Software Developer
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                    I build practical web and mobile tools with React, TypeScript, and full-stack systems.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-76}
                        className="inline-flex cursor-pointer items-center justify-center rounded-md bg-[#646cff] px-5 py-3 font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#535bf2]"
                    >
                        View Projects
                    </Link>
                    <a
                        href={resumeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition-colors duration-150 hover:border-[#646cff] hover:text-[#646cff]"
                    >
                        Resume
                    </a>
                </div>
                <div className="mt-6 flex flex-row items-center justify-center gap-3">
                    <a href="https://github.com/peijie36" target="_blank" rel="noreferrer" className="rounded-md p-1 text-slate-900 transition-colors duration-150 hover:text-[#646cff]" aria-label="GitHub">
                        <FaGithub size={34} />
                    </a>
                    <a href="https://linkedin.com/in/peijiezheng" target="_blank" rel="noreferrer" className="rounded-md p-1 text-[#0072b1] transition-opacity duration-150 hover:opacity-80" aria-label="LinkedIn">
                        <FaLinkedin size={34} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
