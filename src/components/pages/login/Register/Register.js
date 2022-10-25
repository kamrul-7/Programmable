import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import "../login/Login.css";

const Register = () => {
    return (
        <div className="login-container">
            <div className="login-title">Sign up <SiGnuprivacyguard /></div>
            <form className="login-form">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your Email" />
                <input placeholder="password" />

                <input type="password" placeholder="confirm password" />

                <button>Sign up</button>
                <p>
                    Already have an account? <Link to="/login" className="text-blue-700">Login</Link>
                </p>

            </form>
        </div>
    );
};

export default Register;