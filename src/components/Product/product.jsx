import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { title, image_url, details, _id } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl my-4">
            <figure><img src={image_url} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 250)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/product-details/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;