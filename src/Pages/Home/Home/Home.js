import React from 'react';
import Products from '../Products/Products';
import Trust from '../Trust/Trust';
import Banner from '../Banner/Banner';
import './Home.css'
import Review from '../Review/Review';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Trust/>    
            <Products/>
            <WhyChooseUs/>
            <Review/>
        </div>
    );
};

export default Home;