import placeholder from "src/assets/placeholder.jpg";

const languages = ["Java", "JavaScript", "Python", "C++", "Bash"];

const webDev = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "ExpressJS",
    "Tailwind CSS",
];

const techTools = ["Git", "MongoDB", "Firebase", "Azure", "Jest"];

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
