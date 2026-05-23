import moments from "@/assets/moments.jpg";
import placeholder from "@/assets/placeholder.jpg";
import noaa from "@/assets/noaa.png";
import ordersup from "@/assets/ordersup.jpg";
import { FaAws, FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import {
	SiDjango,
	SiExpress,
	SiFirebase,
	SiGnubash,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiSupabase,
	SiTailwindcss,
	SiVitest,
} from "react-icons/si";

const resumeLink =
	"https://drive.google.com/file/d/1XP4VXQPocLhEYEiukjMLJO_Mx-sxEPZL/view?usp=sharing";
	
const emailAddress = "peijiezheng2001@gmail.com";
const mailtoLink = `mailto:${emailAddress}`;

const languages = [
	{ name: "Java", Icon: FaJava, iconClass: "text-[#f89820]" },
	{ name: "JavaScript", Icon: SiJavascript, iconClass: "text-[#f7df1e]" },
	{ name: "Python", Icon: FaPython, iconClass: "text-[#3776ab]" },
	{ name: "HTML", Icon: FaHtml5, iconClass: "text-[#e34f26]" },
	{ name: "CSS", Icon: FaCss3Alt, iconClass: "text-[#1572b6]" },
	{ name: "Bash", Icon: SiGnubash, iconClass: "text-[#4eaa25]" },
];

const webDev = [
	{ name: "JavaScript", Icon: SiJavascript, iconClass: "text-[#f7df1e]" },
	{ name: "React", Icon: FaReact, iconClass: "text-[#61dafb]" },
	{ name: "Next.js", Icon: SiNextdotjs, iconClass: "text-black" },
	{ name: "Express", Icon: SiExpress, iconClass: "text-black" },
	{ name: "Django", Icon: SiDjango, iconClass: "text-[#092e20]" },
	{ name: "Tailwind CSS", Icon: SiTailwindcss, iconClass: "text-[#06b6d4]" },
];

const techTools = [
	{ name: "Git", Icon: FaGitAlt, iconClass: "text-[#f05032]" },
	{ name: "MongoDB", Icon: SiMongodb, iconClass: "text-[#47a248]" },
	{ name: "Firebase", Icon: SiFirebase, iconClass: "text-[#ffca28]" },
	{ name: "AWS", Icon: FaAws, iconClass: "text-[#ff9900]" },
	{ name: "Supabase", Icon: SiSupabase, iconClass: "text-[#3ecf8e]" },
	{ name: "Vitest", Icon: SiVitest, iconClass: "text-[#6e9f18]" },
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

export { emailAddress, languages, projects, resumeLink, techTools, webDev, mailtoLink };
