import uniqid from "uniqid";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

/**
 * Functional component for rendering a project card.
 *
 * @param {Object} project - The project object containing details like name, image, description, tech stack, and source code link.
 * @returns {JSX.Element} JSX element representing the project card with project details.
 */
const ProjectCard = ( { project } ) => {
    return (
        <div className="flex flex-col md:flex-row border-4 border-black/10 rounded-lg mb-9">
            <img
                src={project.img}
                alt={`cover photo for ${project.name}`}
                className="scale-[.97] max-md:self-center max-sm:w-full max-w-[500px] rounded-md"
            />
            <div className="flex flex-col justify-between">
                <h1 className="text-3xl sm:text-4xl font-semibold py-1">{project.name}</h1>
                <p className="p-2 text-left sm:text-lg">{project.description}</p>
                <div className="flex flex-col items-center">
                    <ul className="sm:mt-7 flex flex-row justify-center items-end">
                        {project.techStack.map((tech) => (
                            <li key={uniqid()} className="m-3 p-1 border-2 rounded-md hover:-translate-y-2 duration-150">{tech}</li>
                        ))}
                    </ul>
                    {project.src && (<a href={project.src} target="_blank" rel="noopener noreferrer"className="self-center py-2">
                        <FaGithub size={36} className="hover:scale-125 duration-[125ms]"/>
                    </a>)}
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.any,
        techStack: PropTypes.array.isRequired,
        description: PropTypes.string.isRequired,
        src: PropTypes.string,
    }).isRequired,
};

export default ProjectCard
