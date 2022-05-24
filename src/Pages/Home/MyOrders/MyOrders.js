import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../../../firebase.init";
import Loading from "../Loading/Loading";
import "./MyOrders.css";

const MyOrders = () => {
  const [idForDelete, setIdForDelete] = useState(0);
  const { data, isLoading, refetch } = useQuery("myOrders", () =>
    fetch("http://localhost:5000/myOrders").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleDeleteOrder = (id) => {
    const url = `http://localhost:5000/myOrders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log("delete successful");
        refetch();
      });
  };
  return (
    <div className="my-orders">
      <h1>my orders {data.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.customerName}</td>
                <td>{order.orderQuantity}</td>
                <td>$ {order.price}</td>
                <td>
                  <button className="btn btn-outline btn-sm">Pay</button>
                </td>
                <td>
                  <label onClick={() => setIdForDelete(order._id)} htmlFor="confirm-delete-order" className="btn btn-outline btn-sm modal-button">
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input type="checkbox" id="confirm-delete-order" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Alart!!
            </h3>
            <p className="py-4">
               Are you sure you want to delete ?
            </p>
            <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="confirm-delete-order" className="btn btn-outline btn-sm">
                Cancle
              </label>
            </div>
            <div className="modal-action ml-2">
            <label onClick={() => handleDeleteOrder(idForDelete)} htmlFor="confirm-delete-order" className="btn btn-outline btn-sm">
                Confirm
              </label>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
