import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/course-categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='lg:shadow-2xl'>
            <div className='text-start lg:ml-12 lg:p-8'>
                <h1 className='font-bold text-center lg:text-lg'>SELECT YOUR COURSE</h1>
            </div>
            <div className=''>
                {
                    categories.map(category => <p key={category.id} className='px-1 mx-1 rounded-md bg-green-400 hover:bg-sky-400 mt-4 lg:bg-sky-400 lg:p-4 lg:ml-8 lg:hover:bg-green-300' >
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div >
    );
};

export default LeftSideNavBar;