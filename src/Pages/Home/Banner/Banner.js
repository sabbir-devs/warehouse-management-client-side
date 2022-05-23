import React from "react";
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner px-12">
      <div className="w-full lg:w-2/4 to-transparent py-24">
        <h1 className="text-4xl font-bold text-white">QUALITY IN</h1>
        <h1 className="text-5xl font-bold mt-5 red">EVERYTHING</h1>
        <p className="text-2xl text-white font-semibold mt-7">
          OUR PRODUCTS ARE BUILT TO PERFORM RELIABLY IN THE MOST DEMANDING
          APPLICATIONS.
        </p>
        <p className="text-1xl text-white mt-5">
          Every product we develop and every solution we design is manufactured
          to the highest levels of quality and thoroughly tested in real-life
          conditions.
        </p>
        <button className="about-us-btn mt-7">About Us</button>
      </div>
    </div>
  );
};

export default Banner;
