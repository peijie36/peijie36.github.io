import PropTypes from "prop-types"

const ProjectCard = ( { project } ) => {
    return (
        <div className="flex flex-wrap">
            <img
                src={project.img}
                alt={`cover photo for ${project.name}`}
            />
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard
