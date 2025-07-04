import moments from "@/assets/moments.jpg";
import placeholder from "@/assets/placeholder.jpg";
import noaa from "@/assets/noaa.png";
import ordersup from "@/assets/ordersup.png";

const resumeLink =
	"https://drive.google.com/file/d/1XP4VXQPocLhEYEiukjMLJO_Mx-sxEPZL/view?usp=sharing";
	
const mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=peijiezheng2001@gmail.com";

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
	{ name: "Next.js", icon: <i className="devicon-nextjs-plain colored"></i> },
	{ name: "Express", icon: <i className="devicon-express-original colored"></i> },
	{ name: "Django", icon: <i className="devicon-django-plain colored"></i> },
	{ name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain colored"></i> },
];

const techTools = [
	{ name: "Git", icon: <i className="devicon-git-plain colored"></i> },
	{ name: "MongoDB", icon: <i className="devicon-mongodb-plain colored"></i> },
	{ name: "Firebase", icon: <i className="devicon-firebase-plain colored"></i> },
	{ name: "AWS", icon: <i className="devicon-amazonwebservices-plain-wordmark colored"></i> },
	{ name: "Supabase", icon: <i className="devicon-supabase-plain colored"></i> },
	{ name: "Vitest", icon: <i className="devicon-vitest-plain colored"></i> },
];

const projects = [
	{
		name: "Orders Up",
		img: ordersup,
		techStack: ["Expo", "Supabase", "StarXpandSDK"],
		description:
			"A mobile POS app built with Expo for a local restaurant, handling 200+ daily transactions. The app streamlines the order checkout process, supports receipt printing, enables menu customization, and tracks local transaction history — enhancing efficiency and boosting sales.",
	},
	{
		name: "NOAA Recruiting Tool",
		img: noaa,
		techStack: ["Next.js", "React", "TailwindCSS"],
		description:
			"An internal DEI Recruiting Tool for the National Oceanic & Atmospheric Administration (NOAA), enabling NOAA recruiting staff to enhance their target school searches for program candidates and diversify their recruitment efforts across colleges/universities in Washington and California. Features include data display and interactive map.",
	},
	{
		name: "TuneTalk (WIP)",
		img: placeholder,
		techStack: ["React", "Django", "Spotify API"],
		description:
			"Web application designed to create a collaborative music listening experience. Users can create/join rooms to listen to songs and chat with other users who are in the same room.",
	},
	{
		name: "Moments",
		img: moments,
		techStack: ["React", "Firebase"],
		description:
			"A responsive web application that allows users to view and share photos in real time. Users can browse photos/artworks with the option to filter by categories. Additionally, they can search by specific usernames to view their profiles and portfolios.",
		src: "https://github.com/peijie36/Moments",
	},
];

export { languages, projects, resumeLink, techTools, webDev, mailtoLink };
