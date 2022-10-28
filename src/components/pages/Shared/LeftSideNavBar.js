import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`https://programmable-server.vercel.app/course-categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='lg:shadow-2xl lg:pb-4 lg:pr-4 pb-2 pl-2'>
            <div className='lg:ml-12 lg:p-8'>
                <h1 className='lg:font-bold mt-3 font-semibold text-center lg:text-lg'>SELECT YOUR COURSE</h1>
            </div>
            <div className=''>
                {
                    categories.map(category => <p key={category.id} className=' rounded-md bg-green-400 hover:bg-sky-400 mt-4 lg:bg-sky-400 lg:p-4 lg:ml-8 lg:hover:bg-green-300' >
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div >
    );
};

export default LeftSideNavBar;