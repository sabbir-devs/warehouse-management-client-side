import React from 'react';
import './NotFound.css';
import NotFoundImg from '../../../asets/page-not-found.jpg';

const NotFound = () => {
    return (
        <section className='not-found h-[100vh] grid items-center justify-center'>
            <img src={NotFoundImg} alt="" className='max-w-sm lg:max-w-lg rounded shadow-2xl' />
        </section>
    );
};

export default NotFound;