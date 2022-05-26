import React from "react";
import myImg from '../../../asets/me.jpeg';

const MyPortfolio = () => {
  return (
    <div className="my-portfolio text-white bg-base-300 px-12 my-12 grid items-center">
      <img className="w-56 h-72 my-5 rounded-md" src={myImg} alt="" />
      <div><h1 className="mt-5 text-xl">Name: <span className="text-green-500">MD Sabbir</span></h1>
      <h1 className="mt-5 text-xl">Email: <span className="text-green-500">sabbirhosan370@gmail.com</span></h1>
      <h1 className="mt-5 text-xl">Education: <span className="text-green-500">SSC pass on 2021 from Satsang Tapoban High School</span></h1>
      <h1 className="mt-5 text-xl">My Skills As a Web Developer: <span className="text-green-500">Html, Css, Bootstrap, Tailwind, Javascript, React js, Express js, Mongodb</span></h1>
      <div className="mt-5">
        <h1 className="text-xl">My Some Projects</h1>
        <p className="text-blue-500 mt-2">https://whimsical-puppy-d11b27.netlify.app/</p>
        <p className="text-blue-500 mt-2">https://the-bodycoach-cf175.web.app/</p>
        <p className="text-blue-500 mt-2">https://warehouse-68b1a.web.app/</p>
      </div></div>
    </div>
  );
};

export default MyPortfolio;
