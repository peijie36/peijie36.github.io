import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-white">
            {/* Container */}
            <div className="max-w-[1000px] m-auto px-12 flex flex-col justify-center h-5/6">
                <p className="text-black-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-8xl font-bold text-[#646cff]">
                    Peijie Zheng
                </h1>
                <h2 className="text-2xl sm:text-4xl font-bold text-black">
                    Software Developer
                </h2>
                <div className="flex flex-row justify-center mt-3">
                    <a href="https://github.com/peijie36" target="_blank" rel="noreferrer">
                        <FaGithub size={35} className="hover:scale-125 duration-150" />
                    </a>
                    <a href="https://linkedin.com/in/peijiezheng" target="_blank" rel="noreferrer">
                        <FaLinkedin size={35} className="text-[#0072b1] hover:scale-125 duration-150" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
