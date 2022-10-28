import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl lg:text-5xl font-bold lg:font-extrabold mt-12 lg:mt-32 ml-8 lg:ml-16 text-sky-600'>Learn without <br />
                    limits</h1>
                <p className='ml-8 mt-4 lg:text-xl font-medium lg:mt-12 lg:ml-16'>Start, switch, or advance your career with more than 5,200 <br /> courses, Professional Certificates, and degrees from world-class <br /> universities and companies.</p>
                <div className='ml-8 mt-6'>
                    <Link to="/register"><button className="btn btn-success text-white text-2xl ml-8 mt-4 lg:ml-16 lg:mt-12 lg:px-12 hover:btn-info">Join Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;