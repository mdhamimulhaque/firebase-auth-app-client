import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import CategoriesNav from '../Shared/CategoriesNav/CategoriesNav';

const Products = () => {
    const products = useLoaderData()
    return (
        <section className="category_wrapper">
            <nav className="category_nav">
                <CategoriesNav />
            </nav>
            <div className='flex gap-4 flex-wrap justify-center'>
                {
                    products.map(product => <Product key={product._id} product={product} />)
                }
            </div>
        </section>
    );
};

export default Products;