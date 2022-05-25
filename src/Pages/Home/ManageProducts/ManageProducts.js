import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import ManageProduct from "../ManageProduct/ManageProduct";
import "./ManageProducts.css";

const ManageProducts = () => {
  const { data: products, isLoading, refetch } = useQuery("product", () =>
    fetch("http://localhost:5000/product").then((res) => res.json())
  );
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="manage-order">
      <div className="products grid lg:grid-cols-2 px-12 mb-12 gap-5">
        {products?.map((product) => (
          <ManageProduct product={product} refetch={refetch} key={product._id}></ManageProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
