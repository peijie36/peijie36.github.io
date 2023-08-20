import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="flex flex-col bg-white">
            <nav className="flex justify-around py-3 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
                <div className="flex items-center">
                    <h3 className="text-2xl font-medium text-blue-500">Logo</h3>
                </div>
                <div className="items-center hidden space-x-8 lg:flex">
                    <a className="nav-item">Home</a>
                    <a className="nav-item">Projects</a>
                    <a className="nav-item">Skills</a>
                    <a className="nav-item">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
