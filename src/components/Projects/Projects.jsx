import { projects } from "@/src/Info";
import ProjectCard from "@/src/components/ProjectCard/ProjectCard";

/**
 * Functional component that renders a list of projects.
 *
 * @returns {JSX.Element} JSX element representing the projects section
 */
const Projects = () => {
    return (
        <section name="projects" className="flex flex-col m-auto pt-24 sm:pt-20 justify-normal w-12/13">
            <h2 className="text-3xl text-left font-semibold text-[#646cff] mb-7 mr-32 underline underline-offset-8">
                PROJECTS
            </h2>
            <div className="max-w-screen-lg h-auto p-4 mx-auto flex flex-wrap justify-center">
                {projects ? projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                )) : null}
            </div>
        </section>
    );
}

export default Projects
