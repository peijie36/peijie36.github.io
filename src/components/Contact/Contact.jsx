import React from "react";

const Contact = () => {
    const mailtoLink =
        "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=peijie36@uw.edu";
    return (
        <div name="contact">
            <h1 className="text-5xl font-semibold mb-3">Get In Touch!</h1>
            <h2 className="text-xl font-normal mb-2">
                Feel free to reach out about anything
            </h2>
            <a href={mailtoLink} target="_blank" rel="noreferrer">
                <button>peijie36@uw.edu</button>
            </a>
        </div>
    );
};

export default Contact;
