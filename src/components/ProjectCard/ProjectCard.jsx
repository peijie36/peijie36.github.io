import PropTypes from "prop-types"
{/* import placeholderImg from "src/assets/placeholder.jpg"; */}

const ProjectCard = ( { project } ) => {
    return (
        <div className="flex flex-wrap">
            <img src={project.img} alt={`cover photo for ${project.name}`} />
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.any.isRequired,
        description: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard
