import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';

const CourseSummeryCart = ({ course }) => {
    const handelToast = () => {
        toast.success('Check Layout page!', { autoClose: 500 })
    }

    const { id, title, details, total_view, rating, image_url, price } = course;

    return (
        <div className="card card-compact bg-base-100 shadow-xl bg-#f5dfdf-200">
            <figure><img className='m-2' src={image_url} alt="" /></figure>
            <div className="card-body text-start">
                <div className='flex'>

                    <FaStar className='text-yellow-400 mr-3 lg:mr-6 mt-1' />
                    <p>{rating.number}</p>
                    <div className='ml-56 flex '> <FaEye className='mt-1 mr-4' />
                        <p >{total_view}</p>
                    </div>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-blue-500'>$ {price}</p>
                {
                    details.length > 250 ?
                        <>{details.slice(0, 250) + '...'}  </>
                        :
                        details
                }
                <div className="">
                    <Link to={`/course/${id}`}> <button onClick={handelToast} className="btn btn-block">Get Premium</button></Link>
                    <button className="btn btn-block mt-4">Download Pdf</button>
                </div>
            </div>
        </div>
    );
};

export default CourseSummeryCart;