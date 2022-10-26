import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryCart from '../CourseSummeryCart';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2 className='font-bold text-2xl mt-3'>Total Course {courses.length}</h2>
            <div className='grid lg:grid-cols-2 gap-4 lg:gap-12 lg:m-12'>

                {
                    courses.map(course => <p ><CourseSummeryCart
                        key={course.id}
                        course={course}
                    >
                    </CourseSummeryCart></p>)
                }

            </div>
        </div>
    );
};

export default Home;