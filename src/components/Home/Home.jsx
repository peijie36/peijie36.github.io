import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-white">
            {/* Container */}
            <div className="max-w-[1000px] m-auto sm:px-12 flex flex-col items-center justify-center h-5/6">
                <p className="text-lg sm:text-[1.5rem]">Hi, my name is</p>
                <h1 className="text-6xl md:text-[7rem] font-bold text-[#646cff] pt-1 pb-2">
                    Peijie Zheng
                </h1>
                <h2 className="text-3xl sm:text-5xl text-black font-bold pt-1 pb-2">
                    Software Developer
                </h2>
                <div className="flex flex-row items-center justify-center mt-3">
                    <a href="https://github.com/peijie36" target="_blank" rel="noreferrer" className="px-[0.35rem]">
                        <FaGithub size={36} className="hover:scale-125 duration-[125ms]" />
                    </a>
                    <a href="https://linkedin.com/in/peijiezheng" target="_blank" rel="noreferrer" className="px-[0.35rem]">
                        <FaLinkedin size={36} className="text-[#0072b1] hover:scale-125 duration-[125ms]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
