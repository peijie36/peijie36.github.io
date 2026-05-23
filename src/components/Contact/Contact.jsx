import { AiOutlineMail } from "react-icons/ai";
import { emailAddress, mailtoLink } from "@/src/Info";

/**
 * Functional component representing the contact section.
 * Displays contact information and a button to send an email.
 *
 * @returns {JSX.Element} JSX element representing the contact section
 */
const Contact = () => {
    
    return (
		<section name="contact" className="scroll-mt-24 bg-slate-50 py-20">
			<div className="section-shell text-center">
				<p className="text-sm font-bold uppercase tracking-[0.2em] text-[#646cff]">Contact</p>
				<h2 className="mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">Get In Touch</h2>
				<p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
					Feel free to reach out for inquiries, opportunities, or anything else.
				</p>
				<a
					href={mailtoLink}
					className="mt-8 inline-flex max-w-full flex-row items-center gap-2 rounded-md bg-[#646cff] px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#535bf2] sm:text-lg"
					aria-label={`Email me at ${emailAddress}`}
				>
					<AiOutlineMail size={22} aria-hidden="true" />
					<span className="break-all">{emailAddress}</span>
				</a>
			</div>
		</section>
	);
};

export default Contact;
