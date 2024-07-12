import { languages, webDev, techTools } from "src/Info";
import PropTypes from "prop-types";
import "./Skills.css";

/**
 * Functional component representing the Skills section.
 * Renders a list of languages, web development tools, and technologies.
 *
 * @returns {JSX.Element} JSX element representing the skills section
 */
const Skills = () => {
    return (
        <div name="skills" className="flex flex-col pt-20 mt-5 justify-normal w-12/13">
            <h2 className="text-3xl text-left font-semibold text-[#646cff] mb-7 mr-32 underline underline-offset-8">
                SKILLS
            </h2>
            <div className="flex flex-col max-md:items-center md:flex-row min-h-full mb-36 sm:mb-48">
                {/* Languages column */}
                <div className="column-container">
                    <h3 className="container-header">Languages</h3>
                    <ul className="flex flex-col mb-7 list-outside">
                        {languages.map((language) => (
                            <ListItem key={language.name} item={language} />
                        ))}
                    </ul>
                </div>
                {/* Web Development column */}
                <div className="column-container mx-16">
                    <h3 className="container-header">Web Development</h3>
                    <ul className="mb-7">
                        {webDev.map((tool) => (
                            <ListItem key={tool.name} item={tool} />
                        ))}
                    </ul>
                </div>
                {/* Technologies column */}
                <div className="column-container">
                    <h3 className="container-header">Technologies</h3>
                    <ul className="mb-7">
                        {techTools.map((tool) => (
                            <ListItem key={tool.name} item={tool} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ListItem = ({ item }) => (
    <li className="list-item">
        <div className="item">
            {item.icon}
            <span className="item-text">
                {item.name}
            </span>
        </div>
    </li>
);

ListItem.propTypes = {
    item: PropTypes.shape({
        icon: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Skills;
