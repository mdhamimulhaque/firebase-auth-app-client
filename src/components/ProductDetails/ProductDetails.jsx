import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto my-20">
            <figure><img src={product?.image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product?.title}</h2>
                <p>{product?.details}</p>
                <div className="card-actions justify-end">
                    <Link to="/products"><button className="btn btn-primary">Back to category</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;