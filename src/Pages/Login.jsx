import { useContext, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: `Welcome back, ${user.displayName || 'User'}!`,
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            });
    }


    return (
        <div className="hero bg-base-200 p-5 w-11/12 mx-auto">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span
                                    className="label-text-alt link link-hover text-blue-500"
                                    onClick={() =>
                                        navigate("/auth/forgot-password", { state: { email: emailRef.current.value }, })
                                    }
                                >
                                    Forgot password?
                                </span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-primary ml-6">Login with google</button>

                        </div>
                    </form>
                    <h3 className="text-center pb-2">Don't have an account? Please <Link className="text-orange-500" to="/auth/register">Register!</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Login;