import { languages, webDev, techTools } from "src/Info";
import uniqid from "uniqid";
import "./Skills.css";

const Skills = () => {
    return (
        <div name="skills" className="flex flex-col pt-20 mt-5 justify-normal w-12/13">
            <h2 className="text-3xl text-left font-semibold text-[#646cff] mb-7 mr-32 underline underline-offset-8">
                SKILLS
            </h2>
            <div className="flex flex-col max-md:items-center md:flex-row min-h-full mb-36 sm:mb-48">
                <div className="column-container">
                    <h3 className="container-header">Languages</h3>
                    <ul className="flex flex-col mb-7 list-outside">
                        {languages.map((language) => (
                            <li key={uniqid()} className="list-item">
                                <div className="item">
                                    {language.icon}
                                    <span className="item-text">
                                        {language.name}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="column-container mx-16">
                    <h3 className="container-header">Web Development</h3>
                    <ul className="mb-7">
                        {webDev.map((tool) => (
                            <li key={uniqid()} className="list-item">
                                <div className="item">
                                    {tool.icon}
                                    <span className="item-text">
                                        {tool.name}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="column-container">
                    <h3 className="container-header">Technologies</h3>
                    <ul className="mb-7">
                        {techTools.map((tool) => (
                            <li key={uniqid()} className="list-item">
                                <div className="item">
                                    {tool.icon}
                                    <span className="text-[1rem] sm:text-lg px-3">
                                        {tool.name}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
