import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="navbar shadow-lg bg-sky-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32">
                        <li><a className='font-bold'><Link to='/course'>Courses</Link></a></li>
                        <li><a className='font-bold'><Link to='/blog'>Blog</Link></a></li>
                        <li><a className='font-bold'><Link to='/faq'>FAQ</Link></a></li>
                        <li><a className='font-bold'><Link to='/login'>Login</Link></a></li>
                        <li><a className='font-bold'><Link to='/register'>Sign up</Link></a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl md:text-2xl lg:text-3xl text-sky-700 font-bold lg:font-extrabold"><Link to='/'>Programmable</Link></a>
                <img width={100} src="https://www.thecumbrialep.co.uk/resources/uploads/pages/skills/Skills_For_Life_Logo_Green_RGB.png" alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a className='font-bold'><Link to='/course'>Courses</Link></a></li>
                    <li><a className='font-bold'><Link to='/blog'>Blog</Link></a></li>
                    <li><a className='font-bold'><Link to='/faq'>FAQ</Link></a></li>
                    <li><a className='font-bold'><Link to='/login'>Login</Link></a></li>
                    <li><a className='font-bold'><Link to='/register'>Sign up</Link></a></li>
                    <li><a className='font-bold'>{user?.displayName}</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;