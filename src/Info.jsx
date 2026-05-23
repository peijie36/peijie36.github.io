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
		name: "ReceiptSplitter",
		img: placeholder,
		techStack: ["React", "TypeScript", "Vite"],
		description:
			"A local-first web app for splitting receipts when one person paid the bill. Users can add participants, choose the payer, split by assigned items or the whole bill, allocate tax and tip equally or proportionally, save local split snapshots, mark repayments as paid, and copy payment summaries.",
		src: "https://github.com/peijie36/ReceiptSplitter",
	},
	{
		name: "TuneTalk (WIP)",
		img: placeholder,
		techStack: ["Next.js", "Hono", "PostgreSQL"],
		description:
			"A realtime social listening platform for shared music rooms with synced playback, live chat, presence, and Audius-powered queues. The Turborepo app lets users create public or private rooms, join sessions, queue tracks, and chat while a Hono API manages authentication, room lifecycle, playback updates, queue changes, and WebSocket fan-out.",
		src: "https://github.com/peijie36/TuneTalk",
	},
	{
		name: "Orders Up",
		img: ordersup,
		techStack: ["Expo", "React Native", "Supabase"],
		description:
			"A lightweight mobile ordering app for small restaurants that need faster order entry, receipt printing, and menu management without adopting a full POS system. Built with Expo React Native, it supports order totals with tax and card fees, customer and kitchen receipt printing, menu customization, local settings persistence, and Supabase-backed transaction and analytics data.",
		src: "https://github.com/peijie36/OrdersUp",
	},
	{
		name: "NOAA Recruiting Tool",
		img: noaa,
		techStack: ["Next.js", "React", "TailwindCSS"],
		description:
			"An internal DEI Recruiting Tool for the National Oceanic & Atmospheric Administration (NOAA), enabling NOAA recruiting staff to enhance their target school searches for program candidates and diversify their recruitment efforts across colleges/universities in Washington and California. Features include data display and interactive map.",
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
