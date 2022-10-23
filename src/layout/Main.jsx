import React from 'react';
import { Outlet } from 'react-router-dom';
import CategoriesNav from '../components/Shared/CategoriesNav/CategoriesNav';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';

const Main = () => {
    return (
        <>
            <Header />
            <main className='grid grid-cols-12 gap-4'>
                <aside className='nav_area col-span-3 bg-red-500'>
                    <CategoriesNav />
                </aside>
                <section className='main_content_area col-span-9 bg-green-600'>
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Main;