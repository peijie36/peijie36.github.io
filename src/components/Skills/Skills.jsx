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
        <section name="skills" className="scroll-mt-24 bg-white py-20 sm:py-24">
            <div className="section-shell">
                <h2 className="section-heading mb-10">
                    SKILLS
                </h2>
                <div className="skills-grid">
                    {skillSections.map((section) => (
                        <section className="column-container" key={section.title}>
                            <h3 className="container-header">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.items.map((item) => (
                                    <ListItem key={item.name} item={item} />
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </section>
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
