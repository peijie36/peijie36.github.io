import placeholder from "src/assets/placeholder.jpg";

const languages = [
    { name: "Java", icon: <i className="devicon-java-plain colored"></i> },
    { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
    { name: "Python", icon: <i className="devicon-python-plain colored"></i> },
    { name: "HTML", icon: <i className="devicon-html5-plain colored"></i> },
    { name: "CSS", icon: <i className="devicon-css3-plain colored"></i> },
    { name: "Bash", icon: <i className="devicon-bash-plain colored"></i> },
];

const webDev = [
    { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
    { name: "React", icon: <i className="devicon-react-original colored"></i> },
    { name: "NodeJS", icon: <i className="devicon-nodejs-plain colored"></i> },
    { name: "ExpressJS", icon: <i className="devicon-express-original colored"></i> },
    { name: "Django", icon: <i className="devicon-django-plain colored"></i> },
    { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain colored"></i> },
];

const techTools = [
    { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
    { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored"></i> },
    { name: "Firebase", icon: <i className="devicon-firebase-plain colored"></i> },
    { name: "Azure", icon: <i className="devicon-azure-plain colored"></i> },
    { name: "SQLite", icon: <i className="devicon-sqlite-plain colored"></i> },
    { name: "Jest", icon: <i className="devicon-jest-plain colored"></i> },
];

const projects = [
    {
        name: "Moments",
        img: placeholder,
        techStack: ["React", "Firebase"],
        description:
            "A responsive web application using React that allows users to view and share photos in real time. Users can browse photos/ artworks with the option to filter by categories. Additionally, they can search by specific usernames to view their profiles and portfolios.",
        src: "https://github.com/peijie36/Moments",
    },
];

export { languages, webDev, techTools, projects };
