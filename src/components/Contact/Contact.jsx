const Contact = () => {
    const mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=peijie36@uw.edu"
    return (
        <div name="contact" className="sm:pt-24">
            <h1 className="text-5xl font-semibold mb-3">Get In Touch!</h1>
            <h2 className="text-xl font-normal mb-2">
                Feel free to reach out about anything
            </h2>
            <a href={mailtoLink} target="_blank" rel="noreferrer">
                <button className="text-lg font-semibold border-3 rounded-full py-2 px-7 hover:scale-105 hover:text-[#646cff]">
                    peijie36@uw.edu
                </button>
            </a>
        </div>
    );
};

export default Contact;
