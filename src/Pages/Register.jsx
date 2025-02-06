import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {

    const { createNewUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUpperCase || !hasLowerCase || !isValidLength) {
            setErrorMessage(
                "Password must contain at least one upper one lowercase letter, and at least 6 characters."
            );
            return;
        }

        setErrorMessage("");

        // console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result.user);
                navigate('/');
            })
            .catch(error => console.log('ERROR', error.message))
    }

    return (
        <div className="hero bg-base-200 w-11/12 mx-auto p-5">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-url</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo-url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                            <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-2 top-7">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>
                        {errorMessage && (
                            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
                        )}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-primary ml-6">Login with Google</button>
                        </div>
                    </form>
                    <h3 className="text-center pb-2">Already have an account? Please <Link className="text-orange-500" to="/auth/login">Login</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Register;