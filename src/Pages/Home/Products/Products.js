import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://damp-plateau-02842.herokuapp.com/product`,{
      method:'GET',
      headers:{
        "content-type": "application/json",
        authorization : `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.reverse()));
  }, []);
  return (
    <div className="text-white bg-slate-900 mt-7 py-5">
      <h1 className="text-center mt-5 text-4xl">Our Products</h1>
      <div className="products grid lg:grid-cols-3 px-12 mb-12 gap-5">
        {products.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
