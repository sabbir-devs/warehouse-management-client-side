import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../firebase.init";
import Loading from "../Loading/Loading";
import "./MyOrders.css";

const MyOrders = () => {
  const [user , loading] = useAuthState(auth);
  const [idForDelete, setIdForDelete] = useState(0);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  
  

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders?customerEmail=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {setOrders(data)});
  }, [user, navigate]);
  console.log(orders);
  if(loading){
    return <Loading></Loading>
  }
  const handleDeleteOrder = (id) => {
    const url = `http://localhost:5000/myOrders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resData) => {
        toast.success("delete successful");
        const remaining = orders.filter(order => order._id !== id)
        setOrders(remaining)
        console.log(remaining)
      });
  };
  return (
    <div className="my-orders">
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
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.customerName}</td>
                <td>{order.orderQuantity}</td>
                <td>$ {order.price}</td>
                <td>
                  <button className="btn btn-outline btn-sm">Pay</button>
                </td>
                <td>
                  <label
                    onClick={() => setIdForDelete(order._id)}
                    htmlFor="confirm-delete-order"
                    className="btn btn-outline btn-sm modal-button"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          type="checkbox"
          id="confirm-delete-order"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Alart!!</h3>
            <p className="py-4">Are you sure you want to delete ?</p>
            <div className="flex justify-end">
              <div className="modal-action">
                <label
                  htmlFor="confirm-delete-order"
                  className="btn btn-outline btn-sm"
                >
                  Cancle
                </label>
              </div>
              <div className="modal-action ml-2">
                <label
                  onClick={() => handleDeleteOrder(idForDelete)}
                  htmlFor="confirm-delete-order"
                  className="btn btn-outline btn-sm"
                >
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
