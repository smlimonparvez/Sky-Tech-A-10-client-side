import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { image_url, title, details,_id } = course;

    return (

        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/course/${_id}/checkout`}>Premium access</Link></button>
                </div>
            </div>
        </div>
          
       
    );
};

export default CourseDetails;