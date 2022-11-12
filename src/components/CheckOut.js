import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const {title, _id, price} = course
    return (
        <div>
            <h3>Product: {title}</h3>
            <p>Product id: {_id}</p>
            <p>Product Price: {price}</p>
        </div>
    );
};

export default CheckOut;