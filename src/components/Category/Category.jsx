import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import CategoriesNav from '../Shared/CategoriesNav/CategoriesNav';

const Category = () => {
    const products = useLoaderData()

    return (
        <>
            <nav className='text-center'>
                <CategoriesNav />
            </nav>
            <div className="category_products_wrapper flex gap-4 flex-wrap justify-center">
                {
                    products.map(product => <Product product={product} key={product._id} />)
                }
            </div>
        </>
    );
};

export default Category;