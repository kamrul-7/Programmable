import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaEye } from "react-icons/fa";
import { jsPDF } from "jspdf";
const Course = () => {
    const courses = useLoaderData();
    const { id, title, details, total_view, rating, image_url, price } = courses;
    console.log(courses)
    const genereatePdf = () => {
        const doc = new jsPDF('landscape', 'px', 'a4', 'false')
        doc.addImage(image_url, 'jpeg', 65, 20, 500, 400);
        doc.addPage()
        doc.addFont('Helvertica', 'bold');
        doc.text(60, 60, title)
        doc.text(60, 80, `price`)
        doc.text(60, 100, details)
        doc.save('a.pdf')
    }

    return (
        <div className="card card-compact m-12 lg:mx-32 bg-base-100 shadow-xl bg-#f5dfdf-200">
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
                <p>{details}</p>
                <div className="">
                    <Link to={'/'} ><button className="btn btn-block"> Go To Home</button></Link>
                    <button onClick={genereatePdf} className="btn btn-block mt-4">Download Pdf</button>
                </div>
            </div >
        </div >
    );
};

export default Course;