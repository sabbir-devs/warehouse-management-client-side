import React from 'react';
import './AboutUs.css';
import aboutUsImg from '../../../asets/about-us.png';

const AboutUs = () => {
    return (
        <div className='about-us grid lg:flex items-center justify-center px-12 py-5 mt-6 bg-slate-600 text-white'>
            <div className='lg:w-1/2 pl-5'>
                <h1 className='text-center text-4xl mb-3'>About Us</h1>
                <p>With more than 23 years in the tools business, Agile Magnetics, a Standex tools company, has set the standard for manufacturing custom-designed tools at the highest levels of quality and value. Our highly experienced team has led the industry in manufacturing quality high frequency power assemblies,  markings when required. Our highly qualified staff of engineers work together in our state-of-the-art 40,000 square foot ITAR manufacturing center in Concord, NH to ensure that every custom design project is manufactured to our customers’ exact specifications and meet virtually any specification. To ensure we deliver only the highest quality products to our customers, every product is computer tested prior to delivery.</p>
                <button className='btn btn-outline rounded-3xl px-6 btn-sm mt-4 text-white'>See More</button>
            </div>
            <div className='lg:w-1/2 mt-4 lg:mt-0 pl-5'>
                <img className='rounded' src={aboutUsImg} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;