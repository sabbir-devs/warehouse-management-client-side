import React from 'react';
import Products from '../Products/Products';
import Trust from '../Trust/Trust';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Trust/>    
            <Products/>
        </div>
    );
};

export default Home;