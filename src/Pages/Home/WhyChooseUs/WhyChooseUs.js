import React from "react";
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us my-12 text-white choose-us-banner">
      <div className="h-auto card  shadow-xl rounded-none text-center text-white">
        <h1 className="text-white text-4xl font-bold">Why Choose Us</h1>
        <div className="grid lg:flex justify-between items-center ">
            <div className="p-2">
                <h1>Expertise & Innovation</h1>
                <p>Experties & Innovation Since 1998 weve been supplying the highest quality tools to a variety of specialist markets.</p>
            </div>
            <div className="p-2">
                <h1>Quality</h1>
                <p>We have developed a culture of continuous improvement. We give gurantee assinst any manufacturing defect.</p>
            </div>
            <div className="p-2">
                <h1>Service & support</h1>
                <p>We have invested heavily to ensure that our products, process and customer service are second to none</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
