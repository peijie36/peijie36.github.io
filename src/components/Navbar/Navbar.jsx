import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between m-auto py-3 bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 left-0 right-0 z-10">
                <div className="items-center">
                    <h3 className="text-3xl font-medium text-blue-500 px-7">
                        PJ
                    </h3>
                </div>
                <div className="items-center hidden space-x-10 lg:flex px-7">
                    <a className="nav-item">Home</a>
                    <a className="nav-item">Projects</a>
                    <a className="nav-item">Skills</a>
                    <a className="nav-item">Contact</a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
