import React from "react";
import './WhyChooseUs.css';
import { AiFillLike } from 'react-icons/ai';
import { IoBulbSharp } from 'react-icons/io5';
import { GoTools } from 'react-icons/go';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us my-12 mt-5 text-white choose-us-banner">
      <div className="h-auto card  shadow-xl rounded-none text-center text-white">
        <h1 className="text-white text-4xl font-bold">Why Choose Us</h1>
        <div className="grid lg:flex justify-between items-center ">
            <div className="p-2 my-2">
                <IoBulbSharp className="ml-[50%] text-red-500 text-6xl "></IoBulbSharp>
                <h1 className="mt-2 text-3xl font-semibold">Expertise & Innovation</h1>
                <p className="mt-2">Experties & Innovation Since 1998 weve been supplying the highest quality tools to a variety of specialist markets.</p>
            </div>
            <div className="p-2 my-2 text-center flex flex-col justify-center">
                <AiFillLike  className="ml-[50%] text-red-500 text-6xl "></AiFillLike>
                <h1 className="mt-2 text-3xl font-semibold">Quality</h1>
                <p className="mt-2">We have developed a culture of continuous improvement. We give gurantee assinst any manufacturing defect.</p>
            </div>
            <div className="p-2 my-2 ">
                <GoTools className="ml-[50%] text-red-500 text-6xl "></GoTools>
                <h1 className="mt-2 text-3xl font-semibold">Service & support</h1>
                <p className="mt-2">We have invested heavily to ensure that our products, process and customer service are second to none</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
