import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const CourseCard = ({ course }) => {
    const { _id, title, image_url, details } = course;
    return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-justify'>{
                        details.length > 200 ? <p> {details.slice(0, 200) + '...'}<Link className='hover:underline text-blue-600' to={`/course/${_id}`}>Read More</Link></p> :
                            <p>{details}</p>
                    }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/course/${_id}`} className='flex'>Course Details<FaArrowCircleRight className='ml-2'/></Link></button>
                    </div>
                </div>
            </div>
    );
};

export default CourseCard;