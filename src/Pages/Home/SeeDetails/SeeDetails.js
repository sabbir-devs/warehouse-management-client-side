import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SeeDetails.css";

const SeeDetails = () => {
  const { id } = useParams();
  const [detailProduct, setDetailProdudt] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/seeDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailProdudt(data));
  }, [id, detailProduct]);
  console.log(detailProduct);
  return (
    <div className="see-details">
      <h1>details showed</h1>
      <h1>{detailProduct.name}</h1>
    </div>
  );
};

export default SeeDetails;
