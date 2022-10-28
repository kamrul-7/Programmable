import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div>
            <div>
                <img className='mt-4' src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" alt="" />
                <h1 className='text-3xl lg:text-5xl font-bold lg:font-extrabold mt-6 lg:mt-20 ml-8 lg:ml-16 text-sky-600'>Learn without <br />
                    limits</h1>
                <p className='ml-8 mt-4 lg:text-xl font-medium lg:mt-12 lg:ml-16'>Start, switch, or advance your career with more than 5,200 <br /> courses, Professional Certificates, and degrees from world-class <br /> universities and companies.</p>
                <div className='ml-8 mt-4'>
                    <Link to="/register"><button className="btn btn-success text-white text-2xl ml-8 lg:mt-6 mb-4 lg:ml-24 mt-4 lg:px-12 hover:btn-info">Join Us</button></Link>

                </div>
            </div>
        </div>
    );
};

export default HomePage;