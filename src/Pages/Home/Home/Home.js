import React from 'react';
import Trust from '../Trust/Trust';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Trust/>
        </div>
    );
};

export default Home;