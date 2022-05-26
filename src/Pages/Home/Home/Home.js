import React from 'react';
import Products from '../Products/Products';
import Trust from '../Trust/Trust';
import Banner from '../Banner/Banner';
import './Home.css'
import Review from '../Review/Review';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div className='home bg-slate-600'>
            <Banner/>
            <Trust/>
            <Products/>
            <WhyChooseUs/>
            <AboutUs/>
            <Review/>
        </div>
    );
};

export default Home;