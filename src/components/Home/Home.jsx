import React from 'react'

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-white">
            {/* Container */}
            <div className="max-w-[1000px] m-auto px-12 flex flex-col justify-center h-5/6">
                <p className="text-black-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-black">
                    Peijie Zheng
                </h1>
                <h2 className="text-3xl sm:text-7xl font-bold text-[#8892b0]">
                    Full Stack Developer
                </h2>
            </div>
        </div>
    );
};

export default Home;
