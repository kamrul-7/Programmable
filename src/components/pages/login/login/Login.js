import React, { useState } from "react";
import { useContext } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

import './Login.css'
import { toast } from "react-toastify";
const Login = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    toast.success('Login Successful')
                    navigate(from, { replace: true });
                }

                else {
                    toast.error('Your Email is not Verified. Please Verified')
                }
            })

            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login Successful')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));


    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login Successful')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="login-container m-6 lg:mx-64 shadow-2xl bg-pink-100">
            <div className="login-title">
                Login
                <BiLogInCircle />
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <input name='email' type="email" placeholder="Your Email" />
                <input name='password' type="password" placeholder="password" />
                <button>Login</button>
                <div className="text-red-700 ">
                    {error}
                </div>
                <p>
                    Don't have an account? <Link to="/register" className="text-blue-700">Sign up first</Link>
                </p>
            </form>


            <button className="shadow-xl" onClick={handleGoogleSignIn}>Google</button>
            <button className="shadow-xl" onClick={handleGithubSignIn}>Github</button>
        </div>


    );
};

export default Login;