import React from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({product, refetch}) => {
    const { _id, name, img, discription, minimum, price, available } = product;

    const handleDeleteProduct = (id) => {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
        headers:{
          'content-type' : 'application/json',
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      })
        .then((res) => res.json())
        .then((resData) => {
          toast.success("product delete successful");
          refetch()
          console.log(resData)
        });
    }
    return (
        <div className="product cardbg-base-100 shadow-xl w-full text-white">
      <div className="card-body">
        <img className="h-52" src={img} alt="" />
        <h1 className="text-2xl">{name}</h1>
        <h2>Price: ${price}</h2>
        <p>Minimum Order: {minimum}</p>
        <p>Available: {available}</p>
        <p title={discription}>{discription.slice(0, 250) + '...'}</p>
        <button onClick={() => handleDeleteProduct(_id)} className="btn btn-outline">Delete</button>
      </div>
    </div>
    );
};

export default ManageProduct;