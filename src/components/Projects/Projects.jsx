import { projects } from "@src/Info"
import ProjectCard from "@components/ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <div name="projects" className="flex flex-col m-auto pt-24 justify-normal w-full md:h-screen">
            <h2 className="text-3xl text-left font-semibold text-[#646cff] mb-7 mr-32 underline underline-offset-8">
                Projects
            </h2>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col flex-wrap">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects
