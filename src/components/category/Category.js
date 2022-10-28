import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryCart from '../pages/CourseSummeryCart';


const Category = () => {
    const categoryCourse = useLoaderData();

    return (
        <div>
            <h2 className='font-bold lg:text-2xl mt-3 text-center'>This Category has {categoryCourse.length} Courses</h2>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-12 m-5 lg:m-10'>
                {
                    categoryCourse.map(course =>
                        <CourseSummeryCart key={course.id}
                            course={course}></CourseSummeryCart>
                    )
                }
            </div>
        </div>
    );
};

export default Category;