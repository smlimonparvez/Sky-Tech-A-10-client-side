import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';

const Courses = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const courses = useLoaderData();
    return (
        <div className='grid lg:grid-cols-12 gap-5 lg:mx-32 my-10 '>
            <div className='lg:col-span-2 col-span-1 p-5'>
                <h3 className='font-medium text-xl mb-3'>All Courses</h3>
                {
                  categories.map(category => <p className='mb-3' key={category.id}><Link to={`/category/${category.id}`} className='hover:text-blue-500 hover:underline'>{category.name}</Link></p>)
                }
            </div>
            <div className='lg:col-span-10 col-span-1 grid lg:grid-cols-2 grid-cols-1 gap-7'>
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;