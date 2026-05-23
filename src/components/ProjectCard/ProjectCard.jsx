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
        <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow duration-150 hover:shadow-md">
            <div className="grid gap-0 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                <div className="bg-slate-100 p-3 sm:p-4">
                    <img
                        src={project.img}
                        alt={`cover photo for ${project.name}`}
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="236"
                        className="aspect-[500/236] w-full rounded-md object-cover shadow-sm"
                    />
                </div>
                <div className="flex flex-col gap-5 p-5 text-left sm:p-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">{project.name}</h3>
                        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-[1.05rem]">{project.description}</p>
                    </div>
                    <div className="mt-auto flex flex-col gap-5">
                        <ul className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <li key={`${project.name}-${tech}`} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        {project.src && (
                            <a
                                href={project.src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-800 transition-colors duration-150 hover:border-[#646cff] hover:text-[#646cff]"
                                aria-label={`${project.name} source code`}
                            >
                                <FaGithub size={20} aria-hidden="true" />
                                Source
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        src: PropTypes.string,
    }).isRequired,
};

export default ProjectCard
