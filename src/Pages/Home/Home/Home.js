import React from 'react';
import Products from '../Products/Products';
import Trust from '../Trust/Trust';
import Banner from '../Banner/Banner';
import './Home.css'
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Trust/>    
            <Products/>
            <Review/>
        </div>
    );
};

export default Home;