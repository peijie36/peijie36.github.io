import { projects } from "@/src/Info";
import ProjectCard from "@/src/components/ProjectCard/ProjectCard";

/**
 * Functional component that renders a list of projects.
 *
 * @returns {JSX.Element} JSX element representing the projects section
 */
const Projects = () => {
    return (
        <section name="projects" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
            <div className="section-shell">
                <h2 className="section-heading mb-10">
                    PROJECTS
                </h2>
                <div className="mx-auto flex max-w-5xl flex-col gap-8">
                    {projects ? projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    )) : null}
                </div>
            </div>
        </section>
    );
}

export default Projects
