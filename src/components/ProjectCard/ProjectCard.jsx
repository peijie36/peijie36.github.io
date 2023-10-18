import uniqid from "uniqid";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
{/* import placeholderImg from "src/assets/placeholder.jpg"; */}

const ProjectCard = ( { project } ) => {
    return (
        <div className="flex flex-col md:flex-row border-4 border-black/10 rounded-lg mb-9">
            <img
                src={project.img}
                alt={`cover photo for ${project.name}`}
                className="scale-95 self-center max-sm:w-11/12 max-w-lg"
            />
            <div className="flex flex-col justify-between">
                <h1 className="text-3xl sm:text-4xl font-semibold py-1">{project.name}</h1>
                <p className="p-3 text-left text-lg">{project.description}</p>
                <div className="flex flex-col items-center">
                    <ul className="mt-3 sm:mt-7 flex flex-row justify-center items-end">
                        {project.techStack.map((tech) => (
                            <li key={uniqid()} className="m-3 p-1 border-2 rounded-md hover:-translate-y-2 duration-150">{tech}</li>
                        ))}
                    </ul>
                    <a href="https://github.com/peijie36/Moments" target="_blank" rel="noreferrer" className="self-center py-2">
                        <FaGithub size={36} className="hover:scale-125 duration-[125ms]"/>
                    </a>
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
        src: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard
