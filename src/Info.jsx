import moments from "@/assets/moments.jpg";
import placeholder from "@/assets/placeholder.jpg";
import noaa from "@/assets/noaa.png";
import ordersup from "@/assets/ordersup.jpg";
import { FaDatabase, FaFireAlt, FaGitAlt, FaPython, FaReact } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import {
	SiDocker,
	SiExpress,
	SiGnubash,
	SiGithubactions,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiPlaywright,
	SiPostgresql,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiVitest,
} from "react-icons/si";

const resumeLink =
	"https://drive.google.com/file/d/1XP4VXQPocLhEYEiukjMLJO_Mx-sxEPZL/view?usp=sharing";
	
const emailAddress = "peijiezheng2001@gmail.com";
const mailtoLink = `mailto:${emailAddress}`;

const languages = [
	{ name: "TypeScript", Icon: SiTypescript, iconClass: "text-[#3178c6]" },
	{ name: "JavaScript", Icon: SiJavascript, iconClass: "text-[#f7df1e]" },
	{ name: "Python", Icon: FaPython, iconClass: "text-[#3776ab]" },
	{ name: "SQL", Icon: FaDatabase, iconClass: "text-[#4169e1]" },
	{ name: "Bash", Icon: SiGnubash, iconClass: "text-[#4eaa25]" },
];

const frontend = [
	{ name: "React", Icon: FaReact, iconClass: "text-[#61dafb]" },
	{ name: "Next.js", Icon: SiNextdotjs, iconClass: "text-black" },
	{ name: "React Native", Icon: FaReact, iconClass: "text-[#61dafb]" },
	{ name: "Zustand", Icon: GiBearFace, iconClass: "text-[#443e38]" },
	{ name: "Tailwind CSS", Icon: SiTailwindcss, iconClass: "text-[#06b6d4]" },
];

const backend = [
	{ name: "Node.js", Icon: SiNodedotjs, iconClass: "text-[#5fa04e]" },
	{ name: "Hono", Icon: FaFireAlt, iconClass: "text-[#e36002]" },
	{ name: "Express", Icon: SiExpress, iconClass: "text-black" },
	{ name: "PostgreSQL", Icon: SiPostgresql, iconClass: "text-[#4169e1]" },
	{ name: "Supabase", Icon: SiSupabase, iconClass: "text-[#3ecf8e]" },
];

const tools = [
	{ name: "Git", Icon: FaGitAlt, iconClass: "text-[#f05032]" },
	{ name: "GitHub Actions", Icon: SiGithubactions, iconClass: "text-[#2088ff]" },
	{ name: "Docker", Icon: SiDocker, iconClass: "text-[#2496ed]" },
	{ name: "Vitest", Icon: SiVitest, iconClass: "text-[#6e9f18]" },
	{ name: "Playwright", Icon: SiPlaywright, iconClass: "text-[#2ead33]" },
];

const skillSections = [
	{ title: "Languages", items: languages },
	{ title: "Frontend", items: frontend },
	{ title: "Backend", items: backend },
	{ title: "Tools", items: tools },
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

export { backend, emailAddress, frontend, languages, mailtoLink, projects, resumeLink, skillSections, tools };
