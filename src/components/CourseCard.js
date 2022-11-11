import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const{_id, title, image_url, details} = course;
    return (
       <div className='grid grid-cols-3 gap-4'>
         <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{
                    details.length > 200 ? <p> {details.slice (0, 200) + '...'}<Link>Read More</Link></p> : 
                    <p>{details}</p>
                    }</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default CourseCard;