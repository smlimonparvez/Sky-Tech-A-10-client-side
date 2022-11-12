import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const {title, _id, price} = course
    return (
        <div className='shadow-lg mx-auto m-10 w-2/4 p-10 bg-slate-100 rounded'>
            <h2 className='mb-2'><span className='font-medium'>Course Name:</span> {title}</h2>
            <p className='mb-2'><span className='font-medium'>Course ID:</span> {_id}</p>
            <p className='mb-2'><span className='font-medium'>Course Price:</span> {price}</p>
            <p className='mb-2'><span className='font-medium'>Total Course Time:</span> {price}</p>
            <span><hr className='w-3/4 mx-auto my-4'/></span>
            <h3 className='font-medium text-center text-lg'><span>Description</span></h3>
            <p className='text-justify'>Thanks for buying this course. It's contain 40 video. To finish this course you need total almost 20 hours. Keep patient, keep learning and fulfil your dream.</p>
        </div>
    );
};

export default CheckOut;