import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const course = useLoaderData();

    return (
        <div>
            <h2 className='font-bold text-2xl mt-3'>This Category has {course.length} Courses</h2>
        </div>
    );
};

export default Category;