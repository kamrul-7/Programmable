import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar shadow-lg bg-sky-200 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32">
                        <li><a className='font-bold'><Link to='/course'>Courses</Link></a></li>
                        <li><a className='font-bold'><Link to='/blog'>Blog</Link></a></li>
                        <li><a className='font-bold'><Link to='/faq'>FAQ</Link></a></li>
                        <li><a className='font-bold'><Link to='/dark'>Dark Mode</Link></a></li>
                        <li><a className='font-bold'><Link to='/login'>Login</Link></a></li>
                        <li><a className='font-bold'><Link to='/register'>Sign up</Link></a></li>
                        {
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <button onClick={handleLogOut} className="btn btn-xs mr-2 ml-3">Log Out</button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl md:text-2xl lg:text-3xl text-sky-700 font-bold lg:font-extrabold"><Link to='/'>Programmable</Link></a>
                <img width={100} src="https://www.thecumbrialep.co.uk/resources/uploads/pages/skills/Skills_For_Life_Logo_Green_RGB.png" alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a className='font-bold'><Link to='/home'>Courses</Link></a></li>
                    <li><a className='font-bold'><Link to='/blog'>Blog</Link></a></li>
                    <li><a className='font-bold'><Link to='/faq'>FAQ</Link></a></li>
                    <>
                        {
                            user?.uid ?
                                <>
                                    <div className='d-flex justify-around'>
                                        <span>{user?.displayName}</span>
                                        <button onClick={handleLogOut} className="btn btn-xs mr-2 ml-4 mt-3">Log Out</button>
                                    </div>
                                </>
                                :
                                <>
                                    <Link to='/login' className='mr-3 ml-3 mt-2'>Login</Link>
                                    <Link to='/register' className='mr-3 ml-3 mt-2'>Register</Link>
                                </>
                        }


                    </>
                    <Link to="/profile">
                        {user?.photoURL ?
                            <img style={{ height: '30px' }} src={user?.photoURL} alt="" className="rounded-xl mt-3 mr-4 ml-3" />

                            : <FaUser className='mt-3 mr-4 ml-3'></FaUser>
                        }
                    </Link>
                </ul>
            </div>

        </div>
    );
};

export default Header;