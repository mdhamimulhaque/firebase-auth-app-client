import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';

const Main = () => {
    return (
        <>
            <Header />
            <main >
                <section className='main_content_area '>
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Main;