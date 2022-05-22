import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='py-8 text-center' style={{background:'#212428'}}>
            <h1 className='text-white text-2xl'>&copy; Copyright Protected {new Date().getFullYear()}</h1>
        </footer>
    );
};

export default Footer;