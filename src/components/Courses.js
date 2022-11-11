import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-5 mx-40 my-8'>
            <div className='col-span-1'>
                <h3 className='font-medium text-xl mb-3'>All Courses</h3>
                {
                  categories.map(category => <p className='mb-3' key={category.id}><Link to={`/category/${category.id}`} className='hover:text-blue-500 hover:underline'>{category.name}</Link></p>)
                }
            </div>
            <div className='col-span-3'>
                {
                    courses.map(course => <h3>{course.title}</h3>)
                }
            </div>
        </div>
    );
};

export default Courses;