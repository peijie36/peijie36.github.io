import { skillSections } from "@/src/Info";
import PropTypes from "prop-types";
import "./Skills.css";

/**
 * Functional component representing the Skills section.
 * Renders grouped technology skills from the resume.
 *
 * @returns {JSX.Element} JSX element representing the skills section
 */
const Skills = () => {
    return (
        <div name="skills" className="flex flex-col pt-20 mt-5 justify-normal w-12/13">
            <h2 className="text-3xl text-left font-semibold text-[#646cff] mb-7 mr-32 underline underline-offset-8">
                SKILLS
            </h2>
            <div className="skills-grid">
                {skillSections.map((section) => (
                    <div className="column-container" key={section.title}>
                        <h3 className="container-header">{section.title}</h3>
                        <ul className="mb-7">
                            {section.items.map((item) => (
                                <ListItem key={item.name} item={item} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ListItem = ({ item }) => (
    <li className="list-item">
        <div className="item">
            <item.Icon aria-hidden="true" className={`text-2xl ${item.iconClass}`} />
            <span className="item-text">
                {item.name}
            </span>
        </div>
    </li>
);

ListItem.propTypes = {
    item: PropTypes.shape({
        Icon: PropTypes.elementType.isRequired,
        iconClass: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Skills;
