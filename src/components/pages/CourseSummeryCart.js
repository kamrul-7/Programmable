import React from 'react';
import { Link } from 'react-router-dom';

const CourseSummeryCart = ({ course }) => {

    const { id, title, details, total_view, image_url } = course;
    return (
        <div className="card card-compact bg-base-100 shadow-xl bg-#f5dfdf-200">
            <figure><img className='m-2' src={image_url} alt="" /></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 250 ?
                        <>{details.slice(0, 250) + '...'} <Link to={`/course/${id}`}>Read More</Link> </>
                        :
                        details
                }
                <div className="">
                    <button className="btn btn-block">Get Premium</button>
                    <button className="btn btn-block mt-4">Download Pdf</button>
                </div>
            </div>
        </div>
    );
};

export default CourseSummeryCart;