import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='my-5 text-center'>

            {
                categories.map(category => <Link
                    key={category.id}
                    className='my-3 px-5 text-blue-500 underline' to={`/category/${category.id}`}>
                    {category.name}
                </Link>)
            }
        </div >
    );
};

export default CategoriesNav;