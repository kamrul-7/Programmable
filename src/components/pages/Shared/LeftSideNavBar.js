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
            <h1>All Categories {categories.length}</h1>
            <div className='text-start ml-12'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNavBar;