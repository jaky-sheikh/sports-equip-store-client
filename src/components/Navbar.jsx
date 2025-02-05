import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 mx-auto py-4">
            <div><h3 className="text-xl text-orange-600">EquiSports</h3></div>
            <div className="nav space-x-3 font-semibold">
                <Link to="/">Home</Link>
                <Link to="/about">All Sports Equipment</Link>
                <Link to="/service">Add Equipment</Link>
                <Link to="/profile">My Equipment List</Link>
            </div>
            <div>
                <button className="btn btn-accent">Login</button>
                <button className="btn btn-accent ml-2">Register</button>
            </div>
        </div>
    );
};

export default Navbar;