import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../../../firebase.init";
import Loading from "../Loading/Loading";
import ManageProduct from "../ManageProduct/ManageProduct";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [user, loading] = useAuthState(auth)
  const { data: products, isLoading, refetch } = useQuery(["product", user], () =>
    fetch("http://localhost:5000/product",{
      method:'GET',
      headers:{
        "content-type": "application/json",
        authorization : `Bearer ${localStorage.getItem('accessToken')}`,
      }
    }).then((res) => res.json())
  );
  if(isLoading || loading){
    return <Loading></Loading>
  }
  console.log(products)
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
