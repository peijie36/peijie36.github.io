import { AiOutlineMail } from "react-icons/ai";

/**
 * Functional component representing the contact section.
 * Displays contact information and a button to send an email.
 *
 * @returns {JSX.Element} JSX element representing the contact section
 */
const Contact = () => {
    const mailtoLink =
        "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=peijie36@uw.edu";
    return (
        <section name="contact" className="sm:pt-16 pb-7">
            <h1 className="text-5xl font-semibold mb-2">Get In Touch!</h1>
            <h2 className="text-xl font-normal mb-3">
                Feel free to reach out for inquiries, opportunities, or anything
                else
            </h2>
            <a href={mailtoLink} target="_blank" rel="noreferrer">
                <button
                    className="text-lg font-semibold border-2 border-[#646cff] rounded-full py-2 px-5 hover:scale-105 hover:text-[#646cff] duration-100"
                    aria-label="Email me at peijie36@uw.edu"
                >
                    <div className="flex flex-row items-start">
                        <AiOutlineMail size={22} className="m-1" />
                        peijie36@uw.edu
                    </div>
                </button>
            </a>
        </section>
    );
};

export default Contact;
