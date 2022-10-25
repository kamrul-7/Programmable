import React from "react";
import { useContext } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

import './Login.css'
const Login = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

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
            <form className="login-form">
                <input type="email" placeholder="Your Email" />
                <input type="password" placeholder="password" />
                <button>Login</button>
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