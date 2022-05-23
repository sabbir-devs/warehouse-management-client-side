import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SeeDetails.css";

const SeeDetails = () => {
  const { id } = useParams();
  const [detailProduct, setDetailProdudt] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/seeDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailProdudt(data));
  }, [id, detailProduct]);

  return (
    <div className="see-details p-12">
      <div className="hero min-h-screen bg-base-200 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse p-5">
          <img
            src={detailProduct.img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl">{detailProduct.name}</h1>
            <p className="my-4">{detailProduct.discription}</p>
            <h2 className="text-2xl">Price: ${detailProduct.price}</h2>
            <h3 className="text-xl my-2">Minimum: {detailProduct.minimum}</h3>
            <h3 className="text-xl ">Available: {detailProduct.available}</h3>
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs"
              />
              <button class="btn ml-2">Add</button>
            </div>
            <button className="btn btn-outline mt-5">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
