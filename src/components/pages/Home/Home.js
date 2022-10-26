import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2 className='font-bold text-2xl mt-3'>Total Course {course.length}</h2>
        </div>
    );
};

export default Home;