import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 mx-auto py-4">
            <div><h3 className="text-xl text-orange-600">EquiSports</h3></div>
            <div className="nav space-x-3 font-semibold">
                <Link to="/">Home</Link>
                <Link to="/about">All Sports Equipment</Link>
                <Link to="/service">Add Equipment</Link>
                <Link to="/profile">My Equipment List</Link>
            </div>
            <div className="flex">
                {user && user?.email ? (
                    <div>
                        <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                        <p>{user.displayName}</p>
                    </div>
                ) : (
                    <p></p>
                )}
                {
                    user && user?.email ? (
                        <button onClick={logOut} className="btn btn-neutral rounded-none">
                            Log-Out
                        </button>
                    ) : (<Link to="/auth/login"><button className="btn btn-accent">Login</button></Link>

                    )}

                <Link className="ml-2" to="/auth/register"><button className="btn btn-accent">Register</button></Link>


            </div>
        </div>
    );
};

export default Navbar;