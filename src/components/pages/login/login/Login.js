import React, { useState } from "react";
import { useContext } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

import './Login.css'
import { toast } from "react-toastify";
const Login = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider
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
                navigate('/')
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
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
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="login-container">
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
                <p className="mb-4 mt-2">
                    Forget password?
                </p>
                <p>
                    Don't have an account? <Link to="/register" className="text-blue-700">Sign up first</Link>
                </p>
            </form>

            <button onClick={handleGoogleSignIn}>Google</button>

        </div>
    );
};

export default Login;