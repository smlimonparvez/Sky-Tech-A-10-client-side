import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const CourseDetails = () => {
    const course = useLoaderData();
    const { image_url, title, details, _id } = course;

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-justify'>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/course/${_id}/checkout`} className="flex">Get Access<FaArrowCircleRight className='ml-2'/> </Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;