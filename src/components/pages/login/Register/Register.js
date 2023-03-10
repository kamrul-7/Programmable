import { useContext, useState } from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider";
import "../login/Login.css";

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.warn('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                toast.error('Email Already used');
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="login-container m-6 lg:mx-64 shadow-2xl bg-pink-100">
            <div className="login-title">Sign up <SiGnuprivacyguard /></div>
            <form onSubmit={handleSubmit} className="login-form">
                <input name='name' type="text" placeholder="Your name" />
                <input name='photoURL' type="text" placeholder="Photo URLs" />
                <input name='email' type="email" placeholder="Your Email" />
                <input name='password' placeholder="password" />
                <button className="shadow-xl mb-4">Sign up</button>
                <p>
                    Already have an account? <Link to="/login" className="text-blue-700">Login</Link>
                </p>

            </form>
        </div>
    );
};

export default Register;