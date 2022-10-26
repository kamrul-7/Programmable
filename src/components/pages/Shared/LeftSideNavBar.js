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
        <div>
            <div className='text-start mr-6 lg:ml-12 shadow-lg p-8 hover:shadow-2xl'>
                <h1 className='ml-8 font-bold text-lg'>SELECT YOUR COURSE</h1>

                {
                    categories.map(category => <p key={category.id} className='mt-4   text-white hover:text-orange-700 gap-4 bg-emerald-400 p-3 rounded-lg' >
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNavBar;